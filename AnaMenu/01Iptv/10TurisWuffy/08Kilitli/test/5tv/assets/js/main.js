jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {passive: true});
    }
};

function loadCSS(href) {
    var cssLink = $("<link>");
    cssLink.attr({rel: "stylesheet", type: "text/css", href: href});
    $("head meta:eq(-1)").after(cssLink);
};

function loadJS(src) {
    var rtrn = false;
    $.getScript(src, function (data, textStatus, jqxhr) {
        console.log(src + " Yüklendi");
        rtrn = true;
    });
    return rtrn;
}

function yonlendir(sayfa, sure) {
    $("body").append('<meta http-equiv="refresh" content="' + (sure) + '; url=' + sayfa + '">');
}

function yukleniyor(durum) {
    if (durum == "on" || durum == 1 || durum == true) {
        var loaderhtml = '<div id="loader-wrapper"><div id="loader"></div></div> ';
        $("body").append(loaderhtml);
    } else {
        $("#loader-wrapper").remove();
    }
}

function cModalClose() {
    $(".customModal").removeClass("active");
    $(".customModalBackdrop").removeClass("active");
    setTimeout(function () {
        $(".customModal").remove();
        $(".customModalBackdrop").remove();
    }, 300);
}

$("body").on("click", ".customModal .cmodal-close", function (button) {
    cModalClose();
    return false;

});

function JSsuccess(yazi, baslik) {
    $(".customModal").remove();
    $(".customModalBackdrop").remove();
    var backdrop = '<div class="customModalBackdrop"></div>';
    var html = '<div class="customModal">\n' +
        '    <div class="cmodal-panel">\n' +
        '        <a href="" class="cmodal-close">\n' +
        '            <svg class="icon">\n' +
        '                <use xlink:href="assets/img/iconset.svg#close"></use>\n' +
        '            </svg>\n' +
        '        </a>\n' +
        '        <div class="cmodel-area model-success">\n' +
        '            <div class="row">\n' +
        '                <div class="col-md-4">\n' +
        '                    <div class="iconback">\n' +
        '                        <svg class="icon">\n' +
        '                            <use xlink:href="assets/img/iconset.svg#olumlu"></use>\n' +
        '                        </svg>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-md-8">\n' +
        '                    <div class="content">\n' +
        '                        <div class="baslik">' + baslik +
        '                        </div>\n' +
        '                        <div class="text">' + yazi +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
    $("body").append(backdrop);
    $("body").append(html);
    setTimeout(function () {
        $(".customModalBackdrop").addClass("active");
        $(".customModal").addClass("active");
    }, 300);
}

function JSdanger(yazi, baslik) {
    $(".customModal").remove();
    $(".customModalBackdrop").remove();
    var backdrop = '<div class="customModalBackdrop"></div>';
    var html = '<div class="customModal">\n' +
        '    <div class="cmodal-panel">\n' +
        '        <a href="" class="cmodal-close">\n' +
        '            <svg class="icon">\n' +
        '                <use xlink:href="assets/img/iconset.svg#close"></use>\n' +
        '            </svg>\n' +
        '        </a>\n' +
        '        <div class="cmodel-area model-danger">\n' +
        '            <div class="row">\n' +
        '                <div class="col-md-4">\n' +
        '                    <div class="iconback">\n' +
        '                        <svg class="icon">\n' +
        '                            <use xlink:href="assets/img/iconset.svg#olumsuz"></use>\n' +
        '                        </svg>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-md-8">\n' +
        '                    <div class="content">\n' +
        '                        <div class="baslik">' + baslik +
        '                        </div>\n' +
        '                        <div class="text">' + yazi +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
    $("body").append(backdrop);
    $("body").append(html);
    setTimeout(function () {
        $(".customModalBackdrop").addClass("active");
        $(".customModal").addClass("active");
    }, 300);
}

function JSwarning(yazi, baslik) {
    $(".customModal").remove();
    $(".customModalBackdrop").remove();
    var backdrop = '<div class="customModalBackdrop"></div>';
    var html = '<div class="customModal">\n' +
        '    <div class="cmodal-panel">\n' +
        '        <a href="" class="cmodal-close">\n' +
        '            <svg class="icon">\n' +
        '                <use xlink:href="assets/img/iconset.svg#close"></use>\n' +
        '            </svg>\n' +
        '        </a>\n' +
        '        <div class="cmodel-area model-warning">\n' +
        '            <div class="row">\n' +
        '                <div class="col-md-4">\n' +
        '                    <div class="iconback">\n' +
        '                        <svg class="icon">\n' +
        '                            <use xlink:href="assets/img/iconset.svg#somurtuk"></use>\n' +
        '                        </svg>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-md-8">\n' +
        '                    <div class="content">\n' +
        '                        <div class="baslik">' + baslik +
        '                        </div>\n' +
        '                        <div class="text">' + yazi +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
    $("body").append(backdrop);
    $("body").append(html);
    setTimeout(function () {
        $(".customModalBackdrop").addClass("active");
        $(".customModal").addClass("active");
    }, 300);
}

function JSprimary(yazi, baslik) {
    $(".customModal").remove();
    $(".customModalBackdrop").remove();
    var backdrop = '<div class="customModalBackdrop"></div>';
    var html = '<div class="customModal">\n' +
        '    <div class="cmodal-panel">\n' +
        '        <a href="" class="cmodal-close">\n' +
        '            <svg class="icon">\n' +
        '                <use xlink:href="assets/img/iconset.svg#close"></use>\n' +
        '            </svg>\n' +
        '        </a>\n' +
        '        <div class="cmodel-area model-primary">\n' +
        '            <div class="row">\n' +
        '                <div class="col-md-4">\n' +
        '                    <div class="iconback">\n' +
        '                        <svg class="icon">\n' +
        '                            <use xlink:href="assets/img/iconset.svg#olumlu"></use>\n' +
        '                        </svg>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-md-8">\n' +
        '                    <div class="content">\n' +
        '                        <div class="baslik">' + baslik +
        '                        </div>\n' +
        '                        <div class="text">' + yazi +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
    $("body").append(backdrop);
    $("body").append(html);
    setTimeout(function () {
        $(".customModalBackdrop").addClass("active");
        $(".customModal").addClass("active");
    }, 300);
}

var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};
mobileHover();
$("body").on("click", "#buttontikla,.buttontikla", function (button) {
    yukleniyor(true);
    var bildirimid = $(this).attr("bildirim"),
        htmlid = $(this).attr("htmlid"),
        formadi = $(this).attr("form-adi"),
        ekle = $(this).attr("ekle"),
        resim2 = $(this).attr("resimid2"),
        resimtur2 = $(this).attr("resimtur2"),
        resim = $(this).attr("resimid"),
        resimtur = $(this).attr("resimtur"),
        id = $(this).attr("veriid"),
        multiselect = $(this).attr("selectid"),
        ckeditor = $(this).attr("ckeditor");
    if (bildirimid == "" || bildirimid == "undefined" || bildirimid == null) {
        bildirimid = "bildirim";
    }
    var form_data = new FormData();
    $('#' + formadi).find("[type=file]").each(function (index) {
        var resimname = $(this).attr("name");
        var ins = $(this).get(0).files.length;
        if ($(this).prop("multiple") == true) {
            for (var x = 0; x < ins; x++) {
                form_data.append(resimname + "[]", $(this).get(0).files[x]);
            }
        } else {
            if ($(this).prop('files')[0] != "" && $(this).prop('files')[0] != "undefined" && $(this).prop('files')[0] != null && $(this).prop('files')[0]) {
                form_data.append(resimname, $(this).prop('files')[0]);
            }
        }
    });
    if (multiselect != "undefined" && multiselect != null) {
        var values = $('#' + multiselect).val();
        form_data.append(multiselect + "[]", values);
        form_data.append(multiselect, values);
    }
    if (ckeditor != "undefined" && ckeditor != null) {
        for (instance in CKEDITOR.instances)
            CKEDITOR.instances[instance].updateElement();
    }
    form_data.append(ekle, "1");
    if (id != null) {
        form_data.append("id", id);
    }
    if (glicd != 0) {
        form_data.append("glicd", glicd);
        form_data.append("domainkonumnotget", domainkonumnotget);
    }
    var other_data = $('#' + formadi).serializeArray();
    $.each(other_data, function (key, input) {
        form_data.append(input.name, input.value);
    });

    jQuery.ajax({
        type: 'POST',
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        url: domain + 'isle.php',
        data: form_data,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            yukleniyor(false);
            try {
                var oku = JSON.parse(veri);
                if (oku.bildirim) {
                    $("#" + bildirimid).html(oku.bildirim);
                    $("html, body").animate({scrollTop: $(".page-wrapper").offset().top}, 500);
                }
                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.html) {
                    $("#" + htmlid).html(oku.html);
                }
                if (oku.formreset) {
                    formReset('#' + formadi);
                }

                if (oku.dlayer) {
                    dataLayer.push({
                        'name': oku.dlayer.name,
                        'surname': oku.dlayer.surname,
                        'country': oku.dlayer.country,
                        'postal': oku.dlayer.postal,
                        'phone': oku.dlayer.phone,
                    });
                }
                if (oku.status) {

               /*     dataLayer.push({'basariliBasvuru': ekle});*/
                    dataLayer.push({
                        'event': 'formSubmission',
                        'phoneNumber': oku.postData.telefon,
                        'formPosition': ekle
                    });
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }
                if (oku.yenile) {
                    location.reload();
                }
            } catch (e) {
                console.log(e);
                console.log(veri);
            }
        }
    });
});
$("form[data-submit]").submit(function (event) {
    event.preventDefault();
    return false;
});
$("body").on("keypress", "form[data-submit] .form-control:not(.notsubmit)", function (e) {
    if (e.which == 13) {
        $($(this).closest("form[data-submit]").data("submit")).click();
    }
});

function formReset(formSelector) {
    $(formSelector).find("input[type=text]:not(.notreset)input[type=tel]:not(.notreset),input[type=file]:not(.notreset),textarea:not(.notreset)").each(function (index) {
        $(this).val("");
    });
    $(formSelector).find("select:not(.notreset)").each(function (index) {
        $(this).find("option:selected").prop("selected", false);
    });
    $(formSelector).find("input[type=checkbox]:not(.notreset),input[type=radio]:not(.notreset)").each(function (index) {
        $(this).prop("checked", false);
    });
}

$(document).ready(function ($) {

    if ($("section.slider .swiper-container").length) {
        var swiper = new Swiper('section.slider .swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
        });
    }


    if ($(".owl-carousel").length) {
        var teledunyaPaketleriOwl = $('.owl-teledunyaPaketleri');
        teledunyaPaketleriOwl.owlCarousel({
            margin: 25,
            nav: true,
            navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            centeredSlides: false,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 500,
            callbacks: true,
            onInitialized: owlGenislikAyarla,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        var iletisimMaps = $('.owl-iletisimMaps');
        iletisimMaps.owlCarousel({
            margin: 20,
            nav: true,
            navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
            loop: false,
            centeredSlides: false,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 500,
            callbacks: true,
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        if ($(window).width() < 600) {
            var owlkanallar = $('.owl-kanallar');
            owlkanallar.owlCarousel({
                margin: 9,
                nav: true,
                navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                slidesPerView: 'auto',
                speed: 500,
                responsive: {
                    0: {
                        items: 1
                    },
                    580: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    }
                }
            });
        } else {
            var owlkanallar = $('.owl-kanallar');
            owlkanallar.owlCarousel({
                margin: 9,
                nav: true,
                navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
                effect: 'coverflow',
                grabCursor: true,
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                slidesPerView: 'auto',
                speed: 500,
                callbacks: true,
                onInitialized: owlGenislikAyarla,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 3,
                    slideShadows: false
                },
                responsive: {
                    0: {
                        items: 1
                    },
                    580: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    }
                }
            });
        }
        if ($(window).width() < 600) {
            var hizmetlerurunler = $('.owl-hizmeturunler');
            hizmetlerurunler.owlCarousel({
                margin: 9,
                nav: false,
                effect: 'coverflow',
                grabCursor: true,
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                slidesPerView: 'auto',
                speed: 500,
                callbacks: true,
                onInitialized: owlGenislikAyarla,
                dots: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 3,
                    slideShadows: false
                },
                responsive: {
                    0: {
                        items: 1
                    },
                    580: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    }
                }
            });
        }
        var owlYayinlananProgramlar = $('.owl-yayinlananProgramlar');
        owlYayinlananProgramlar.owlCarousel({
            margin: 9,
            nav: true,
            navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            centeredSlides: false,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 500,
            callbacks: true,
            onInitialized: owlGenislikAyarla,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
        var owlMusteriYorumlari = $('.owl-musteriYorumlari');
        if ($(window).width() >= 600) {
            owlMusteriYorumlari.owlCarousel({
                margin: 9,
                dots: false,
                pagination: false,
                nav: false,
                navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
                effect: 'coverflow',
                grabCursor: true,
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                slidesPerView: 'auto',
                speed: 500,
                callbacks: true,
                onInitialized: owlGenislikAyarla,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 3,
                    slideShadows: false
                },
                responsive: {
                    0: {
                        nav: false,
                        items: 1
                    },
                    580: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        } else {
            owlMusteriYorumlari.owlCarousel({
                margin: 9,
                nav: false,
                navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
                grabCursor: true,
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                slidesPerView: 1,
                speed: 500,
                responsive: {
                    0: {
                        nav: false,
                        items: 1
                    },
                    580: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        }


        var owlMusteriYorumlari2 = $('.owl-musteriYorumlari2');
        if ($(window).width() >= 600) {
            owlMusteriYorumlari2.owlCarousel({
                margin: 9,
                dots: false,
                pagination: false,
                nav: false,
                loop: true,
                centeredSlides: true,
                autoWidth: false,
                spaceBetween: 0,
                speed: 500,
                responsive: {
                    0: {
                        nav: false,
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2,
                    },
                    1000: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        } else {
            owlMusteriYorumlari2.owlCarousel({
                margin: 9,
                nav: false,
                grabCursor: true,
                loop: true,
                centeredSlides: false,
                keyboard: true,
                spaceBetween: 0,
                speed: 500,
                responsive: {
                    0: {
                        nav: false,
                        items: 1,
                        margin: 0
                    }
                }
            });
        }
        var owlKampanyaAvantajlari = $('.owl-kampanyaAvantajlari');
        owlKampanyaAvantajlari.owlCarousel({
            margin: 9,
            nav: true,
            navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            centeredSlides: false,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 500,
            callbacks: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            onInitialized: owlGenislikAyarla,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            responsive: {
                0: {
                    items: 2
                },
                580: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });
        var owlYaklasanFilmler = $('.owl-yaklasanFilmler');
        owlYaklasanFilmler.owlCarousel({
            margin: 9,
            nav: true,
            navText: ['<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>', '<span><svg class="icon"><use xlink:href="assets/img/iconset.svg#carret-arrow"></use></svg></span>'],
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            centeredSlides: false,
            keyboard: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            speed: 500,
            callbacks: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            onInitialized: owlGenislikAyarla,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 3,
                slideShadows: false
            },
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
        var mainSlider = $('.owl-mainslider');

        mainSlider.owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
            loop: false,
            slidesPerView: 1,
            speed: 1000,
            smartSpeed: 500,
            dot: false,
            items: 1,
            animateIn: 'fadeIn', // add this
            animateOut: 'fadeOut', // and this

        });
    }
    $(".lazyimage[data-img]").each(function (index) {
        var src = $(this).data("img");
        $(this).attr("src", src);
    });
    $(".lazyimage[data-background]").each(function (index) {
        var src = $(this).data("background");
        $(this).css('background-image', 'url(' + src + ')');
    });
    /*  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(56876626, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
      });
      $("head").append('<noscript><div><img src="https://mc.yandex.ru/watch/56876626" style="position:absolute; left:-9999px;" alt="" /></div></noscript>');*/
});

var musteriYorumlar2 = $('.owl-musteriYorumlari2');

$('.musteriYorumlari2 .container .yorumlarRight .owl-nav .owl-next').click(function () {
    musteriYorumlar2.trigger('next.owl.carousel');
});
$('.musteriYorumlari2 .container .yorumlarRight .owl-nav .owl-prev').click(function () {

    musteriYorumlar2.trigger('prev.owl.carousel', [300]);
});


$("body").on("click", ".customSelect .choosen", function (button) {
    if ($(this).closest(".customSelect").hasClass("active")) {
        $(this).closest(".customSelect").removeClass("active");
    } else {
        $(".customSelect").removeClass("active");
        $(this).closest(".customSelect").addClass("active");
    }
});
$(document).on("click", function (event) {
    if (!$(event.target).closest(".customSelect").length) {
        $(".customSelect").removeClass("active");
    }
    if ($(".videoPopupCover.active").length) {
        if (!$(event.target).closest(".videoArea").length) {
            videoPopUpclose();
        }
    }
    if ($(".customModal.active").length) {
        if (!$(event.target).closest(".cmodel-area").length) {
            cModalClose();
        }
    }
});

function videoPopUpclose() {
    if ($(".videoPopupCover.active").length) {
        $(".videoPopup").removeClass("active");
        $(".videoPopupCover").removeClass("active");
        player.stopVideo();
    }
}

$("body").on("click", ".servisVideoBtn", function (button) {
    var youtubeID = $(this).data("videoid");
    $(".videoPopupCover").addClass("active");
    $(".videoPopup").addClass("active");
    if (player) {
        player.destroy();
    }
    player = new YT.Player('popupIframe', {
        height: '405',
        width: '720',
        videoId: youtubeID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    return false;
});
$("body").on("click", ".videoPopup .btn-popupClose", function (button) {
    videoPopUpclose();
    return false;
});
if ($(".videoPopupCover").length) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
    var player;
}

function onYouTubeIframeAPIReady() {
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        cModalClose();
        videoPopUpclose();
    }
};
$("body").on("click", ".akordiyonlar .akordiyon.active .btn-link", function (button) {
    $(this).closest(".akordiyon").removeClass("active");
});
$("body").on("click", ".akordiyonlar .akordiyon:not(.active) .btn-link", function (button) {
    $(this).closest(".akordiyonlar").find(".akordiyon.active").removeClass("active");
    $(this).closest(".akordiyon").addClass("active");
});


$("body").on("click", ".tarifeler:not(.innerTarifeler) .tarife-panel.active > .row", function (button) {
    $(this).closest(".tarife-panel").removeClass("active");
});
$("body").on("click", ".tarifeler:not(.innerTarifeler) .tarife-panel:not(.active) > .row", function (button) {
    $(this).closest(".tarifeler:not(.innerTarifeler)").find(".tarife-panel.active").removeClass("active");
    $(this).closest(".tarife-panel").addClass("active");
});

function owlGenislikAyarla(event) {
    var target = event.delegateTarget;
    var bodyWidth = $(window).width();
    var owlwidth = $(target).find(".owl-stage-outer").width();
    var newwidth = bodyWidth - owlwidth;
    var padding = newwidth / 2;
    var owlwidth = $(target).find(".owl-stage-outer").css({
        "padding-left": " " + padding + "px",
        "padding-right": "0px " + padding + "px",
        "margin-left": " -" + padding + "px",
        "margin-right": " -" + padding + "px",
        "width": (newwidth + owlwidth) + "px"
    })
}

$("body").on("mouseover", "header nav .navbar-nav > li.submenu ", function (button) {
    $(".dropshadow").addClass("active");
});
$("body").on("mouseleave", "header nav .navbar-nav > li.submenu  ", function (button) {
    $(".dropshadow").removeClass("active");
});
var headerheight = $("header").height();
$(window).scroll(function () {
    headerheight = $("header").height();

    if ($(window).width() > 769) {
        if ($(window).scrollTop() > 2) {
            $("body").css({"padding-top": headerheight});
            $("body").addClass('stickyActive');
        } else {
            $("body").removeClass('stickyActive');
            $("body").css({"padding-top": "0"});
        }
    }
});
if (document.body.clientWidth < 769 || $(window).height() < 480) {
    /* var headerheight = $(".kablonetMenu").height();
     $("body").css({
         "padding-top": headerheight + "px"
     })*/
    var lastScrollTop = 0;
    navbar = document.getElementById("navbarMobile");
    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= 300 && $(window).height() > 400) {
            /*
                        $("#navbarMobile").css({
                            'top': "0px",
                            'transition': 'unset'
                        });*/
            $(".kablonetMenu2").css({
                'top': "-70px",
                'transition': '.5s ease top'
            });
        } else {
            if (scrollTop > lastScrollTop && scrollTop > headerheight) {
                /*      $("#navbarMobile").css({
                          'top': "-" + headerheight + "px",
                          'transition': '.5s ease top'
                      });*/
                $(".kablonetMenu2").css({
                    'top': "0px",
                    'transition': '.5s ease top'
                });
            } else {
                /*    $("#navbarMobile").css({
                        'top': "0px",
                        'transition': '.5s .5s ease top'
                    });*/
                $(".kablonetMenu2").css({
                    'top': "-70px",
                    'transition': '.5s ease top'
                });
            }
        }
        lastScrollTop = scrollTop;
    });
}
$(".kablonetMenu .mMenu ul li.submenu>a").click(function (e) {
    e.preventDefault()
});
$(".kablonetMenu .mMenu ul li.submenu>a").click(function (e) {
    e.preventDefault()
});
$("body").on("click", ".kablonetMenu .mMenu .btn-siziArayalim", function (button) {
    $(".mMenu .subContent").removeClass("active");
    $(".mMenu .subContent").html("");
    var subHTML = $(".kablonetMenu .siziArayalimContent").html();
    subHTML = "<div class='contenSubMenu'><div  class='baslik'>SİZİ ARAYALIM</div><form action=\"\" id=\"beniArayinForm2\" data-submit=\"[form-adi=beniArayinForm2]\">" + subHTML + '</form></div>';
    $(".mMenu .subContent").html(subHTML);
    $(".mMenu .content").addClass("slideLeft");
    $(".mMenu .subContent").addClass("active");
    $(".kablonetMenu .top").addClass("back");
    $(".telefonmaske").mask("Z9999999999", {
        translation: {
            'Z': {
                pattern: "0", optional: false, recursive: true, fallback: '0'
            }
        }
    });
    return false;
});
$("body").on("click", ".kablonetMenu .mMenu ul li.submenu>a", function (button) {
    $(".mMenu .subContent").removeClass("active");
    $(".mMenu .subContent").html("");
    var subHTML = $(this).parent().find(".dropdown-menu").html();
    subHTML = "<div class='contenSubMenu'><a href='" + $(this).attr("href") + "' class='baslik'>" + $(this).text() + "</a>" + subHTML + '</div>';
    $(".mMenu .subContent").html(subHTML);
    $(".mMenu .content").addClass("slideLeft");
    $(".mMenu .subContent").addClass("active");
    $(".kablonetMenu .top").addClass("back");
    return false;
});
$("body").on("click", ".kablonetMenu .top .back", function (button) {
    $(".mMenu .content").removeClass("slideLeft");
    $(".mMenu .subContent").removeClass("active");
    $(".kablonetMenu .top").removeClass("back");
    return false;
});
$("body").on("click", ".button-toggle", function (button) {
    if ($(".kablonetMenu").hasClass("active")) {
        $(".kablonetMenu .top .back").click();
        $(".kablonetMenu .top").removeClass("back");
        $(".mMenu").removeClass("active");
        $(".kablonetMenu").removeClass("active");
        $("body").removeClass("noscroll");
    } else {
        $(".mMenu").addClass("active");
        $(".kablonetMenu").addClass("active");
        $("body").addClass("noscroll");
    }
});
$("body").on("click", ".kablonetMenu2 .menuopen", function (button) {
    $(".button-toggle").click();

});
var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};
mobileHover();

function mapGo(mapLat, mapLong) {
    if ((navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1)) {
        window.open("maps://maps.google.com/maps?daddr=" + mapLat + "," + mapLong + "&amp;ll=");
    } else {
        window.open("http://maps.google.com/maps?daddr=" + mapLat + "," + mapLong + "&amp;ll=");
    }
}

function clearTown() {
    $("#townSelect").html("<option value='-1' selected='selected'>İlçe Seçiniz</option>");
}

function clearFloor() {
    $("#floorSelect").html("<option value='-1' selected='selected'>Daire Se�iniz</option>")
}

function clearDistrict() {
    $("#districtSelect").html("<option value='-1' selected='selected'>Mahalle Seçiniz</option>");
}

function clearStreet() {
    $("#streetSelect").html("<option value='-1' selected='selected'>Sokak Seçiniz</option>");
}

function clearBuilding() {
    $("#buildingSelect").html("<option value='-1' selected='selected'>Bina Seçiniz</option>");
}

function loadingText(target) {
    $(target).html("<option value='-1' selected='selected'>Yükleniyor...</option>");
}

$("#citySelect").change(function () {
    clearTown();
    clearDistrict();
    clearStreet();
    clearBuilding();
    var cityId = $("#citySelect").val();
    var sehir = $("#citySelect option:selected").text();
    $("[name=altYapiData]").val(sehir);
    loadingText("#townSelect");
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=town&city_id=" + cityId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        $("[name=altYapiSorgulamaSonucu]").val("");

        console.log(msg);
        if (msg.status) {
            $("#townSelect").html("<option value='-1' selected='selected'>İlçe Seçiniz</option>");
            $.each(msg.data, function (i, val) {
                $("#townSelect").append("<option value='" + i + "'>" + val + "</option>");
            });
        }
    });
});
$("#townSelect").change(function () {
    var cityId = $("#citySelect").val();
    var townId = $("#townSelect").val();
    clearDistrict();
    clearStreet();
    clearBuilding();
    loadingText("#districtSelect");
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce);
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=district&city_id=" + cityId + "&town_id=" + townId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        $("[name=altYapiSorgulamaSonucu]").val("");

        if (msg.status) {
            var dataArray = [];
            for (d in msg.data) {
                var val = msg.data[d];
                dataArray.push({id: d, val: val});
            }

            function turkcesiralama(a, b) {
                var atitle = a.val.toLocaleLowerCase();
                var btitle = b.val.toLocaleLowerCase();
                var alfabe = "0123456789AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz";
                if (atitle.length === 0 || btitle.length === 0) {
                    return atitle.length - btitle.length;
                }
                for (var i = 0; i < atitle.length && i < btitle.length; i++) {
                    var ai = alfabe.indexOf(atitle[i].toUpperCase());
                    var bi = alfabe.indexOf(btitle[i].toUpperCase());
                    if (ai !== bi) {
                        return ai - bi;
                    }
                }
            }

            dataArray.sort(function (a, b) {
                return a.val.localeCompare(b.val);
            });
            $("#districtSelect").html("<option value='-1' selected='selected'>Mahalle Seçiniz</option>");
            $.each(dataArray, function (i, val) {
                $("#districtSelect").append("<option value='" + val.id + "'>" + val.val + "</option>");
            });

        }
    });
});
$("#districtSelect").change(function () {
    var cityId = $("#citySelect").val();
    var townId = $("#townSelect").val();
    var districtId = $("#districtSelect").val();
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    var mahalle = $("#districtSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce + " " + mahalle);
    clearStreet();
    clearBuilding();
    loadingText("#streetSelect");
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=street&city_id=" + cityId + "&town_id=" + townId + "&district_id=" + districtId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        $("[name=altYapiSorgulamaSonucu]").val("");

        if (msg.status) {
            var dataArray = [];
            for (d in msg.data) {
                var val = msg.data[d];
                dataArray.push({id: d, val: val});
            }

            function turkcesiralama(a, b) {
                var atitle = a.val.toLocaleLowerCase();
                var btitle = b.val.toLocaleLowerCase();
                var alfabe = "0123456789AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz";
                if (atitle.length === 0 || btitle.length === 0) {
                    return atitle.length - btitle.length;
                }
                for (var i = 0; i < atitle.length && i < btitle.length; i++) {
                    var ai = alfabe.indexOf(atitle[i].toUpperCase());
                    var bi = alfabe.indexOf(btitle[i].toUpperCase());
                    if (ai !== bi) {
                        return ai - bi;
                    }
                }
            }

            dataArray.sort(function (a, b) {
                return a.val.localeCompare(b.val);
            });
            $("#streetSelect").html("<option value='-1' selected='selected'>Sokak Seçiniz</option>");
            $.each(dataArray, function (i, val) {
                $("#streetSelect").append("<option value='" + val.id + "'>" + val.val + "</option>");
            });
        }
    });
});
$("#streetSelect").change(function () {
    var cityId = $("#citySelect").val();
    var townId = $("#townSelect").val();
    var districtId = $("#districtSelect").val();
    var streetId = $("#streetSelect").val();
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    var mahalle = $("#districtSelect option:selected").text();
    var sokak = $("#streetSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce + " " + mahalle + " " + sokak);
    clearBuilding();
    loadingText("#buildingSelect");
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=building&city_id=" + cityId + "&town_id=" + townId + "&district_id=" + districtId + "&street_id=" + streetId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        $("[name=altYapiSorgulamaSonucu]").val("");
        if (msg.status) {
            $("#buildingSelect").html("<option value='-1' selected='selected'>Bina Seçiniz</option>");
            $.each(msg.data, function (i, val) {
                $("#buildingSelect").append("<option value='" + i + "'>" + val + "</option>");
            });
        }
    });
});
$("#buildingSelect").change(function () {
    var cityId = $("#citySelect").val();
    var townId = $("#townSelect").val();
    var districtId = $("#districtSelect").val();
    var streetId = $("#streetSelect").val();
    var buildingId = $("#buildingSelect").val();
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    var mahalle = $("#districtSelect option:selected").text();
    var sokak = $("#streetSelect option:selected").text();
    var bina = $("#buildingSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce + " " + mahalle + " " + sokak + " " + bina);
    clearFloor();
    loadingText("#floorSelect");
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=floor&city_id=" + cityId + "&town_id=" + townId + "&district_id=" + districtId + "&street_id=" + streetId + "&building_id=" + buildingId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        if (msg.status) {
            if (msg.result == "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
                JSdanger("Binanızda altyapı bulunamadı .", "Üzgünüz");
            }
            $("[name=altYapiSorgulamaSonucu]").val(msg.result);
            $("#floorSelect").html("<option value='-1' selected='selected'>Daire Seçiniz</option>");
            $.each(msg.data, function (i, val) {
                $("#floorSelect").append("<option value='" + i + "'>" + val + "</option>");
            });
        }
    });
});

$("#floorSelect").change(function () {
    var cityId = $("#citySelect").val();
    var townId = $("#townSelect").val();
    var districtId = $("#districtSelect").val();
    var streetId = $("#streetSelect").val();
    var buildingId = $("#buildingSelect").val();
    var floorId = $("#floorSelect").val();
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    var mahalle = $("#districtSelect option:selected").text();
    var sokak = $("#streetSelect option:selected").text();
    var bina = $("#buildingSelect option:selected").text();
    var daire = $("#floorSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce + " " + mahalle + " " + sokak + " " + bina + " " + daire);
    // awaiting for result.
    $.ajax({
        url: domain + "theme/ajax/bina/app.php",
        data: "target=result&city_id=" + cityId + "&town_id=" + townId + "&district_id=" + districtId + "&street_id=" + streetId + "&building_id=" + buildingId + "&floor_id=" + floorId,
        dataType: "JSON",
        method: "POST"
    }).done(function (msg) {
        if (msg.status) {
            if (msg.result == "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
                JSdanger("Binanızda altyapı bulunamadı .", "Üzgünüz");
            }

            $("[name=altYapiSorgulamaSonucu]").val(msg.result);
            console.log(msg);
        }
    });
});

/*
var dairesec = $("#floorSelect");
dairesec.change(function () {
    $(".binaalert").show();
    var sehir = $("#citySelect option:selected").text();
    var ilce = $("#townSelect option:selected").text();
    var mahalle = $("#districtSelect option:selected").text();
    var sokak = $("#streetSelect option:selected").text();
    var bina = $("#buildingSelect option:selected").text();
    var daire = $("#floorSelect option:selected").text();
    $("[name=altYapiData]").val(sehir + " " + ilce + " " + mahalle + " " + sokak + " " + bina + " " + daire);
});
*/

function Select2Event() {
    if ($(".select2changed .js-example-basic-single").length > 0) {
        $(".select2changed .js-example-basic-single").select2();
    }
}

function IlSelectChanged(i) {
    var ilId = $(i).val();
    // Ajax İle Bir Sonraki Selectin içini doldurduktan sonra aşağıdaki fonksiyonu çağır.
    Select2Event();
}

function IlceSelectChanged(i) {
    var ilceId = $(i).val();
    // Ajax İle Bir Sonraki Selectin içini doldurduktan sonra aşağıdaki fonksiyonu çağır.
    Select2Event();
}

function MahalleSelectChanged(i) {
    var mahalleId = $(i).val();
    // Ajax İle Bir Sonraki Selectin içini doldurduktan sonra aşağıdaki fonksiyonu çağır.
    Select2Event();
}

function SokakSelectChanged(i) {
    var sokakId = $(i).val();
    // Ajax İle Bir Sonraki Selectin içini doldurduktan sonra aşağıdaki fonksiyonu çağır.
    Select2Event();
}

$("body").on("click", "button.btn-sorgula", function () {
    if ($("#buildingSelect").val() < 1) {
        JSwarning("Lütfen Tüm Alanları Doldurunuz.", "");
    } else {
        const result = $("[name=altYapiSorgulamaSonucu]").val();
        if (result != "" && result != "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
            $("#basvuruFormHomePage").submit();
        }
        if (result == "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
            JSdanger("Binanızda altyapı bulunamadı .", "Üzgünüz");
        }
    }
});
$("body").on("click", "button.btn-sorgula2", function () {
    if ($("#buildingSelect").val() < 1) {
        JSwarning("Lütfen Tüm Alanları Doldurunuz.", "");
    } else {
        const result = $("[name=altYapiSorgulamaSonucu]").val();
        if (result != "" && result != "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
            $("#beniArayinForm").submit();
        }
        if (result == "Seçmiş olduğunuz adreste hizmet sunulamamaktadır.") {
            JSdanger("Binanızda altyapı bulunamadı .", "Üzgünüz");
        }
    }
});
$("body").on("change", "select[data-ilce]", function () {
    var ilid = $(this).val();
    var ilceSelector = $(this).data("ilce")
    console.log(this);
    $.ajax({
        type: 'POST',
        url: domain + 'isle.php',
        data: "&ilceGetir=1&ilid=" + ilid,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            try {
                var oku = JSON.parse(veri);
                if (oku.bildirim) {
                    $('#bildirim').slideToggle();
                    $("#bildirim").html(oku.bildirim);
                    $('#bildirim').slideToggle();
                }
                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.html) {
                    $(ilceSelector).html(oku.html);
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }
            } catch (e) {
                console.log(veri);
            }
        }
    });
});
$("body").on("click", "footer .labkod-test", function (button) {
    yonlendir("https://www.labkod.com/fiber-kablonet?ref=fiberkablonet.com", 0);
});
$("body").on("click", "footer .crater", function (button) {
    yonlendir("https://crater.com.tr/", 0);
});
//412x782
$("body").on("click", ".adimlar .btn-geri", function () {
    $(".adimlar .adim.adim-1").addClass("active");
    $(".adimlar .adim.adim-2").removeClass("active");
    return false;
});
$("body").on("click", ".adimlar .btn-ileri", function () {
    $(".adimlar .adim.adim-1").removeClass("active");
    $(".adimlar .adim.adim-2").addClass("active");
    return false;
});
if ($("table").length > 0) {
    $("table").each(function (index) {
        /**/
        if (!$(this).parent().hasClass("table-responsive")) {
            $(this).before("<div class='table-responsive'><table class='table'>" + $(this).clone().html() + "</table></div>");
            $(this).remove();
        }
    });
}
$("body").on("click", ".yorum p span", function () {
    var yorum = $(this).closest(".yorum");
    $("#yorumdetayModal .modal-title").html(yorum.find(".adsoyad").html());
    $("#yorumdetayModal .modal-body p").html(yorum.find(".uzuncom").html());
    $('#yorumdetayModal').modal('show')
});
/*
document.getElementById("myinput").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #2a4798 0%, #2b70b5 ' + value + '%, #999999 ' + value + '%, #999999 100%)'
};
*/
$('.rangeSlider').on('input', function () {
    $(this).trigger('change');
});
var userSelection = document.getElementsByClassName('rangeSlider');
for (var i = 0; i < userSelection.length; i++) {
    (function (index) {
        userSelection[index].addEventListener("input", function () {
            $(".rangeSlider").trigger("change");
        }, false);
    })(i);
}
$(document).ready(function () {
    $(".rangeSlider").trigger("change");
    Select2Event();

    if ($(".yorumlarList").length > 0) {
        console.log("Sayfadasın");
        var idhash = window.location.hash;
        console.log("Hash geldi" + idhash);
        if ($(idhash).length > 0) {
            console.log("Alması lazım");
            $(idhash).addClass("selectedyorum");
            var tophash = $(idhash).offset().top - 250;
            $("html, body").animate({scrollTop: tophash}, "slow");

        }
    }
});
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
$(window).on('load', function () {
    //'hafta', 'gün',
    if ($('.countDown-box').length > 0) {
        let text = $('.countDown-box').data('text');
        let ptr = $('.countDown-box').data('pattern');

        text = text.replace('[', '');
        text = text.replace(']', '');
        text = text.split(',');

        var labels = text,
            //nextYear = (new Date().getFullYear() + 1) + '/01/01',
            nextYear = $('.countDown-box').data('end'),
            template = _.template($('#main-example-template').html()),
            currDate = '00:00:00:00:00',
            nextDate = '00:00:00:00:00',
            parser = /([0-9]{2})/gi,
            $example = $('#main-example');

        // Parse countdown string to an object


        function strfobj(str) {
            var parsed = str.match(parser),
                obj = {};
            labels.forEach(function (label, i) {
                obj[label] = parsed[i]
            });
            return obj;
        }

        // Return the time components that diffs
        function diff(obj1, obj2) {
            var diff = [];
            labels.forEach(function (key) {
                if (obj1[key] !== obj2[key]) {
                    diff.push(key);
                }
            });
            return diff;
        }

        // Build the layout
        var initData = strfobj(currDate);
        labels.forEach(function (label, i) {
            $example.append(template({
                curr: initData[label],
                next: initData[label],
                label: label
            }));
        });
        // Starts the countdown
        $example.countdown(nextYear, function (event) {
            // var newDate = event.strftime('%H:%M:%S'),
            var newDate = event.strftime(ptr),
                data;
            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                // Setup the data
                data = {
                    'curr': strfobj(currDate),
                    'next': strfobj(nextDate)
                };
                // Apply the new values to each node that changed
                diff(data.curr, data.next).forEach(function (label) {
                    var selector = '.%s'.replace(/%s/, label),
                        $node = $example.find(selector);
                    // Update the node
                    $node.removeClass('flip');
                    $node.find('.curr').text(data.curr[label]);
                    $node.find('.next').text(data.next[label]);
                    // Wait for a repaint to then flip
                    _.delay(function ($node) {
                        $node.addClass('flip');
                    }, 50, $node);
                });
            }
        });
    }
});

$("body").on("change", ".rangeSlider", function () {
    var value = ($(this).val() - $(this).attr("min")) / ($(this).attr("max") - $(this).attr("min")) * 100;
    $(this).css({
        "background": 'linear-gradient(to right, #2a4798 0%, #2b70b5 ' + value + '%, #999999 ' + value + '%, #999999 100%)'
    })
});
$("body").on("click", ".puan-form .star-select .icon", function (button) {

    var html = "";
    var starVal = 1 + $(".puan-form .star-select .icon").index(this);
    console.log(starVal);
    console.log((5 - starVal));
    for (var i = 0; i < starVal; i++) {
        html += ' <svg class="icon"><use xlink:href="assets/img/iconset.svg#star-o"></use></svg>';
    }
    for (var i = 0; i < (5 - starVal); i++) {
        html += ' <svg class="icon"><use xlink:href="assets/img/iconset.svg#star"></use></svg>';
    }
    $(".puan-form input[name=star]").val(starVal);
    $(".puan-form .star-select ").html(html);

});

$("body").on("change", ".engelliCheck", function (button) {
    if ($(this).is(":checked")) {
        $(".kampanyalar .kampanya .content .fiyat").addClass("inactive");
        $(".kampanyalar .kampanya .content .fiyat2").addClass("active");
    } else {
        $(".kampanyalar .kampanya .content .fiyat").removeClass("inactive");
        $(".kampanyalar .kampanya .content .fiyat2").removeClass("active");
    }

});

$("body").on("click", ".getSokaklar", function () {
    var sehirid = $(this).data("sehir");
    var ilceid = $(this).data("ilce");
    yukleniyor(true);

    var mahalleid = $(this).data("mahalle");
    $.ajax({
        type: 'POST',
        url: domain + 'isle.php',
        data: "&altyapiSokaklar=1&sehirid=" + sehirid + "&ilceid=" + ilceid + "&mahalleid=" + mahalleid,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            try {
                var oku = JSON.parse(veri);
                if (oku.bildirim) {
                    $('#bildirim').slideToggle();
                    $("#bildirim").html(oku.bildirim);
                    $('#bildirim').slideToggle();
                }
                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.html) {
                    yukleniyor(false);

                    $(".altyapisehirler").html(oku.html);
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }
            } catch (e) {
                console.log(veri);
            }
        }
    });
});
$("body").on("click", ".getBinalar", function () {
    yukleniyor(true);

    var sehirid = $(this).data("sehir");
    var ilceid = $(this).data("ilce");
    var mahalleid = $(this).data("mahalle");
    var sokakid = $(this).data("sokak");
    $.ajax({
        type: 'POST',
        url: domain + 'isle.php',
        data: "&altyapiBinalar=1&sehirid=" + sehirid + "&ilceid=" + ilceid + "&mahalleid=" + mahalleid + "&sokakid=" + sokakid,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            try {
                var oku = JSON.parse(veri);
                if (oku.bildirim) {
                    $('#bildirim').slideToggle();
                    $("#bildirim").html(oku.bildirim);
                    $('#bildirim').slideToggle();
                }
                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.html) {
                    yukleniyor(false);

                    $(".altyapisehirler").html(oku.html);
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }
            } catch (e) {
                console.log(veri);
            }
        }
    });
});

if ($("body.firsatkampanyasi").length) {
    // Set the date we're counting down to
    var dt = new Date();
    dt.setHours(dt.getHours() + 1);
    var countDownDate = dt.getTime();
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        /*        // Display the result in the element with id="demo"
                document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";*/
        $(".clock").html(minutes + ":" + seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}
$("body").on("click", ".firsatHemenAra", function () {

    $('html, body').animate({
        scrollTop: $("#firsatKampanyasi").offset().top - 100
    }, 200);
    return false;
});


let parLength = $(".hizmetler .aciklama > *").length


if ($('.hizmetler .aciklama').length > 0) {
    $('.hizmetler .aciklama').each(function () {
        $(this).find(':is(p, h2):not(:nth-child(-n+3))').hide();
    });
    $("body").on("click", ".hizmetler .devamGor", function () {
        if ($(this).text() === 'Devamını Gör') {
            $('.hizmetler .aciklama').each(function () {
                $(this).find(':is(p, h2):not(:nth-child(-n+3))').show();
            });
            $(this).text("Daralt");
        } else {
            $('.hizmetler .aciklama').each(function () {
                $(this).find(':is(p, h2):not(:nth-child(-n+3))').hide();
            });
            $(this).text("Devamını Gör");
        }
    });
}


if ($('.musteriyorumlari ~ .container .servisDetayliBilgi').length > 0) {
    $('.musteriyorumlari ~ .container .servisDetayliBilgi').each(function () {
        $(this).find(':is(p, h2):not(:nth-child(-n+3))').hide();
    });
    console.log($(".servisDetayliBilgi + .devamGor").text());
    $("body").on("click", ".servisDetayliBilgi + .devamGor", function () {
        if ($(this).text() === 'Devamını Gör') {
            $('.musteriyorumlari ~ .container .servisDetayliBilgi').each(function () {
                $(this).find(':is(p, h2):not(:nth-child(-n+3))').show();
            });
            $(this).text("Daralt");
        } else {
            $('.musteriyorumlari ~ .container .servisDetayliBilgi').each(function () {
                $(this).find(':is(p, h2):not(:nth-child(-n+3))').hide();
            });
            $(this).text("Devamını Gör");
        }
    });
}


$("body").on("change", ".altyapiSelect", function (button) {
    $(".btnsorgula2").addClass("disabled");

    var thisIndex = $(".altyapiSelect").index($(this));
    var form_data = new FormData();
    $(".altyapiSelect").each(function (index) {
        if (index > thisIndex) {
            $(this).addClass("disabled");
            $(this).html('<option value="-1" selected disabled>Seçiniz</option>');
            /*     $(this).customselect("cleaned");*/
        }
        form_data.append("text-" + $(this).attr("name"), $(this).find(":selected").text());
    });

    form_data.append("altyapiSorgulama", "1");
    var other_data = $('.altyapiForm').serializeArray();
    $.each(other_data, function (key, input) {
        form_data.append(input.name, input.value);
    });
    $.ajax({
        type: 'POST',
        dataType: 'text',
        cache: false,
        url: domain + 'isle.php',

        contentType: false,
        processData: false,
        data: form_data,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            try {
                var oku = JSON.parse(veri);
                if (oku.viewstate) {
                    $('.altyapiForm').find("input[name=viewstate]").val(oku.viewstate);
                }
                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }
                if (oku.sorgula) {
                    $(".btnsorgula2").removeClass("disabled");
                }
                if (oku.sonraki) {
                    var select = $("." + oku.sonraki);

                    if (oku.options) {
                        select.html(oku.options);
                    }
                    if (oku.status == "1") {
                        select.removeClass("disabled");
                        /* select.customselect("redraw");
                         select.customselect("open");*/

                    } else {
                        if (!select.hasClass("disabled")) {
                            select.addClass("disabled");
                        }
                    }
                }
            } catch (e) {
                console.log(e);
                console.log(veri);
            }
        }
    });
});

$("body").on("click", ".btnsorgula2", function (button) {
    var form_data = new FormData();
    form_data.append("altyapiSorgula", "1");
    var other_data = $('.altyapiForm').serializeArray();
    $.each(other_data, function (key, input) {
        form_data.append(input.name, input.value);
    });
    $.ajax({
        type: 'POST',
        url: domain + 'isle.php',

        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        error: function (hata) {
            console.log(hata);
        },
        success: function (veri) {
            try {
                var oku = JSON.parse(veri);

                if (oku.jsbildirim) {
                    var bildirimler = oku.jsbildirim;
                    eval(bildirimler);
                }
                if (oku.yonlendir) {
                    yonlendir(oku.yonlendir, oku.yonlendirsure);
                }

            } catch (e) {
                console.log(e);
                console.log(veri);
            }
        }
    });
});
