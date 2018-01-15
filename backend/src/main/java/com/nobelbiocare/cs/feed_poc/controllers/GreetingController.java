package com.nobelbiocare.cs.feed_poc.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class GreetingController {
    @GetMapping("/greeting")
    public String getGreeting() {
      return "Hello there Sugar Bear!";
    }
}
