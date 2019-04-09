package com.lozdarski.coachasistant.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="report", schema="myschema")
public class ReportEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="report_id_seq")
	@SequenceGenerator(name="report_id_seq", sequenceName="report_id_seq", schema="myschema")
	private int id;
	
	private Date date;
	private String content;
	
	private int userId;
	private int trainingId;
	
	public ReportEntity() {
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(int trainingId) {
		this.trainingId = trainingId;
	}

	public int getId() {
		return id;
	}
	
}
