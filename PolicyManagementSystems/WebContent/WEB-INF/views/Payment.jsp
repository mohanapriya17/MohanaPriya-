<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>PAYMENT PAGE</title>
</head>

<style>
body{
background-image: url("https://d1l21ng1r9w8na.cloudfront.net/article/images/800x800/dimg/dreamstime_xl_51023833.jpg");

}



</style>
<body>
<h1><center>PAYMENT PAGE</center></h1>

<table>
<form:form action="modepay" method="post">
<tr><td>Bill Date</td><td><input type="BillDate" value="" required="enter the Billdate"></td></tr></br>
<tr><td>Payment Amount</td><td><input type="Payment Amount" value="" required="enter the PaymentAmount"></td></tr></br>
<tr><td>Fine</td><td><input type="fine" value="" required="enter the fineAmount"required></td></tr></br>
<tr><td>DueDate</td><td><input type="dueDate" value="" required="enter the duedate"></td></tr></br>
<tr><td><input type="submit" value="payment Mode"></td></tr>
</table>
</form:form>
</body>
</html>