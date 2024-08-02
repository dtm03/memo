package org.memo.backend.model.media;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.memo.backend.model.Media;

@Entity
public class Other extends Media {
    @Id
    private Long otherID;

    public Long getOtherID() {
        return otherID;
    }

    public void setOtherID(Long otherID) {
        this.otherID = otherID;
    }
}