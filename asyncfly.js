var asyncfly_js_count = 0;
var asyncfly_show_loading = true;
var asyncfly_loading_color = "#3498db";
var asyncfly_loading_bg = "#ffffff";
var asyncfly_on_done = function () { };

if(!window.jQuery) {
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}

function Asyncfly(var_async){
    if(typeof var_async.ondone!=='undefined') asyncfly_on_done = var_async.ondone;
    if(typeof var_async.loadingcolor!=='undefined') asyncfly_loading_color = var_async.loadingcolor;
    if(typeof var_async.loadingbgcolor!=='undefined') asyncfly_loading_bg = var_async.loadingbgcolor;
    if(var_async.loading==false) asyncfly_show_loading = false;
    if(asyncfly_show_loading){
        $("head").append(`
            <style>
                .asyncfly_loading_container{
                    width: 100%;
                    height: 100vh;
                    background: `+asyncfly_loading_bg+`;
                    position: fixed;
                    top: 0px;
                    left: 0px;
                    z-index: 9999;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    -webkit-justify-content: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    -webkit-align-items: center;
                    align-items: center;
                }
                
                .asyncfly_loading_container div {
                    border: 3px solid rgba(0,0,0,0);
                    border-top: 3px solid `+asyncfly_loading_color+`;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    animation: spin 1s linear infinite;
                }
                    
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `);
        $("body").append(`<div class="asyncfly_loading_container"><div></div></div>`);
    }
    setTimeout("asyncfly_init()", 5000);
}
        
function asyncfly_init(){
    asyncfly_js = [];
    asyncfly_css = [];
    $("script").each(function(index) {
        var temp = $(this).attr("asyncfly");
        if(temp!==undefined) asyncfly_js.push($(this).attr("asyncfly"));
    });
    $("link").each(function(index) {
        var temp = $(this).attr("asyncfly");
        if(temp!==undefined) asyncfly_css.push($(this).attr("asyncfly"));
    });
    asyncfly_css.forEach(function (asyncfly_css_each){
        $('head').append('<link rel="stylesheet" href="'+asyncfly_css_each+'" type="text/css" />');
    });
    asyncfly_load();
}

function asyncfly_load(){
    if(asyncfly_js_count<=(asyncfly_js.length-1)){
        $.getScript(asyncfly_js[asyncfly_js_count], function(){
            asyncfly_js_count++;
            if(asyncfly_js_count>(asyncfly_js.length-1)){
                if(asyncfly_show_loading) $(".asyncfly_loading_container").fadeOut();
                asyncfly_on_done();
            }
            asyncfly_load();
        });
    }
}
