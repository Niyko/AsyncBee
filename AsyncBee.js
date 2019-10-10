var AsyncBee_js_count = 0;
var AsyncBee_show_loading = true;
var AsyncBee_loading_color = "#3498db";
var AsyncBee_loading_bg = "#ffffff";
var AsyncBee_on_done = function () { };

if(!window.jQuery) {
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}

function AsyncBee(var_async){
    if(typeof var_async.ondone!=='undefined') AsyncBee_on_done = var_async.ondone;
    if(typeof var_async.loadingcolor!=='undefined') AsyncBee_loading_color = var_async.loadingcolor;
    if(typeof var_async.loadingbgcolor!=='undefined') AsyncBee_loading_bg = var_async.loadingbgcolor;
    if(var_async.loading==false) AsyncBee_show_loading = false;
    if(AsyncBee_show_loading){
        $("head").append(`
            <style>
                .AsyncBee_loading_container{
                    width: 100%;
                    height: 100vh;
                    background: `+AsyncBee_loading_bg+`;
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
                
                .AsyncBee_loading_container div {
                    border: 3px solid rgba(0,0,0,0);
                    border-top: 3px solid `+AsyncBee_loading_color+`;
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
        $("body").append(`<div class="AsyncBee_loading_container"><div></div></div>`);
    }
    setTimeout("AsyncBee_init()", 5000);
}
        
function AsyncBee_init(){
    AsyncBee_js = [];
    AsyncBee_css = [];
    $("script").each(function(index) {
        var temp = $(this).attr("AsyncBee");
        if(temp!==undefined) AsyncBee_js.push($(this).attr("AsyncBee"));
    });
    $("link").each(function(index) {
        var temp = $(this).attr("AsyncBee");
        if(temp!==undefined) AsyncBee_css.push($(this).attr("AsyncBee"));
    });
    AsyncBee_css.forEach(function (AsyncBee_css_each){
        $('head').append('<link rel="stylesheet" href="'+AsyncBee_css_each+'" type="text/css" />');
    });
    AsyncBee_load();
}

function AsyncBee_load(){
    if(AsyncBee_js_count<=(AsyncBee_js.length-1)){
        $.getScript(AsyncBee_js[AsyncBee_js_count], function(){
            AsyncBee_js_count++;
            if(AsyncBee_js_count>(AsyncBee_js.length-1)){
                if(AsyncBee_show_loading) $(".AsyncBee_loading_container").fadeOut();
                AsyncBee_on_done();
            }
            AsyncBee_load();
        });
    }
}
