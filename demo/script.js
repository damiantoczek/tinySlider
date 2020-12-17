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

document.onreadystatechange = function(){
  let domState = document.readyState;

  if(domState === 'interactive'){
    slider.init();
    slider.root.querySelector('.controlls .next').addEventListener('click', () => {
      slider.next();
    });
    slider.root.querySelector('.controlls .prev').addEventListener('click', () => {
      slider.prev();
    });
  }else if(domState === 'complete'){
    document.body.classList.remove('preload');

    slider.interval(2000);
  }
}
