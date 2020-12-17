function Slider(root, images){
  this.index = 0;
  this.images = images;

  this.prev = function(){
    if(this.index > 0){
      this.index--;
      this.toView();
    }
  };

  this.next = function(){
    if(this.index < this.items.children.length-1){
      this.index++;
      this.toView();
      // Preload next item.
      if(this.items.children.length < this.images.length){
        let src = this.images[this.index+1];
        this.createItem(src);
      }
    }else{
      // Go back to start.
      this.index = 0;
      this.toView();
    }
  };

  this.createItem = function(src){
    let item = document.createElement('img');
    item.classList.add('item');
    item.src = src;
    this.items.appendChild(item);

    return this;
  };

  this.toView = function(){
    let item = this.items.children[this.index]
    item.scrollIntoView({behavior: 'smooth'});
    // Increase the progress value for each image.
    this.progress.value = this.index+1;

    return item;
  };

  this.interval = function(delay){
    // Add initial interval
    this.intervalId = window.setInterval(() => slider.next(), delay)

    // Start interval when mouse isn't over.
    this.root.addEventListener('mouseout', () => {
      if(this.intervalId === null){
        this.intervalId = window.setInterval(() => slider.next(), delay);
      }
    });

    // Stop the interval when the mouse is over.
    this.root.addEventListener('mouseover', () => {
      window.clearInterval(this.intervalId)
      this.intervalId = null;
    });
  };

  this.init = function(){
    this.root = document.querySelector(root);
    this.items = this.root.querySelector('.items');
    this.progress = this.root.querySelector('.controlls progress');
    this.scroller = this.root.querySelector('.scroller');
    // Set the progress values.
    this.progress.value = 1;
    this.progress.max = this.images.length;
    // Create first initial image and preload one.
    this.createItem(this.images[0]);
    this.createItem(this.images[1]);
    // Scroll to beginning, using toView() with index 0 doesn't work.
    this.scroller.scrollTo(0,0);
  };
}
