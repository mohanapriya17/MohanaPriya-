package org.hcl.service;

import java.util.List;

import org.hcl.entities.PolicyRegiseration;
import org.hcl.entities.User;
import org.hcl.entities.Vendor;

public interface PolicyService {

	List<User> fetchUser();

	void show(User user);

	void savepolicy(PolicyRegiseration policyregister);

	List<PolicyRegiseration> fetchPolicy();

	PolicyRegiseration fetchPolicyById(Integer polId);

	void saveVendor(Vendor vendor);

	List<Vendor> fetchVendor();

	void updatePolicy(PolicyRegiseration policy);

	void deletePolicy(Integer polId);

	List<PolicyRegiseration> fetchpolicyId(Integer pid);

	

	


}
