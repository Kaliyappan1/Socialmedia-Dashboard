package com.MongoSpring.MongoSpring.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "SocialmediaDashboard")
public class Users {
   @Id
   private String name;
   private String field;
   private String bio;

}
