package org.hcl.dao;

import java.util.List;


import org.hcl.entities.PolicyRegiseration;
import org.hcl.entities.User;
import org.hcl.entities.Vendor;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class PolicyDaoImp implements PolicyDao{
	@Autowired
private SessionFactory sessionfactory;
	
	@Override
	public void show(User user) {
	sessionfactory.getCurrentSession().save(user);	
		
	}

	@Override
	public List<User> fetchUser() {
      Query query=sessionfactory.getCurrentSession().createQuery("from User u");
      List<User> userlist=query.list();
		return userlist;
	}

	@Override
	public void savepolicy(PolicyRegiseration policyregister) {
		
		sessionfactory.getCurrentSession().save(policyregister);
		}

		
	

	@Override
	public List<PolicyRegiseration> fetchPolicy() {
		Query querypolicy =sessionfactory.getCurrentSession().createQuery("from PolicyRegiseration p");
		//@SuppressWarnings("unchecked")
		List<PolicyRegiseration> policylist=querypolicy.list();
		return policylist;
	}

	@Override
	public PolicyRegiseration fetchPolicyById(Integer polId) {
		PolicyRegiseration policy =  sessionfactory.getCurrentSession().get(PolicyRegiseration.class, polId);
		return policy;


	}

	@Override
	public void saveVendor(Vendor vendor) {
		
	        sessionfactory.getCurrentSession().save(vendor);
		
	}

	@Override
	public List<Vendor> fetchVendor() {
		 
	        Query query = sessionfactory.getCurrentSession().createQuery("from Vendor v");
	        @SuppressWarnings("unchecked")
	        List<Vendor> vendor = query.list();
	        return vendor;
	}

	@Override
	public void updatePolicy(PolicyRegiseration policy) {
		 sessionfactory.getCurrentSession().update(policy);
		
	}

	@Override
	public void deletePolicy(Integer polId) {
        Query query = sessionfactory.getCurrentSession().createQuery("delete from PolicyRegiseration p where p.id=:pid");
        query.setParameter("pid", polId);
        query.executeUpdate();		
	}

	@Override
	public List<PolicyRegiseration> fetchpolicyId(Integer pid) {
		
		Query query = sessionfactory.getCurrentSession().createQuery("from Policy p where p.policyid=:polid");
		query.setParameter("polid", pid);
		List<PolicyRegiseration> policy1 = query.list();
		return policy1;

	}

	

	

	

}
