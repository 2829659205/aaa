$(document).ready(function(){
	ads();
    var weibo_href=document.getElementById("weibo-href");
    var weibo_head='weibo.',weibo_main='com';
    if (weibo_href != undefined){
        weibo_href.href="http:///"+weibo_head+weibo_main+"/mingchaonetwork";
    }

    $("#page-jump-btu").click(function() {
//      pagesJump();
    });

    $("#wechat").hover(function(){
    	$("#cleft_box").show();
    },function(){
    	$("#cleft_box").hide();
    });

    $("#weixin").hover(function(){
    	$("#weixin_box").show();
    },function(){
    	$("#weixin_box").hide();
    });

    $('#inner_btn').click(function(){
      	if( parseInt($("#weixin_box").width())==36){
            $("#weixin_box").animate({ width: "266px"}, 700 ,function(){
            	$("#inner_btn").css('background-image',"url(http://static.mingchao.com/official/images/rtitleico-close.png)");
            });

		}else{
            $("#weixin_box").animate({ width: "36px"}, 700 ,function(){
            	$("#inner_btn").css('background-image',"url(http://static.mingchao.com/official/images/rtitleico.png)");
            });

		}
   });

});

function ads(){
	try{
		if(window.console&&window.console.log){
		console.log("你热爱游戏吗？想打造你心目中的游戏吗？\n无论你是低调的技术大牛，\n还是机智的点子王，\n只要你想，就有可能！\n快来吧，一起“穿越”到明朝与众多大神一起创造属于你的游戏！\n");
		console.log("请将简历发送至 hr@mingchao.com（ 邮件名称请以'姓名+应聘职位'方式发送）");
		console.log("社会招聘介绍：http://www.mingchao.com/jobs/article/85.html?t=123");
		console.log("校园招聘介绍：http://www.mingchao.com/cam_index.html");
		}
		}catch(e){}
}

// 本方法需要jquery支持
function MM_showHideLayers(id1,id2,v){
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
