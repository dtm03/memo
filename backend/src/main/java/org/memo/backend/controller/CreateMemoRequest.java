package org.memo.backend.controller;

import org.memo.backend.model.Creator;
import org.memo.backend.model.User;

import java.util.Set;

public class CreateMemoRequest {
    private String quote;
    private boolean isVisible;
    private long mediaID;
    private String link;
    private Set<Creator> creators;
    private User owner;
    private User user;

    public String getQuote() {
        return quote;
    }

    public boolean getIsVisible() {
        return isVisible;
    }

    public long getMediaId() {
        return mediaID;
    }

    public String getLink() {
        return link;
    }

    public Set<Creator> getCreators() {
        return creators;
    }

    public User getOwner() {
        return owner;
    }
}