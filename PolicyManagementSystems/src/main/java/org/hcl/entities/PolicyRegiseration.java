package org.hcl.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class PolicyRegiseration {
	@Id
private int id;
	@NotEmpty
	@Size(min=6,max=10)
	private String policyType;
	@NotEmpty
	@Size(min=6,max=10)
	private String policyName;
	@NotEmpty
	@Size(min=6,max=10)
	private String companyName;
	
	private Integer years;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPolicyType() {
		return policyType;
	}
	public void setPolicyType(String policyType) {
		this.policyType = policyType;
	}
	public String getPolicyName() {
		return policyName;
	}
	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Integer getYears() {
		return years;
	}
	public void setYears(Integer years) {
		this.years = years;
	}
	public PolicyRegiseration(String policyType, String policyName, String companyName, Integer years) {
		super();
		this.policyType = policyType;
		this.policyName = policyName;
		this.companyName = companyName;
		this.years = years;
	}
	public PolicyRegiseration() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
