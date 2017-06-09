/**
 * Created by dell on 2017/6/1.
 */
$(function () {
    $(".contain dl").each(function () {
        $(this).find("dt").click(function () {
            $(this).siblings('dd').slideToggle('fast');
            $(this).toggleClass("lf_active");
        })
    })
    $(".contain dl dd li").click(function (){
        $(this).addClass("active").siblings().removeClass("active");
        var zpindex = $(this).index();
        $("section").css("display","none").eq(zpindex).show(500);
    })
    // zpgl
    $(".to_cgx").click(function () {
        $('section').css('display','none').parent().find('.cgx').show(500);
    })
    $(".to_tjzp").click(function () {
        $('section').css('display','none').parent().find('.xgzj1').show(500);
    })
    $(".settime").click(function () {
        $(".kexuan").removeAttr("disabled").removeClass("kexuan");
    })
    //添加选项
    $(".tjxx").click(function () {
        var xx = $(this).parent().parent().find("li").length-1;
        console.log(xx);
        if(xx>5){
            alert("最多只能有5个选项");
            return false;
        }
        $(this).parent().before("<li>"+
                                " <span>选项"+xx+"：</span>"+
                                " <input type=\"text\">"+
                                "  </li>");
    })
    //作品信息管理

    //zjgl

    $(".kill").click(function () {
        $(this).parent().hide(500);
    })
    /*var show =  function (name) {
        console.log(name)
        $('section').css('display','none').parent().find("."+name).show(500);
    }*/
})
var show =  function (name) {
    console.log(name)
    $('section').css('display','none').parent().find("."+name).show(500);
}
