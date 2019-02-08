var fadetime = 300;

$('head').append(
    '<style>#main{display:none;}',
    '<style>#footer{display:none;}'
);
$(window).on("load", function () {
    $('#main').fadeIn(fadetime);
    $('#footer').fadeIn(fadetime);
});


$(window).on('load', function () {
    $('body').removeClass('fadeout');
});
var jump = ":not([href^='https://shonenjumpplus.com/'])";
var tonari = ":not([href^='https://tonarinoyj.jp/'])";
var young = ":not([href^='https://web-ace.jp/'])";
$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
    $(`a:not([href^="#"]):not([target])${jump}${tonari}${young}`).on('click', function (e) {
        e.preventDefault(); // ナビゲートをキャンセル
        url = $(this).attr('href'); // 遷移先のURLを取得
        if (url !== '') {
            $('#main').fadeOut(fadetime);
            $('#site-top').fadeOut(fadetime);
            $('#footer').fadeOut(fadetime);
            setTimeout(function () {
                window.location = url;  // 0.8秒後に取得したURLに遷移
            }, fadetime);
        }
        return false;
    });
});