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

    private long mediaID;

    private String link;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @ManyToMany
    @JoinTable(
            name = "memo_creator",
            joinColumns = @JoinColumn(name = "memo_id"),
            inverseJoinColumns = @JoinColumn(name = "creator_id")
    )
    private Set<Creator> creators;

    @ManyToMany(mappedBy = "memos")
    private Set<User> users;

    @PrePersist
    protected void onCreate() {
        creationDate = new Date();
    }

    public Long getMemoID() {
        return memoID;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }

    public long getMediaID() {
        return mediaID;
    }

    public void setMediaID(long mediaId) {
        this.mediaID = mediaId;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Set<Creator> getCreators() {
        return creators;
    }

    public void setCreators(Set<Creator> creators) {
        this.creators = creators;
    }

    public Set<User> getUsers() {
        return users;
    }

    public boolean getIsVisible() {
        return isVisible;
    }
}