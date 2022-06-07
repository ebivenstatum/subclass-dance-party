var makeJumpyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css({'border-color': 'blue', 'height': '20px', 'width': '20px'});

 };

 makeJumpyDancer.prototype = Object.create(makeDancer.prototype);
 makeBlinkyDancer.prototype.constructor = makeJumpyDancer;

 makeJumpyDancer.prototype.step = function() {

   makeDancer.prototype.step.call(this);

   this.jump();

 };

 makeJumpyDancer.prototype.jump = function() {

  var newTop = this.top - 50;
  var styleSettings = {
    top: newTop,
  };

  this.$node.animate(styleSettings, 1000, this.fall());

 }

 makeJumpyDancer.prototype.fall = function() {

  var newTop = this.top + 50;
  var styleSettings = {
    top: newTop,
  };

  this.$node.animate(styleSettings);


 }

 makeJumpyDancer.prototype.lineUp = function() {

  this.$node.css({'left': '0px'});

};
