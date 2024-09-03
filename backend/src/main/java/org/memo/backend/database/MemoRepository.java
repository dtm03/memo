package org.memo.backend.database;

import org.memo.backend.model.Media;
import org.memo.backend.model.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    Set<Memo> findByMedia(Media media);
}
