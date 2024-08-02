package org.memo.backend.model.media;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.memo.backend.model.Media;

@Entity
public class Song extends Media {
    @Id
    private Long songID;

    private String album;

    public Long getSongID() {
        return songID;
    }

    public void setSongID(Long songID) {
        this.songID = songID;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }
}
