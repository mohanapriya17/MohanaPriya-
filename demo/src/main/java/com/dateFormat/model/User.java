package com.dateFormat.model;

public class User {
	 private String date;
	    private String slo;
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public String getSlo() {
			return slo;
		}
		public void setSlo(String slo) {
			this.slo = slo;
		}
		public User(String date, String slo) {
			super();
			this.date = date;
			this.slo = slo;
		}
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		
}
