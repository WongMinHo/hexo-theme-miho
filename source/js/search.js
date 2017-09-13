function initSearch() {
    var keyInput = $('#keywords'),
        back = $('#back'),
        searchContainer = $('#search-container'),
        searchResult = $('#search-result'),
        searchTpl = $('#search-tpl').html(),
        JSON_DATA = '/content.json?v=' + (+ new Date()),
        searchData;

    function loadData(success) {
        if (! searchData) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', JSON_DATA, true);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    var res = JSON.parse(this.response||this.responseText);
                    searchData = res instanceof Array ? res : res.posts;
                    success(searchData);
                } else {
                    console.error(this.statusText);
                }
            };
            xhr.onerror = function () {
                console.error(this.statusText);
            };
            xhr.send();
        } else {
            success(searchData);
        }
    }

    function tpl(html, data) {
        return html.replace(/\{\w+\}/g, function (str) {
            var prop = str.replace(/\{|\}/g, '');
            return data[prop] || '';
        });
    }

    function render(data) {
        var html = '';
        if (data.length) {
            html = data.map(function (post) {
                return tpl(searchTpl, {
                    title: post.title,
                    url: (window.mihoConfig.root + '/' + post.path)
                });
            }).join('');
        } else {
            html = '<li class="search-result-item-tips"><p>No Result found!</p></li>';
        }
        searchResult.html(html);
        containerDisplay(true);
    }
    function containerDisplay(status) {
        if (status) {
            searchContainer.addClass('search-container-show')
        } else {
            searchContainer.removeClass('search-container-show')
        }
    }

    function search(e) {
        var keywords = this.value.trim().toLowerCase();
        if (! keywords) {
            containerDisplay(false);
            return;
        }

        loadData(function (items) {
            var results = [];
            items.forEach( function(item) {
                if (item.title.toLowerCase().indexOf(keywords) > -1) {
                    results.push(item);
                }
            });
            render(results);
        });

        e.preventDefault();
    }

    keyInput.bind('input propertychange', search);
};
