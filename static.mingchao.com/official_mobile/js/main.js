/** 共用函数 **/
function openMenu() {
    layer.open({
        type: 1,
        content: $('.menu').html(),
        anim: 'right',
        style: 'position:fixed; top:0; left:0; width:64%;'
    });
}
function closeLayer() {
    layer.closeAll();
}
function openWeChat() {
    layer.open({
        type: 1,
        content: '<img src="../images/qr.jpg"/*tpa=http://static.mingchao.com/official_mobile/images/qr.jpg*/ width="100%" alt="qr code">',
        style: 'position:fixed; top:25%; left:25%; width:50%;'
    });
}
function redirect(url) {
    window.location.href=url;
}
// 横屏提示
var screenTips = function () {
    var win = $(window);
    var isOpen = false;
    if (win.height() / win.width() <= 1 && !isOpen) {
        isOpen = true;
        layer.open({
            content: '请竖屏浏览获得最佳体验',
            btn: '我知道了',
            shadeClose: false,
            yes: function(index){
                isOpen = false;
                layer.close(index);
            },
        });
    }
};
$(window).on('resize', screenTips);
$(window).on('load', screenTips);

/** 非微信浏览器则隐藏微信按钮 **/
(function () {
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) != 'micromessenger') {
        $('#bottom').addClass('hidden');
    }
})();

/** 新闻动态 **/
(function ($) {
    var urlRegex = /url\(['"]*(.*?)['"]*\)/g;
    $.fn.getBackgroundSize = function (callback) {
        this.each(function () {
            // 背景图片元素
            var img = $(this);
            // new 一个 image 元素作为模板
            var tpl = new Image();
            // 根据正则获取 css 背景图地址并设置为模板图片的 src
            tpl.src = img.css('background-image').replace(urlRegex, '$1');
            // 图片加载完毕后执行回调函数，传递背景图片元素对象,图片的原宽度和原高度
            tpl.onload = function () {
                callback(img, tpl.naturalWidth, tpl.naturalHeight);
                tpl = null;
            }
        });
        return this;
    }
})(Zepto);
$('.list-thumb').getBackgroundSize(function(img, width, height){
    // 盒子宽高
    var boxHeight = img.height();
    var boxWidth  = img.width();
    // 盒子宽高比
    var boxScale = boxWidth / boxHeight;
    // 图片宽高比
    var imgScale = width / height;
    // 背景图片偏移量
    var offset = 0;
    if (imgScale === boxScale) {
        img.css('background-position', '0 0');
        img.css('background-size', '100% 100%');
    } else if (imgScale > boxScale) {
        // 计算按高度缩放后图片宽度
        width = width * (boxHeight / height);
        // 向左移 (图片宽度减容器宽度 ÷ 2) 单位，即显示为图片中心区域
        offset = String(-(width - boxWidth) / 2);
        img.css('background-position', offset + 'px');
    } else {
        // 直接按宽度缩放显示，没有偏移直接从图片顶部开始显示
        img.css('background-position', '0 0');
        img.css('background-size', '100%');
    }
});