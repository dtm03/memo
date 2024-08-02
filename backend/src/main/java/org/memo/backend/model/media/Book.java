package org.memo.backend.model.media;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.memo.backend.model.Media;

@Entity
public class Book extends Media {
    @Id
    private String isbn;

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
}
