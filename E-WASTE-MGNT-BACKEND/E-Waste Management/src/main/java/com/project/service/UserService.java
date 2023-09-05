package com.project.service;

import java.util.List;

import com.project.entity.User;


public interface UserService {
	public User insertUser(User user);
	
	public List<User> getUserByEmailAndPassword(String email,String password);
	
	public List<User> findByEmail(String email);
	
	public List<User> findByPhone(String phone);
	
	public List<User> forgetPassword(String email,String securityQues,String securityAns);
	
	public List<User> getAllUsers();
	//public User updatePassword(User user);
	
	public User updatePassword(User user); 
	
	public void deleteUser(String email);
}
