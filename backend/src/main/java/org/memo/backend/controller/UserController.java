package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.database.UserRepository;
import org.memo.backend.model.Memo;
import org.memo.backend.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

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
    public ResponseEntity<?> createUser() {
        User user = userRepository.save(new User());
        return ResponseEntity.status(HttpStatus.CREATED).body(user.getUserId());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getMemosByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(memoRepository.findByUserUserId(userId));
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @Transactional
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserAndMemos(@PathVariable Long userId) {
        List<Memo> memos = memoRepository.findByOwnerUserId(userId);
        for (Memo memo : memos) {
            memo.setOwner(memo.getUser());
            memoRepository.save(memo);
        }
        memoRepository.deleteAll(memoRepository.findByOwnerUserId(userId));
        userRepository.deleteById(userId);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    @DeleteMapping("/{userId}/all")
    public ResponseEntity<Void> deleteUserAndAllMemos(@PathVariable Long userId) {
        memoRepository.deleteAll(memoRepository.findByOwnerUserId(userId));
        userRepository.deleteById(userId);
        return ResponseEntity.noContent().build();
    }
}