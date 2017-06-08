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
        $("section").css("display","none").eq(zpindex).css("display","inline-block");
    })
    // zpgl
    $(".to_cgx").click(function () {
        $('section').css('display','none').parent().find('.cgx').css('display','inline-block')
    })
    $(".to_tjzp").click(function () {
        $('section').css('display','none').parent().find('.xgzj1').css('display','inline-block')
    })
    $(".settime").click(function () {
        $(".kexuan").removeAttr("disabled").removeClass("kexuan");
    })
})