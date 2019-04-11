package com.lozdarski.coachasistant.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="user_group", schema="myschema")
public class UserGroupEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_group_id_seq")
	@SequenceGenerator(name="user_group_id_seq", sequenceName="user_group_id_seq", schema="myschema")
	private int id;
	
	private Date dateFrom;
	private Date dateTo;
	private boolean isActive;
	private boolean isActivePlayer;
	private boolean isActiveCoach;
	private int playerId;
	private int groupId;
	
	public UserGroupEntity() {}

	public Date getDateFrom() {
		return dateFrom;
	}

	public void setDateFrom(Date dateFrom) {
		this.dateFrom = dateFrom;
	}

	public Date getDateTo() {
		return dateTo;
	}

	public void setDateTo(Date dateTo) {
		this.dateTo = dateTo;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public int getGroupId() {
		return groupId;
	}

	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}

	public int getId() {
		return id;
	}

	public boolean isActivePlayer() {
		return isActivePlayer;
	}

	public void setActivePlayer(boolean isActivePlayer) {
		this.isActivePlayer = isActivePlayer;
	}

	public boolean isActiveCoach() {
		return isActiveCoach;
	}

	public void setActiveCoach(boolean isActiveCoach) {
		this.isActiveCoach = isActiveCoach;
	}
}
