package org.memo.backend.controller;

import org.memo.backend.database.MemoRepository;
import org.memo.backend.database.UserRepository;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/memo")
public class MemoController {

    private final MemoRepository memoRepository;
    private final UserRepository userRepository;

    public MemoController(MemoRepository memoRepository, UserRepository userRepository) {
        this.memoRepository = memoRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<?> createMemo(@RequestBody Memo memo) {
        try {
            Memo newMemo = memoRepository.save(memo);
            return ResponseEntity.status(HttpStatus.CREATED).body(newMemo.getMemoID());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/allAll")
    public ResponseEntity<?> getAllMemos() {
        try {
            return ResponseEntity.ok(memoRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPublicMemos() {
        try {
            return ResponseEntity.ok(memoRepository.findAll().stream().filter(Memo::getIsVisible));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{userID}")
    public ResponseEntity<?> getMemosByUserId(@PathVariable Long userID) {
        return userRepository.findById(userID)
                .map(user -> ResponseEntity.ok(user.getMemos()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/{memoId}")
    public ResponseEntity<?> updateMemo(@PathVariable Long memoId, @RequestBody Memo memo) {
        try {
            memoRepository.save(memo);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{memoId}/{userId}")
    public ResponseEntity<?> saveMemo(@PathVariable Long memoId, @PathVariable Long userId) {
        try {
            return memoRepository.findById(memoId)
                    .map(memo -> userRepository.findById(userId)
                            .map(user -> {
                                memo.getUsers().add(user);
                                memoRepository.save(memo);
                                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
                            })
                            .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build()))
                    .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{memoId}")
    public ResponseEntity<Void> deleteMemo(@PathVariable Long memoId) {
        try {
            memoRepository.deleteById(memoId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
