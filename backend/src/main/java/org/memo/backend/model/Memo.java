package org.memo.backend.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity
public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memoId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @Column(nullable = false)
    private String quote;

    @Column(nullable = false)
    private boolean isVisible;

    private long mediaID;

    private String link;

    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "memo_creator", joinColumns = @JoinColumn(name = "memo_id"), inverseJoinColumns = @JoinColumn(name = "creator_id"))
    private Set<Creator> creators;

    @PrePersist
    protected void onCreate() {
        creationDate = new Date();
    }

    public Long getMemoId() {
        return memoId;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public boolean getIsVisible() {
        return isVisible;
    }

    public void setIsVisible(boolean visible) {
        isVisible = visible;
    }

    public long getMediaId() {
        return mediaID;
    }

    public void setMediaId(long mediaId) {
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

    public void setOwner(User user) {
        this.owner = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Creator> getCreators() {
        return creators;
    }

    public void setCreators(Set<Creator> creators) {
        this.creators = creators;
    }
}