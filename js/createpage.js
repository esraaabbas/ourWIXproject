/*------------------------------------------*/
   function text() {
      
      
      var textheading =document.getElementById("textheading").style.display = "block";
      var canvascolor =document.getElementById("canvascolor").style.display = "none";
      var changingfont =document.getElementById("changingfont").style.display = "none";
      var addShape =document.getElementById("addShape").style.display = "none";
    
     
   }

   function color() {
      
    
      var textheading =document.getElementById("textheading").style.display = "none";
      var canvascolor =document.getElementById("canvascolor").style.display = "block";
      var changingfont =document.getElementById("changingfont").style.display = "none";
      var addShape =document.getElementById("addShape").style.display = "none";


     }
       function fontChange() {
      
    
      var textheading =document.getElementById("textheading").style.display = "none";
      var canvascolor =document.getElementById("canvascolor").style.display = "none";
      var changingfont =document.getElementById("changingfont").style.display = "block";
      var addShape =document.getElementById("addShape").style.display = "none";


     }
          function addShape() {
      
    
      var textheading =document.getElementById("textheading").style.display = "none";
      var canvascolor =document.getElementById("canvascolor").style.display = "none";
      var changingfont =document.getElementById("changingfont").style.display = "none";
      var addShape =document.getElementById("addShape").style.display = "block";

      



     }



function redcolor() {


  var candiv = document.getElementById("c").style.backgroundColor = "#dc3545";

}
function yellowcolor() {


  var candiv = document.getElementById("c").style.backgroundColor = "#ffc107";

}
function greencolor() {


  var candiv = document.getElementById("c").style.backgroundColor = "#20c997";

}
function bluecolor() {


  var candiv = document.getElementById("c").style.backgroundColor = "#007bff";

}
function whitecolor() {


  var candiv = document.getElementById("c").style.backgroundColor = "#fff";

}


/*-----------------------------------------*/
function Copy() {
  // clone what are you copying since you
  // may want copy and paste on different moment.
  // and you do not want the changes happened
  // later to reflect on the copy.
  canvas.getActiveObject().clone(function(cloned) {
    _clipboard = cloned;
  });
}

function Paste() {
  // clone again, so you can do multiple copies.
  _clipboard.clone(function(clonedObj) {
    canvas.discardActiveObject();
    clonedObj.set({
      left: clonedObj.left + 10,
      top: clonedObj.top + 10,
      evented: true,
    });
    if (clonedObj.type === 'activeSelection') {
      // active selection needs a reference to the canvas.
      clonedObj.canvas = canvas;
      clonedObj.forEachObject(function(obj) {
        canvas.add(obj);
      });
      // this should solve the unselectability
      clonedObj.setCoords();
    } else {
      canvas.add(clonedObj);
    }
    _clipboard.top += 10;
    _clipboard.left += 10;
    canvas.setActiveObject(clonedObj);
    canvas.requestRenderAll();
  });
}
var canvas = this.__canvas = new fabric.Canvas('c');

function addText(){
var iTextSample = new fabric.IText('Text', {
  left: 50,
  top: 50,
  fontFamily: 'Helvetica',
  fill: '#333',
  lineHeight: 1.1,
  styles: {
    0: {
      0: { textDecoration: 'underline', fontSize: 80 },
      1: { textBackgroundColor: 'red' }
    },
    1: {
      0: { textBackgroundColor: 'rgba(0,255,0,0.5)' },
      4: { fontSize: 20 }
    }
  }
});

canvas.add(iTextSample);




}





/*-------------------fontfamily-----------------------*/


// Define an array with all fonts
var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];


fonts.unshift('Times New Roman');
// Populate the fontFamily select
var select = document.getElementById("font-family");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
  if (this.value !== 'Times New Roman') {
    loadAndUse(this.value);
  } else {
    canvas.getActiveObject().set("fontFamily", this.value);
    canvas.requestRenderAll();
  }
};

function loadAndUse(font) {
  var myfont = new FontFaceObserver(font)
  myfont.load()
    .then(function() {
      // when font is loaded, use it.
      canvas.getActiveObject().set("fontFamily", font);
      canvas.requestRenderAll();
    }).catch(function(e) {
      console.log(e)
      alert('font loading failed ' + font);
    });
}

// Load all fonts using Font Face Observer

/*-------------Addrectangle ----------------*/

function addrect() {

  fabric.Object.prototype.transparentCorners = false;

  var rect1 = new fabric.Rect({
    width: 200, height: 100, left: 0, top: 0, angle: 0,
    fill: 'rgba(255,0,0,0.7)'
  });

  canvas.add(rect1);
  
}
/*-------------------------Addcircle-----------------------------*/





function addCircle() {

  fabric.Object.prototype.transparentCorners = false;

  var circle = new fabric.Circle({
    radius: 50, left: 275, top: 75, fill: '#aac'
  });

  canvas.add(circle);
  
}
/*----------------------------deleteobject-------------------------*/
function deleteObjects(){
    var selection = canvas.getActiveObject();
    if (selection.type === 'activeSelection') {
        selection.forEachObject(function(element) {
            console.log(element);
            canvas.remove(element);
        });
    }
    else{
        canvas.remove(selection);
    }
    canvas.discardActiveObject();
    canvas.requestRenderAll();
}

