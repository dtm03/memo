package org.memo.backend.database;

import org.memo.backend.model.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    void findByMemoID(Long memoID);
    void deleteByMemoID(Long memoID);
}
