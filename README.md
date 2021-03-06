# tinySlider
Simple image slider using VanillaJS, including full Demo.
It preloads next image to be gentle for mobile devices.

![tinySlider Preview](https://raw.githubusercontent.com/damiantoczek/tinySlider/main/tinySlider.png)


# Setup
```javascript
const slider = new Slider('div.slider', [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_1.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_2.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_3.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_4.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_5.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_6.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_7.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_8.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_9.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/231648/MB_CLA_10.jpg"
  ]);
```

Slider must be initiated to work, it was made to be used with window.readyState.
```javascript
slider.init();
```

# Recommended
```javascript
document.onreadystatechange = function(){
  let domState = document.readyState;

  if(domState === 'interactive'){
    // After the HTML has been parsed and body elements are available.
    slider.init();
  }else if(domState === 'complete'){
    // This is my preference because it's more important for the content to be loaded first.
    slider.interval(2000);
  }
}
```
