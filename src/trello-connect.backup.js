
// Variabili di configurazione
var markscale = 10;   // percentuale larghezza watermark rispetto all'immagine
var markpad = 10;     // padding watermark
var markurl = "https://www.galimberti.eu/assets/azienda/galimberti_watermark_white.png";
var imagesLimit = -1;     // numero di immagini prima del bottone "Guarda altre immagini"
var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";var e=function(e){var t={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null,callback_enter:null};return _extends({},t,e)},t=function(e,t){return e.getAttribute("data-"+t)},n=function(e,t,n){return e.setAttribute("data-"+t,n)},r=function(e){return e.filter(function(e){return!t(e,"was-processed")})},s=function(e,t){var n,r=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},o=function(e,n){var r=n.data_srcset,s=e.parentNode;if("PICTURE"===s.tagName)for(var o,a=0;o=s.children[a];a+=1)if("SOURCE"===o.tagName){var i=t(o,r);i&&o.setAttribute("srcset",i)}},a=function(e,n){var r=n.data_src,s=n.data_srcset,a=e.tagName,i=t(e,r);if("IMG"===a){o(e,n);var c=t(e,s);return c&&e.setAttribute("srcset",c),void(i&&e.setAttribute("src",i))}"IFRAME"!==a?i&&(e.style.backgroundImage='url("'+i+'")'):i&&e.setAttribute("src",i)},i="undefined"!=typeof window,c=i&&"IntersectionObserver"in window,l=i&&"classList"in document.createElement("p"),u=function(e,t){l?e.classList.add(t):e.className+=(e.className?" ":"")+t},d=function(e,t){l?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},f=function(e,t){e&&e(t)},_=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},v=function(e,t){var n=function n(s){m(s,!0,t),_(e,n,r)},r=function r(s){m(s,!1,t),_(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)},m=function(e,t,n){var r=e.target;d(r,n.class_loading),u(r,t?n.class_loaded:n.class_error),f(t?n.callback_load:n.callback_error,r)},b=function(e,t){f(t.callback_enter,e),["IMG","IFRAME"].indexOf(e.tagName)>-1&&(v(e,t),u(e,t.class_loading)),a(e,t),n(e,"was-processed",!0),f(t.callback_set,e)},p=function(e){return e.isIntersecting||e.intersectionRatio>0},h=function(t,n){this._settings=e(t),this._setObserver(),this.update(n)};h.prototype={_setObserver:function(){var e=this;if(c){var t=this._settings,n={root:t.container===document?null:t.container,rootMargin:t.threshold+"px"};this._observer=new IntersectionObserver(function(t){t.forEach(function(t){if(p(t)){var n=t.target;b(n,e._settings),e._observer.unobserve(n)}}),e._elements=r(e._elements)},n)}},update:function(e){var t=this,n=this._settings,s=e||n.container.querySelectorAll(n.elements_selector);this._elements=r(Array.prototype.slice.call(s)),this._observer?this._elements.forEach(function(e){t._observer.observe(e)}):(this._elements.forEach(function(e){b(e,n)}),this._elements=r(this._elements))},destroy:function(){var e=this;this._observer&&(r(this._elements).forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null}};var y=window.lazyLoadOptions;return i&&y&&function(e,t){if(t.length)for(var n,r=0;n=t[r];r+=1)s(e,n);else s(e,t)}(h,y),h});


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-video-setclasses !*/
!function(e,n,a){function o(e){var n=p.className,a=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),f?p.className.baseVal=n:p.className=n)}function s(e,n){return typeof e===n}function t(){var e,n,a,o,t,c,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],n=l[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)c=e[t],r=c.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),i.push((o?"":"no-")+r.join("-"))}}function c(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],l=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var p=n.documentElement,f="svg"===p.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=c("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(a){}return n}),t(),o(i),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);


var cardNumber;
var $section;
var $model;

var zoomImage = function(img) {
      // clone, fix width and append
      var index = cardNumber - $model.parent().find("img, iframe").index(img) + 1;
      document.location.hash = "#" + index;

      // create the wrapper and the full width image
      var $wrapper = $("<div class='full-screen'>\
                          <div class='btn-group mt-1 mx-1  pull-xs-right'>\
                            <!--<label class='btn btn-info' style='pointer-events:none'>N° " + index + "</label>\
                            <div class='btn-group'>\
                              <button class='btn btn-info fa fa-chain' data-toggle='dropdown'></button>\
                              <div class='dropdown-menu dropdown-menu-right p-1'>\
                                <input type='text' size='50' value='"+ document.location +"'>\
                              </div>\
                            </div>\
                            <a class='btn btn-info fa fa-envelope' href='mailto:?body=" + document.location + "'></a>\
                            <a class='btn btn-info fa fa-facebook'></a>-->\
                            <a class='btn btn-light fa fa-close'></a>\
                          </div>\
                        </div>");

      var $img = $("<img>");
      if ($(img).attr("data-src"))
        $img.attr("src", $(img).attr("data-src"));
      else
        $img.attr("src", $(img).attr("src"));
      $wrapper.append($img);


     $wrapper.find(".fa-close").on("click", function() {
        $("body").removeClass("noscroll");
        $wrapper.remove();
        window.history.pushState(null, "", "#");
      });

      $(window).on('popstate', function() {
          $("body").removeClass("noscroll");
        $wrapper.remove();
        // window.history.pushState(null, "", "#");
      })

      // block the body scroll
      $("body").addClass("noscroll");
      $("body").append($wrapper);
       $wrapper.find(".fa-chain").on("click", function(e) {
          e.preventDefault();
          var input = $wrapper.find("input")[0];
          input.setSelectionRange(0, input.value.length);
      },true)

      $wrapper.find("img").on("click", function() {
        // body back to scroll
        $("body").removeClass("noscroll");
        $wrapper.remove();
        window.history.pushState(null, "", "#");
      });
}

$(window).on("ready", function() {

  $section = $("#persone");
  $model = $section.find(".trello");


  // highlight dell'attivo nella navbar
  $(".navbar [href]").each(function() {
    if (this.href == window.location.href)
      $(this).addClass("active");
  });



  // modali persone index
  var buildPersone = function(data) {

    // return;

    var $section = $("#persone");
    if ($section.length < 1)
      return;

    var idList;
    $.each(data.lists, function( key, list ) {
      if (list.name == "PERSONE") {
        idList = list.id;
        return false
      }
    });

    if (!idList)
      return;

    // $model.hide();

    var extractPhoneNumber = function(val) {
      var i = val.indexOf("+");
      if (i > -1)
        return val.substring(i).replace("-", "").replace(/ /g,'').replace("'0'", "");
      return val;
    }

    $.each(data.cards, function( key, card ) {
      try {
        if (card.idList != idList)
        return;

        var $copy = $model.clone();
        var parts = card.desc.split("\n");
        $copy.find("img").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "https://galimberti.imgix.net") + "?auto=compress,format");
        $copy.find(".nome_contatti").text(card.name);
        $copy.find(".ruolo_contatti").text(parts[0]);
        $copy.find(".card").attr("data-target" , "#" + card.id);
        $copy.show();
        $model.after($copy);

        history.pushState({}, "page 2", "index.html");

        $(window).on('popstate', function() {
          $(".modal").modal('hide');
        });

        // make a new modal
        var $modal = $("body").find($model.find(".card").attr("data-target"));
        var $modalCopy = $modal.clone();
        $modalCopy.find(".img-fluid").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "https://galimberti.imgix.net") + "?auto=compress,format");
        $modalCopy.find(".settore").attr("src", card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "https://galimberti.imgix.net") + "?w=25");
        $modalCopy.attr("id", card.id);
        $modalCopy.find(".nome_contatti").text(card.name);
        $modalCopy.find(".ruolo_contatti span").text(parts[0]);

        $modalCopy.find(".tel-it span").text(parts[1]);
        $modalCopy.find(".tel-it").attr("href", "tel:" + extractPhoneNumber(parts[1]));

        if (parts.length == 4) {
          $modalCopy.find(".tel-ch span").text(parts[2]);
          $modalCopy.find(".tel-ch").attr("href", "tel:" + extractPhoneNumber(parts[2]));
        } else {
          $modalCopy.find(".tel-ch").next().remove();
          $modalCopy.find(".tel-ch").remove();
        }
        $modalCopy.find(".email").attr("href", "mailto:" + parts[parts.length-1]);
        $modalCopy.find(".email span").text(parts[parts.length-1]);

        $modal.after($modalCopy);
      } catch(e) {}
    });
  }

  // load from trello

  // $.getJSON( "./trello.json", function( data ) {
   
    var items = [];
    // buildPersone(data);

    // var idList = null;
    // var url = window.location.pathname;
    // var filename = url.substring(url.lastIndexOf('/')+1);

    // $.each(data.lists, function( key, list ) {
    //   if (list.name == filename) {
    //     idList = list.id;
    //     return false
    //   }
    // });

    // if (!idList)
    //   return;

    var resolution = Math.max(window.screen.width, window.screen.height);
    if (resolution > 940)
      resolution = 940;

    var $model = $(".trello");
    $model.hide();
    var $btnLoadMore = $("#trello-load-more");

    // ??? 
    // $btnLoadMore.on("click", function() {
    //   $btnLoadMore.hide();
    //   $(cardsToLoad).each(function() {
    //     appendCard(this);
    //   })
    //   updateNumbers()
    // });

    var updateNumbers = function() {
      var $all = $("#photos .row span");
      $("#photos  span").each(function() {
        $(this).text(cardNumber - $all.index(this) + 1)
      })
    }

    // var appendCard = function(card, index) {
    //   var $clone = $model.clone();
     
    //   $clone.find("img").attr("src","");
    //   if (card.desc.indexOf("player.vimeo.com") > 0 || card.desc.indexOf("www.youtube.com") > 0) {
        
    //     $clone.css("display","flex");

    //     var $embed = $('<div class="mt-1 embed-responsive embed-responsive-16by9"></div>');
    //     var $iframe = $('<iframe ></iframe>');
    //     $iframe.attr("src", card.desc);
    //     $embed.append($iframe);
    //     $clone.find("img").replaceWith($embed);

    //     $clone.insertBefore($btnLoadMore);
    //     $clone.find("span").text("");
    //     return;
    //   }

    //   // check img
    //   // var $clone = $model.clone();
    //   $clone.removeClass("trello");
    //   $clone.css("display","flex");

    //   var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "https://galimberti.imgix.net");
    //   url = url + "?w=" + resolution;
    //   url = url + "&auto=compress,format";
    //   url = url + "&mark=" + markurl;
    //   url = url + "&markscale=" + markscale + "&markpad=" + markpad;
    //   $clone.find("img").attr("data-src", url);
    //   $clone.find("img").attr("alt", card.name);


    //   // we got a link
    //   if (card.desc.indexOf(".html") != -1) {
    //     $clone.find("img").wrap($("<a href='" + card.desc + "'></a>"));
    //     $clone.find("img").css("cursor", "pointer");
    //   } else {
    //     $clone.find("img").on("click", function() {
    //       zoomImage(this);
    //     });
    //   }

    //   // if (cardNumber > imagesLimit)
    //   //     $clone.hide();

    //   $clone.insertBefore($btnLoadMore);
    //   // var index = $clone.parent().find("img").index($clone.find("img")[0]);
    //   $clone.find("span").text("-");

    //   // $clone.find("div").append("<span class='mt-2' style='color:rgba(255,255,255,0.7);font-size:90%;position: absolute;top: 0px;right: 24px;'>" + index + "</span>");

    //   // if two col
    //   if (card.attachments.length > 1) {

    //     // cardNumber++;
    //     var $col = $clone.find(".col-lg-12");
    //     $col.removeClass("col-lg-12").addClass("col-lg-6");
    //     var $secondCol = $col.clone();
    //     var url = card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "https://galimberti.imgix.net");
    //     url = url + "?w=" + resolution;
    //     url = url + "&auto=compress,format";
    //     url = url + "&mark=" + markurl;
    //     url = url + "&markscale=" + markscale + "&markpad=" + markpad;
    //     $secondCol.find("img").attr("data-src", url);

    //     // var firstUrl = $col.find("img").attr("src");
    //     // $col.find("img").attr("src", firstUrl);
    //     $secondCol.find("img").attr("alt", card.name);

    //     if (card.desc.indexOf(".html") != -1) {
    //       $secondCol.find("img").wrap($("<a href='" + card.desc + "'></a>"));
    //     } else {
    //       $secondCol.find("img").on("click", function() {
    //         zoomImage(this);
    //       });
    //     }

    //     $col.after($secondCol);

    //     var index = $clone.parent().find("img").index($secondCol.find("img")[0]);
    //     $secondCol.find("span").text(index);
    //     // var index = $clone.parent().find("img").index($secondCol.find("img"));
    //     // $secondCol.append("<span class='photo-number'>" + index + "</span>");
    //   }
    // }

    // var cardNumber = 0;
    // cards
    var cardsToLoad = [];

    // $.each(data.cards, function( key, card ) {
    //   if (card.idList != idList)
    //     return;

    //   cardNumber++;
    //   if (card.attachments.length > 1) 
    //     cardNumber++;
    //   // we have a card
    //   // check video

    //   if ((imagesLimit == -1) || (cardNumber <= imagesLimit)) {
    //     appendCard(card, cardNumber);
    //   } else {
    //     cardsToLoad.push(card);
    //   }
    //   // zoom
    // });

    cardNumber = $("#photos .row").length;
    updateNumbers();


    var myLazyLoad = new LazyLoad();

    if ((imagesLimit == -1) || (cardNumber <= imagesLimit))
      $btnLoadMore.hide();

    // show load more button if we have more the img/page limit
    // if (window.screen.width < 940)
    //   return;


   

    try {
      //open image only with numeric hashtag
      var isNumber = /^\#[0-9]*$/.test(document.location.hash)
      if (document.location.hash && isNumber) {
        $btnLoadMore.trigger("click")
        var index = cardNumber -  Number(document.location.hash.replace("#", "")) + 1;
        if (index != 0)
          zoomImage($model.parent().find("img,iframe")[index]);  
      }
    } catch(e) {
      console.log("ERROR ", e )
    }


    // $(document).find(".trello").hide();

  
  
  
  
  // });


});

// smooth scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  (function() {

  	var style = function(el) {
  		el.style.setProperty("transition", "all .5s ease-out");
  		el.style.setProperty("background", "transparent", "important");
  		el.style.setProperty("box-shadow", "none", "important");
  		el.style.setProperty("transform", "scale(1.1)", "important");
  		el.style.setProperty("transform-origin", "50% -10%", "important");
  	}

  	var unstyle = function(el) {
  		el.style.removeProperty("background");
  		el.style.removeProperty("box-shadow");
  		el.style.removeProperty("transform");
  		el.style.removeProperty("transform-origin");
  	}

  	var s = "<style id='navbar-cover'>.navbar.fixed-top {transform-origin:50% -10%;transform:scale(1.1) !important;box-shadow: none;background: transparent !important;}</style>";
  	document.write(s);

  	document.addEventListener("DOMContentLoaded", function(event) {
      	style(document.querySelector(".navbar.fixed-top"));
      	document.getElementById("navbar-cover").remove();
    	});


  	window.addEventListener("scroll", function() {
  		var scroll = $(window).scrollTop();
  		if (scroll > 15)
  			unstyle(document.querySelector(".navbar.fixed-top"));
  		else
  			style(document.querySelector(".navbar.fixed-top"));

  	})

    
  })();
