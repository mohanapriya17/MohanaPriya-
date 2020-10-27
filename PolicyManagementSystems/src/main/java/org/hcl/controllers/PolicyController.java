package org.hcl.controllers;

import java.util.List;
import java.util.Random;

import org.hcl.entities.PolicyRegiseration;
import org.hcl.entities.User;
import org.hcl.service.PolicyService;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PolicyController {
	//Request mapping for policy registeration//
	private static Logger log=Logger.getLogger(PolicyController.class);
	@Autowired
	private PolicyService policyservice;
	
	@RequestMapping(value="/policyreg",method=RequestMethod.GET)
	public String showPolicy(ModelMap theModel) {
		log.info("Request inside into the Policy Registeration");
		PolicyRegiseration policyregister=new PolicyRegiseration();
		theModel.addAttribute("policyform", policyregister);
		return "policyRegister";
	}
	
     @RequestMapping(value="/fetchById/{id}")
	public String fetchPolicyById(@PathVariable("id") Integer polId,ModelMap map) {
    	 log.info("fetch the edit policy");
    	 PolicyRegiseration policyregister=policyservice.fetchPolicyById(polId);
    	 map.addAttribute("editPolicy",policyregister);
		return "policyUpdate";
		
	}
     @RequestMapping(value="/editPol",method=RequestMethod.POST)
     public String updatePolicy(@Validated @ModelAttribute("editPolicy") PolicyRegiseration policy, BindingResult result, ModelMap map) {
    	 String editpage;
    	 if(result.hasErrors()) {
    		 log.info("the method edit page has some errors");
    		 editpage="policyUpdate";
    	 }
    	 else {
    		 log.info("the method has correct path way");
    		 policyservice.updatePolicy(policy);
    		 List<PolicyRegiseration > policylist=policyservice.fetchPolicy();
    		 map.addAttribute("policylist",policylist);
    		 editpage="Policysuccess";
    	 }
		return editpage;
    	 
     }
     
     @RequestMapping(value = "/delete/{id}")     
     public String deleteEmployee(@PathVariable("id") Integer polId, ModelMap map) {   
    	 log.info("deleting policy based on policy id");      
    	 policyservice.deletePolicy(polId);    
    	 List<PolicyRegiseration> policy = policyservice.fetchPolicy();   
    	 map.addAttribute("Policy1", policy);     
            return "Policysuccess";
     }
     
	
	
	
	
	@RequestMapping(value="/savepolicy",method=RequestMethod.POST)
	public String savepolicy(@Validated @ModelAttribute("policyform") PolicyRegiseration policyregister,BindingResult result,  ModelMap map) {
		String page;
		if(result.hasErrors()) {
			log.info("method has some errro");
			page="policyRegister";
		}
		else {
			log.info("method has correct path way");
		Random r = new Random();
	    int pid = r.nextInt(99999) + 10000;
	    policyregister.setId(pid);
	    policyservice.savepolicy( policyregister);
		List<PolicyRegiseration> policylist=policyservice.fetchPolicy();
		map.addAttribute("policy",policylist);
		page="Policysuccess";
		}
		return page;
	}
	
	
	/**
	* REQUEST MAPPING FUNCTION FOR SEARCHING POLICY BY POLICYID
	*
	*/
	@RequestMapping(value = "/usepolicyid", method = RequestMethod.GET)
	public String searchpolicyid(ModelMap map) {
	log.info("User select to search the Policy BY POLICYID method");
	PolicyRegiseration policy = new PolicyRegiseration();
	map.addAttribute("getpolicy", policy);
	return "PolicyById";
	}
	@RequestMapping(value = "/pid", method = RequestMethod.POST)
	public String searchpid(@Validated @ModelAttribute("getpolicy") PolicyRegiseration policy, BindingResult result, ModelMap map) {
	log.info(" Invoking the Search Policy BY POLICYID method");
	Integer pid = policy.getId();
	System.out.println(pid);
	List<PolicyRegiseration> policy2 = policyservice.fetchpolicyId(pid);
	map.addAttribute("getpolicy", policy2);
	return "PolicyDetails";
	}
	}

	
	
	
	
	
	

