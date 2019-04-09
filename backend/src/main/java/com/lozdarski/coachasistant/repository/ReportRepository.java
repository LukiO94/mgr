package com.lozdarski.coachasistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lozdarski.coachasistant.entity.ReportEntity;

public interface ReportRepository extends CrudRepository<ReportEntity, Integer> {
	
	@Query(value = "SELECT r FROM ReportEntity r WHERE id=?1")
	List<ReportEntity> findByTrainingId(int trainingId);
}