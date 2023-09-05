package com.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.entity.User;
import com.project.repository.UserDao;

@Service
public class UserServiceImple implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Override
	public User insertUser(User user) {
		return userDao.save(user);	
	}

	@Override
	public List<User> getUserByEmailAndPassword(String email,String password) {
		return userDao.findByEmailAndPassword(email,password);
	}
	
	@Override
	public List<User> findByEmail(String email) {
		return userDao.findByEmail(email);
	}

	@Override
	public List<User> findByPhone(String phone) {
		return userDao.findByPhone(phone);
	}
	
	@Override
	public List<User> getAllUsers() {
		
		return this.userDao.findAll();
	}

	@Override
	public List<User> forgetPassword(String email,String securityQues, String securityAns) {
		return userDao.findByEmailAndSecurityQuesAndSecurityAns(email,securityQues, securityAns);
	}

	@Override
	public void deleteUser(String email) {
		User user =  userDao.getById(email);
		userDao.delete(user);	
	}

	@Override
	public User updatePassword(User user) {
		User u = userDao.getById(user.getEmail());
		u.setPassword(user.getPassword());
		return userDao.save(u);
	}

	
	
	
}
