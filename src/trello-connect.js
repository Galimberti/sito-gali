/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

/*! jQuery & Zepto Lazy - All Plugins v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t){function a(a,e,r,o){o=o?o.toUpperCase():"GET";var i;"POST"!==o&&"PUT"!==o||!a.config("ajaxCreateData")||(i=a.config("ajaxCreateData").apply(a,[e])),t.ajax({url:e.attr("data-src"),type:"POST"===o||"PUT"===o?o:"GET",data:i,dataType:e.attr("data-type")||"html",success:function(t){e.html(t),r(!0),a.config("removeAttribute")&&e.removeAttr("data-src data-method data-type")},error:function(){r(!1)}})}t.lazy("ajax",function(t,e){a(this,t,e,t.attr("data-method"))}),t.lazy("get",function(t,e){a(this,t,e,"GET")}),t.lazy("post",function(t,e){a(this,t,e,"POST")}),t.lazy("put",function(t,e){a(this,t,e,"PUT")})}(window.jQuery||window.Zepto),function(t){t.lazy(["av","audio","video"],["audio","video"],function(a,e){var r=a[0].tagName.toLowerCase();if("audio"===r||"video"===r){var o=a.find("data-src"),i=a.find("data-track"),n=0,c=function(){++n===o.length&&e(!1)},s=function(){var a=t(this),e=a[0].tagName.toLowerCase(),r=a.prop("attributes"),o=t("data-src"===e?"<source>":"<track>");"data-src"===e&&o.one("error",c),t.each(r,function(t,a){o.attr(a.name,a.value)}),a.replaceWith(o)};a.one("loadedmetadata",function(){e(!0)}).off("load error").attr("poster",a.attr("data-poster")),o.length?o.each(s):a.attr("data-src")?(t.each(a.attr("data-src").split(","),function(e,r){var o=r.split("|");a.append(t("<source>").one("error",c).attr({src:o[0].trim(),type:o[1].trim()}))}),this.config("removeAttribute")&&a.removeAttr("data-src")):e(!1),i.length&&i.each(s)}else e(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["frame","iframe"],"iframe",function(a,e){var r=this;if("iframe"===a[0].tagName.toLowerCase()){var o=a.attr("data-error-detect");"true"!==o&&"1"!==o?(a.attr("src",a.attr("data-src")),r.config("removeAttribute")&&a.removeAttr("data-src data-error-detect")):t.ajax({url:a.attr("data-src"),dataType:"html",crossDomain:!0,xhrFields:{withCredentials:!0},success:function(t){a.html(t).attr("src",a.attr("data-src")),r.config("removeAttribute")&&a.removeAttr("data-src data-error-detect")},error:function(){e(!1)}})}else e(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy("noop",function(){}),t.lazy("noop-success",function(t,a){a(!0)}),t.lazy("noop-error",function(t,a){a(!1)})}(window.jQuery||window.Zepto),function(t){function a(a,e,i){var n=a.prop("attributes"),c=t("<"+e+">");return t.each(n,function(t,a){"srcset"!==a.name&&a.name!==o||(a.value=r(a.value,i)),c.attr(a.name,a.value)}),a.replaceWith(c),c}function e(a,e,r){var o=t("<img>").one("load",function(){r(!0)}).one("error",function(){r(!1)}).appendTo(a).attr("src",e);o.complete&&o.load()}function r(t,a){if(a){var e=t.split(",");t="";for(var r=0,o=e.length;r<o;r++)t+=a+e[r].trim()+(r!==o-1?",":"")}return t}var o="data-src";t.lazy(["pic","picture"],["picture"],function(i,n){if("picture"===i[0].tagName.toLowerCase()){var c=i.find(o),s=i.find("data-img"),d=this.config("imageBase")||"";c.length?(c.each(function(){a(t(this),"source",d)}),1===s.length?(s=a(s,"img",d),s.on("load",function(){n(!0)}).on("error",function(){n(!1)}),s.attr("src",s.attr(o)),this.config("removeAttribute")&&s.removeAttr(o)):i.attr(o)?(e(i,d+i.attr(o),n),this.config("removeAttribute")&&i.removeAttr(o)):n(!1)):i.attr("data-srcset")?(t("<source>").attr({media:i.attr("data-media"),sizes:i.attr("data-sizes"),type:i.attr("data-type"),srcset:r(i.attr("data-srcset"),d)}).appendTo(i),e(i,d+i.attr(o),n),this.config("removeAttribute")&&i.removeAttr(o+" data-srcset data-media data-sizes data-type")):n(!1)}else n(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["js","javascript","script"],"script",function(t,a){"script"===t[0].tagName.toLowerCase()?(t.attr("src",t.attr("data-src")),this.config("removeAttribute")&&t.removeAttr("data-src")):a(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy("vimeo",function(t,a){"iframe"===t[0].tagName.toLowerCase()?(t.attr("src","https://player.vimeo.com/video/"+t.attr("data-src")),this.config("removeAttribute")&&t.removeAttr("data-src")):a(!1)})}(window.jQuery||window.Zepto),function(t){t.lazy(["yt","youtube"],function(t,a){if("iframe"===t[0].tagName.toLowerCase()){var e=/1|true/.test(t.attr("data-nocookie"));t.attr("src","https://www.youtube"+(e?"-nocookie":"")+".com/embed/"+t.attr("data-src")+"?rel=0&amp;showinfo=0"),this.config("removeAttribute")&&t.removeAttr("data-src")}else a(!1)})}(window.jQuery||window.Zepto);



var cardNumber

 var updateNumbers = function() {
    cardNumber = $("#photos").find("img.lazy").length
      var $all = $("#photos .row .id");
      $("#photos  span.id").each(function() {
        $(this).text(cardNumber - $all.index(this) + 1)
      })
    }
  

    var showMoreImages = (e) => {
       document.querySelectorAll(".item").forEach((div,k)=> {
        console.log("ss",k)
        if (k > 30) {
          div.style.display = "flex";
          console.log("K ", k)
        }
      })

      setTimeout(function() {
        e.target.parentNode.removeChild(e.target)
        $(".load-2 .lazy").lazy();
      },1)
    }

      
document.querySelectorAll("#photos .container .item").forEach((div,k)=> {
  console.log("ss",k)
  if (k > 30) {
    
    div.style.display = "none";
    div.classList.add("load-2")
  } else {
    div.classList.add("load-1")
  }
})

$(".load-1 .lazy").lazy();

updateNumbers()




var zoomImage = function(img) {
  // console.log("htis", img)
  // clone, fix width and append
    // var index = cardNumber - $model.parent().find("img, iframe").index(img) + 1;

  var index = cardNumber - $("#photos").find("img, iframe").index(img) + 1;
  
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


try {
  //open image only with numeric hashtag
  var isNumber = /^\#[0-9]*$/.test(document.location.hash)
  if (document.location.hash && isNumber) {
    // $btnLoadMore.trigger("click")
    var index = cardNumber -  Number(document.location.hash.replace("#", "")) + 1;
    if (index != 0)
      zoomImage($("#photos").find("img,iframe")[index]);  
  }
} catch(e) {
  console.log("ERROR ", e )
}
