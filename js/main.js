/*! skinny-bones-jekyll - v0.0.1 - 2015-03-02 */!function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var head=document.head||document.getElementsByTagName("head")[0],css=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+"</style>",head.appendChild(div.childNodes[1])}return options&&$.extend(settings,options),this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var ignoreList=".fitvidsignore";settings.ignore&&(ignoreList=ignoreList+", "+settings.ignore);var $allVideos=$(this).find(selectors.join(","));$allVideos=$allVideos.not("object object"),$allVideos=$allVideos.not(ignoreList),$allVideos.each(function(){var $this=$(this);if(!($this.parents(ignoreList).length>0||"embed"===this.tagName.toLowerCase()&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)){$this.css("height")||$this.css("width")||!isNaN($this.attr("height"))&&!isNaN($this.attr("width"))||($this.attr("height",9),$this.attr("width",16));var height="object"===this.tagName.toLowerCase()||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(999999*Math.random());$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*aspectRatio+"%"),$this.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function($){var $w=$(window);$.fn.visible=function(partial,hidden,direction){if(!(this.length<1)){var $t=this.length>1?this.eq(0):this,t=$t.get(0),vpWidth=$w.width(),vpHeight=$w.height(),direction=direction?direction:"both",clientSize=hidden===!0?t.offsetWidth*t.offsetHeight:!0;if("function"==typeof t.getBoundingClientRect){var rec=t.getBoundingClientRect(),tViz=rec.top>=0&&rec.top<vpHeight,bViz=rec.bottom>0&&rec.bottom<=vpHeight,lViz=rec.left>=0&&rec.left<vpWidth,rViz=rec.right>0&&rec.right<=vpWidth,vVisible=partial?tViz||bViz:tViz&&bViz,hVisible=partial?lViz||lViz:lViz&&rViz;if("both"===direction)return clientSize&&vVisible&&hVisible;if("vertical"===direction)return clientSize&&vVisible;if("horizontal"===direction)return clientSize&&hVisible}else{var viewTop=$w.scrollTop(),viewBottom=viewTop+vpHeight,viewLeft=$w.scrollLeft(),viewRight=viewLeft+vpWidth,offset=$t.offset(),_top=offset.top,_bottom=_top+$t.height(),_left=offset.left,_right=_left+$t.width(),compareTop=partial===!0?_bottom:_top,compareBottom=partial===!0?_top:_bottom,compareLeft=partial===!0?_right:_left,compareRight=partial===!0?_left:_right;if("both"===direction)return!!clientSize&&viewBottom>=compareBottom&&compareTop>=viewTop&&viewRight>=compareRight&&compareLeft>=viewLeft;if("vertical"===direction)return!!clientSize&&viewBottom>=compareBottom&&compareTop>=viewTop;if("horizontal"===direction)return!!clientSize&&viewRight>=compareRight&&compareLeft>=viewLeft}}}}(jQuery),$(document).ready(function(){$("#js-menu-trigger,#js-menu-screen").on("click touchstart",function(e){$("#js-menu, #js-menu-screen").toggleClass("is-visible"),$("#js-menu-trigger").toggleClass("slide close"),e.preventDefault()})}),$(document).ready(function(){$("#main").fitVids()}),$("#markdown-toc").prepend("<li><h6>Overview</h6></li>");


//Student Profile Functions
$(document).ready(function () {

  $('img').bind('mouseenter mouseleave', function() {
      $(this).attr({
          src: $(this).attr('mouseover-src')
          , 'mouseover-src': $(this).attr('src')
      })
  });


  var urls = ['template.json', 'Tom_Griffey.json'];

  for (var i = 0; i < urls.length; i++) {

    $.ajax({
        url: 'students/' + urls[i]
    })
    .done(function (response) {
        console.log(response);
        $(window).load(function () {
        $('#studentProfiles').append("<li class='student-list'>" +
            "<div class='profile-cell'>" +
                 "<a class='studentlink' href='" + response.site + "'>" +
                 "<div class='crop'>" +
                    "<img class='student-pic' mouseover-src='images/" + response.image + "' src='images/" + response.imageProp + "'>" +
                  "</div>" +
                  "<h6 class='student-name'>" + response.name + "</h6></a>" +
                "<span class='student-bio'>" + response.bio + "</span>" +
              "</div>" +
            "</li>")
      })  
    })  
  }
  

});
