package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.database.UserRepository;
import org.memo.backend.model.Memo;
import org.memo.backend.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;
    private final MemoRepository memoRepository;

    public UserController(UserRepository userRepository, MemoRepository memoRepository) {
        this.userRepository = userRepository;
        this.memoRepository = memoRepository;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            User newUser = userRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(newUser.getUserID());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        try {
            return ResponseEntity.ok(userRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @Transactional
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        try {
            User user = userRepository.findById(userId).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            for (Memo memo : user.getMemos()) {
                memo.getUsers().remove(user);
                if (memo.getUsers().isEmpty() || memo.getOwner().equals(user)) {
                    memoRepository.delete(memo);
                } else {
                    memoRepository.save(memo);
                }
            }

            userRepository.deleteById(userId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
