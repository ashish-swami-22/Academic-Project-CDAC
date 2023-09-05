package com.project.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Request;
import com.project.service.RequestService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RequestController {
	
	@Autowired
	private RequestService requestService;
		
		
	@PostMapping("/requests")
	public Request insertRequests(@RequestBody Request request) {	
		return requestService.insertRequests(request);	
	}
	
	@GetMapping("/requests")
	public List<Request> getAllRequests() {	
		return requestService.getAllRequests();	
	}
	
	@GetMapping("/requests/{remail}")
	public List<Request> getRequestsByEmail(@PathVariable String remail) {	
		return requestService.getRequestsByEmail(remail);	
	}
	
	@GetMapping("/getrequests/{rid}")
	public List<Request> getRequestsById(@PathVariable int rid) {	
		return requestService.getRequestById(rid);
	}
	
	@PutMapping("/requests")
	public Request updateRequests(@RequestBody Request request) {	
		return requestService.updateRequests(request);	
	}


	@DeleteMapping("/requests/{rid}")
	public String deleteRequest(@PathVariable int rid) {	
		 requestService.deleteRequest(rid);	
		 return "Deleted";
	}

	@PostMapping("/pendingrequests")
	public List<Request> getPendingRequests(@RequestBody Request request){
		return requestService.pendingRequests(request.getEmail(), false);
	}
	
	@GetMapping("/viewallpendingrequests")
	public List<Request> getPendingRequests(boolean status){
		return requestService.viewAllPendingRequests(false);
	}

	@GetMapping("/viewcollections")
	public List<Request> viewAllDonations(boolean status){
		return requestService.viewAllDonations(status);
	}
	
	@PostMapping("/viewdonations")
	public List<Request> viewDonations(@RequestBody Request request){
		return requestService.viewDonations(request.getEmail(),true);
	}
	
}
