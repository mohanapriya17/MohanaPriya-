package org.hcl.dataformat;

public class dateException extends RuntimeException {
	
	public dateException() {
		super("date format is wrong");
	}
	 public dateException(String message){
	        super(message);
	    }

}
