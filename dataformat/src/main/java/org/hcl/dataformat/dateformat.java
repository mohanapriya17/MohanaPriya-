package org.hcl.dataformat;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;    
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.stereotype.Service;   

@SpringBootApplication    
public class dateformat {
	public static void main(String[] args) throws ParseException   { 
	{  
	 
	Logger log=Logger.getLogger(dateformat.class);
	
	   LocalDate localdate = LocalDate.now();
	   
	   ConstantDateValue constantdatevalue=new ConstantDateValue();
	   
	   String constantdate=constantdatevalue.toString();
	    Date date=null;
	    //String constantdate="2020-10-20 ";
	    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd");
	    System.out.println(constantdate);
	   Scanner scanner= new Scanner(System.in);
	    
	    System.out.println("Enter the current date");
	    String currentDate=scanner.nextLine();
	    try {
			date = formatter.parse(currentDate);
		
	    if(constantdate.compareTo(currentDate)<0) {
	    	log.info("True");
	    	
	    }
	    else if(constantdate.compareTo(currentDate)>0) {
	    	log.info("false");
	    }
	    
	    else {
	    	log.info("the date is not valid");
	    	
	    }
			
	    } catch (ParseException e) {
			// TODO Auto-generated catch block
	    	throw new dateException();
			//System.out.println(e.getMessage());
		}
		
	    
	    
	    
	}
	}
	}
	 

	

	