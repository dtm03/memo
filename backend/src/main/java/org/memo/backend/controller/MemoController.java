package org.memo.backend.controller;

import org.memo.backend.database.MemoRepository;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/memo")
public class MemoController {

    private final MemoRepository memoRepository;

    public MemoController(MemoRepository memoRepository) {
        this.memoRepository = memoRepository;
    }

    @GetMapping("/{memoId}")
    public ResponseEntity<?> getMemo(@PathVariable Long memoId) {
        try {
            Memo memo = memoRepository.findById(memoId).orElse(null);
            if (memo == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.status(HttpStatus.OK).body(memo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllMemos() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(memoRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
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

    @PutMapping("/{memoId}")
    public ResponseEntity<?> updateMemo(@PathVariable Long memoId, @RequestBody Memo memo) {
        try {
            memoRepository.save(memo);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
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
