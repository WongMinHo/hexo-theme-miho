window.onload = function() {
    setTags();
    initSearch();
    var backToTop = document.getElementById("sidebar-top"); //获取用于设置回到顶部功能的按钮
    var clientHeight =  document.documentElement.clientHeight; //获取可视区的高度
    var speed = 200 / (1000 / 60); /*声明控制滚动速度的变量*/
    // 添加全局的滚动事件
    window.onscroll = function () {
        //获取滚动条到顶部的距离，即滚动条滚动了的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //若滚动条到顶部的距离大于可视区的高度，即滚动的距离超过一屏，则显示按钮,反之，则隐藏。
        backToTop.style.display = (scrollTop > clientHeight) ? "block" : "none";
    }

    //实现加速滚动的函数
    function returnTop() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop - speed;
            speed += 80;   //增加步长，以实现加速滚动的效果
            setTimeout(returnTop, 10); //每隔10ms，滚动一次
        }
    }
    //top
    $("#sidebar-top").click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    })

    //search
    $('#sidebar-search').click(function(){
        $('.search-wrap').css('top','50%');
        $('.search-wrap').css('marginTop','-80px');
        $('.search-wrap').css('opacity','1');
    });
    $('.search-close').click(function(){
        $('.search-wrap').css('top','0');
        $('.search-wrap').css('opacity','0');
        $('#search-container').removeClass('search-container-show');
    });
}
var isOpen = false;
function setTags(){
    var tags = $("#sidebar-menu-box-tags a");
    tags.css({"font-size" : "15px"});
    for(var i = 0, len = tags.length; i < len; i++){
        var num = tags.eq(i).html().length % 5 +1;
        tags[i].className = "";
        tags.eq(i).addClass("color"+num);
    }
}
function animateShow(){
	$(".sidebar-menu-box").animate({
		height:'162px',
		opacity:'1',
	},300);
}
function animateHide(){
	$(".sidebar-menu-box").animate({
		height:'0px',
		opacity:'0',
	},300);
}
//点击非菜单区域关闭菜单
$('body').on('click',function () {
	if (isOpen) {
		animateHide();
		isOpen = false;
		return;
	}
});

// 点击按钮区打开菜单
$(".sidebar-menu").on('click', function (e) {
	e.stopPropagation();
	if (isOpen) {
		animateHide();
		isOpen = false;
		return;
	}
	isOpen = true;
	animateShow();
});

//点击菜单区域不能关闭菜单
$(".sidebar-menu-box").on('click',function(e){
	e.stopPropagation();
	if (isOpen)  return;
});

//点击close按钮关闭菜单
$(".sidebar-menu-box-close").click(function(){
	if(isOpen){
		animateHide();
		isOpen = false;
		return;
	}
});