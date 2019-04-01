package com.lozdarski.coachasistant.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="groups", schema="myschema")
public class GroupEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="groups_id_seq")
	@SequenceGenerator(name="groups_id_seq", sequenceName="groups_id_seq", schema="myschema")
	private int id;
	
	private String name;
	private int coach;
	
	public GroupEntity() {}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCoach() {
		return coach;
	}

	public void setCoach(int coach) {
		this.coach = coach;
	}
	
	
	
}
