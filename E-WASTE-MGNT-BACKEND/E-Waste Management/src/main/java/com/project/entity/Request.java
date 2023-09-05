package com.project.entity;


import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int reqid;
	private String name;
	private String email;
	private String address;
	private String city;
	private String plasticQty;
	private String ewasteQty;
	private boolean status =false;
	
	
	public int getReqid() {
		return reqid;
	}
	public void setReqid(int reqid) {
		this.reqid = reqid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPlasticQty() {
		return plasticQty;
	}
	public void setPlasticQty(String plasticQty) {
		this.plasticQty = plasticQty;
	}
	public String getEwasteQty() {
		return ewasteQty;
	}
	public void setEwasteQty(String ewasteQty) {
		this.ewasteQty = ewasteQty;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Request [reqid=" + reqid + ", name=" + name + ", email=" + email + ", address=" + address + ", city="
				+ city + ", plasticQty=" + plasticQty + ", ewasteQty=" + ewasteQty + ", status=" + status + "]";
	}	
}
