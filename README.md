[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fb11e2e1d7554469853708d897a49dae)](https://www.codacy.com/app/ankitjain28may77/autoscroll-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ankitjain28may/autoscroll.js&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dt/autoscroll.js.svg)](https://www.npmjs.com/package/autoscroll.js)
[![Gitter](https://badges.gitter.im/ankitjain28may/autoscroll.js.svg)](https://gitter.im/ankitjain28may/autoscroll.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# autoscroll.js

>Auto Scroll is a Jquery plugin which is used to auto-scroll your content smoothly .
It is less than 1KB when minified.


## How To use Auto Scroll

It is very easy to install, just copy and paste the autoscroll.js in your js root folder and then initialize its path
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

 <script src="path/to/autoscroll.js"></script>
</head>
```
_** Dependency : It depends on jquery. So initialize jquery before autoscroll.js**_

# Download autoscroll.js
## Using npm

```
npm install autoscroll.js
```

## Install using bower

```
bower install autoscroll.js
```


# General Notes

## Initialize
### With jQuery

```js
$('element').scroller();
```

### With vanilla JavaScript

```js
var scroll = new Scroller('{"element" : element }');
```

### With HTML
Add a `data-config` attribute to your element and a class `scroller`. Options can be set in JSON in the value.

``` html
<div class="scroller" id="id-1" data-config='{ "amount": 150, "delay": 1500 }'>
  <div class="item"></div>
  <div class="item"></div>
  ...
</div>
```
Note: element can be id or class or any html tag

## Default options
```
{"amount" : 100 , "delay" : 2000, "direction" : "vertical" } //2000ms ,100px and vertical direction.
```

## Add your options
you optionally can set the scroll direction with `horizontal` or `vertical` in direction argument
```
{"amount" : 200 , "delay" : 1500 , "direction" : "horizontal" }
```

# Example
for a div tag having id named "id-1"
```
<div id="id-1"></div>
```
you can initialize it like this
```
$("#id-1").scroller('{"amount" : 150, "delay" : 1500 }');
```
OR
```
var scroll = new Scroller('{"element" : "#id-1", "amount" : 150, "delay" : 1500 }');
```
OR

By using HTML
``` html
<div class="scroller" id="id-1" data-config='{ "amount": 150, "delay": 1500 }'>
  <div class="item"></div>
  <div class="item"></div>
  ...
</div>
```
# License
Copyright (c) 2016 Ankit Jain - Released under the MIT License

Run this script in your browser...
Enjoy Cheers !!