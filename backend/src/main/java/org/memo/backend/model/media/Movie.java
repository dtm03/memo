package org.memo.backend.model.media;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.memo.backend.model.Media;

@Entity
public class Movie extends Media {
    @Id
    private Long movieID;

    public Long getMovieID() {
        return movieID;
    }

    public void setMovieID(Long movieID) {
        this.movieID = movieID;
    }
}
