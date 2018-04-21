//参数：cookie 的名称、值以及过期天数
function setCookie(name,value,expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = name + "=" + exdate(value)
        + ((expiredays==null)?"":";expires=" + exdate.toGMTString());
}

function getCookie(name) {
    if(document.cookie.length > 0){
        var start = document.cookie.indexOf(name + "=");
        //找到我们寻找的cookie
        if(start != -1){
            start += name.length + 1;
            var end = document.cookie.indexOf(";",start);
            //刚好是最后一个cookie
            if(end == -1)end = document.cookie.length;
            return unescape(document.cookie.substring(start,end));
        }
    }
}

function checkCookie() {
    var username = getCookie('username')
    //再次访问
    if(username != null && username != ""){
        alert('Welcome to ' + location.host + ' again,' + username + '!');
    }
    //首次访问
    else {
        username = prompt('please enter your name:',"");
        if(username != null && username != ""){
            setCookie("username",username,365);
        }
    }
}