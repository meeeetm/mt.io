window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-109282359-15');

//webtv live: 'UA-109282359-15' eventler testview'e akmıyor.
//bip-web gtm:'UA-109282359-13' eventler görüldü.


// Google Tag Manager
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TN6Z7V4');

//webtv live: 'GTM-TN6Z7V4' eventler testview'e akmıyor.
//bip-web gtm:'GTM-TBDX8TH' eventler görüldü.