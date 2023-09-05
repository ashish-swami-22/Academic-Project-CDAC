package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Request;
import com.project.repository.RequestDao;


@Service
public class RequestServiceImple implements RequestService {
	
	@Autowired
	private RequestDao requestDao;

	
	@Override
	public Request insertRequests(Request request) {	
		return requestDao.save(request);
	}


	@Override
	public List<Request> getAllRequests() {
		return requestDao.findAll();
	}
	
	@Override
	public List<Request> getRequestsByEmail(String email) {
		return requestDao.findByEmail(email);
	}


	@Override
	public Request updateRequests(Request request) {
		return requestDao.save(request);
	}
	


	@Override
	public void deleteRequest(int id) {
		Request req = requestDao.getById(id);
		requestDao.delete(req);
	}


	@Override
	public List<Request> pendingRequests(String email,boolean status) {
		return requestDao.pendingRequests(email, false);
	}


	@Override
	public List<Request> viewDonations(String email, boolean status) {
		return requestDao.viewDonations(email, true);
	}


	@Override
	public List<Request> viewAllPendingRequests(boolean status) {
		return requestDao.viewAllPendingRequest(false);
	}


	@Override
	public List<Request> viewAllDonations(boolean status) {
		return requestDao.viewAllDonations(true);
	}


	@Override
	public List<Request> getRequestById(int reqid) {
		return requestDao.findByReqid(reqid);
	}


	

	





	




	

	


	



	
	
	
	
}
