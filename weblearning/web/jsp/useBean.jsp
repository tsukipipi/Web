<%--
  Created by IntelliJ IDEA.
  User: win
  Date: 2018/5/1
  Time: 17:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>use bean</title>
</head>
<body>
<h2>jsp use bean:</h2>
<%-- 加载一个将在JSP页面中使用的JavaBean --%>
<jsp:useBean id="test" class="com.pipi.TestBean" />
<%-- 设置已经实例化的Bean对象的属性 --%>
<jsp:setProperty name="test" property="message" value="use bean test" />
<jsp:setProperty name="test" property="num" value="100" />

<p>输出信息…</p>
<%-- 提取指定Bean属性的值，转换成字符串，然后输出 --%>
<jsp:getProperty name="test" property="message" />
<jsp:getProperty name="test" property="num" />
</body>
</html>
