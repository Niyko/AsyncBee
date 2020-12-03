![AsyncBee logo](https://i.imgur.com/3id6Zro.png)
Most simple way to load Javascript, images and CSS resources asynchronously and boost page insight speed and increase the website's SEO scores. Just adding the `AsyncBee.js` file and changing the attributes will boost the Google's page insight speed from any score to 95 ~ 100. AsyncBee delays the resource to load up and synchronously loads the Javascript and other resource is right order without making any dependency errors. AsyncBee is very flexible and comes with a prebuild loading animation which can be fully customized.

# Get started
## 1) Add Jquery to the website
You can use the Jquery CDN :
`````Html
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
`````
## 2) Download and install AsyncBee
First of all we need to download `AsyncBee.js` file from this GitHub repository or if you don't want to include files in your project, you may use it from CDN :
`````Html
<script src='https://cdn.jsdelivr.net/gh/Niyko/AsyncBee/AsyncBee.js'></script>
`````
## 3) Include AsyncBee File To Website
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
## 4) Replace all your `src` and `href` attribute
Replace all your `src` attribute in <script> tag with `asyncbee` and replace the `href` attribute in <link> tag with `asyncbee`. If you want to load the images asynchronously too, you can replace the `src` attribute in <img> tag with `asyncbee`.
for example if your website contains script tags like this:
`````Html
  <script src='path/to/main.js'></script>
  <link href='path/to/bootstrap.css'></link>
  <img src='path/to/image.jpg'>
`````
   replace the `src` attribute with the `asyncbee` atttribute like given below
`````Html
  <script asyncbee='path/to/main.js'></script>
  <link asyncbee='path/to/bootstrap.css'></link>
  <img asyncbee='path/to/image.jpg'>
`````
## 4) Initialize AsyncBee
Finally, we need to initialize AsyncBee in JS, To initilize add this below code in the inline script or in script file that is included in the very end of body (right before closing </body> tag):
`````Javascript
myasyncbee = new asyncBee();
`````
# Options
All the options aviablabe in the myAsyncBee() funtion are given below and an example of its usage is also given below. All the options are optional.

| Option | Description | Value Type | Example Value |
| --- | --- | --- | --- |
| loadingcolor | color of the loading spinner | String | #ff0000 or rgb(255,0,0) |
| loadingbgcolor | color of the loading background | String | #ff0000 or rgb(255,0,0) |
| loading | disable the default loading screen | Boolean | true or false |
| ondone | is a callback and called when finished loading all resources | Function | function (){ alert("all loaded"); } |
| loadingtime | Time delay for loading the resources and given in `Millisec` | Int | 5000 |

Example usage of options:
`````Javascript
myasyncbee = new asyncBee({
    loadingcolor: '#000000',
    loadingbgcolor: 'rgb(255, 181, 46)',
    ondone: function (){ 
        alert("hello");
    }
});
`````
# License
AsyncBee is licensed under the [GNU GENERAL PUBLIC LICENSE](https://github.com/Niyko/AsyncBee/blob/master/LICENSE).

