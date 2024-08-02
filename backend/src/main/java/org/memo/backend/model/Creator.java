package org.memo.backend.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Creator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long creatorID;

    @Column(nullable = false)
    private String name;

    private String lastName;

    @ManyToMany
    @JoinTable(name = "media_creator", joinColumns = @JoinColumn(name = "creatorID"), inverseJoinColumns = @JoinColumn(name = "mediaID"))
    private Set<Media> media;

    public Long getCreatorID() {
        return creatorID;
    }

    public void setCreatorID(Long creatorID) {
        this.creatorID = creatorID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Media> getMedia() {
        return media;
    }

    public void setMedia(Set<Media> media) {
        this.media = media;
    }
}
