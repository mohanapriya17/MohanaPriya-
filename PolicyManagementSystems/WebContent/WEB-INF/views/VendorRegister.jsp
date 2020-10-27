<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
	text-align: center;
	color: red;
}
</style>
<meta charset="ISO-8859-1">
<title>VENDOR REGISTERATION PAGE</title>
</head>
<body>
	<h1>VENDOR REGISTERATION FORM</h1>
	<form:form action="savevendor" method="post"
		modelAttribute="vendorForm">
		<table>
			<tr>
				<font color:red></font><td>FirstName</td>
				<td><form:input path="firstName" /><font color="red"><form:errors
							path="firstName"></form:errors></font>
				</form></td>
			</tr>
			</br>
			<tr>
				<td>LastName</td>
				<td><form:input path="lastName" /><font color="red"><form:errors
							path="LastName"></form:errors></font>
				</form>
					</br></td>
			</tr>
			<tr>
				<td>Age</td>
				<td><form:input path="age" /><font color="red"><form:errors
							path="age"></form:errors></font>
				</form></td>
				</br>
			</tr>
			<tr>
				<td>gender</td>
				<td><form:input path="gender" /><font color="red"><form:errors
							path="gender"></form:errors></font>
				</form>
					</br></td>
			</tr>
			<tr>
				<td>ContactNumber</td>
				<td><form:input path="contactNumber" />
					</form>
					<font color="red"><form:errors path="contactNumber"></form:errors></font></td>
				</br>
			</tr>
			<tr>
				<td>UserId</td>
				<td><form:input path="userId" /><font color="red"><form:errors
							path="userId"></form:errors></font>
				</form></td>
				</br>
			</tr>
			<tr>
				<td>Vendor Id</td>
			
				<td><form:input path="vendorId" /><font color="red"><form:errors
							path="VendorId"></form:errors></font>
				</form></td>
				</br>
			</tr>
			<tr>
				<td>password</td>
				<td><form:input type="password" path="password" /></td>
				</br>
			</tr>
			<td><input type="submit" value="VENDORREGISTER"></td>
		</table>
	</form:form>
</body>
</html>