package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.CreatorRepository;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.model.Creator;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/creator")
public class CreatorController {
    private final CreatorRepository creatorRepository;
    private final MemoRepository memoRepository;

    public CreatorController(CreatorRepository creatorRepository, MemoRepository memoRepository) {
        this.creatorRepository = creatorRepository;
        this.memoRepository = memoRepository;
    }

    @GetMapping("/{creatorId}")
    public ResponseEntity<?> getMemosByCreatorId(@PathVariable Long creatorId) {
        return creatorRepository.findById(creatorId).map(creator -> ResponseEntity.ok(creator.getMemos())).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllCreators() {
        return ResponseEntity.ok(creatorRepository.findAll());
    }

    @Transactional
    @DeleteMapping("/{creatorId}")
    public ResponseEntity<Void> deleteCreatorAndMemos(@PathVariable Long creatorId) {
        Creator creator = creatorRepository.findById(creatorId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        for (Memo memo : creator.getMemos()) {
            memo.getCreators().remove(creator);
            if (memo.getCreators().isEmpty()) {
                memoRepository.delete(memo);
            } else {
                memoRepository.save(memo);
            }
        }

        creator.getMemos().clear();
        creatorRepository.deleteById(creatorId);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    @DeleteMapping("/{creatorId}/all")
    public ResponseEntity<Void> deleteCreatorAndAllMemos(@PathVariable Long creatorId) {
        Creator creator = creatorRepository.findById(creatorId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        memoRepository.deleteAll(creator.getMemos());
        creator.getMemos().clear();
        creatorRepository.deleteById(creatorId);
        return ResponseEntity.noContent().build();
    }
}