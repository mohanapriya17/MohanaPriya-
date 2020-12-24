package org.hcl.service;

import java.util.List;

import javax.transaction.Transactional;

import org.hcl.dao.PolicyDao;
import org.hcl.entities.PolicyRegiseration;
import org.hcl.entities.User;
import org.hcl.entities.Vendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
@Transactional
public class PolicyServiceImp implements PolicyService {
	@Autowired
private PolicyDao policydao;
	@Override
	public void show(User user) {
		policydao.show(user);
		
	}
	@Override
	public List<User> fetchUser() {
		List<User> userlist=policydao.fetchUser();
		return userlist;
	}
	@Override
	public void savepolicy(PolicyRegiseration policyregister) {
		policydao.savepolicy(policyregister);
		
	}
	@Override
	public List<PolicyRegiseration> fetchPolicy() {
		List<PolicyRegiseration> policy=policydao.fetchPolicy();
		return policy;
	}
	@Override
	public PolicyRegiseration fetchPolicyById(Integer polId) {
		
		PolicyRegiseration policyRegisterId = policydao.fetchPolicyById(polId);
	        return policyRegisterId;
		
	}
	@Override
	public void saveVendor(Vendor vendor) {
		policydao.saveVendor(vendor);
		
	}
	@Override
	public List<Vendor> fetchVendor() {
		
	        List<Vendor> vendor = policydao.fetchVendor();
	        return vendor;
		
	}
	@Override
	public void updatePolicy(PolicyRegiseration policy) {
		policydao.updatePolicy(policy);
		
	}
	@Override
	public void deletePolicy(Integer polId) {
		policydao.deletePolicy(polId);
		
	}
	@Override
	public List<PolicyRegiseration> fetchpolicyId(Integer pid) {
		 List<PolicyRegiseration> policy1 = policydao.fetchpolicyId(pid);
	        return policy1;
	}
	
	
	
	

}
