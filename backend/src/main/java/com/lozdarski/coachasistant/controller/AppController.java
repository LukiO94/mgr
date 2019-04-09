package com.lozdarski.coachasistant.controller;


import java.util.Date;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lozdarski.coachasistant.entity.GroupEntity;
import com.lozdarski.coachasistant.entity.ReportEntity;
import com.lozdarski.coachasistant.entity.TrainingEntity;
import com.lozdarski.coachasistant.entity.UserEntity;
import com.lozdarski.coachasistant.entity.UserGroupEntity;
import com.lozdarski.coachasistant.repository.GroupRepository;
import com.lozdarski.coachasistant.repository.ReportRepository;
import com.lozdarski.coachasistant.repository.TrainingRepository;
import com.lozdarski.coachasistant.repository.UserGroupRepository;
import com.lozdarski.coachasistant.repository.UserRepository;

@RequestMapping("/app")
@Controller
public class AppController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	GroupRepository groupRepository;
	
	@Autowired
	UserGroupRepository userGroupRepository;
	
	@Autowired
	TrainingRepository trainingRepository;
	
	@Autowired
	ReportRepository reportRepository;
	
	/*
	 * Metoda towrząca nową grupę 
	 * 
	 * {  
	 * "coachName":"qwe",
	 * "groupName":"czwarta grupa"
	 * }
	 * 
	 */
	
	@PostMapping(path = "/addGroup", consumes = "application/json", produces = "application/json")
	public @ResponseBody String addGroup(@RequestBody String requestString) {
		JSONObject request = new JSONObject(requestString);
		
		UserEntity coach = userRepository.findUsersByUsername(request.getString("coachName")).get(0);
		GroupEntity group = new GroupEntity();
		group.setName(request.getString("groupName"));		
		group.setCoach(coach.getId());
		groupRepository.save(group);
		
		JSONObject response = new JSONObject();
		response.put("status", "success");
		response.put("message", "created new group");
		return response.toString();
	}
	
	/*
	 * Metoda dodająca zawodnika do grupy
	 * 
	 * {  
	 * "playerName":"qwe",
	 * "groupId": 1
	 * }
	 * 
	 */
	
	@PostMapping(path = "/addUserToGroup", consumes = "application/json", produces = "application/json")
	public @ResponseBody String addUserToGroup(@RequestBody String requestString) {
		JSONObject request = new JSONObject(requestString);
		
		UserEntity player = userRepository.findUsersByUsername(request.getString("playerName")).get(0);
		GroupEntity group = groupRepository.findByGroupId(request.getInt("groupId")).get(0);
		UserGroupEntity userGroup = new UserGroupEntity();
		userGroup.setActive(false);
		userGroup.setGroupId(group.getId());
		userGroup.setPlayerId(player.getId());
		userGroupRepository.save(userGroup);
		
		JSONObject response = new JSONObject();
		response.put("status", "success");
		response.put("message", "added user to group");
		return response.toString();
	}
	
	/*
	 * Metoda aktywująca dodanie zawodnika do grupy
	 * 
	 * {
	 * "userGroupId": 1
	 * }
	 * 
	 */
	
	@PostMapping(path = "/activateUserGroup", consumes = "application/json", produces = "application/json")
	public @ResponseBody String activateUserGroup(@RequestBody String requestString) {
		JSONObject request = new JSONObject(requestString);
		
		UserGroupEntity userGroup = userGroupRepository.findByUserGroupId(request.getInt("userGroupId")).get(0);
		userGroup.setActive(true);
		userGroup.setDateFrom(new Date());
		userGroupRepository.save(userGroup);
		
		JSONObject response = new JSONObject();
		response.put("status", "success");
		response.put("message", "activate adding user to group");
		return response.toString();
	}
	
	/*
	 * Metoda dodająca trening
	 * 
	 * {
	 * "groupId": 1,
	 * "content": "Pierwszy trening"
	 * }
	 * 
	 */
	
	@PostMapping(path = "/createTraining", consumes = "application/json", produces = "application/json")
	public @ResponseBody String createTraining(@RequestBody String requestString) {
		JSONObject request = new JSONObject(requestString);
		
		GroupEntity group = groupRepository.findByGroupId(request.getInt("groupId")).get(0);
		TrainingEntity t = new TrainingEntity();
		t.setGroupId(group.getId());
		t.setDate(new Date());
		t.setContent(request.getString("content"));
		trainingRepository.save(t);
		
		JSONObject response = new JSONObject();
		response.put("status", "success");
		response.put("message", "training added successfully");
		return response.toString();
	}
	
	/*
	 * Metoda dodająca raport do treningu
	 * {
	 * "trainingId": 1,
	 * "userName": "qwe",
	 * "content": "Fajnie sie robiło"
	 * }
	 * 
	 */
	
	@PostMapping(path = "/createReport", consumes = "application/json", produces = "application/json")
	public @ResponseBody String createReport(@RequestBody String requestString) {
		JSONObject request = new JSONObject(requestString);
		
		TrainingEntity training = trainingRepository.findByTrainingId(request.getInt("trainingId")).get(0);
		UserEntity user = userRepository.findUsersByUsername(request.getString("userName")).get(0);
		ReportEntity r = new ReportEntity();
		r.setUserId(user.getId());
		r.setTrainingId(training.getId());
		r.setDate(new Date());
		r.setContent(request.getString("content"));
		reportRepository.save(r);
		
		JSONObject response = new JSONObject();
		response.put("status", "success");
		response.put("message", "report added successfully");
		return response.toString();
	}
	
}
