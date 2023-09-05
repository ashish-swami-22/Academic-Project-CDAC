package com.project.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.entity.Request;

@Repository
public interface RequestDao extends JpaRepository<Request, Integer> {
	
	public List<Request> findByEmail(String email);
	
	public List<Request> findByReqid(int reqid);
	
	@Query("select r from Request r where email=:e and status=:s")
	public List<Request> pendingRequests(@Param("e") String email,@Param("s") boolean status);
	
	@Query("select r from Request r where status=:s")
	public List<Request> viewAllPendingRequest(@Param("s") boolean status);

	@Query("select r from Request r where status=:s")
	public List<Request> viewAllDonations(@Param("s") boolean status);

	@Query("select r from Request r where email=:e and status=:s")
	public List<Request> viewDonations(@Param("e") String email,@Param("s") boolean status);
	
	
	
	
}
