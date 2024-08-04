package org.memo.backend.model.media;

import jakarta.persistence.Entity;
import org.memo.backend.model.Media;

@Entity
public class Song extends Media {
    private String album;

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }
}
