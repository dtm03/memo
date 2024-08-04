package org.memo.backend.controller;

import org.memo.backend.database.MediaRepository;
import org.memo.backend.model.Media;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/media")
public class MediaController {

    private final MediaRepository mediaRepository;

    public MediaController(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
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

    // All quotes need to be deleted as well?
    @DeleteMapping("/{mediaId}")
    public ResponseEntity<Void> deleteMedia(@PathVariable Long mediaId) {
        try {
            mediaRepository.deleteById(mediaId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
