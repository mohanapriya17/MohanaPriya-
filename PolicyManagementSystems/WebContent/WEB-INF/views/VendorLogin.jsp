<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>VENDOR LOGIN PAGE</title>
</head>
<style>
h1{
background-color: red;

}
</style>
<body>
<h1>VENDOR LOGIN PAGE</h1>
<form:form action="vendorsucess" method="post">
<table>
<tr>
<td>UserName</td>
<td><input type="userName" value=""></td></tr>
<tr>
<td>Password</td>
<td><input type="password" value=""></td></tr>
<td><input type="submit" value="Submit"></td>
</form:form>
</table>
</body>
</html>