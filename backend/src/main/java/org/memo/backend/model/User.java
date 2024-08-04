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
    @JoinTable(name = "user_memo", joinColumns = @JoinColumn(name = "userID"), inverseJoinColumns = @JoinColumn(name = "memoID"))
    private Set<Memo> memos;

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Set<Memo> getMemos() {
        return memos;
    }

    public void setMemos(Set<Memo> memos) {
        this.memos = memos;
    }
}
