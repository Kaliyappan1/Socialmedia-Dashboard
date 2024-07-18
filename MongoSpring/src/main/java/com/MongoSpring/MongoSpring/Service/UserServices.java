package com.MongoSpring.MongoSpring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MongoSpring.MongoSpring.Model.Users;
import com.MongoSpring.MongoSpring.Repository.UsersRepo;

@Service
public class UserServices {
    @Autowired
    private UsersRepo usersRepo;
    
    public List<Users> findAll() {
        return usersRepo.findAll();
    }

    
}
