package com.MongoSpring.MongoSpring.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MongoSpring.MongoSpring.Model.Users;
import com.MongoSpring.MongoSpring.Repository.UsersRepo;


@RestController
@RequestMapping("/api")
public class MainController{

    @Autowired
    private UsersRepo usersRepo;

    @GetMapping("/Users")
    public List<Users> getUsers() {
        return usersRepo.findAll();
    }

    
}

