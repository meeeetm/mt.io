jQuery.timer = function(interval, callback) {
    var interval = interval || 100;
    if (!callback) return false;
    _timer = function(interval, callback) {
        this.stop = function() { clearInterval(self.id); };
        this.internalCallback = function() { callback(self); };
        this.reset = function(val) {
            if (self.id) clearInterval(self.id);
            var val = val || 100;
            this.id = setInterval(this.internalCallback, val);
        };
        this.interval = interval;
        this.id = setInterval(this.internalCallback, this.interval);
        var self = this;
    };
    return new _timer(interval, callback);
};

function trUpperCase(e) {
    if (typeof(e) != "undefined" && e !== null) {
        e = e.replace(new RegExp('ğ', 'g'), 'Ğ');
        e = e.replace(new RegExp('ü', 'g'), 'Ü');
        e = e.replace(new RegExp('ş', 'g'), 'Ş');
        e = e.replace(new RegExp('i', 'g'), 'İ');
        e = e.replace(new RegExp('ö', 'g'), 'Ö');
        e = e.replace(new RegExp('ç', 'g'), 'Ç');
        e = e.replace(new RegExp('ı', 'g'), 'I');
        e = e.toUpperCase();
    }
    return e;

};

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 80; //$('#header-container').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

(function($) {

    'use strict';

    $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
        var $target = $(e.target);
        var $tabs = $target.closest('.nav-tabs-responsive');
        var $current = $target.closest('li');
        var $parent = $current.closest('li.dropdown');
        $current = $parent.length > 0 ? $parent : $current;
        var $next = $current.next();
        var $prev = $current.prev();
        var updateDropdownMenu = function($el, position) {
            $el
                .find('.dropdown-menu')
                .removeClass('pull-xs-left pull-xs-center pull-xs-right')
                .addClass('pull-xs-' + position);
        };

        $tabs.find('>li').removeClass('next prev');
        $prev.addClass('prev');
        $next.addClass('next');
        $tabs.find(".active").removeClass("active");
        $current.addClass('active');
        updateDropdownMenu($prev, 'left');
        updateDropdownMenu($current, 'center');
        updateDropdownMenu($next, 'right');
    });

})(jQuery);
 