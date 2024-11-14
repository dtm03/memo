package org.memo.backend.controller;

import jakarta.transaction.Transactional;
import org.memo.backend.database.CreatorRepository;
import org.memo.backend.database.MemoRepository;
import org.memo.backend.database.UserRepository;
import org.memo.backend.model.Creator;
import org.memo.backend.model.User;
import org.memo.backend.model.Memo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.Set;

@RestController
@RequestMapping("/memo")
public class MemoController {
    private final MemoRepository memoRepository;
    private final UserRepository userRepository;
    private final CreatorRepository creatorRepository;

    public MemoController(MemoRepository memoRepository, UserRepository userRepository, CreatorRepository creatorRepository) {
        this.memoRepository = memoRepository;
        this.userRepository = userRepository;
        this.creatorRepository = creatorRepository;
    }

    @Transactional
    @PostMapping("/{userId}")
    public ResponseEntity<?> createMemo(@PathVariable Long userId, @RequestBody CreateMemoRequest memoBody) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        Memo memo = new Memo();
        memo.setQuote(memoBody.getQuote());
        memo.setIsVisible(memoBody.getIsVisible());
        memo.setMediaId(memoBody.getMediaId());
        memo.setLink(memoBody.getLink());
        memo.setUser(user);
        memo.setOwner(memoBody.getOwner() == null ? user : memoBody.getOwner());

        Set<Creator> creators = memoBody.getCreators().stream().map(creator -> {
            return creatorRepository.findByNameAndLastName(creator.getName(), creator.getLastName()).orElseGet(() -> {
                Creator newCreator = new Creator();
                newCreator.setName(creator.getName());
                newCreator.setLastName(creator.getLastName());
                return creatorRepository.save(newCreator);
            });
        }).collect(Collectors.toSet());
        memo.setCreators(creators);

        memoRepository.save(memo);
        return ResponseEntity.status(HttpStatus.CREATED).body(memo.getMemoId());
    }

    @GetMapping
    public ResponseEntity<?> getAllPublicMemos() {
        return ResponseEntity.ok(memoRepository.findAll().stream().filter(Memo::getIsVisible));
    }

    @PutMapping("/{memoId}")
    public ResponseEntity<?> updateMemo(@PathVariable Long memoId, @RequestBody Map<String, String> quote) {
        Memo memo = memoRepository.findById(memoId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        memo.setQuote(quote.get("quote"));
        memoRepository.save(memo);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{memoId}/{isVisible}")
    public ResponseEntity<?> updateVisiblity(@PathVariable Long memoId, @PathVariable boolean isVisible) {
        Memo memo = memoRepository.findById(memoId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        memo.setIsVisible(isVisible);
        memoRepository.save(memo);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{memoId}")
    public ResponseEntity<Void> deleteMemo(@PathVariable Long memoId) {
        memoRepository.findById(memoId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        memoRepository.deleteById(memoId);
        return ResponseEntity.noContent().build();
    }
}