// NavBar
let over =document.getElementById("over")
function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "220px";
  over.style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  over.style.display = "none";

}
//End Of NavBar

var bar1 = new ProgressBar.Circle(designcircle, {
  color: '#fff',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 3000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: ' rgb(173, 112, 58)', width: 3 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value/10);
    }

  }
});
bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '1rem';
bar1.text.style.fontWeight = '700';
bar1.animate(.72); 
// 
var bar2 = new ProgressBar.Circle(usabilitycircle, {
    color: '#fff',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: ' rgb(233, 224, 103)', width: 3 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value/10);
      }
  
    }
  });
  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar2.text.style.fontSize = '1rem';
  bar2.text.style.fontWeight = '700';
  bar2.animate(.73); 
//   
var bar3 = new ProgressBar.Circle(creativitycircle, {
    color: '#fff',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: ' rgb(20, 129, 111)', width: 3 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value/10);
      }
  
    }
  });
  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar3.text.style.fontSize = '1rem';
  bar3.text.style.fontWeight = '700';
  bar3.animate(.78); 
//    
var bar4 = new ProgressBar.Circle(contentcircle, {
    color: '#fff',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: ' #09c', width: 3 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value/10);
      }
  
    }
  });
  bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar4.text.style.fontSize = '1rem';
  bar4.text.style.fontWeight = '700';
  bar4.animate(.72); 
//   
  
var bar5 = new ProgressBar.Circle(mobiletcircle, {
    color: '#fff',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: ' rgb(67, 187, 121)', width: 3 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value/10);
      }
  
    }
  });
  bar5.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar5.text.style.fontSize = '1rem';
  bar5.text.style.fontWeight = '700';
  bar5.animate(.71); 
  
//   


// var bar6 = new ProgressBar.Circle(reviewcircle, {
//   color: '#333',
//   strokeWidth: 4,
//   trailWidth: 1,
//   easing: 'easeInOut',
//   duration: 3000,
//   text: {
//     autoStyleContainer: false
//   },
//   from: { color: '#aaa', width: 1 },
//   to: { color: ' rgb(67, 187, 121)', width: 3 },
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);
//     var value = Math.round(circle.value() * 100);
//     if (value === 0) {
//       circle.setText('');
//     } else {
//       circle.setText(value/10);
//     }

//   }
// });
// bar6.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// bar6.text.style.fontSize = '1rem';
// bar6.text.style.fontWeight = '700';
// bar6.animate(.71); 