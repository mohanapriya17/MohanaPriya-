package org.hcl.dataformat;

import org.springframework.context.annotation.Configuration;

@Configuration
public class ConstantDateValue {
private String date="2020-10-20 ";

public ConstantDateValue(String date) {
	super();
	this.date = date;
}

public ConstantDateValue() {
	super();
	// TODO Auto-generated constructor stub
}

@Override
public String toString() {
	return date;
}


}
