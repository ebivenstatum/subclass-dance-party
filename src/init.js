$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    console.log(dancer);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    var storage = [];
    for (var i = 0; i < window.dancers.length; i++) {
      var dancerLeft = window.dancers[i].left;
      var dancerTop = window.dancers[i].top;
      for (j = 0; j < window.dancers.length; j++) {
        var secondDancerLeft = window.dancers[j].left;
        var secondDancerTop = window.dancers[j].top;
        var distance = Math.sqrt(Math.pow(secondDancerLeft - dancerLeft, 2) + Math.pow(secondDancerLeft - dancerLeft, 2));
        if (distance > 0 && distance < 155) {

          var flashYellow = function() {

            window.dancers[i].$node.css({'border-color': 'yellow'});
            window.dancers[j].$node.css({'border-color': 'yellow'})
            window.dancers[i].$node.toggle();
            window.dancers[j].$node.toggle();


          };


          var styleSettings = {
            'border-color': 'red'
          };

          window.dancers[i].$node.animate(styleSettings, 1000, flashYellow);

        }
      }
    }

  });

  $('.addLineUpButton').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

  });


  $('body').on('mouseover', '.dancer', function() {

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].change();
    }

  });


});

