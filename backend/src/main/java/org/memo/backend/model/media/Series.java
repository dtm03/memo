package org.memo.backend.model.media;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.memo.backend.model.Media;

@Entity
public class Series extends Media {
    @Id
    private Long seriesID;

    @Column(nullable = false)
    private Integer season;

    @Column(nullable = false)
    private Integer episode;

    public Long getSeriesID() {
        return seriesID;
    }

    public void setSeriesID(Long seriesID) {
        this.seriesID = seriesID;
    }

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
