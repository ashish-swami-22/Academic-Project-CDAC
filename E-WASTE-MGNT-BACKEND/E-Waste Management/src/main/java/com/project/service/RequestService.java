package com.project.service;

import java.util.List;

import com.project.entity.Request;

public interface RequestService {
	
	
	
	
	public Request insertRequests(Request request);
	
	public List<Request> getAllRequests();
	
	public List<Request> getRequestsByEmail(String email);
	
	public List<Request> getRequestById(int reqid);
	
	
	
	public Request updateRequests(Request request);
	
	
	public void deleteRequest(int id);
	
	public List<Request> pendingRequests(String email,boolean status);
	public List<Request> viewAllPendingRequests(boolean status);
	
	public List<Request> viewDonations(String email,boolean status);
	public List<Request> viewAllDonations(boolean status);

	
	
}
