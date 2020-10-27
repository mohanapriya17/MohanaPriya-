package org.hcl.dao;

import java.util.List;

import org.hcl.entities.PolicyRegiseration;
import org.hcl.entities.User;
import org.hcl.entities.Vendor;

public interface PolicyDao {

	void show(User user);

	List<User> fetchUser();

	void savepolicy(PolicyRegiseration policyregister);

	List<PolicyRegiseration> fetchPolicy();

	PolicyRegiseration fetchPolicyById(Integer polId);

	void saveVendor(Vendor vendor);

	List<Vendor> fetchVendor();

	void updatePolicy(PolicyRegiseration policy);

	void deletePolicy(Integer polId);

	List<PolicyRegiseration> fetchpolicyId(Integer pid);

	

}
