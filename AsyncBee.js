/*===================================================================
                                   ____            
         /\                        |  _ \           
        /  \   ___ _   _ _ __   ___| |_) | ___  ___ 
       / /\ \ / __| | | | '_ \ / __|  _ < / _ \/ _ \
      / ____ \\__ \ |_| | | | | (__| |_) |  __/  __/
     /_/    \_\___/\__, |_| |_|\___|____/ \___|\___|
                    __/ |                           
                   |___/                           
                   
MADE WITH LOVE FROM NIYKO, CHECKOUT MORE FROM ME ON GITHUB.COM/NIYKO
=====================================================================*/

var asyncbee_js_count = 0;
var asyncbee_show_loading = true;
var asyncbee_loading_color = "#3498db";
var asyncbee_loading_bg = "#ffffff";
var asyncbee_loading_time = 5000;
var asyncbee_on_done = function () { };

if(!window.jQuery) {
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);
}

function asyncBee(var_async={}){
    if(typeof var_async.ondone!=='undefined') asyncbee_on_done = var_async.ondone;
    if(typeof var_async.loadingcolor!=='undefined') asyncbee_loading_color = var_async.loadingcolor;
    if(typeof var_async.loadingbgcolor!=='undefined') asyncbee_loading_bg = var_async.loadingbgcolor;
    if(typeof var_async.loadingtime!=='undefined') asyncbee_loading_time = var_async.loadingtime;
    if(var_async.loading==false) asyncbee_show_loading = false;
    if(asyncbee_show_loading){
        $("head").append(`
            <style>
                .asyncbee_loading_container{
                    width: 100%;
                    height: 100vh;
                    background: `+asyncbee_loading_bg+`;
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
                
                .asyncbee_loading_container div {
                    border: 3px solid rgba(0,0,0,0);
                    border-top: 3px solid `+asyncbee_loading_color+`;
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
        $("body").append(`<div class="asyncbee_loading_container"><div></div></div>`);
    }
    setTimeout("asyncbee_init()", asyncbee_loading_time);
}
        
function asyncbee_init(){
    asyncbee_js = [];
    asyncbee_css = [];
    $("img").each(function(index) {
        var temp = $(this).attr("asyncbee");
        if(temp!==undefined) {
            $(this).attr("src", $(this).attr("asyncbee"));
        }
    });
    $("script").each(function(index) {
        var temp = $(this).attr("asyncbee");
        if(temp!==undefined) asyncbee_js.push($(this).attr("asyncbee"));
    });
    $("link").each(function(index) {
        var temp = $(this).attr("asyncbee");
        if(temp!==undefined) asyncbee_css.push($(this).attr("asyncbee"));
    });
    asyncbee_css.forEach(function (asyncbee_css_each){
        $('head').append('<link rel="stylesheet" href="'+asyncbee_css_each+'" type="text/css" />');
    });
    asyncbee_load();
}

function asyncbee_load(){
    if(asyncbee_js_count<=(asyncbee_js.length-1)){
        $.getScript(asyncbee_js[asyncbee_js_count], function(){
            asyncbee_js_count++;
            if(asyncbee_js_count>(asyncbee_js.length-1)){
                if(asyncbee_show_loading) $(".asyncbee_loading_container").fadeOut();
                asyncbee_on_done();
            }
            asyncbee_load();
        });
    }
}
