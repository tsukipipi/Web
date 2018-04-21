function detect() {
    var age = document.getElementById("age").value;
    if(age > 150 || age < 0 || isNaN(age)){
        alert("请输入正确的年龄！");
    }
}