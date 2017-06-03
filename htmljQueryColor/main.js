$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var p = document.getElementsByTagName('p');
  // select all p tags
  //iterate the p tag
  for (var index = 0; index < p.length; index++) {
    var textContent = p[index].innerText.split(' ')
    p[index].innerText = '';
    textContent.forEach(function(word) {
      var span = document.createElement('span');
      span.innerText = word + ' ';
      p[index].appendChild(span);
    });
  }
    // split the p tags innertext
    // iterate through the words in p tag
  // append span with word to p tag



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  //select all span tags
  var spans = document.getElementsByTagName('span');
  var changeColor = function() {
    //randomize colors
      //get options available
      //randomize options
        //iterate through letters randomly
          //add to color
    //loop through span
    //change color of span
    var letters = '0123456789ABCDEF';
    var color = 'color:#'
    for (var colorI = 0; colorI < 6; colorI++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    for (var index = 0; index < spans.length; index++) {
      spans[index].setAttribute('style', color);
    }
    //setInterval
  }
  changeColor();
  setInterval(changeColor, 1000);
    // update attributes
});