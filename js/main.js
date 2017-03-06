var flag = true;
var flag1 = true;
$(function () {
    page4_clear();
    $('.replay div').on('click', function () {
        page4_clear();
        page4_replay();
    });
    $(window).scroll(function () {
        var scroll2 = $(window).scrollTop();
        if (scroll2 >= 100) {
            $('#menu-bar').addClass('menu-bar');
            console.log(scroll2);
            $('.ch').each(function (index) {
                if (index < 5) {
                    $('#ch' + index).css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 0
                        , 'transform': 'rotate(180deg)'
                        , 'z-index': 1000 + 'important'
                    , });
                }
            });
            $('.ch').each(function (index) {
                if (index === 5) {
                    $('#ch5').css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 0
                        , 'transform': 'translateY(-100px)'
                    , });
                }
            });
            $('.ch').each(function (index) {
                if (index > 5 && index < 12) {
                    $('#ch' + index).css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 0
                        , 'transform': 'rotate(-180deg)'
                    , });
                }
            });
            $('#mid-content').css({
                opacity: 0.5
            });
            $('#mid-content-derect').css({
                opacity: 0.5
            });
        }
        else {
            $('.ch').each(function (index) {
                if (index < 5) {
                    $('#ch' + index).css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 1
                        , 'transform': 'rotate(0deg)'
                    , });
                }
            });
            $('.ch').each(function (index) {
                if (index === 5) {
                    $('#ch5').css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 1
                        , 'transform': 'translateY(0px)'
                    , });
                }
            });
            $('.ch').each(function (index) {
                if (index > 5 && index < 12) {
                    $('#ch' + index).css({
                        'transform-origin': 50 + '%' + '-' + 200 + 'px'
                        , transition: 'all 1s'
                        , opacity: 1
                        , 'transform': 'rotate(0deg)'
                    , });
                }
            });
            $('#menu-bar').removeClass('menu-bar');
            $('#developer').css({
                opacity: 1
                , 'letter-spacing': 0
            });
            $('#mid-content').css({
                opacity: 1
            });
            $('#mid-content-derect').css({
                opacity: 1
            });
        }
        if (scroll2 >= 200) {
            $('#mid-content').css({
                opacity: 0
            });
            $('#mid-content-derect').css({
                opacity: 0
            });
        }
        var $list = [];
        $list = $('#menu-list ul').children();
        console.log($list);
        var $firstag = $list.first();
        var onettag, towtab, threetab, fourtab, fivetab;
        onettag = $firstag.next();
        towtab = onettag.next();
        threetab = towtab.next();
        fourtab = threetab.next();
        fivetab = fourtab.next();
        var currentroll = false;
        if (scroll2) {
            currentroll = true;
            console.log(currentroll);
            if (currentroll === true) {
                $('.wheel_1, .wheel_2,.wheel_3').css({
                    //                    'transform-origin': '-10px -20px',
                    'transform': 'rotate(' + (scroll2 - 400) + 'deg)'
                });
                $('.wheel_5, .wheel_6').css({
                    //                    'transform-origin': '-10px -20px',
                    'transform': 'rotate(-' + (scroll2 - 400) + 'deg)'
                });
            }
        };
        if (scroll2 > 500 && scroll2 < 1000) {
            if (flag) {
                counter();
                flag = false;
            }
            $('.describe').css({
                opacity: 1
            });
            $list.children().removeClass('page-selecting');
            onettag.children().addClass('page-selecting');
        }
        else if (scroll2 < 400) {
            $list.children().removeClass('page-selecting');
            $firstag.children().addClass('page-selecting');
        }
        else if (scroll2 > 1000 && scroll2 < 1700) {
            $list.children().removeClass('page-selecting');
            towtab.children().addClass('page-selecting');
        }
        else if (scroll2 > 1700 && scroll2 < 2400) {
            $list.children().removeClass('page-selecting');
            threetab.children().addClass('page-selecting');
            page4_replay();
        }
        else if (scroll2 > 2900 && scroll2 < 3600) {
            if (flag1) {
                counter();
                flag1 = false;
            };
            $list.children().removeClass('page-selecting');
            fourtab.children().addClass('page-selecting');
        }
        else if (scroll2 > 3600) {
            $list.children().removeClass('page-selecting');
            fivetab.children().addClass('page-selecting');
        }
        var a = 0;
        if (scroll2 > 3300) {
            $('#final-effect img').each(function (index) {
                $(this).css({
                    transform: 'translateY(50px)'
                    , opacity: 1
                    , 'z-index': 1
                , });
            });
        }
        if (scroll2 <= 3600) {
            $('#final-effect img').each(function (index) {
                $(this).css({
                    transform: 'translateY(-50px)'
                    , opacity: 0
                    , 'z-index': 1
                , });
            });
        }
    });
    $('#left-page2,.hinh2').hover(function () {
        $('.hinh2').css({
            transition: 'ease 3s'
            , 'transition-duration': '3s'
            , clip: 'rect(0px 400px 500px 0px)'
        , });
        $('#left-page2').css({
            opacity: 1
        });
        $('#right-page2').css({
            opacity: 0
        });
    });
    $('#right-page2,.hinh1').hover(function () {
        $('.hinh2').css({
            transition: 'ease 3s'
            , 'transition-duration': '3s'
            , clip: 'rect(0px 0px 500px 0px)'
        , });
        $('#right-page2').css({
            opacity: 1
        });
        $('#left-page2').css({
            opacity: 0
        });
    });
    $('#left-page2, #right-page2').mouseleave(function () {
        $('.hinh2').css({
            transition: 'ease 3s'
            , 'transition-duration': '3s'
            , clip: 'rect(0px 200px 500px 0px)'
        });
        $('#left-page2').css({
            opacity: 0
        });
        $('#right-page2').css({
            opacity: 0
        });
    });
    $('#right-page2').mouseout(function () {
        $('#left-page2').css({
            opacity: 0
        });
    });
    $('#left-page2').mouseout(function () {
        $('#right-page2').css({
            opacity: 0
        });
    });
    $('.form-field input').focusin(function () {
        $('#names').on('click', function () {
            $('.form-field label').each(function (index) {
                var $this = $(this);
                if ($this.is('#lbname')) {
                    $('.form-field label').removeClass('lbname');
                    $('#lbname').addClass('lbname');
                    $('.sub-from').fadeIn(function () {
                        $('#gp1').addClass('graphic__svgv1');
                    });
                }
            });
        });
        $('#email').on('click', function () {
            $('.form-field label').each(function (index) {
                var $this = $(this);
                if ($this.is('#lbemail')) {
                    $('#lbemail').addClass('lbname');
                    $('.sub-from').fadeIn(function () {
                        $('#gp2').addClass('graphic__svgv1');
                    });
                }
            });
        });
        $('#phone').on('click', function () {
            $('.form-field label').each(function (index) {
                var $this = $(this);
                if ($this.is('#lbphone')) {
                    $('#lbphone').addClass('lbname');
                    $('.sub-from').fadeIn(function () {
                        $('#gp3').addClass('graphic__svgv1');
                    });
                }
            });
        });
        $('#massage').on('click', function () {
            $('.form-field label').each(function (index) {
                var $this = $(this);
                if ($this.is('#lbmessage')) {
                    $('#lbmessage').addClass('lbname');
                    $('.sub-from').fadeIn(function () {
                        $('#gp4').addClass('graphic__svgv1');
                    });
                }
            });
        });
    });
    $('.form-field input').focusout(function () {
        $('.form-field label').removeClass('lbname');
        $('.graphic__svg').removeClass('graphic__svgv1');
    });
    $('#promo').click(function () {
        $('html,body').animate({
            scrollTop: $("#page1").offset().top
        }, 2000);
    });
    $('#whoami').click(function () {
        $('html,body').animate({
            scrollTop: $("#sub-bage1").offset().top
        }, 2000);
    });
    $('#WhatIdo').click(function () {
        $('html,body').animate({
            scrollTop: $("#page2").offset().top
        }, 2000);
    });
    $('#Whyme').click(function () {
        $('html,body').animate({
            scrollTop: $("#page3").offset().top
        }, 2000);
    });
    $('#Awards').click(function () {
        $('html,body').animate({
            scrollTop: $("#page4").offset().top
        }, 2000);
    });
    $('#Contact').click(function () {
        $('html,body').animate({
            scrollTop: $("#section5").offset().top
        }, 2000);
    });
    $('#page1,#sub-bage1,#page2,#page3,#page4,#section5').show();
});
var page4_clear = function () {
    for (var i = 0; i < 9; i++) {
        $('.st' + i).css({
            opacity: '0'
        });
    };
    $('#svg__line_1 , #svg__line_2,#svg__line_4,#svg__line_5').css({
        'width': '0%'
    });
    $('#svg__line_3').css({
        'height': '0%'
    });
}
var page4_replay = function () {
    $('#svg__line_1').css({
        'width': '100%'
    });
    $('#svg__line_2 path').css({
        opacity: '1'
    });
    $('#svg__line_2').css({
        'width': '100%'
    , });
    $('#svg__line_3 path').css({
        opacity: '1'
    });
    $('#svg__line_3').css({
        'height': '100%'
    });
    $('#svg__line_4').css({
        'width': '100%'
    });
    $('#svg__line_5 path').css({
        opacity: '1'
    });
    $('#svg__line_5').css({
        'width': '100%'
    });
    $('#svg__skills path').each(function (index) {
        $(this).css({
            opacity: '1'
            , transition: 'ease ' + 2 + 's'
        });
    });
    $('#svg__creativity path').each(function (index) {
        $(this).css({
            'transition': 'ease 2s'
            , 'transition-delay': '1.5s'
            , opacity: '1'
        });
    });
    $('#svg__speed path').each(function () {
        $(this).css({
            'transition': 'ease 2s'
            , 'transition-delay': '3.7s'
            , opacity: '1'
        });
    });
    $('#svg__responsive path').each(function () {
        $(this).css({
            'transition': 'ease 2s'
            , 'transition-delay': '6.5s'
            , opacity: '1'
        });
    });
    $('#svg__friendly path').each(function () {
        $(this).css({
            'transition': 'ease 2s'
            , 'transition-delay': '9.5s'
            , opacity: '1'
        });
    });
    $('#svg__technology path').each(function () {
        $(this).css({
            'transition': 'ease 2s'
            , 'transition-delay': '13.5s'
            , opacity: '1'
        });
    });
}
var counter = function () {
    $('.numbers').each(function () {
        var $this = $(this);
        $this.prop({
            Counter: 0
        }, 6).animate({
            Counter: $this.text()
        , }, {
            duration: 2000
            , easing: 'swing'
            , step: function (now) {
                $this.text(Math.ceil(now));
            }
        });
    });
}