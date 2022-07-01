var game = new Game();
var player;

function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(1200, 650);
  canvas = document.getElementById("defaultCanvas0").getContext("2d");
  canvas.font = "30px " + defaultFont.fontName;

  player = new Player("player", game.colors[floor(random(game.colors.length))]);
  game.players.push(player);

  createInputAndButton("fire", "y = ");

  background(ACCENT_2);

  drawGrid();
  drawEntities();

}

function draw () {

  // background(ACCENT_2);

  // drawGrid();
  // drawEntities();

}

function drawGrid () {

  for (var x = 0; x < width; x += game.cellSize) {

    stroke(ACCENT_1);
    strokeWeight(1);
    line(x, 0, x, height);

  }

  for (var y = 0; y < height; y += game.cellSize) {

    stroke(ACCENT_1);
    strokeWeight(1);
    line(0, y, width, y);

  }

}

function drawEntities () {

  game.players.forEach(function (player) {

    player.render();
    player.inform();

  });

}

function graph (expression) {

  background(ACCENT_2);

  drawGrid();
  drawEntities();

  console.log("graphing " + expression);

  var x = width;
  var y = eval(expression);

  console.log(y);
  
  smooth();
  stroke(player.color);
  strokeWeight(3);

  console.log("from (" + player.x + ", " + player.y + ") to (" + width + ", " + y + ")");
  line(player.x, player.y,  player.x + width, player.y - y);


  player.render();
  player.inform();

  return expression;

}

