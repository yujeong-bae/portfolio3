$(document).ready(function () {


    //접속기기 판별
    function isMobile() {
        var filter = "win16|win32|win64|mac|macintel";
        if (navigator.platform) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                //mob
                var btn = $('nav>ul>li>a');
                btn.click(function () {
                    if ($(this).attr('class') != 'active') {
                        btn.next().slideUp(100);
                        btn.removeClass('active');
                        $(this).addClass('active');
                        $(this).next().slideDown(100);
                    } else {
                        $(this).removeClass('active');
                    }
                });
            } else {
                //on the pc
                //nav mouse cursor event 시 , sub menu view
                $('nav > ul > li > a').hover(function () {
                    $('.sub').stop().slideDown(100);
                    $('.sub_bg').stop().slideDown(100);
                });

                $('nav > ul > li').mouseleave(function () {
                    $('.sub').stop().slideUp(100);
                    $('.sub_bg').stop().slideUp(100);
                });


            }
        }
    }

    //햄버거 버튼
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($('header nav').attr('class') == 'react') {
            $('header nav').removeClass('react');
        } else {
            $('header nav').addClass('react');

        }
    });

    //f12 막기
    //    function KeyEventHandle() {
    //        if (
    //            (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) ||
    //            (event.keyCode >= 112 && event.keyCode <= 123)) {
    //            event.keyCode = 0;
    //            event.cancelBubble = true;
    //            event.returnValue = false;
    //        }
    //    }
    //    document.onkeydown = KeyEventHandle;
    //    document.onkeyup = KeyEventHandle;


        $('nav > ul > li > a').hover(function () {
            $('.sub').stop().slideDown(400);
            $('.sub_bg').stop().slideDown(400);
        });
    
        $('nav > ul > li').mouseleave(function () {
            $('.sub').stop().slideUp(300);
            $('.sub_bg').stop().slideUp(300);
        });

    //지뢰찾기
    $('.backdoor').hover(function () {
        $('.backdoor').text("Right dino", 100);
        $('.dino').stop().animate({
            opacity: "1"
        }, 100);
    });
    $('.backdoor').mouseleave(function () {
        $('.backdoor').text("Tech Blog", 100);
        $('.dino').stop().animate({
            opacity: "0.01"
        }, 100);
    });



    //가자고 어서 리쿠르트
    $('section.Recruit .row .col-sm-6 a').hover(function () {
        $('section.Recruit .row .col-sm-6 a').text("GO", 1000);
    });
    $('section.Recruit .row .col-sm-6 a').mouseleave(function () {
        $('section.Recruit .row .col-sm-6 a').text("Join", 100);
    });


    //온더 탑
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
//        console.log(scrollTop);
        //header 영역이 화면 영역보다 위로 이동할 때
        if (scrollTop > 600) {
            //header에 sticky추가
            $('header').addClass('active');
            $('.top').addClass('reveal');
        } else {
            $('header').removeClass('active');
            $('.top').removeClass('reveal');
        }
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
    });
    $('.top').click(function () {
        $('html,body').animate({
            'scrollTop': 0
        });
    });


});



//&#62; dinoplay
