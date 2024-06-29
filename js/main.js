jQuery(document).ready(function() {
    var accordionItem = document.querySelectorAll('.radio input')
    accordionItem.forEach(function(a,b,c){
        a.addEventListener('change',function(){
            var navbat = this.dataset.navbat;
            var accBody = document.querySelectorAll('.accardion_body')
            accBody.forEach(function(a,b,c){
                if(navbat != b){
                    a.classList.remove('active')
                }
            })
            document.querySelector('#item'+navbat).classList.toggle('active')
        })
    })


    let aboutSwiper = new Swiper(".aboutSwipper-block", {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".aboutSwipper-btn-next",
            prevEl: ".aboutSwipper-btn-prev",
        },
    });

    $('.aboutVideo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    jQuery('li.parent').on('click', function() { jQuery(this).toggleClass('openParent'); });


    $(".mainBannerSlider.owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        center: false,
        autoHeight: true,
        nav: false,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 6000,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        dotsData: false,        
        smartSpeed: 1000
    });

    var owl = $('.catalogSlider');
    owl.owlCarousel({
      loop: false,
      items: 1,
      margin: 10,
      nav: true,
      navText: ["<img src='../images/icon/arrow_long.svg' />", "<img src='../images/icon/arrow_long.svg' />"],
      onInitialized: function(e) {
        $('.catalogcounter').html('<span>01</span> / 0' + this.items().length)
        console.log();
      }
    });
    owl.on('changed.owl.carousel', function(e) {
      $('.catalogcounter').html('<span>' + '0' + ++e.page.index + '</span>' +  ' / 0' + e.item.count)
    });

    $(".toolsSlider.owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 1,
        center: false,
        autoHeight: true,
        nav: true,
        dots: true,     
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<img src='../images/icon/arrow_long.png' />", "<img src='../images/icon/arrow_long.png' />"],           
        smartSpeed: 1000,
        responsive : {
            0 : {
                items:3
            },
            768 : {
                items:3
            }
        }

    });


    $(".mainDocumentsSlider.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 35,
        center: false,
        autoHeight: true,
        nav: true,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        dotsData: false,
        smartSpeed: 1000,
        dots: true,
        responsive : {
            0 : {
                items:1,
                dots: true
            },
            576 : {
                items:4,
                dots: true
            }
        }
    });
    $(".maiPartnersSlider.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        center: false,
        autoHeight: true,
        nav: true,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        dotsData: false,
        smartSpeed: 1000,
        dots: true,
        responsive : {
            0 : {
                items:1,
                dots: true
            },
            576 : {
                items:4,
                dots: true
            }
        }
    });

    $(".projectLeftBottomSlider.owl-carousel").owlCarousel({
        items: 2,
        loop: false,
        margin: 20,
        center: false,
        autoHeight: true,
        nav: true,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        smartSpeed: 1000,     
    });

    var arrow_disabled = document.querySelector('.catalogSlider .disabled img');
    arrow_disabled.setAttribute('src','../images/icon/arrow.png');
    var arrow_right = document.querySelector('.catalogSlider .owl-next img');
    var arrow_left = document.querySelector('.catalogSlider .owl-prev img');
    var k = 0;
    arrow_right.addEventListener('click',function(){
        k = k + 1;
        if(k>slideCount-1){
            k=slideCount-1;
        }
        // alert(k)
        var arrow_left = document.querySelector('.catalogSlider .owl-prev img');
        arrow_left.setAttribute('src','../images/icon/arrow_long.svg')
        var arrow_img =  document.querySelector('.catalogSlider .owl-next img');
        // alert(arrow_img.getAttribute('src'));
        if(k==slideCount-1){
            arrow_img.setAttribute('src','../images/icon/arrow.png');
        }
    })

    arrow_left.addEventListener('click',function(){
        k = k - 1;
        if(k<0){
            k=0;
        }
        var arrow_right = document.querySelector('.catalogSlider .owl-next img');
        arrow_right.setAttribute('src','../images/icon/arrow_long.svg')
        var arrow_img =  document.querySelector('.catalogSlider .owl-prev img');
        // alert(arrow_img.getAttribute('src'));
        if(k==0){
            arrow_img.setAttribute('src','../images/icon/arrow.png');
        }
    })

    var slideCount = document.querySelectorAll('.catalogSliderItem').length;



    
        // accordionItem.forEach(function(a,b,c){
        // a.addEventListener('click',function(){
        //     var navbat = this.dataset.navbat;
        //     accordionItem.forEach(function(a,b,c){
        //         if(navbat != b){
        //             a.classList.remove('active')
        //         }
        //     })
        //     this.classList.toggle('active')
        // })
    // })
    // let owl=$("#mainSlider");
    // owl.owlCarousel();
    // $(".navigationNextBtn").click(function(){
    // 	owl.trigger("next.owl.carousel");
    // });
    // $(".navigationPrevBtn").click(function(){
    // 	owl.trigger("prev.owl.carousel");
    // });


    // $("#partnersSlider").owlCarousel({
    //     items: 4,
    //     loop: false,
    //     margin: 25,
    //     center: false,
    //     autoHeight: true,
    //     nav: true,
    //     navContainer: ".partnersNav",
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: true,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //         },
    //         768: {
    //             items: 3,
    //         },
    //         992: {
    //             items: 4
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // let owl2=$("#partnersSlider");
    // owl2.owlCarousel();
    // $(".partnersNavNextBtn").click(function(){
    // 	owl2.trigger("next.owl.carousel");
    // });
    // $(".partnersNavPrevBtn").click(function(){
    // 	owl2.trigger("prev.owl.carousel");
    // });

    // $('#popularProductsSlider').owlCarousel({
    //     loop: true,
    //     margin: 28,
    //     center: false,
    //     autoHeight: true,
    //     nav: false,
    //     pagination: false,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: false,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     animateOut: 'fadeOutLeft',
    //     animateIn: 'fadeInRight',
    //     responsive: {
    //         0: {
    //             items: 1.3,
    //             margin: 15,
    //         },
    //         480: {
    //             items: 1.6,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //             margin: 28
    //         },
    //         768: {
    //             items: 3,
    //             margin: 15
    //         },
    //         992: {
    //             items: 3,
    //             margin: 27
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // $('#stocksSlider').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     center: false,
    //     autoHeight: true,
    //     nav: false,
    //     pagination: false,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: false,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     animateOut: 'fadeOutLeft',
    //     animateIn: 'fadeInRight',
    //     responsive: {
    //         0: {
    //             items: 1.3,
    //             margin: 15
    //         },
    //         480: {
    //             items: 1.6,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //             margin: 30
    //         },
    //         768: {
    //             items: 2,
    //             margin: 30
    //         },
    //         992: {
    //             items: 3,
    //             margin: 25
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }
    // });

    // $("#contactsContentSlider").owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     center: false,
    //     autoHeight: true,
    //     nav: true,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: true,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 15
    //         },
    //         480: {
    //             items: 2,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         992: {
    //             items: 3,
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }
    // });


    jQuery("input#mpage__feedback_phone").inputmask("+7 (999)-999-99-99");

    // $(".catalogCardsSidebarColumnMenuFirst button, .catalogCardsSidebarColumnMenuSecond button .catalogCardsSidebarColumnTitleMobile").on("click", function() {
    //     $(this).children("span").toggleClass("active");
    // });

    // $(".catalogCardsFiltersBtn").on("click", function() {
    //     $(".catalogCardsFiltersArea").removeClass("hidden");
    // });

    // $(".catalogCardsFiltersCloseBtn").on("click", function() {
    //     $(".catalogCardsFiltersArea").addClass("hidden");
    // });

      
    $(".mpage_catalog").on("click", function() {
        $(".mobileCatMenu").addClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").addClass("mobileCatMenuOverlayActive");
        $("body").addClass("bodyHidden");
    });
    $(".mobileCatMenuClose > img").on("click", function() {
        $(".mobileCatMenu").removeClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").removeClass("mobileCatMenuOverlayActive");
        $("body").removeClass("bodyHidden");
    });

    $(".mobileCatMenuOverlay").on("click", function() {
        $(".mobileCatMenu").removeClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").removeClass("mobileCatMenuOverlayActive");
        $("body").removeClass("bodyHidden");
    });

    $(".mobileIconBurger").on("click", function() {
        $(".mobileMainMenu").fadeIn();
        $(".mobileIconBurger").fadeOut();
        $(".mobileIconClose").fadeIn();
    });
    $(".mobileIconClose").on("click", function() {
        $(".mobileMainMenu").fadeOut();
        $(".mobileIconBurger").fadeIn();
        $(".mobileIconClose").fadeOut();
    });


    //Active-menu
    const mainMenuItem = document.querySelectorAll('.header_menu_all li a'),
         mainBaseUrl = window.location.href;

    mainMenuItem.forEach( item => {
        if (mainBaseUrl == item.href) {
            item.classList.add('activeMenu');            
        } 
    });
    const footerMenuItem = document.querySelectorAll('.footer_menu_wr ul li a');
    footerMenuItem.forEach( item => {
        if (mainBaseUrl == item.href) {
            item.classList.add('active');            
        } 
    });


    //LoginTabsForm
    const tabsItem = document.querySelectorAll('.cabinetFormRadioInputButton'),
        tabsContent = document.querySelectorAll('.cabinetFormsItem'),
        tabsList = document.querySelector('.cabinetFormRadio'); 
    
        function tabsbContentHide() {
            tabsContent.forEach( item => { 
                item.classList.add('cabinetFormsHide');
                item.classList.remove('cabinetFormsShow', 'cabinetFormsFade');
            });
            
            tabsItem.forEach( tab => {
                tab.classList.remove('cabinetFormRadioInputActive');
            });
        }
        function tabsContentShow(i) {
            tabsContent[i].classList.add('cabinetFormsShow', 'cabinetFormsFade');
            tabsContent[i].classList.remove('cabinetFormsHide');
            tabsItem[i].classList.add('cabinetFormRadioInputActive');
        }

        tabsbContentHide();
        tabsContentShow(0);

        tabsList.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('cabinetFormRadioInputButton')) {
            tabsItem.forEach( (item, i) => {
                if ( target == item ) {
                    tabsbContentHide();
                    tabsContentShow(i);
                }
            });
            }
        })
        var arrow_new = document.querySelector('.owl-carousel .owl-nav button.owl-next');
        var arrow_new_disabled = querySelector('.catalogSlider .owl-nav .disabled');
        arrow_new.addEventListener('click',function(e){
          e.preventDefault();
              if(arrow_new_disabled){
                  this.setAttribute('src','../images/icon/arrow_long.svg');
              }
              console.log('ishlamoqda');
        })
});