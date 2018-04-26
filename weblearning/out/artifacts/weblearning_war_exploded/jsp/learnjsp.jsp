<%--
  Created by IntelliJ IDEA.
  User: win
  Date: 2018/4/26
  Time: 20:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%-- 声明变量 --%>
<%! int day = 3; %>
<%! int fontSize; %>
<html>
<head>
    <title>learn jsp</title>
</head>
<body>
<%-- 使用JSP --%>
<%
    out.println("your ip address is " + request.getRemoteAddr());
%>
<%-- 使用表达式 --%>
<p>
    今天的日期是<%= (new java.util.Date()).toString()%>
</p>
<%-- 流程控制 --%>
<% if(day==1||day==7) {%>
    <p>今天是周末</p>
<% }else{ %>
    <p>今天不是周末</p>
<% } %>

<%
    if(day==1||day==7)out.println("今天是周末");
    else out.println("今天不是周末");
%>
<br />

<%for ( fontSize = 1; fontSize <= 3; fontSize++){ %>
    <font color="green" size="<%= fontSize %>">
        你说啥？
    </font><br />
<%}%>

</body>
</html>
