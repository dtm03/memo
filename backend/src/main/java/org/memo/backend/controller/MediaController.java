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
@RequestMapping("/media")
public class MediaController {

    private final MediaRepository mediaRepository;
    private final CreatorRepository creatorRepository;
    private final MemoRepository memoRepository;

    public MediaController(MediaRepository mediaRepository, CreatorRepository creatorRepository, MemoRepository memoRepository) {
        this.mediaRepository = mediaRepository;
        this.creatorRepository = creatorRepository;
        this.memoRepository = memoRepository;
    }

    @GetMapping("/{mediaId}")
    public ResponseEntity<?> getMedia(@PathVariable Long mediaId) {
        try {
            Media media = mediaRepository.findById(mediaId).orElse(null);
            if (media == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.status(HttpStatus.OK).body(media);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<?> createMedia(@RequestBody Media media) {
        try {
            Media newMedia = mediaRepository.save(media);
            return ResponseEntity.status(HttpStatus.CREATED).body(newMedia.getMediaID());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{mediaId}")
    public ResponseEntity<?> updateMedia(@PathVariable Long mediaId, @RequestBody Media media) {
        try {
            mediaRepository.save(media);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @Transactional
    @DeleteMapping("/{mediaId}")
    public ResponseEntity<Void> deleteMedia(@PathVariable Long mediaId) {
        try {
            Media media = mediaRepository.findById(mediaId).orElse(null);
            if (media == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            Set<Creator> creators = media.getCreators();
            for (Creator creator : creators) {
                creator.getMedia().remove(media);
                creatorRepository.save(creator);
            }

            Set<Memo> memos = memoRepository.findByMedia(media);
            memoRepository.deleteAll(memos);

            mediaRepository.delete(media);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}