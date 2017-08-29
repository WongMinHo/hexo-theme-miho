(function (w, d) {
    var body = $('body, html'),
        toc = $("#post-toc"),
        headerMenu = $("#header-menu"),
        even = ('ontouchstart' in w && /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)) ? 'touchstart' : 'click',
        backTop = $("#sidebar-top"),
        search = $('#sidebar-search'),
        searchWrap = $('.search-wrap'),
        tags = $("#sidebar-menu-box-tags"),
        categories = $("#sidebar-menu-box-categories"),
        sideMenuBox = $("#sidebar-menu-box"),
        sideMenuBoxIsOpen = true,
        clientHeight = d.documentElement.clientHeight; //获取可视区的高度
    var Blog = {
        showHeaderMenu: function (scrollTop) {
            if (scrollTop > clientHeight * 0.1) {
                headerMenu.removeClass("slide-down");
                headerMenu.addClass("slide-up");
            } else {
                headerMenu.removeClass("slide-up");
                headerMenu.addClass("slide-down");
            }
        },
        showBackTop: function (scrollTop) {
            backTop.css('display', (scrollTop > clientHeight) ? "block" : "none");
        },
        setTags: function () {
            var labels = tags.find("a");
            labels.css({"font-size" : "15px"});
            for(var i = 0, len = labels.length; i < len; i++){
                var num = labels.eq(i).html().length % 5 +1;
                labels[i].className = "";
                labels.eq(i).addClass("color"+num);
            }
        },
        setCategories: function () {
            var labels = categories.find("a");
            labels.css({"font-size" : "15px"});
            for(var i = 0, len = labels.length; i < len; i++){
                var num = labels.eq(i).html().length % 5 +1;
                labels[i].className = "";
                labels.eq(i).addClass("color"+num);
            }
        },
        showSidebarBox: function (status) {
            if (status) {
                sideMenuBox.animate({
                    height:'162px',
                    opacity:'1'
                }, 300);
            } else {
                sideMenuBox.animate({
                    height:'0px',
                    opacity:'0'
                }, 300);
            }
        },
        showToc: function (scrollTop) {
            if (scrollTop / clientHeight >= 0.4) {
                toc.removeClass("post-toc-top");
                toc.addClass("post-toc-not-top");
            } else {
                toc.removeClass("post-toc-not-top");
                toc.addClass("post-toc-top");
            }
        }
    };

    //初始化搜索数据
    initSearch();
    //搜索点击事件
    search.click(function () {
        searchWrap.css('top','50%');
        searchWrap.css('marginTop','-80px');
        searchWrap.css('opacity','1');
    });
    $('.search-close').click(function(){
        searchWrap.css('top','0');
        searchWrap.css('opacity','0');
        $('#search-container').removeClass('search-container-show');
    });

    //tags | 标签
    Blog.setTags();
    //categories | 类别
    Blog.setCategories();
    //类别展示
    $("#sidebar-category").click(function (e) {
        tags.css('display', 'none');
        categories.css('display', 'block');
        e.stopPropagation();
        if (sideMenuBoxIsOpen) {
            Blog.showSidebarBox(true);
            sideMenuBoxIsOpen = false;
        } else {
            Blog.showSidebarBox(false);
            sideMenuBoxIsOpen = true;
        }
    });
    //标签展示
    $("#sidebar-tag").click(function (e) {
        tags.css('display', 'block');
        categories.css('display', 'none');
        e.stopPropagation();
        if (sideMenuBoxIsOpen) {
            Blog.showSidebarBox(true);
            sideMenuBoxIsOpen = false;
        } else {
            Blog.showSidebarBox(false);
            sideMenuBoxIsOpen = true;
        }
    });
    //点击菜单区域不能关闭菜单
    sideMenuBox.click(function (e) {
        e.stopPropagation();
        if (sideMenuBoxIsOpen) {
            return false;
        }
    });
    //点击close按钮关闭菜单
    $(".sidebar-menu-box-close").click(function() {
        Blog.showSidebarBox(false);
        sideMenuBoxIsOpen = true;
    });

    //回到顶部点击事件
    backTop.click(function () {
        body.animate({
            scrollTop: 0
        }, 500);
    });

    //获取滚动事件
    d.addEventListener('scroll', function () {
        var scrollTop = d.documentElement.scrollTop || d.body.scrollTop;
        Blog.showHeaderMenu(scrollTop);
        Blog.showBackTop(scrollTop);
        Blog.showToc(scrollTop);
    }, false);
    //body
    body.click(function () {
        Blog.showSidebarBox(false);
        sideMenuBoxIsOpen = true;
    });
})(window, document);
