$(document).ready(function(){
	var kv_img = [
	               {"pic":"../images/campus/banner_6.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_6.jpg*/,"url":"../../../www.mingchao.com/index.htm"/*tpa=http://www.mingchao.com/*/},
	               {"pic":"../images/campus/banner_2.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_2.jpg*/,"url":"../../../www.mingchao.com/index.htm"/*tpa=http://www.mingchao.com/*/},
	               {"pic":"../images/campus/banner_5.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_5.jpg*/,"url":"../../../www.mingchao.com/index.htm"/*tpa=http://www.mingchao.com/*/},
	               // {"pic":"../images/campus/banner_4.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_4.jpg*/,"url":"../../../www.mingchao.com/index.htm"/*tpa=http://www.mingchao.com/*/},
               ];
               var kv_icon = [
                    "../images/campus/banner_6s.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_6s.jpg*/,
				    "../images/campus/banner_s2.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_s2.jpg*/,
				    "../images/campus/banner_5s.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_5s.jpg*/,
				    // "../images/campus/banner_s4.jpg"/*tpa=http://static.mingchao.com/official/images/campus/banner_s4.jpg*/
				   ];
               var $kv = $("#campuskv");
	           var kvs1 = [];
	           var kvtime = 3000;
	           var kvlinks = [];
	           var kva = $('#picurl')[0];
	           var kvimg = $("#campuskv img")[0];
	           var $kvbutton;
	           var nowli = 0;

	           var delay = 6;
	           var $targetul = $("#kv_button ul").eq(0);
	           $targetul.empty();
	           for (var i = 0; i < kv_img.length; i++) {
	               kvlinks.push(kv_img[i]['url']);
	               kvs1.push(kv_img[i]['pic']);
	               kvtime = 6 * 1000;
	               $targetul.append("<li class='fadeIn'><img width='75px' height='45px' src='"+kv_icon[i]+"'/></li>");
	           }
	           $kvbutton = $("#kv_button li");
	           $targetul.find("li").eq(0).addClass("no fadeOut");
	           $kv.css({
	               "background": "url(" + kvs1[0] + ") no-repeat center 0"
	           });
	           if (kva) {
	               kva.href = kvlinks[nowli];
	           }
	           if ($targetul.find("li").length == 1) {
	               $kvbutton.hide();
	               //return;
	           }

	           $("#kv_button li").click(function (e) {
	               e.preventDefault();
	               e.stopPropagation();

	               if ($kv.is(":animated")) {
	                   return;
	               }
	               if ($kv[0].interval1) {
	                   clearInterval($kv[0].interval1);
	               }
	               var lis = $("#kv_button")[0].getElementsByTagName("li");
	               var whichli = (function (which) {
	                   for (var i = 0; i < lis.length; i++) {
	                       if (which == lis[i]) {
	                           return i;
	                       }
	                   }
	               })(this);
	               //var whichli=$(this).index();
	               nowli = whichli;
	               if (kva) {
	                   kva.href = kvlinks[nowli];
	               }
	               $kv.fadeOut(700, function () {
	                   $kv.css({
	                       "background": "url(" + kvs1[nowli] + ") no-repeat center 0"
	                   });
	                   $kv.fadeIn(700);
	                   $kvbutton.eq(nowli).addClass("no fadeOut").siblings().removeClass("no fadeOut");
	                   $kv[0].interval1 = setInterval(function () {
	                       nowli++;
	                       if (nowli > kvs1.length - 1) {
	                           nowli = 0;
	                       }
	                       $("#kv_button li").eq(nowli).addClass("no fadeOut").siblings().removeClass("no fadeOut");
	                       if (kva) {
	                           kva.href = kvlinks[nowli];
	                       }
	                       $kv.fadeOut(700, function () {
	                           $kv.css({
	                               "background": "url(" + kvs1[nowli] + ") no-repeat center 0"
	                           });
	                           $kv.fadeIn(700);
	                       });
	                   }, kvtime);
	                   kvstart();

	                   $("#campuskv").hover(function () {
	                       if ($kv[0].interval1) {
	                           clearInterval($kv[0].interval1)
	                       }
	                   }, function () {
	                       kvstart();
	                   });
	               });
	           });

	           function kvstart() {
	               if ($kv[0].interval1) {
	                   clearInterval($kv[0].interval1)
	               }
	               $kv[0].interval1 = setInterval(function () {
	                   if ($kv.is(":animated")) {
	                       return;
	                   }
	                   nowli++;
	                   if (nowli > kvs1.length - 1) {
	                       nowli = 0
	                   }
	                   if(kva)
	                   kva.href = kvlinks[nowli];
	                   $kvbutton.eq(nowli).addClass("no fadeOut").siblings().removeClass("no fadeOut");
	                   $kv.animate({
	                       "opacity": 0
	                   }, 700, function () {
	                       $kv[0].style.background = "url(" + kvs1[nowli] + ") no-repeat center 0";
	                       $kv.animate({
	                           "opacity": 1
	                       }, 700);
	                   })
	               }, kvtime);
	           }
	           kvstart();

	           $(".link").on("click",function(){
	        	   //var hightTop=$(document).scrollTop();
	        	   //var link=$(this).attr('href')+"?top="+hightTop;
	        	   var link=$(this).attr('href');
	        	   window.location.href=link;
	           });
	           //var windowTop=getQueryString("top");
	           //if(windowTop!=null || windowTop!=0 || windowTop!=undefined ){
	        	//   $('body,html').animate({scrollTop:windowTop+'px'},1000);
	           //}

});

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}


// 本方法需要jquery支持
function MM_showHideLayers(id1,id2,v){
	// v = "show";
	if(v=="show"){
		$("#"+id2).css("background","url('../images/nav_li_hover.jpg'/*tpa=http://static.mingchao.com/official/images/nav_li_hover.jpg*/) no-repeat").css("color","#000000");
		$("#"+id1).css("visibility", "visible");
	}
	else{
		$("#"+id2).css("background-image","").css("color","#ffffff");
		$("#"+id1).css("visibility", "hidden");
	}
}

//输入数字，达到随意跳转的功能。
function pagesJump(){
    var Num = parseInt($('#page-num').val());
    var count = parseInt($('#count').val());
    if(isNaN(Num)) {
        alert('必须输入一个数字！');
    } else {
        if( Num > count || Num < 0 )
        {
            alert('必须输入一个合法的数字！');
        } else {
            window.location.href="http://static.mingchao.com/newslist/"+Num+".html";
        }
    }
}

function addbookmark(url, title){
    if (window.sidebar)
        window.sidebar.addPanel(title, url,"");
    else if( window.opera && window.print ){
        var mbm = document.createElement('a');
        mbm.setAttribute('rel','sidebar');
        mbm.setAttribute('href',url);
        mbm.setAttribute('title',title);
        mbm.click();
    }else if( document.all )
        window.external.AddFavorite( url, title);
    else
        alert("添加收藏失败,使用组合快捷键'Ctrl+D'添加!");
}
