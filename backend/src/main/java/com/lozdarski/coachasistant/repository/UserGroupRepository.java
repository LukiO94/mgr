package com.lozdarski.coachasistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lozdarski.coachasistant.entity.UserGroupEntity;

public interface UserGroupRepository extends CrudRepository<UserGroupEntity, Integer> {
	
	@Query(value = "SELECT u FROM UserGroupEntity u WHERE id=?1")
	List<UserGroupEntity> findByUserGroupId(int userGroupId);
	
	@Query(value = "SELECT ug FROM UserGroupEntity ug WHERE isActive=true AND dateTo=null AND playerId=?1")
	List<UserGroupEntity> findActiveUserGroup(int userId);
}