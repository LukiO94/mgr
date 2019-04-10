package com.lozdarski.coachasistant.controller;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lozdarski.coachasistant.repository.UserRepository;



@Controller
public class SecurityController {
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping("/logowanie")
	public String logowanie() {
		
		return "securitytemplates/login";
	}
	
	@RequestMapping("/register")
	public String register() {
		
		return "securitytemplates/register";
	}
	
	@PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
	public @ResponseBody String login(Authentication auth) {
		JSONObject response = new JSONObject();
		response.put("status", 200);
		response.put("message", "login successful");
		return response.toString();
	}
}
