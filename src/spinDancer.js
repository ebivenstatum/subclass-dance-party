var makeSpinDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img id="pikachu" src="pikachu.png" />');
  this.rotate = 0;
  this.$node.css({'height': '100px', 'width': '100px', 'border': 'none', 'transform': this.rotate + 'deg'});

};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeSpinDancer;

makeSpinDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.spin(this.rotate);

};

makeSpinDancer.prototype.spin = function() {

  this.rotate = this.rotate + 20;

  var styleSettings = {
    transform: 'rotate(' + this.rotate + 'deg)'
  };

  this.$node.css(styleSettings);

};

makeSpinDancer.prototype.lineUp = function() {

  this.$node.css({'top': '0px'});

};