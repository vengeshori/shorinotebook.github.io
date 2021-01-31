
document.addEventListener('DOMContentLoaded', function () {
  var mql = window.matchMedia('screen and (max-width: 1030px)');

  function checkBreakPoint(mql) {
    if (mql.matches) {
      // スマホ向け
        $(".r-none-sp").css("opacity","1");
		$(function(){
			var t,m,n;
			$(".header-ball-point").on("click", function() {
				$(".header-bottom-sp-choice-2-pen").slideToggle();
				if(t != 1){
					$(".sppon-1").css("transform","rotate(180deg)");
					t=1;
				}else{
					$(".sppon-1").css("transform","rotate(0deg)");
					t = 2;
				}
        	});
        	$(".header-pencase").on("click", function() {
            	$(".header-bottom-sp-choice-2-pencase").slideToggle();
				if(m != 1){
					$(".sppon-2").css("transform","rotate(180deg)");
					m=1;
				}else{
					$(".sppon-2").css("transform","rotate(0deg)");
					m = 2;
				}
			});
			$(".header-note").on("click", function() {
				$(".header-bottom-sp-choice-2-note").slideToggle();
				if(n != 1){
					$(".sppon-3").css("transform","rotate(180deg)");
					n=1;
				}else{
					$(".sppon-3").css("transform","rotate(0deg)");
					n = 2;
				}
        	});
		});
        
        /*要素がふわっと表示する関数(fadeInUp)*/
        $(function() {
            function animation() {
                $('.fadeInAp-sp').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0)')
                        console.log("intmain")
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInAp-sp-1').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css("opacity","1");
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInAp-sp-for-shadow').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '.16');
                        $(this).css('transform', 'translateY(0) skewX(-30deg)')
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        
        
        
        
        /*ボタン*/
        $(function(){
            var o = 0,
                p = 0,
                q = 0;
            $(".pelikan-bottom-sp-a").click(
                function(){
                    o = 1;
                    p = 0;
                    q = 0;
                    $(".pelikan-bottom-sp-before-a").css("opacity","0");
                    $(".pelikan-bottom-sp-before-b").css("opacity","1");
                    $(".pelikan-bottom-sp-before-c").css("opacity","1");
                    $(".pelikan-bottom-sp-1").fadeOut(1000);
                    $(".pelikan-bottom-sp-1-div").fadeIn(1000);
                    $(".pelikan-test-a-sp").css("opacity","1");
                    $(".pelikan-test-b-sp").css("opacity","0");
                    $(".pelikan-test-c-sp").css("opacity","0");
                    $(".pelikan-bottom-sp-a-1 p").css("font-size","13px");
                    $(".pelikan-bottom-sp-a-1 p").css("color","rgba(200,80,80)");
                    $(".pelikan-bottom-sp-b-1 p").css("color","");
                    $(".pelikan-bottom-sp-c-1 p").css("color","");
                    $(".pelikan-bottom-sp-b-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp-c-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp p").css("color","rgba(104,198,104)")
                }
            );
            $(".pelikan-bottom-sp-b").click(
                function(){
                    o = 0;
                    p = 1;
                    q = 0;
                    $(".pelikan-bottom-sp-before-a").css("opacity","1");
                    $(".pelikan-bottom-sp-before-b").css("opacity","0");
                    $(".pelikan-bottom-sp-before-c").css("opacity","1");
                    $(".pelikan-bottom-sp-1").fadeOut(1000);
                    $(".pelikan-bottom-sp-1-div").fadeIn(1000);
                    $(".pelikan-test-a-sp").css("opacity","0");
                    $(".pelikan-test-b-sp").css("opacity","1");
                    $(".pelikan-test-c-sp").css("opacity","0");
                    $(".pelikan-bottom-sp-a-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp-b-1 p").css("font-size","13px");
                    $(".pelikan-bottom-sp-b-1 p").css("color","rgba(200,80,80)");
                    $(".pelikan-bottom-sp-a-1 p").css("color","");
                    $(".pelikan-bottom-sp-c-1 p").css("color","");
                    $(".pelikan-bottom-sp-c-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp p").css("color","rgba(104,198,104)")
                }
            );
            $(".pelikan-bottom-sp-c").click(
                function(){
                    o = 0;
                    p = 0;
                    q = 1;
                    $(".pelikan-bottom-sp-before-a").css("opacity","1");
                    $(".pelikan-bottom-sp-before-b").css("opacity","1");
                    $(".pelikan-bottom-sp-before-c").css("opacity","0");
                    $(".pelikan-bottom-sp-1").fadeOut(1000);
                    $(".pelikan-bottom-sp-1-div").fadeIn(1000);
                    $(".pelikan-test-a-sp").css("opacity","0");
                    $(".pelikan-test-b-sp").css("opacity","0");
                    $(".pelikan-test-c-sp").css("opacity","1");
                    $(".pelikan-bottom-sp-a-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp-b-1 p").css("font-size","12px");
                    $(".pelikan-bottom-sp-c-1 p").css("font-size","13px");
                    $(".pelikan-bottom-sp-c-1 p").css("color","rgba(200,80,80)");
                    $(".pelikan-bottom-sp-b-1 p").css("color","");
                    $(".pelikan-bottom-sp-a-1 p").css("color","");
                    $(".pelikan-bottom-sp p").css("color","rgba(104,198,104)")
                }
            );
            $(".pelikan-bottom-sp-1-div").fadeToggle(1000);
            
            $('.pelikan-bottom-sp').click(
                function() {
                    
                    if(o == 1){
                        $(".r-none-sp , .r400-sp , .r600-sp , .r800-sp").css("opacity","0")
                        $(".r400-sp").css("opacity","1");
                    }else if(p == 1){
                        $(".r-none-sp , .r400-sp , .r600-sp , .r800-sp").css("opacity","0")
                        $(".r600-sp").css("opacity","1");
                    }else if(q == 1){
                        $(".r-none-sp , .r400-sp , .r600-sp , .r800-sp").css("opacity","0")
                        $(".r800-sp").css("opacity","1");
                    }else{
                        $(".r-none-sp , .r400-sp , .r600-sp , .r800-sp").css("opacity","0")
                        $(".r-none-sp").css("opacity","1");
                    };
                    $(".pelikan-bottom-sp p").css("font-size","13.5px");
                    $(".pelikan-bottom-sp p").css("color","rgba(0,0,0,.5)")
                    $(".pelikan-bottom-sp-before").css("opacity","0");
                    $(".pelikan-bottom-sp-1").fadeToggle(1000);
                    $(".pelikan-bottom-sp-1-div").fadeToggle(1000);
                    sethover = setTimeout(function() {
                        $(".pelikan-bottom-sp-before").css("opacity","1");
                        $(".pelikan-bottom-sp p").css("font-size","14px");
                    }, 400);
                });
        });
        
        
        
        /*画面の移動に伴う開閉*/
        $(function() {
            $('.section-2-sp').each(function() {
                var $win = $(window),
                    $winH = $win.height(),
                    $connect = $('.moveing-part'),
                    position = $connect.offset().top - $winH,
                    slide,
                    opac1,
                    scroll;
                $win.on('load scroll', function() {
                    scroll = $win.scrollTop();
                    slide = 130*(scroll - position)/$winH;
                    opac1 = 2.5*(scroll - position)/$winH;
                    if (scroll > position) {
                        $('.open-close-sp-1').css({
                            left:-1*(30 + slide) + '%'
                        });
                        $('.open-close-sp-2').css({
                            right:-1*(30 + slide) + '%'
                        });
                        $('.moving-text').css({
                            opacity:opac1
                        });
                        
                    }else{
                        $(".open-close-sp-1").css("left","-30%");
                        $(".open-close-sp-2").css("right","-30%");
                        $(".moving-text").css("opacity","0");
                    };
                    
                });
                
            });
        });
        
        
        
        /*回転アニメーション*/
        $(function() {
            $('.main').each(function() {
                var $win = $(window),
                    $winH = $win.height(),
                    $connect = $('.water-circle-sp'),
                    position = $connect.offset().top,
                    intmain,
                    scroll,
                    rotate = function(logo, angle) {
                        logo.css({
                            "transform": "rotate(" + angle + "deg)"
                        });
                    };
                
                $win.on('load scroll', function() {
                    scroll = $win.scrollTop() + $winH;
                    intmain = (scroll - position) * (200) / $winH;
                    if(scroll > position){
                        rotate($(".water-circle-inner-sp"), intmain);
                    };
                }); 
                
            });
        });
        
        
        /*ペンケースの選択ボタン*/
        $(function(){
            $('.select-1-sp').click(function(){
                $(".pencase-slider-title-3-sp, .pencase-slider-title-4-sp ,.pencase-slider-title-5-sp").css("display","none");
                $(".img3-sp , .img4-sp , .img5-sp").css("display","none");
                $(".pencase-slider-text-3 , .pencase-slider-text-4 , .pencase-slider-text-5").css("display","none");
                $(".pencase-slider-title-3-sp").css("display","block");
                $(".img3-sp").css("display","block");
                $(".pencase-slider-text-3").css("display","block");
                slider3.slideToLoop(0);
            });
            $('.select-2-sp').click(function(){
                $(".pencase-slider-title-3-sp, .pencase-slider-title-4-sp ,.pencase-slider-title-5-sp").css("display","none");
                $(".img3-sp , .img4-sp , .img5-sp").css("display","none");
                $(".pencase-slider-text-3 , .pencase-slider-text-4 , .pencase-slider-text-5").css("display","none");
                $(".pencase-slider-title-4-sp").css("display","block");
                $(".img4-sp").css("display","block");
                $(".pencase-slider-text-4").css("display","block");
                slider3.slideToLoop(0);
            });
            $('.select-3-sp').click(function(){
                $(".pencase-slider-title-3-sp, .pencase-slider-title-4-sp ,.pencase-slider-title-5-sp").css("display","none");
                $(".img3-sp , .img4-sp , .img5-sp").css("display","none");
                $(".pencase-slider-text-3 , .pencase-slider-text-4 , .pencase-slider-text-5").css("display","none");
                $(".pencase-slider-title-5-sp").css("display","block");
                $(".img5-sp").css("display","block");
                $(".pencase-slider-text-5").css("display","block");
                slider3.slideToLoop(0);
                
            });
            
        });
        
        
        
        /*details information*/
        $(function(){
            $(".detail-title-sp p").click(function(){
                $(".detail-title-sp p span").toggle();
                $(".size-information-sp").slideToggle();
            });
            $(".under-text-open-close-sp p").click(function(){
                $(".under-text-open-close-sp p span").toggle();
                $(".information-main-sp").slideToggle();
            });
        });
    
        
        
        
        
        
        
        
        
        
        
    } else {
      // PC向け
        var t;

        $(function(){
            $('.writing').click(function(){
                $('.header-choice-1').show();
                $('.header-choice-2').hide();
                jQuery('.writing').css('color', 'tan');
                jQuery('.writing').css('border-bottom', '2px solid tan');
                jQuery('.another').css('border-bottom', '2px solid lightgray');
                jQuery('.another').css('color', 'gray');
                jQuery('.under-logo img').css('left', '11%');
            });
            $('.another').click(function(){
                $('.header-choice-2').show();
                $('.header-choice-1').hide();
                jQuery('.writing').css('color', 'gray');
                jQuery('.another').css('color', 'tan');
                jQuery('.another').css('border-bottom', '2px solid tan');
                jQuery('.writing').css('border-bottom', '2px solid lightgray');
                jQuery('.under-logo img').css('left', '16%');
            });
        });
        $(function() {
            $('.background').hover(
                function() {
                    if (t == 1) {
                        sethover = setTimeout(function() {
                            $('.content-pa-2').css('opacity', '1');
                        }, 500);
                        $('.background').css('transform', 'rotate(235deg)');
                        $('.background-maji').css('transform', 'rotate(225deg)');
                        $('.background-maji-1').css('transform', 'rotate(215deg)');
                        $('.content-pa-1').css('opacity', '0');
                        t = 2;
                    } else {
                        sethover = setTimeout(function() {
                            $('.content-pa-3').css('opacity', '1');
                        }, 500);
                        $('.background').css('transform', 'rotate(235deg)');
                        $('.background-maji').css('transform', 'rotate(225deg)');
                        $('.background-maji-1').css('transform', 'rotate(215deg)');
                        $('.content-pa-1').css('opacity', '0');
                        t = 1;
                    }
                },
                function() {
                    $('.content-pa-2').css('opacity', '0');
                    $('.content-pa-3').css('opacity', '0');
                    clearTimeout(sethover);
                    $('.background').css('transform', 'rotate(185deg)');
                    $('.background-maji').css('transform', 'rotate(180deg)');
                    $('.background-maji-1').css('transform', 'rotate(180deg)');

                    setTimeout(function() {
                        $('.content-pa-1').css('opacity', '1');
                    }, 500);
                }
            );
        });
        $(function() {
            function animation() {
                $('.fadeInAp').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0) rotate(45deg)')
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp1').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0)');
                        $('.title-2').css('transform', 'skewX(-5deg)')
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp2').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp3').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                        $('.sen').css('transform', 'skewY(-3deg)');
                        $('.leman-img').css('transform', 'rotate(45deg)');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp4').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInSlide1').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0)');
                        $('.title-faber-pen').css('transform', 'rotate(-45deg)')
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInSlide2').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0)');
                        setTimeout(function() {
                            jQuery('.sukima-2-1 , .sukima-2-2').css('border-top',
                                '1px solid gray');
                            jQuery('.sukima-2-1').css('transform', 'translateY(0)');
                            jQuery('.sukima-2-2').css('transform', 'translateY(0)');
                        }, 300);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInSlide3').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0)');
                        setTimeout(function() {
                            jQuery('.sukima-1-1 , .sukima-1-2').css('border-top',
                                '1px solid gray');
                            jQuery('.sukima-1-1').css('transform', 'translateY(0)');
                            jQuery('.sukima-1-2').css('transform', 'translateY(0)');
                        }, 300);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInSlide4').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0)');
                        $('.faber-castell').css('transform', 'translateX(0) skewX(5deg)');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp5').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                        setTimeout(function() {
                            jQuery('.pel-sen-1 , .pel-sen-2').css('border-top', '1px solid gray');
                            jQuery('.pel-sen-1').css('width', '370px');
                            jQuery('.pel-sen-2').css('width', '250px');
                        }, 500);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp10').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                        setTimeout(function() {
                            jQuery('.uni-sen-1 , .uni-sen-2').css('border-top', '1px solid gray');
                            jQuery('.uni-sen-1').css('width', '343px');
                            jQuery('.uni-sen-2').css('width', '183px');
                        }, 500);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp7').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.fadeInUp6').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0) ');
                        setTimeout(function() {
                            jQuery('.water-sen-1 , .water-sen-2').css('border-top',
                                '1px solid gray');
                            jQuery('.water-sen-1').css('width', '443px');
                            jQuery('.water-sen-2').css('width', '215px');
                        }, 500);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            $('.content-2-open-button').click(function() {
                if ($('.test-case-1').css('top') == '2016px') {
                    jQuery('.test-case-1').css('top', '863px');
                    $('.close-animation-1').css('transform', 'translateX(0)');
                    $('.close-animation-2').css('transform', 'translateX(0)');
                    setTimeout(function() {
                        jQuery('.button-p-1').css('display', 'block');
                        jQuery('.button-p-2').css('display', 'none');
                    }, 1000);
                } else {
                    $('.close-animation-1').css('transform', 'translateX(100px)');
                    $('.close-animation-2').css('transform', 'translateX(-100px)');
                    jQuery('.test-case-1').css('top', '2016px');
                    jQuery('.button-p-2').css('display', 'block');
                    jQuery('.button-p-1').css('display', 'none');
                }
            });
        });

        $('.pencase-2').css('opacity', '0');
        $('.pencase-3').css('opacity', '0');
        $(function() {
            $('.img2').show();
            $('.pencase-1').show();
            $('.img3').hide();
            $('.img4').hide();
            $('.pencase-2').hide();
            $('.pencase-3').hide();
            $('.select-1').css('border', '1px solid black');
            $('.select-1').click(function() {
                $('.img2').show();
                $('.img3').hide();
                $('.img4').hide();
                $('.pencase-1').css('opacity', '0');
                $('.pencase-2').css('opacity', '0');
                $('.pencase-3').css('opacity', '0');
                $('.select-1').css('border', '1px solid black');
                $('.select-2').css('border', '1px solid lightgray');
                $('.select-3').css('border', '1px solid lightgray');
                setTimeout(function() {
                    $('.pencase-1').show();
                    $('.pencase-2').hide();
                    $('.pencase-3').hide();
                    setTimeout(function() {
                        $('.pencase-1').css('opacity', '1');
                        $('.pencase-2').css('opacity', '0');
                        $('.pencase-3').css('opacity', '0');
                        setTimeout(function() {
                            $('.roll-title-1 , .roll-title-2').css('opacity', '1');
                        }, 0500);
                    }, 0100);
                }, 0500);
                slider2.slideToLoop(0);

            });
            $('.select-2').click(function() {
                $('.img3').show();
                $('.img2').hide();
                $('.img4').hide();
                $('.pencase-2').css('opacity', '0');
                $('.pencase-1').css('opacity', '0');
                $('.pencase-3').css('opacity', '0');
                $('.select-2').css('border', '1px solid black');
                $('.select-1').css('border', '1px solid lightgray');
                $('.select-3').css('border', '1px solid lightgray');
                setTimeout(function() {
                    $('.pencase-2').show();
                    $('.pencase-1').hide();
                    $('.pencase-3').hide();
                    setTimeout(function() {
                        $('.pencase-2').css('opacity', '1');
                        $('.pencase-1').css('opacity', '0');
                        $('.pencase-3').css('opacity', '0');
                        $('.roll-title-1 , .roll-title-2').css('opacity', '0');
                    }, 0100);
                }, 0500);
                slider2.slideToLoop(0);
            });
            $('.select-3').click(function() {
                $('.img4').show();
                $('.img3').hide();
                $('.img2').hide();
                $('.pencase-3').css('opacity', '0');
                $('.pencase-2').css('opacity', '0');
                $('.pencase-1').css('opacity', '0');
                $('.select-3').css('border', '1px solid black');
                $('.select-2').css('border', '1px solid lightgray');
                $('.select-1').css('border', '1px solid lightgray');
                setTimeout(function() {
                    $('.pencase-3').show();
                    $('.pencase-2').hide();
                    $('.pencase-1').hide();
                    setTimeout(function() {
                        $('.pencase-3').css('opacity', '1');
                        $('.pencase-2').css('opacity', '0');
                        $('.pencase-1').css('opacity', '0');
                        $('.roll-title-1 , .roll-title-2').css('opacity', '0');
                    }, 0100);
                }, 0500);
                slider2.slideToLoop(0);
            });
        });


        $(function() {
            function animation() {
                $('.note').each(function() {
                    var target = $('.itoya-point').offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll + (windowHeight / 1.3) > target) {
                        $('.itoya-1-1-1').css('top', '-260px');
                        setTimeout(function() {
                            $('.itoya-1-2-1').css('top', '-270px');
                            setTimeout(function() {
                                $('.itoya-1-3-1').css('top', '-270px');
                                $('.itoya-2').css('opacity', '1');
                                setTimeout(function() {
                                    $('.itoya-1-4-1').css('top', '-270px');
                                }, 0750);
                            }, 0750);
                        }, 0750);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });

        $(function() {
            $('.pelikan-pen-1').show();
            $('.pelikan-pen-2').hide();
            $('.pensaki-1').show();
            $('.pensaki-2').hide();
            $('.circle-1').show();
            $('.circle-2').hide();
            $('.pelikan-button-blue').click(function() {
                $('.pelikan-pen-1').show();
                $('.pelikan-pen-2').hide();
                $('.pensaki-1').show();
                $('.pensaki-2').hide();
                $('.circle-1').show();
                $('.circle-2').hide();
            });
            $('.pelikan-button-green').click(function() {
                $('.pelikan-pen-1').hide();
                $('.pelikan-pen-2').show();
                $('.pensaki-2').show();
                $('.pensaki-1').hide();
                $('.circle-2').show();
                $('.circle-1').hide();
            });
        });
        $(function() {
            function animation() {
                $('.faberappear').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateX(0)');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });

        $(function() {
            function animation() {
                $('.pelikanappear').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $(this).css('opacity', '1');
                        $(this).css('transform', 'translateY(0)');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $('.rittaibutton-cover').hover(
            function() {
                $('.rittaibutton').css('transform', 'translateZ(180deg)');
                $('.rittaibutton1').css('transform', 'translateZ(0deg)');
            },
            function() {
                $('.rittaibutton').css('transform', 'translateZ(0deg)');
                $('.rittaibutton1').css('transform', 'translateZ(180deg)');
            }
        );
        $(function() {
            function animation() {
                $('.transport').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $('.move-leman').css('transform', 'rotate(90deg)');
                        $('.move-ecridor').css('transform', 'rotate(-90deg)');
                        $('.leman-shadow').css('opacity', '.2');
                        $('.ecridor-shadow').css('opacity', '.2');
                    } else {
                        $('.move-leman').css('transform', 'rotate(120deg)');
                        $('.move-ecridor').css('transform', 'rotate(-120deg)');
                        $('.leman-shadow').css('opacity', '0');
                        $('.ecridor-shadow').css('opacity', '0');
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function() {
            function animation() {
                $('.transport10').each(function() {
                    var target = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > target - windowHeight) {
                        $('.shadow').css('opacity', '.3');
                        $('.shadow1').css('opacity', '.3');
                        setTimeout(function() {
                            $('.shadow1-2').css('opacity', '.6');
                            $('.shadow-2').css('opacity', '.6');
                        }, 0300);
                    } else {
                        $('.shadow1-2').css('opacity', '0');
                        $('.shadow-2').css('opacity', '0');
                        setTimeout(function() {
                            $('.shadow').css('opacity', '0');
                            $('.shadow1').css('opacity', '0');
                        }, 0300);
                    }
                });
            }
            animation();
            $(window).scroll(function() {
                animation();
            });
        });
        $(function(){
            $('.price-1-1').hover(
                function() {
                    $('.price-1-1').css('opacity', '0');
                },
                function() {
                    $('.price-1-1').css('opacity', '1');
                }
            );
            $('.price-2-1').hover(
                function() {
                    $('.price-2-1').css('opacity', '0');
                },
                function() {
                    $('.price-2-1').css('opacity', '1');
                }
            );
        });
        $(function(){
            let k = 1;
            $('.faber-cover-1').hover(
                function() {
                    if (k == 1) {
                        $('.price-3-1 , .faber-url-1 , .price-3-2').css('opacity', '0');
                        $('.price-3-2').css('opacity', '1');
                        $('.price-3-1 , .faber-url-1 , .price-3-2').css('cursor', 'pointer');
                        $('.price-3-2').css('cursor', 'pointer');
                    } else {
                        $('.price-3-1 , .faber-url-1 , .price-3-2').css('opacity', '0');
                        $('.faber-url-2').css('opacity', '1');
                        $('.price-3-1 , .faber-url-1 , .price-3-2').css('cursor', 'pointer');
                        $('.price-3-2').css('cursor', 'pointer');
                    }
                },
                function() {
                    if (k == 1) {
                        $('.price-3-1 , .faber-url-1 , .price-3-2').css('opacity', '0');
                        $('.faber-url-1').css('opacity', '1');
                        k = 2;
                    } else {
                        $('.price-3-2 , .faber-url-1 , .faber-url-2').css('opacity', '0');
                        $('.price-3-1').css('opacity', '1');
                        k = 1;
                    }
                }
            );
        });

        $(function() {
            $('.content-3-pel').each(function() {
                var $win = $(window),
                    $winH = $win.height(),
                    $connect = $('.point-pel-2'),
                    position = $connect.offset().top,
                    position1 = $('.content-3-pel-title').offset().top + 337,
                    current = 0,
                    intmain,
                    rotate = function(logo, angle) {
                        logo.css({
                            "transform": "rotate(" + angle + "deg)"
                        });
                    }
                scroll;
                $win.on('load scroll', function() {
                    scroll = $win.scrollTop();
                    gosa = $winH * (330 / 810);
                    sonoda = $winH * (200 / 810);
                    current = (scroll + $winH - position - gosa) * 2.5;
                    if ($('.test-case-1').css('top') == '2016px') {
                        if (current > 579.722 + 2860) {
                            current = 579.722 + 2860;
                        };
                        if (scroll + ($winH / 2) > position1) {
                            $('.pel-nonemove-line img').css({
                                right: (current - 2880 + 200)*100/1440 + '%'
                            });
                            $('.pelikan-nonemove-pic-2').css({
                                right: (current - 2880 + 150)*100/1440 + '%'
                            });
                            $('.pel-nonemove-line').css('opacity', '1');
                            $('.pelikan-nonemove-sono2').css({
                                opacity: 4.6 - current / (800)
                            });
                        } else {
                            $('.pel-nonemove-line').css('opacity', '0');
                            $('.pelikan-nonemove-sono2').css('opacity', '0');
                        }
                    } else {
                        
                        
                        
                        
                        /*ここから*/
                        if (current > 579.722) {
                            current = 579.722;
                        };
                        if (scroll + ($winH / 2) > position1) {
                            $('.pel-nonemove-line img').css({
                                right: (current + 200)*100/1440 + '%'
                            });
                            $('.pelikan-nonemove-pic-2').css({
                                right: (current + 150)*100/1440 + '%'
                            });
                            $('.pel-nonemove-line').css('opacity', '1');
                            $('.pelikan-nonemove-sono2').css({
                                opacity: 1 - current / (800)
                            });
                        } else {
                            $('.pel-nonemove-line').css('opacity', '0');
                            $('.pelikan-nonemove-sono2').css('opacity', '0');
                        }
                    };
                    intmain = 22 - ($(window).scrollTop() - $('.content-3-pel-title').offset()
                        .top) * (0.10);
                    if (intmain < -32.8) {
                        intmain = -32.8;
                    }
                    rotate($(".pel-nonemove-line img"), intmain);
                });  
            });
        });

        $(function() {
            $('.test-case-1').each(function() {
                var $win = $(window),
                    $winH = $win.height(),
                    $winW = $win.width(),
                    $connect = $('.ipad-sin'),
                    position = $connect.offset().top,
                    current = 0,
                    point,
                    scroll;
                $win.on('load scroll', function() {
                    scroll = $win.scrollTop();
                    point = scroll + ($winH / 2);

                    if ($('.test-case-1').css('top') == '2016px') {
                        if (point > position) {
                            current = point - position;
                            if (current > 3804) {
                                current = 3804;
                            };
                            if (current < 1144) {
                                current = (1144 - 860) * 4;
                            };
                            $('.ipad-inner').css({
                                top: 90 - (current / 4) + 1144 - 860 + 'px'
                            });
                        };
                    } else {
                        if (point > position) {
                            current = point - position;
                            if (current > 2600) {
                                current = 2600;
                            };
                            $('.ipad-inner').css({
                                top: 90 - current / 4 + 'px'
                            });
                        }
                    };
                });
            });
        });
        $(function() {
            $('.test-case-1').each(function() {
                var $win = $(window),
                    $winH = $win.height(),
                    $connectone = $('.note-top-title'),
                    positionone = $connectone.offset().top + 400,
                    currentone = 0,
                    point,
                    scroll;
                $win.on('load scroll', function() {
                    scroll = $win.scrollTop();
                    pointone = scroll + ($winH / 2);
                    if ($('.test-case-1').css('top') == '2016px') {
                        if (pointone > positionone + 200) {
                            currentone = pointone - positionone;
                            if (currentone < 1352) {
                                currentone = 1352;
                            };
                            $('.note-title-1').css({
                                left: -80 - currentone + 200 + 1152 + 'px'
                            });
                            $('.note-title-2').css({
                                right: -70 - currentone + 200 + 1152 + 'px'
                            });
                            $('.show-position').css({
                                top: 100 + currentone * 0.5 + 1152 + 'px'
                            });

                            $('.note-title-1').css('border-right', '1px solid gray');
                            $('.note-title-2').css('border-left', '1px solid gray');
                        } else {
                            $('.note-title-1').css('border-right', 'none');
                            $('.note-title-2').css('border-left', 'none');
                        };
                        if (pointone > positionone + 1752) {
                            $('.span-11').css('opacity', '1');
                            $('.span-11').css('transform', 'translateY(0)');
                            sethover = setTimeout(function() {
                                $('.span-44').css('opacity', '1');
                                $('.span-44').css('transform', 'translateY(0)');
                                sethover1 = setTimeout(function() {
                                    $('.span-22').css('opacity', '1');
                                    $('.span-22').css('transform', 'translateY(0)');
                                    sethover2 = setTimeout(function() {
                                        $('.span-55').css('opacity', '1');
                                        $('.span-55').css('transform', 'translateY(0)');
                                        sethover3 = setTimeout(function() {
                                            $('.span-33').css('opacity', '1');
                                            $('.span-33').css('transform', 'translateY(0)');
                                            sethover4 = setTimeout(function() {
                                                $('.downscroll').css('opacity', '1');
                                            }, 1000);
                                        }, 0500);
                                    }, 0500);
                                }, 0500);
                            }, 0500);
                        }
                    } else {
                        if (pointone > positionone + 200) {
                            currentone = pointone - positionone;
                            $('.note-title-1').css({
                                left: -80 - currentone + 200 + 'px'
                            });
                            $('.note-title-2').css({
                                right: -70 - currentone + 200 + 'px'
                            });
                            $('.show-position').css({
                                top: 200 + currentone * 0.2 + 'px'
                            });
                            $('.note-title-1').css('border-right', '1px solid gray');
                            $('.note-title-2').css('border-left', '1px solid gray');
                        } else {
                            $('.note-title-1').css('left', '-80px');
                            $('.note-title-2').css('right', '-70px');
                            $('.note-title-1').css('border-right', 'none');
                            $('.note-title-2').css('border-left', 'none');
                        };
                        if (pointone > positionone + 600) {
                            $('.span-11').css('opacity', '1');
                            $('.span-11').css('transform', 'translateY(0)');
                            sethover = setTimeout(function() {
                                $('.span-44').css('opacity', '1');
                                $('.span-44').css('transform', 'translateY(0)');
                                sethover1 = setTimeout(function() {
                                    $('.span-22').css('opacity', '1');
                                    $('.span-22').css('transform', 'translateY(0)');
                                    sethover2 = setTimeout(function() {
                                        $('.span-55').css('opacity', '1');
                                        $('.span-55').css('transform', 'translateY(0)');
                                        sethover3 = setTimeout(function() {
                                            $('.span-33').css('opacity', '1');
                                            $('.span-33').css('transform', 'translateY(0)');
                                            sethover4 = setTimeout(function() {
                                                $('.downscroll').css('opacity', '1');
                                            }, 1000);
                                        }, 0600);
                                    }, 0600);
                                }, 0600);
                            }, 0500);
                        }
                    };
                });
            });
        });
        $(function() {
            $('.pen-1').hover(
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '.4');
                    $('.water-pen-1').css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '.4');
                    $('.pen-1').css('opacity', '1');
                },
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '1');
                }
            );
            $('.pen-2').hover(
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '.4');
                    $('.water-pen-2').css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '.4');
                    $('.pen-2').css('opacity', '1');
                },
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '1');
                }
            );
            $('.pen-3').hover(
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '.4');
                    $('.water-pen-3').css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '.4');
                    $('.pen-3').css('opacity', '1');
                },
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '1');
                }
            );
            $('.pen-4').hover(
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '.4');
                    $('.water-pen-4').css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '.4');
                    $('.pen-4').css('opacity', '1');
                },
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '1');
                }
            );
            $('.pen-5').hover(
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '.4');
                    $('.water-pen-5').css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '.4');
                    $('.pen-5').css('opacity', '1');
                },
                function() {
                    $(
                        '.water-pen-1 , .water-pen-2 , .water-pen-3 , .water-pen-4 , .water-pen-5'
                    ).css('opacity', '1');
                    $('.pen-1 , .pen-2 , .pen-3 , .pen-4 , .pen-5').css('opacity', '1');
                }
            );
            $('.uni-content3-title1 a').hover(
                function() {
                    $('.uni-pen-img').css('opacity', '.4');
                    $('.uni-content3-title2 a').css('opacity', '.4');
                },
                function() {
                    $('.uni-pen-img').css('opacity', '1');
                    $('.uni-content3-title2 a').css('opacity', '1');
                }
            );
            $('.uni-content3-title2 a').hover(
                function() {
                    $('.uni-pen-img-1').css('opacity', '.4');
                    $('.uni-content3-title1 a').css('opacity', '.4');
                },
                function() {
                    $('.uni-pen-img-1').css('opacity', '1');
                    $('.uni-content3-title1 a').css('opacity', '1');
                }
            );
        });
        console.log("ll");
    }
  }

  // ブレイクポイントの瞬間に発火

  // 初回チェック
  checkBreakPoint(mql);
	
});

/*はっかポイントに関しては後日確定させる*/