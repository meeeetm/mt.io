var debug = false;
var acc_console = function(text)
{
  if (debug)
    console.log(text);
}

var onFacebookLogin = function(response)
{
  /*
  console.log(redirect);
  if (redirect)
    redirectstr = '?redir='+encodeURIComponent(redirect);
  else
    redirectstr = '';
*/
  document.location.href = '/member/loginfromfacebook/';
}

var updateFancyBoxIframe = function()
{
  var iframeheight = $('.fancybox-iframe').contents().find('body').height();
  var viewportheight = $(window).height();
  acc_console('iframe height: '+iframeheight);
  acc_console('viewport height: '+viewportheight);
  acc_console(iframeheight < (viewportheight - 30));
  var fancyboxheight = iframeheight < (viewportheight - 30) ? iframeheight : (viewportheight - 30);
  acc_console('fancybox height: '+fancyboxheight);
  $('.fancybox-inner').height(fancyboxheight);
}

var setFancyBoxIframeWidth = function(width)
{
  $('.fancybox-inner, .fancybox-wrap').width(width);
}

var openStreamExtern = function(url) 
{
  var w = screen.width-70;
  var h = screen.height-70;
  var l = (screen.width / 2) - (w / 2);
  var t = (screen.height / 2) - (h / 2);
  var options = 'directories=no,location=no,menubar=no,status=no,titlebar=no,toolbar=no,scrollbars=yes,width='+w+',height='+h+',top='+t+',left='+l+',resizeable=yes';

  newwindow = window.open(url, null, options);
}

var updateMainMenu = function()
{
  acc_console('executing updateMainMenu')

  // no responsiveness on IE8 and lower
  if ($('html').hasClass('lt-ie9'))
    return;

  var menu = $('#menubar > ul');

  // no menu!?
  if (menu.length < 1)
    return;

  var items = menu.children(':not(.more)');
  acc_console('number of menuitems: '+items.length)
  var totalwidth = $('#menubar').width();
  acc_console('available width: '+totalwidth)

  // calculate width of 'more' button first
  var morebutton = menu.find('> li.more');
  if (morebutton.find('span.caret').length == 0)
    morebutton.find('a').append('<span class="caret"></span>');
  var morebuttonwidth = morebutton.actual('outerWidth', { includeMargin : true });
  acc_console('width more button: '+morebuttonwidth)

  // calculate width of country dropdown first
  var countrydropdown = $('#selectedcountrycontainer');
  var countrydropdownwidth = countrydropdown.actual('outerWidth', { includeMargin : true });
  acc_console('width country dropdown: '+countrydropdownwidth)

  // check if any items do not fit now
  var hashiddenitems = false;
  var currentposition = 0;
  var hideitemsfrom = null;
  items.each(function(itemcounter)
  {
    acc_console('item: '+itemcounter)
    acc_console('text: '+$(this).text())
    acc_console('left: '+$(this).position().left)
    acc_console('width: '+$(this).actual('outerWidth', { includeMargin : true }))

    // available width is everything for the last one, but everything minus the 'more' button for other items
    if (itemcounter < items.length - 1)
      checkwidth = totalwidth - countrydropdownwidth - morebuttonwidth;
    else
      checkwidth = totalwidth - countrydropdownwidth

//    acc_console(currentposition + $(this).actual('outerWidth', { includeMargin : true }));
 //    acc_console(checkwidth);

    // does it fit?
    if (currentposition + $(this).actual('outerWidth', { includeMargin : true }) > checkwidth)
    {
      hashiddenitems = true;
      hideitemsfrom = itemcounter;
      return false;
    }

    $(this).show();

    currentposition += $(this).actual('outerWidth', { includeMargin : true });
    acc_console('currentposition: '+currentposition)
  })
  
   acc_console('has hidden items: '+hashiddenitems)
  if (hashiddenitems)
  {
    var itemstohide = items.removeClass('hidden').slice(hideitemsfrom);
    itemstohide.addClass('hidden');
    morebutton.removeClass('hidden').find('ul').remove();
   // morebutton.on('mouseenter', function() {  $('#menubar > ul').css('overflow-y', 'visible')})
   // morebutton.on('mouseleave', function() {  $('#menubar > ul').css('overflow-y', 'hidden')})
    var submenu = $('<ul></ul>');
    morebutton.append(submenu);
    var maxwidth = 0;
    itemstohide.each(function()
    {
      var item = $(this).clone().removeClass('hidden');
      submenu.append(item);
      var itemwidth = item.actual('outerWidth');
//      acc_console(' - text: '+item.text())
//      acc_console(' - width: '+itemwidth)

      maxwidth = itemwidth > maxwidth ? itemwidth : maxwidth;
      
    })
    submenu.width(maxwidth);
  } else {
    items.removeClass('hidden');
    morebutton.addClass('hidden');
  }

  menu.css('width', 'auto');
}

// update the streamslist 
var updateStreamsList = function()
{
  acc_console('executing updateStreamsList')

  // no list?!
  if (streamslist.length < 1)
    return;

  // this is the default (minimal) width. In reality we use percentages, but this value is how we calculate how may items fit per row
  var streamwidth = 150;

  // get children (only once)
  if (!streamslistchildren)
    streamslistchildren = streamslist.children('li');
  items = streamslistchildren.filter(':not(.banner):not(.spacer)');
  acc_console('number of streams: '+items.length)

  // no responsiveness on IE8 and lower
  if ($('html').hasClass('lt-ie9'))
  {
    repositionBetweenStreamsBanner(streamslist, streamslistchildren, 5);
    return;
  }

  var totalwidth = streamslist.width();
  acc_console('available width: '+totalwidth)

  // calculate how many items fit per row
  var streamsperrow = Math.floor(totalwidth / streamwidth);

  // prevent endless loops
  if (streamsperrow < 1)
    streamsperrow = 1;
  acc_console('streamsperrow: '+streamsperrow);

  // calculate how many rows we will get
  var numberofrows = Math.ceil(items.length / streamsperrow);
  acc_console('numberofrows: '+numberofrows);

  // no change? Then do nothing further
  if (streamsperrow == 5 && currentstreamsperrow == streamsperrow )
  {
    acc_console('Stopping, number of streams per row has not changed')
    $('section#content').removeClass('loading');
    return false;
  }

  // update 'items per row' class for the container
  streamslist.removeClass(/^perrow-/).addClass('perrow-'+streamsperrow);

/*
  // calculate how much to add to get the items distributed evenly
  var extramargin = totalwidth - streamsperrow * streamwidth;
  acc_console('extra margin: '+ extramargin)
  var extramarginpertemperside = Math.floor(extramargin / streamsperrow / 2);
  acc_console('extra margin per item per side: '+ extramarginpertemperside)

  // add extra horizontal space space
 // items.width(150 + 2 * extramarginpertemperside).find('article').css({paddingLeft: 15+ extramarginpertemperside, paddingRight: 15 + extramarginpertemperside});
*/
  // clear all 'rowX' classes before we add new ones
  items.removeClass(/^row[0-9]+|firstofrow|lastofrow/);

  // number rows and equalize all items per column
  for (row=1; row <= numberofrows; row++)
  {
    var startitem = (row - 1)  * streamsperrow;
    var enditem = startitem + streamsperrow;
    var rowitems = items.slice(startitem, enditem);

    // mark rows with now headers (for less margin)
    if (rowitems.find('h2').length == 0)
      rowitems.addClass('row' + row + ' rowwithoutheaders');
    else
      rowitems.addClass('row' + row).removeClass('rowwithoutheaders');

    //rowitems.first().addClass('firstofrow');
    //rowitems.last().addClass('lastofrow');

    rowitems.find('article').height('auto').equalHeights();
  }

  repositionBetweenStreamsBanner(streamslist, streamslistchildren, streamsperrow);

  // store this
  currentstreamsperrow = streamsperrow;
}

var repositionBetweenStreamsBanner = function(streamslist, streamslistchildren, streamsperrow)
{
  // banner after 3 rows
  var banner = streamslistchildren.filter('.banner');
  if (banner.length)
  {
    banner.insertAfter(items.eq(streamsperrow * 3 - 1));
  }

  // remove current spacers
  streamslist.find('.spacer').remove();
  for (i=0; i < streamsperrow - 1; i++)
    banner.after('<li class="spacer"></li>');  
}

var updateContentHeight = function()
{
  $('#content').css('min-height', $('#leftbar').height());
}

var resizetimer;

$(function()
{
  updateContentHeight();

  $(".fancybox").each(function(){
    var $a = $(this);
    var w = $a.data("width");
    $a.fancybox({
      width : w, 
      fitToView : true,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none',
      padding: 0,
      type: 'iframe'
    }).attr('onclick', null);
  });

  $(".fancybox-autoopen").trigger('click');

  $('select.customselect').customSelect();

  $('.tooltip').tooltipster({
      theme: 'tooltipster-light',
      position: 'top', 
      offsetY: 20,
      touchDevices: false
  });
/*
  $(".tooltip").tipTip({
    defaultPosition: 'top',
    delay: 200,
    fadeIn: 100,
    fadeOut: 250
  });
*/
  $("img.lazy").lazyload({ threshold : 200 });

  updateMainMenu();

  $('#menubar li.more').on('click', function()
  {
    if ($(this).find('ul:visible').length > 0)
      $()
  })

  $('#selectedcountrycontainer').on('click', function()
  {
    var countrylistcontainer = $('#countrylistcontainer');
    if (countrylistcontainer.is(':visible'))
    {
      countrylistcontainer.unbind("clickoutside").slideUp(function()
      {
        $('#selectedcountrycontainer').removeClass('open');
      });

    } else {
      $(this).addClass('open');
      countrylistcontainer.slideDown(function()
      {
        countrylistcontainer.bind("clickoutside", function(event)
        {
          $(this).unbind("clickoutside").slideUp();
          $('#selectedcountrycontainer').removeClass('open');
        });

      });
    }
  })

  $('#cookieacceptbutton').bind('click', function(ev)
  {
    ev.preventDefault();

    $.cookie('cookie_status', 'accept', { expires: 1500, path: '/' });
    document.location.reload();
  })

  if ($('#cookiewarningcontainer').length > 0 && $.cookie('cookie_status') != 'accept')
  {
    $('#cookiewarningcontainer').show(); 
  }

});

$(window).load(function()
{
  $(window).resize(function()
  {
    updateContentHeight();

    // for image lazy loading
    $(document).trigger("scroll");

    // no responsiveness on IE8 and lower
    if (!$('html').hasClass('lt-ie9'))
    {
      // hide menu bar first
      $('#menubar > ul > li').addClass('hidden');
    }

    if (resizetimer)
    {
      acc_console('reset timer')
      clearTimeout(resizetimer)
    }

    resizetimer = setTimeout(updateMainMenu, 100);
  })

})