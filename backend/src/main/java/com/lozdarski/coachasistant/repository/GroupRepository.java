package com.lozdarski.coachasistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lozdarski.coachasistant.entity.GroupEntity;

public interface GroupRepository extends CrudRepository<GroupEntity, Integer> {
	
	@Query(value = "SELECT g FROM GroupEntity g WHERE id=?1")
	List<GroupEntity> findByGroupId(int groupId);
}