package com.MongoSpring.MongoSpring.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.MongoSpring.MongoSpring.Model.Users;

@Repository
public interface UsersRepo extends MongoRepository <Users, String>{

    
}   