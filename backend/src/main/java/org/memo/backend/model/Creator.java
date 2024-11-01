package org.memo.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Creator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long creatorId;

    @Column(nullable = false)
    private String name;

    private String lastName;

    @ManyToMany(mappedBy = "creators")
    @JsonIgnore
    private Set<Memo> memos;

    public Long getCreatorId() {
        return creatorId;
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

    public Set<Memo> getMemos() {
        return memos;
    }
}