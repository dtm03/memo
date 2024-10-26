package org.memo.backend.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "\"user\"")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @ManyToMany
    @JoinTable(
            name = "memo_user",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "memo_id")
    )
    private Set<Memo> memos;

    public Long getUserID() {
        return userID;
    }

    public Set<Memo> getMemos() {
        return memos;
    }
}