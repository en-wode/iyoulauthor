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
})