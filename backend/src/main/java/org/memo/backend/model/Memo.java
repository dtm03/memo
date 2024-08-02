// Memo.java
package org.memo.backend.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memoID;

    @Column(nullable = false)
    private String quote;

    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @Column(nullable = false)
    private boolean isVisible;

    @ManyToMany(mappedBy = "memos")
    private Set<User> users;

    @ManyToOne
    @JoinColumn(name = "mediaID", nullable = false)
    private Media media;

    public Long getMemoID() {
        return memoID;
    }

    public void setMemoID(Long memoID) {
        this.memoID = memoID;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Media getMedia() {
        return media;
    }

    public void setMedia(Media media) {
        this.media = media;
    }
}