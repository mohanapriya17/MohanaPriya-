package org.hcl.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.stereotype.Controller;
@Entity
public class Vendor {
	@Id
	private int id;
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@NotEmpty
	@Size(min = 6, max = 15)
	private String firstName;
	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Vendor(String firstName, String lastName, int age, String gender, String contactNumber, String userId,
			String vendorId, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.contactNumber = contactNumber;
		this.userId = userId;
		this.vendorId = vendorId;
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getVendorId() {
		return vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@NotEmpty
	@Size(min = 6, max = 15)
	private String lastName;
	@NotNull
	@Min(value = 20)
	@Max(value = 60)
	private int age;
	@NotEmpty
	private String gender;
	@NotNull
	@Size(min = 6, max = 10)
	private String contactNumber;
	@NotEmpty
	@Size(min = 10, max = 15)
	private String userId;
	@NotNull
	@Size(min=6,max=10)
	private String vendorId;
	
	@NotEmpty
	@Size(min = 8, max = 10)
	private String password;
	
	
}
