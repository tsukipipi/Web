<%--
  Created by IntelliJ IDEA.
  User: win
  Date: 2018/5/1
  Time: 17:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>jsp include</title>
</head>
<body>
<h2>jsp:include 动作元素实例：</h2>
<%-- 包含静态和动态的文件 --%>
<jsp:include page="date.jsp" flush="true" />
</body>
</html>
