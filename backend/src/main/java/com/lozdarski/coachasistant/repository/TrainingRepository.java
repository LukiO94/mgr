package com.lozdarski.coachasistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lozdarski.coachasistant.entity.TrainingEntity;

public interface TrainingRepository extends CrudRepository<TrainingEntity, Integer> {
	
	@Query(value = "SELECT t FROM TrainingEntity t WHERE id=?1")
	List<TrainingEntity> findByGroupId(int groupId);
	
	@Query(value = "SELECT t FROM TrainingEntity t WHERE id=?1")
	List<TrainingEntity> findByTrainingId(int training);
}