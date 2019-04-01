package com.lozdarski.coachasistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lozdarski.coachasistant.entity.RolesEntity;

public interface RolesRepository extends CrudRepository<RolesEntity, Integer> {
	
	@Query("SELECT r FROM RolesEntity r WHERE user_id_fk=?1")
	List<RolesEntity> findByUserIdFk(int UserIdFk);
}
