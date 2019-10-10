![AsyncBee logo](https://i.imgur.com/vu55wrS.png)
Most simple way to load JS and CSS resources asynchronously and boost page insight speed

# Get started
1) Download the `asyncbee.js` from this Github repo and put it in your websites's folder,
   or use the CDN ``
2) Add the `asyncbee.js` file to your webpage's head section
`````Html
  <script src='path/to/asyncbee.js'></script>
`````
   or if you are using CDN, Use this
`````Html
  <script src='path/to/asyncbee.js'></script>
`````
3) Replace all your `src` attribute in <script> tag with `asyncbee`, for example if your website contains script tags like this
`````Html
  <script src='path/to/main.js'></script>
  <script src='path/to/bootstrap.js'></script>
`````
   replace the `src` attribute with the `asyncbee` atttribute like given below
`````Html
  <script asyncfly='path/to/main.js'></script>
  <script asyncfly='path/to/bootstrap.js'></script>
`````
   

