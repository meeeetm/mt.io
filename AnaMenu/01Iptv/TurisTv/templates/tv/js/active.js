$(document).ready(function(){$(".main-news-resize").click(function(){$(".main-news").not(n).css({width:"160px"}),$(".main-news-resize").css({height:"11px"}),$(".main-news-description").hide(),$(".main-news-resize2").hide();var n=$(this).parent().parent().parent();n.animate({width:"334px"},300,function(){n.find(".main-news-description").fadeIn(100)}),$(this).css({height:"0"}),n.find(".main-news-resize2").fadeIn(100)}),$(".main-news-resize2").click(function(){$(".main-news").css({width:"160px"}),$(".main-news-description").hide(),$(".main-news-resize2").hide(),$(".main-news-resize").css({height:"11px"})}),$(".main-news").hover(function(){$(this).find(".main-news-resize").fadeIn(100)},function(){$(this).find(".main-news-resize").fadeOut(100)}),$(".left-menu-section h3").click(function(){$(this).next(".left-menu-links, .login-block").slideToggle()})});