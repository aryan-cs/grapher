var game = new Game();
var player;

function preload() { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  createCanvas(1200, 650);
  canvas = document.getElementById("defaultCanvas0").getContext("2d");
  document.getElementById("plot").style.width = width + "px";
  document.getElementById("plot").style.height = height + "px";

  player = new Player("player", game.colors[floor(random(game.colors.length))]);
  game.players.push(player);

  createInputAndButton("fire", "y = ");

  drawGrid();
  drawEntities();

  graph("x");

}

function draw () {

  // background(ACCENT_2);

  // drawGrid();
  // drawEntities();

}

function drawGrid () {

  for (var x = game.cellSize; x < width; x += game.cellSize) {

    stroke(ACCENT_1);
    strokeWeight(1);
    line(x, 0, x, height);

  }

  for (var y = game.cellSize; y < height; y += game.cellSize) {

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

function graph (input) {

  try {

    const expression = math.compile(input);

    const xValues = math.range(0, (width - player.x) / game.cellSize, 0.01).toArray();
    const yValues = xValues.map(function (x) { return expression.evaluate( { x : x } ) });

    const trace1 = {

      x: xValues,
      y: yValues,
      type: "scatter"

    };

    const data = [trace1];

    const layout = {

      paper_bgcolor: "rgba(0,0,0,0)",

      plot_bgcolor: "rgba(0,0,0,0)",

      mode: 'lines',

      xaxis: {

        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: "",
        showticklabels: false,
        fixedrange: true

      },

      yaxis: {

        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: "",
        showticklabels: false,
        fixedrange: true

      },

      line: {

        color: "rgb(234, 153, 153)",
        width: 10

      },

      width: 350,
      height: 350,

      margin: {

        l: 0,
        r: 0,
        t: 0,
        b: 0

      },

      dragmode: false,
      hovermode: false,
      clickmode: false,
      itemclick: false,
      itemdoubleclick: false,

    }

    Plotly.newPlot("plot", data, layout);

    document.getElementsByClassName("modebar")[0].style.display = "none";
    document.getElementsByTagName("svg")[0].style.left = player.x + "px";
    document.getElementsByTagName("svg")[0].style.transform = "translateY(" + (90) + "px)";

    player.render();
    player.inform();

    return input;

  }

  catch (err) { console.error(err); alert(err); }

}

