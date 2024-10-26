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

    @ManyToMany(mappedBy = "creators")
    private Set<Memo> memos;

    public Long getCreatorID() {
        return creatorID;
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
