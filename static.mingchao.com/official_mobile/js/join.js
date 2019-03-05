/** 加入我们 **/
var topNav = [];
var bottomNav = [];
var navs = $('.job-nav');
navs.each(function (i) {
    if (i > 0) {
        bottomNav.unshift($(this));
    }  else {
        topNav.push($(this));
    }
});
// 点击 nav
navs.on('click', function () {
    var $this = $(this);
    var icon = $this.children('span');
    if (icon.hasClass('join-up-icon')) {
        return false;
    }
    $(window).scrollTop(0);
    scrollHandler();
    topNav = [];
    bottomNav = [];
    $('.job-nav span').addClass('join-down-icon').removeClass('join-up-icon');
    icon.addClass('join-up-icon').removeClass('join-down-icon');
    var flag = true;
    navs.each(function () {
        var nav = $(this);
        var listId = nav.attr('content-id');
        if (flag) {
            topNav.push(nav);
        } else {
            bottomNav.unshift(nav);
        }
        if (listId === $this.attr('content-id')) {
            $('#' + listId).removeClass('hidden');
            flag = false;
        } else {
            $('#' + listId).addClass('hidden');
        }
        nav.removeClass('job-nav-fixed').removeClass('job-nav-fixed-bottom');
    });
    scrollHandler();
});

// 节流函数
function throttle(method, context){
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    },100);
}

// 滚动条滚动处理
$(window).on('scroll', function () {
    throttle(scrollHandler, window);
});

// 判断当前页面位置，决定选项卡是否悬浮
var qaHeight = $('.join-qa').height();
var footerHeight = $('footer').height();
function scrollHandler() {
    var windowTop    = $(window).scrollTop();
    var bodyHeight   = $('body').height();
    var windowHeight = $(window).height();
    if (windowTop > qaHeight) {
        for (var i in topNav) {
            topNav[i].addClass('job-nav-fixed');
            topNav[i].attr('style', 'top:' + (15.5 + 11.7 * i) + 'vw');
        }
    } else {
        for (var i in topNav) {
            topNav[i].removeClass('job-nav-fixed');
        }
    }
    if (bottomNav.length > 0 && (windowTop + windowHeight) < (bodyHeight - footerHeight)) {
        for (var i in bottomNav) {
            bottomNav[i].addClass('job-nav-fixed-bottom');
            bottomNav[i].attr('style', 'bottom:' + 11.7 * i + 'vw');
        }
    } else {
        for (var i in bottomNav) {
            bottomNav[i].removeClass('job-nav-fixed-bottom');
        }
    }
}

// 加载页面或页面 hash 变更后处理
var jobDetailHandler = function () {
    var hash = location.hash.slice(1) || '/';
    if (hash !== '/' && $('#' + hash).length !== 0) { // 职位存在
        $('.all-jobs').addClass('none');
        $('#' + hash).removeClass('none');
        $('.site-title').text($('#' + hash).attr('job-type'));
    } else {
        $('.all-jobs').removeClass('none');
        $('.detail').addClass('none');
        $('.site-title').text('加入我们');
    }
    $(window).scrollTop(0);
    scrollHandler();
};
$(window).on('load', jobDetailHandler);
$(window).on('hashchange', jobDetailHandler);

// 点击立即投递按钮
function openJoin() {
    layer.open({
        type: 1,
        content: $('.submit-tips').html(),
        style: 'position:fixed; top:20vw; left:10%; width:80%'
    });
}

// 复制投递邮箱到剪切板
var clipboard = new ClipboardJS('.copy-email');
clipboard.on('success', function () {
    layer.open({
        content: '投递邮箱已经复制到剪贴板啦！'
        ,skin: 'msg'
        ,time: 3
    });
});

// 文章内容处理
$('.job-description p').each(function () {
    var text = $(this).text().trim();
    if (text === '') {
        // 清除空行
        $(this).remove();
    } else if (text === '职位描述：' || text === '职位要求：' || text === '优先条件：') {
        // 对“职位描述”、“职位要求”和“优先条件”加入 CSS 样式
        $(this).addClass('job-subtitle');
    }
});