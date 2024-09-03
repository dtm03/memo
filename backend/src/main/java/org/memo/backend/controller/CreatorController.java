package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.CreatorRepository;
import org.memo.backend.database.MediaRepository;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.model.Creator;
import org.memo.backend.model.Media;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/creator")
public class CreatorController {

    private final CreatorRepository creatorRepository;
    private final MediaRepository mediaRepository;
    private final MemoRepository memoRepository;

    public CreatorController(CreatorRepository creatorRepository, MediaRepository mediaRepository, MemoRepository memoRepository) {
        this.creatorRepository = creatorRepository;
        this.mediaRepository = mediaRepository;
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

    @PutMapping("/{creatorId}")
    public ResponseEntity<?> updateCreator(@PathVariable Long creatorId, @RequestBody Creator creator) {
        try {
            creatorRepository.save(creator);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
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

            Set<Media> mediaSet = creator.getMedia();
            for (Media media : mediaSet) {
                Set<Creator> creators = media.getCreators();
                if (creators.size() == 1 && creators.contains(creator)) {
                    Set<Memo> memos = memoRepository.findByMedia(media);
                    memoRepository.deleteAll(memos);
                    mediaRepository.delete(media);
                } else {
                    creators.remove(creator);
                    mediaRepository.save(media);
                }
            }

            creatorRepository.deleteById(creatorId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}