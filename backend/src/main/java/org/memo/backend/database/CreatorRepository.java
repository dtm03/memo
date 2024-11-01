package org.memo.backend.database;

import org.memo.backend.model.Creator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CreatorRepository extends JpaRepository<Creator, Long> {
    Optional<Creator> findByNameAndLastName(String name, String lastName);
}