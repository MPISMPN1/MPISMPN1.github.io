function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lPmj4xDcZb":
        Script1();
        break;
      case "5zsmqMktLBh":
        Script2();
        break;
      case "6JBhu1l1rsi":
        Script3();
        break;
      case "6lbqjz9Eo17":
        Script4();
        break;
      case "5hOKw5qfZbu":
        Script5();
        break;
      case "6npyIryGJ0P":
        Script6();
        break;
      case "6HzKql7Pw7r":
        Script7();
        break;
      case "6lcrnLDidlM":
        Script8();
        break;
      case "6FyIY1Jvgmt":
        Script9();
        break;
      case "5frLMJJHKqj":
        Script10();
        break;
      case "5VEfMXIZzjB":
        Script11();
        break;
      case "63dEHzSZxTv":
        Script12();
        break;
      case "5f1KXiIx5DD":
        Script13();
        break;
      case "5yvr693EXQ2":
        Script14();
        break;
      case "6D7bdcfdKqX":
        Script15();
        break;
      case "5xkwAwBcYAC":
        Script16();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script15()
{
  clearInterval(timerId);
let sec = 0;
}

function Script16()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 20) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

