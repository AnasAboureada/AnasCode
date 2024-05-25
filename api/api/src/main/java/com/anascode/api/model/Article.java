package com.anascode.api.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "articles")
public class Article {

    @Id
    private String articleId;

    private String title;

    private String slug;

    private String metaTitle;

    private String metaDescription;

    private String description;

    @Field("created_date")
    private Date createdDate;

    @Field("updated_date")
    private Date updatedDate;

    @Field("week_number")
    private String weekNumber;

    private String category;

    private String excerpt;

    private String author;

    @Field("author_image")
    private String authorImage;

    private List<String> tags;

    private int views;

    private int claps;

    @Field("read_time")
    private String readTime;

    @Field("banner_image")
    private String bannerImage;

    private Highlighted highlighted;

    private boolean published;

    private String content;

    public enum Highlighted {
        PRIMARY, SECONDARY, NONE
    }

}
