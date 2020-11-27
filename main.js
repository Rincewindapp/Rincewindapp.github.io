﻿var timer;

$(function ()
{
    var winWidth = $(window).width();
    var winHeight = $('#wrapper').height();

    $('#backtotop a').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    

    $('.pageitem').click(function ()
    {
        window.location = $(this).attr('id');
    });
});

function HideMenu()
{
    $("#navigationbox").fadeOut();
}

function ShowSearch()
{
    $('#searchfield').fadeIn();
    $('#searchbox > a').attr('href', 'javascript:HideSearch()');
}

function HideSearch()
{
    $('#searchfield').fadeOut();
    $('#searchbox > a').attr('href', 'javascript:ShowSearch()');
}

function OpenFooter(opt)
{

    var winWidth = $(window).width();
    var winHeight = $(window).height();

    if (winWidth <= 770)
    {
        openFooterMobile(opt);
    }
    else
    {
        $('#fc' + opt).attr('style', 'height:' + winHeight + 'px;display:block;bottom:-' + winWidth + 'px;');

        $('#fc' + opt).animate({
            bottom: '0px',
            opacity: '1',
            filter:'alpha(opacity=100)'
        }, 600);

        $('#fc' + opt + ' .nav' + opt + ' .insideselectednav').attr('style', 'background:white;');

        if ( $('#fc' + opt + ' .fcontentinsidec').height() > $('#fc' + opt + ' .fcontentinside').height())
        {
            $('#fc' + opt + ' .fcontentinside').attr('style', 'overflow-y:scroll;');
        }
    }
}

function closecookies()
{
    $("#ctl00_cookiepolicyagreediv").fadeOut();
}

function CloseFooter(opt)
{
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    if (winWidth <= 770) {
        openFooterMobile(opt);
    }
    else {
        $('#fc' + opt + ' .nav' + opt + ' .insideselectednav').attr('style', '');

        $('#fc' + opt).animate({
            top: '100vh',
            opacity: '0.5',
            filter: 'alpha(opacity=50)'
        }, 600);

        $('#fc' + opt + ' .fcontentinside').attr('style', '');

        setTimeout("hideFooterfinal('" + opt + "');", 600);
    }
}

function hideFooterfinal(opt)
{
    $('#fc' + opt).attr('style', '');
}

function OpenFooter2(opt, opttoclose,opttoclose2)
{
    CloseFooter2(opttoclose);
    CloseFooter2(opttoclose2);


    var winWidth = $(window).width();
    var winHeight = $(window).height();

    $('#fc' + opt).attr('style', 'width:' + winWidth + 'px;height:' + winHeight + 'px;display:block;top:0px;');

    $('#fc' + opt).animate({
       
        opacity: '1',
        filter: 'alpha(opacity=100)'
    }, 200);

    $('#fc' + opt + ' .nav' + opt + ' .insideselectednav').attr('style', 'background:white;');

    if ($('#fc' + opt + ' .fcontentinsidec').height() > $('#fc' + opt + ' .fcontentinside').height()) {
        $('#fc' + opt + ' .fcontentinside').attr('style', 'overflow-y:scroll;');
    }
}

function CloseFooter2(opt) {
    $('#fc' + opt + ' .nav' + opt + ' .insideselectednav').attr('style', '');

    $('#fc' + opt).animate({
        opacity: '1',
        filter: 'alpha(opacity=100)'
    }, 200);

    $('#fc' + opt + ' .fcontentinside').attr('style', '');

    setTimeout("hideFooterfinal('" + opt + "');", 200);
}

function openFooterMobile(opt)
{
    /*alert(opt);*/
    switch(opt)
    {
        case "cookie":
            window.location = "/cookies";
            break;
        case "terms":
            window.location = "/terms";
            break;
        case "privacy":
            window.location = "/privacy-policy";
            break;
    }
}