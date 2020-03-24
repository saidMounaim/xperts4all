//https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Morocco
//https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_maladie_%C3%A0_coronavirus_de_2020_au_Maroc

//const cumule = false;

$(".wrapper").delay(600).fadeIn(500);

d3.select("#cucmule").on("change", update);

var formatDate = d3.time.format("%d/%m");
var parseDate = d3.time.format("%d/%m/%Y").parse;

var barDataset = [

{"day": 1,"date": "02/03/2020", "totalNegatifTests" : 28, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :28, "confirmedCases" : 1, "death" : 0, "recovered" :0},
{"day": 2,"date": "03/03/2020", "totalNegatifTests" : 32, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :4, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 3,"date": "04/03/2020", "totalNegatifTests" : 34, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :2, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 4,"date": "05/03/2020", "totalNegatifTests" : 48, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :14, "confirmedCases" : 1, "death" : 0, "recovered" :0},
{"day": 5,"date": "06/03/2020", "totalNegatifTests" : 50, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :2, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 6,"date": "07/03/2020", "totalNegatifTests" : 55, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :5, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 7,"date": "08/03/2020", "totalNegatifTests" : 60, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :5, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 8,"date": "09/03/2020", "totalNegatifTests" : 60, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :0, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 9,"date": "10/03/2020", "totalNegatifTests" : 63, "totalConfirmedCases" : 3, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :3, "confirmedCases" : 1, "death" : 0, "recovered" :0},
{"day": 10,"date": "11/03/2020", "totalNegatifTests" : 78, "totalConfirmedCases" : 6, "totalDeath" : 1, "totalRecovered" : 0, "negatifTests" :15, "confirmedCases" : 3, "death" : 1, "recovered" :0},
{"day": 11,"date": "12/03/2020", "totalNegatifTests" : 91, "totalConfirmedCases" : 6, "totalDeath" : 1, "totalRecovered" : 0, "negatifTests" :13, "confirmedCases" : 0, "death" : 0, "recovered" :0},
{"day": 12,"date": "13/03/2020", "totalNegatifTests" : 106, "totalConfirmedCases" : 8, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :15, "confirmedCases" : 2, "death" : 0, "recovered" :1},
{"day": 13,"date": "14/03/2020", "totalNegatifTests" : 112, "totalConfirmedCases" : 18, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :6, "confirmedCases" : 10, "death" : 0, "recovered" :0},
{"day": 14,"date": "15/03/2020", "totalNegatifTests" : 122, "totalConfirmedCases" : 28, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :10, "confirmedCases" : 10, "death" : 0, "recovered" :0},
{"day": 15,"date": "16/03/2020", "totalNegatifTests" : 152, "totalConfirmedCases" : 37, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :30, "confirmedCases" : 9, "death" : 0, "recovered" :0},
{"day": 16,"date": "17/03/2020", "totalNegatifTests" : 183, "totalConfirmedCases" : 44, "totalDeath" : 2, "totalRecovered" : 1, "negatifTests" :31, "confirmedCases" : 7, "death" : 1, "recovered" :0},
{"day": 17,"date": "18/03/2020", "totalNegatifTests" : 263, "totalConfirmedCases" : 54, "totalDeath" : 2, "totalRecovered" : 1, "negatifTests" :80, "confirmedCases" : 10, "death" : 0, "recovered" :0},
{"day": 18,"date": "19/03/2020", "totalNegatifTests" : 307, "totalConfirmedCases" : 63, "totalDeath" : 2, "totalRecovered" : 2, "negatifTests" :44, "confirmedCases" : 9, "death" : 0, "recovered" :1},
{"day": 19,"date": "20/03/2020", "totalNegatifTests" : 385, "totalConfirmedCases" : 86, "totalDeath" : 3, "totalRecovered" : 2, "negatifTests" :78, "confirmedCases" : 23, "death" : 1, "recovered" :0},
{"day": 20,"date": "21/03/2020", "totalNegatifTests" : 441, "totalConfirmedCases" : 96, "totalDeath" : 3, "totalRecovered" : 3, "negatifTests" :56, "confirmedCases" : 10, "death" : 0, "recovered" :1},
{"day": 21,"date": "22/03/2020", "totalNegatifTests" : 512, "totalConfirmedCases" : 115, "totalDeath" : 4, "totalRecovered" : 3, "negatifTests" :71, "confirmedCases" : 19, "death" : 1, "recovered" :0},
{"day": 22,"date": "23/03/2020", "totalNegatifTests" : 643, "totalConfirmedCases" : 143, "totalDeath" : 4, "totalRecovered" : 5, "negatifTests" :131, "confirmedCases" : 28, "death" : 0, "recovered" :2},




];


const tests = Math.max(...barDataset.map(d => d.totalNegatifTests));
const cases = Math.max(...barDataset.map(d => d.totalConfirmedCases));
const deaths = Math.max(...barDataset.map(d => d.totalDeath));
const recovered = Math.max(...barDataset.map(d => d.totalRecovered));
d3.select("#tests").text(tests);
d3.select("#cases").text(cases);
d3.select("#deaths").text(deaths);
d3.select("#recovered").text(recovered);


const confirmedPercent = cases/tests*100;
const deathsPercent = deaths/cases*100;
const recoveredPercent = recovered/cases*100;
d3.select("#casesPercent").text(confirmedPercent);
d3.select("#deathsPercent").text(deathsPercent);
d3.select("#recoveredPercent").text(recoveredPercent);

function update() {
  const cumule = d3.select("#cucmule").property("checked")
  drawBarGraph(barDataset, cumule);
}

function drawBarGraph(data, cumule) {

  var status = cumule ? 
        ["totalConfirmedCases", "totalDeath", "totalRecovered"] : 
        ["confirmedCases", "death", "recovered"];
  
  const label = {
    "totalConfirmedCases" : "Confirmed cases", "confirmedCases" : "Confirmed cases", 
  "totalDeath" : "Death", "death" : "Death", 
  "totalRecovered" : "Recovered", "recovered" : "Rrecovered", 
} 

var margin = {top: 30, right: 30, bottom: 40, left: 60},
    width  = window.innerWidth*0.7 - margin.left - margin.right,
    height = 290 - margin.top - margin.bottom;

  var z = d3.scale.ordinal()
  .range(["#50E3C2", "#EF5C6E", "#FFFFFF"]);

  var n = Math.max(...barDataset.map(d => d.day));

  var x = d3.scale.linear()
  .domain([parseDate("02/03/2020"), parseDate("25/03/2020")])
  .rangeRound([0, width], .1);

  var y = d3.scale.linear()
  .rangeRound([height, 0]);

  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(d => {debugger; return formatDate(new Date(d))})
  .ticks(30);

  var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(5)
  .tickFormat(d3.format("d"));

 // d3.select("#chart-bar").remove("svg");
  d3.select("#chart-bar").selectAll("svg").remove();
  var svg = d3.select("#chart-bar")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  ;

  var layers = d3.layout.stack()
  (status.map(function (c) {
    return data.map(function (d) {
      return {x: parseDate(d.date), y: d[c], type: label[c]};
    });
  }));


  y.domain([
    0, d3.max(layers[layers.length - 1], function (d) {
      return d.y0 + d.y;
    })
  ]);


  // gridlines in y axis function
  function make_y_gridlines() {
    return d3.svg.axis().scale(y)
      .orient("left").ticks(5);
  }

  // add the Y gridlines
  svg.append("g")
    .attr("class", "gridline")
    .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
         );

  svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(6," + height + ")")
    .call(xAxis);

   svg.selectAll("g.tick")
     .selectAll("text")
     .attr("transform", "translate(6,10) rotate(-65)");

  svg.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-5em")
    .attr("y", "-2.5em")
    .style("text-anchor", "end")
    .text("Cases/Death");


  function type(d) {
    // d.date = parseDate(d.date);
    d.day;
    status.forEach(function (c) {
      d[c] = +d[c];
    });
    return d;
  }  
  
   var tooltip = d3.select("#chart-bar").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

  var layer = svg.selectAll(".layer")
  .data(layers)
  .enter().append("g")
  .attr("class", "layer")
  .style("fill", function (d, i) {
    return z(i);
  });

  layer.selectAll("rect")
    .data(function (d) {
    return d;
  })
    .enter().append("rect")
    .on("mouseover", function (d) {
    console.log('TIPS', d);
    tooltip.transition()
      .duration(200)
      .style("opacity", 1);
    tooltip.html("<span>" + d.y + " " + d.type + "</span>")
      .style("left", (d3.event.pageX - 25) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
    .on("mouseout", function (d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  })
      .attr("x", function (d) {
    return x(d.x);
  })
    .attr("y",  function(d) {
    return height;
  })
    .attr("width", 8)
    .attr("height", 0)
    .transition().duration(1500)
    .attr("y", function (d) {
    return y(d.y + d.y0);
  })
    .attr("height", function (d) {
    return y(d.y0) - y(d.y + d.y0);
  });

}

drawBarGraph(barDataset, false);


$('.count').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 1500,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

$('.percent').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 1500,
    easing: 'swing',
    step: function (now) {
      $(this).text('('+Math.ceil(now) + '%)');
    }
  });
});

