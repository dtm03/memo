package org.memo.backend.database;

import org.memo.backend.model.Memo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    List<Memo> findByUserUserID(Long userID);
    List<Memo> findByIsVisibleTrue();
}
