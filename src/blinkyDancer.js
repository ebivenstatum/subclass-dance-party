/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};*/

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

 };

 makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
 makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

 makeBlinkyDancer.prototype.step = function() {

   makeDancer.prototype.step.call(this);

   this.$node.toggle();

 };

 makeBlinkyDancer.prototype.lineUp = function() {

  this.$node.css({'left': '0'});

};

makeBlinkyDancer.prototype.change = function() {

  var borderColor = 'purple';
  var borderSize = '20px';

  var styleSettings = {
    'border-color': borderColor,
    'border-width': borderSize,
    'border-radius': '100px'
  };

  this.$node.css(styleSettings);

 };