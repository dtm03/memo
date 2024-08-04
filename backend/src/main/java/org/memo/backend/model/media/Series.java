package org.memo.backend.model.media;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import org.memo.backend.model.Media;

@Entity
public class Series extends Media {
    @Column(nullable = false)
    private Integer season;

    @Column(nullable = false)
    private Integer episode;

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public Integer getEpisode() {
        return episode;
    }

    public void setEpisode(Integer episode) {
        this.episode = episode;
    }
}
