/**
 * Created by dell on 2017/6/1.
 */
$(function () {
    $(".contain dl").each(function () {
        var d = true;
        $(this).find("dt").click(function () {
            $(this).siblings('dd').slideToggle('fast');
            if(d){
                $(this).css({background:"#a1b7c9",color:"white"});
                d = false;
            }else {
                $(this).css({background:"white",color:"black"});
                d = true;
            }
        })
    })
})