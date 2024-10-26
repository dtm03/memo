package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.CreatorRepository;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.model.Creator;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/creator")
public class CreatorController {

    private final CreatorRepository creatorRepository;
    private final MemoRepository memoRepository;

    public CreatorController(CreatorRepository creatorRepository, MemoRepository memoRepository) {
        this.creatorRepository = creatorRepository;
        this.memoRepository = memoRepository;
    }

    @PostMapping
    public ResponseEntity<?> createCreator(@RequestBody Creator creator) {
        try {
            Creator newCreator = creatorRepository.save(creator);
            return ResponseEntity.status(HttpStatus.CREATED).body(newCreator.getCreatorID());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCreators() {
        try {
            return ResponseEntity.ok(creatorRepository.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @Transactional
    @DeleteMapping("/{creatorId}")
    public ResponseEntity<Void> deleteCreator(@PathVariable Long creatorId) {
        try {
            Creator creator = creatorRepository.findById(creatorId).orElse(null);
            if (creator == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            for (Memo memo : creator.getMemos()) {
                memo.getCreators().remove(creator);
                if (memo.getCreators().isEmpty()) {
                    memoRepository.delete(memo);
                } else {
                    memoRepository.save(memo);
                }
            }

            creatorRepository.deleteById(creatorId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}