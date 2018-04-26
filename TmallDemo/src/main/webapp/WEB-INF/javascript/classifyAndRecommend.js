//显示产品列表
function showProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"]").css("background-color","white");
    $("div.eachCategory[cid="+cid+"] a").css("color","#87CEFA");
    $("div.productsAsideCategorys[cid="+cid+"]").show();
}


//隐藏产品列表函数
function hideProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"]").css("background-color","#e2e2e3");
    $("div.eachCategory[cid="+cid+"] a").css("color","#000");
    $("div.productsAsideCategorys[cid="+cid+"]").hide();
}


$(function(){
    //当鼠标移入菜单项的时候，显示对应的产品列表
    $("div.eachCategory").mouseenter(function(){
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    //当鼠标移出菜单项的时候，隐藏对应的产品列表
    $("div.eachCategory").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
    //当鼠标移入产品列表的时候，显示对应的产品列表
    $("div.productsAsideCategorys").mouseenter(function(){
        var cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    //当鼠标移出产品列表的时候，隐藏对应的产品列表
    $("div.productsAsideCategorys").mouseleave(function(){
        var cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
});


// 随机使一些item变成蓝色
$(function(){
    $("div.productsAsideCategorys div.row a").each(function(){
        var v = Math.round(Math.random() *6);
        if(v == 1)
            $(this).css("color","#87CEFA");
    });
});