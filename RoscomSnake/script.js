let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');



for (let i=1; i<256; i++){
  let excel = document.createElement('div');
  field.appendChild(excel);
  excel.classList.add('excel');
}




let excel = document.getElementsByClassName('excel');
let x = 1,
    y = 15;



for (let i=0; i<excel.length; i++){
  if (x>17) {
    x=1;
    y--;
  }
  excel[i].setAttribute('posX',x)
  excel[i].setAttribute('posY',y)
  x++;
}




function generateSnake() {
  let posX = Math.round(Math.random() * (17 - 3) + 1 );
  let posY = Math.round(Math.random() * (15 - 1) + 1 );
  return [posX, posY];
}




let coordinates = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] +'"][posY = "' + coordinates[1] +'"]'),
document.querySelector('[posX = "' + (coordinates[0]+1) +'"][posY = "' + coordinates[1] +'"]'),
document.querySelector('[posX = "' + (coordinates[0]+2) +'"][posY = "' + coordinates[1] +'"]')];




for (let i = 0; i<snakeBody.length; i++){
  snakeBody[i].classList.add('snakeBody');
}



snakeBody[0].classList.add('head');

let mouse;



function createMouse(){
  function generateMouse() {
  let posX = Math.round(Math.random() * (17 - 1) + 1 );
  let posY = Math.round(Math.random() * (15 - 1) + 1 );
  return [posX, posY];  
    }
   let mouseCoordinates = generateMouse();
   console.log(mouseCoordinates);
   mouse = document.querySelector('[posX = "' + mouseCoordinates[0] +'"][posY = "' + mouseCoordinates[1] +'"]');

   while(mouse.classList.contains('snakeBody')){
    let mouseCoordinates = generateMouse();
     mouse = document.querySelector('[posX = "' + mouseCoordinates[0] +'"][posY = "' + mouseCoordinates[1] +'"]');
   }
   mouse.classList.add('mouse');
}

createMouse();


let direction = 'left';
let steps = false;
let score = 0;


let input = document.createElement('input');
let readonly = input.setAttribute("readonly", true);
field.appendChild(input);
input.value = "score =>  " + (snakeBody.length-3);



function move(){
     let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
     snakeBody[0].classList.remove('head');
     snakeBody[snakeBody.length-1].classList.remove('snakeBody');
     snakeBody.pop();


     if (direction == 'left'){
if (snakeCoordinates[0] > 1){
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) +'"][posY = "' + snakeCoordinates[1] +'"]'));
     } else {
     snakeBody.unshift(document.querySelector('[posX = "17"][posY = "' + snakeCoordinates[1] +'"]'));
   }
}
else if (direction == 'right'){
    if (snakeCoordinates[0] < 17){
      snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) +'"][posY = "' + snakeCoordinates[1] +'"]'));
     } else {
     snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] +'"]'));   
  }
}
else if (direction == 'up'){
    if (snakeCoordinates[1] < 15){
       snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] +'"][posY = "' + (+snakeCoordinates[1] + 1) +'"]'));
     } else {
     snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] +'"][posY = "1"]'));    
  }
}
else if (direction == 'down'){
    if (snakeCoordinates[1] > 1 ){
       snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] +'"][posY = "' + (snakeCoordinates[1] - 1) +'"]'));
     } else {
     snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] +'"][posY = "15"]'));    
  }
}

if (snakeBody[0].getAttribute('posX') ==  mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') ==  mouse.getAttribute('posY')){
  mouse.classList.remove('mouse');
  let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
  let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
  snakeBody.push(document.querySelector('[ posX = "' + a + '"][ posY = "' + b + '"]'));
  createMouse();
  score++;
  input.value = "score = " + (snakeBody.length-3);
}


if (snakeBody[0].classList.contains('snakeBody')){
  swal
  ({
  title: "GAME OVER"
});


  clearInterval(interval);
  snakeBody[0].style.background = 'url(img/headZ.png) center no-repeat';
  snakeBody[0].style.backgroundSize = 'cover';
}


     snakeBody[0].classList.add('head');
     for (let i = 0; i<snakeBody.length; i++){
  snakeBody[i].classList.add('snakeBody');
 }


steps = true;

}

function start() {
        interval = setInterval(function(){
            move();
        },200);

    }





window.addEventListener('keydown', function (e) {
if (steps == true){
       if(e.keyCode == 65 && direction!= 'right'){
         direction = 'left';
         steps = false;       
       }
       else if(e.keyCode == 87 && direction!= 'down'){
        direction = 'up';
        steps = false;
       }
       else if(e.keyCode == 68 && direction!= 'left'){
        direction = 'right';
        steps = false;
       }
       else if(e.keyCode == 83 && direction!= 'up'){
        direction = 'down';
        steps = false;
       }
else if(e.keyCode == 37 && direction!= 'right'){
        direction = 'left';
        steps = false;
       }
else if(e.keyCode == 38 && direction!= 'down'){
        direction = 'up';
        steps = false;
       }
else if(e.keyCode == 39 && direction!= 'left'){
        direction = 'right';
        steps = false;
       }
else if(e.keyCode == 40 && direction!= 'up'){
        direction = 'down';
        steps = false;
       }
 }
});





    