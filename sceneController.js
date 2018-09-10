// Por Enrique Alejandro Mondragón Tayabas A01019108

let scale = 1;
function scaleScene(scale){
  sunGroup.scale.set(scale, scale, scale);
  $("#scale").html("scale: " + scale);
}
function rotateScene(deltax,deltay){
    sunGroup.rotation.y += deltax / 100;
    sunGroup.rotation.x += deltay / 100;
    $("#rotation").html("rotation: 0," + sunGroup.rotation.y.toFixed(1) + ",0");
}
function panScene(deltax,deltay){
    sunGroup.position.x += deltax;
    sunGroup.position.z += (deltay);
    // $("#rotation").html("rotation: 0," + sunGroup.rotation.y.toFixed(1) + ",0");
}



var mouseDown = ctrDown = false, pageX = pageY= pagePanX = pagePanY = 0;
function onMouseMove(evt){
    if (!mouseDown && !ctrDown)
        return;
    // console.log("onMouseMove",mouseDown,ctrDown);
    evt.preventDefault();
    if(mouseDown){
      var deltax = evt.pageX - pageX;
      pageX = evt.pageX;
      var deltay = evt.pageY - pageY;
      pageY = evt.pageY;
      rotateScene(deltax,deltay);
    }
    if(ctrDown){
      var deltax = evt.pageX - pagePanX;
      pagePanX = evt.pageX;
      var deltay = evt.pageY - pagePanY;
      pagePanY = evt.pageY;
      panScene(deltax,deltay);
    }
}

function onMouseDown(evt){
    evt.preventDefault();
    mouseDown = evt.button==0;
    if(mouseDown){
      pageX = evt.pageX;
      pageY = evt.pageY;
    }else{
      ctrDown = evt.button>0;
      if(ctrDown)
      pagePanX = evt.pageX;
      pagePanY = evt.pageY;
    }
}

function onMouseUp(evt){
    evt.preventDefault();
    mouseDown = false;
    ctrDown = false;
}

function onContextMenu(evt){
  evt.preventDefault();
}

function onKeyDown(evt){
  evt.preventDefault();
  ctrDown = true;
}

function onKeyUp(evt){
  evt.preventDefault();
  ctrDown = false;
}

function addMouseHandler(canvas){
    canvas.addEventListener( 'mousemove',
            (e)=>onMouseMove(e) , false );
    canvas.addEventListener( 'mousedown',
            (e)=>onMouseDown(e) , false );
    canvas.addEventListener( 'mouseup',
            (e)=>onMouseUp(e) , false );
    document.addEventListener( 'contextmenu',
            (e)=>onContextMenu(e) , false );
    document.addEventListener( 'keydown',
            (e)=>onKeyDown(e) , false );
    document.addEventListener( 'keyup',
            (e)=>onKeyUp(e) , false );
}
