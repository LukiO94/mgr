package com.lozdarski.coachasistant.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="training", schema="myschema")
public class TrainingEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="training_id_seq")
	@SequenceGenerator(name="training_id_seq", sequenceName="training_id_seq", schema="myschema")
	private int id;
	
	private Date date;
	private String content;
	private int groupId;
	
	public TrainingEntity() {}
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getId() {
		return id;
	}
	
}
