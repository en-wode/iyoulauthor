/**
 * Created by dell on 2017/6/1.
 */
$(function () {
    $(".contain dl:first-child").find("dd").show(1000);
    $(".contain dl").each(function () {
        $(this).find("dt").click(function () {
            $(this).siblings('dd').slideToggle('fast');
            $(this).toggleClass("lf_active");
        })
    })
})