package org.memo.backend.controller;

import org.memo.backend.database.CreatorRepository;
import org.memo.backend.model.Creator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/creator")
public class CreatorController {

    private final CreatorRepository creatorRepository;

    public CreatorController(CreatorRepository creatorRepository) {
        this.creatorRepository = creatorRepository;
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

    @PutMapping("/{creatorId}")
    public ResponseEntity<?> updateCreator(@PathVariable Long creatorId, @RequestBody Creator creator) {
        try {
            creatorRepository.save(creator);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{creatorId}")
    public ResponseEntity<Void> deleteCreator(@PathVariable Long creatorId) {
        try {
            creatorRepository.deleteById(creatorId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
