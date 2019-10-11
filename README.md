![AsyncBee logo](https://i.imgur.com/vu55wrS.png)
Most simple way to load JS and CSS resources asynchronously and boost page insight speed

# Get started
## 1) Download and install AsyncBee
First of all we need to download `AsyncBee.js` file from this GitHub repository or if you don't want to include Swiper files in your project, you may use it from CDN :
`````Html
<script src='https://cdn.jsdelivr.net/gh/Niyko/AsyncBee/AsyncBee.js'></script>`
`````
## 2) Include AsyncBee File To Website
After that we need to include AsyncBee.js files to our website/app. In your html file:
`````Html
  <!DOCTYPE html>
   <html lang="en">
   <head>
       ...
       <script src="path/to/AsyncBee.js"></script>
   </head>
   <body>
       ...
   </body>
   </html>
`````
## 3) Replace all your `src` and `href` attribute
Replace all your `src` attribute in <script> tag with `asyncbee` and replace the `href` attribute in <link> tag with `asyncbee` for example if your website contains script tags like this:
`````Html
  <script src='path/to/main.js'></script>
  <script src='path/to/bootstrap.js'></script>
`````
   replace the `src` attribute with the `asyncbee` atttribute like given below
`````Html
  <script asyncbee='path/to/main.js'></script>
  <script asyncbee='path/to/bootstrap.js'></script>
`````
## 4) Initialize AsyncBee
Finally, we need to initialize AsyncBee in JS, To initilize add this below code in the inline script or in script file that is included in the very end of body (right before closing </body> tag):
`````Javascript
myasyncbee = new asyncBee();
`````
# Options
All the options aviablabe in the myAsyncBee() funtion are given below and an example of its usage is also given below.

| Option | Description | Example Value |
| --- | --- | --- |
| loadingcolor | color of the loading spinner | #ff0000 or rgb(255,0,0) |
| loadingbgcolor | color of the loading background | #ff0000 or rgb(255,0,0) |
| loading | disable the default loading screen | true or false |
| ondone | is a callback and called when finished loading all resources | function (){ alert("all loaded"); } |

`````Javascript
myasyncbee = new asyncBee({
    loadingcolor: '#000000',
    loadingbgcolor: 'rgb(255, 181, 46)',
    ondone: function (){ 
        //alert("hello");
    }
});
`````
# License
PHPGit is licensed under the [GNU GENERAL PUBLIC LICENSE](https://github.com/Niyko/AsyncBee/blob/master/LICENSE).

