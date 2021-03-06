//https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Morocco
//https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_maladie_%C3%A0_coronavirus_de_2020_au_Maroc

//const cumule = false;

$(".wrapper").delay(600).fadeIn(500);
$(".chart-sankey").delay(600).fadeIn(500);



var formatDate = d3.time.format("%d/%m");
var parseDate = d3.time.format("%d/%m/%Y").parse;

var barDataset = [



  {"day": 1,"date": "02/03/2020", "totalNegatifTests" : 28, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :28, "confirmedCases" : 1, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 2,"date": "03/03/2020", "totalNegatifTests" : 32, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :4, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 3,"date": "04/03/2020", "totalNegatifTests" : 34, "totalConfirmedCases" : 1, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :2, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 4,"date": "05/03/2020", "totalNegatifTests" : 48, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :14, "confirmedCases" : 1, "death" : 0, "recovered" :0, "plusPercent" :100},
{"day": 5,"date": "06/03/2020", "totalNegatifTests" : 50, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :2, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 6,"date": "07/03/2020", "totalNegatifTests" : 55, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :5, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 7,"date": "08/03/2020", "totalNegatifTests" : 60, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :5, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 8,"date": "09/03/2020", "totalNegatifTests" : 60, "totalConfirmedCases" : 2, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :0, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 9,"date": "10/03/2020", "totalNegatifTests" : 63, "totalConfirmedCases" : 3, "totalDeath" : 0, "totalRecovered" : 0, "negatifTests" :3, "confirmedCases" : 1, "death" : 0, "recovered" :0, "plusPercent" :50},
{"day": 10,"date": "11/03/2020", "totalNegatifTests" : 78, "totalConfirmedCases" : 6, "totalDeath" : 1, "totalRecovered" : 0, "negatifTests" :15, "confirmedCases" : 3, "death" : 1, "recovered" :0, "plusPercent" :100},
{"day": 11,"date": "12/03/2020", "totalNegatifTests" : 91, "totalConfirmedCases" : 6, "totalDeath" : 1, "totalRecovered" : 0, "negatifTests" :13, "confirmedCases" : 0, "death" : 0, "recovered" :0, "plusPercent" :0},
{"day": 12,"date": "13/03/2020", "totalNegatifTests" : 106, "totalConfirmedCases" : 8, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :15, "confirmedCases" : 2, "death" : 0, "recovered" :1, "plusPercent" :33},
{"day": 13,"date": "14/03/2020", "totalNegatifTests" : 112, "totalConfirmedCases" : 18, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :6, "confirmedCases" : 10, "death" : 0, "recovered" :0, "plusPercent" :125},
{"day": 14,"date": "15/03/2020", "totalNegatifTests" : 122, "totalConfirmedCases" : 28, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :10, "confirmedCases" : 10, "death" : 0, "recovered" :0, "plusPercent" :56},
{"day": 15,"date": "16/03/2020", "totalNegatifTests" : 152, "totalConfirmedCases" : 37, "totalDeath" : 1, "totalRecovered" : 1, "negatifTests" :30, "confirmedCases" : 9, "death" : 0, "recovered" :0, "plusPercent" :32},
{"day": 16,"date": "17/03/2020", "totalNegatifTests" : 183, "totalConfirmedCases" : 44, "totalDeath" : 2, "totalRecovered" : 1, "negatifTests" :31, "confirmedCases" : 7, "death" : 1, "recovered" :0, "plusPercent" :19},
{"day": 17,"date": "18/03/2020", "totalNegatifTests" : 263, "totalConfirmedCases" : 54, "totalDeath" : 2, "totalRecovered" : 1, "negatifTests" :80, "confirmedCases" : 10, "death" : 0, "recovered" :0, "plusPercent" :23},
{"day": 18,"date": "19/03/2020", "totalNegatifTests" : 307, "totalConfirmedCases" : 63, "totalDeath" : 2, "totalRecovered" : 2, "negatifTests" :44, "confirmedCases" : 9, "death" : 0, "recovered" :1, "plusPercent" :17},
{"day": 19,"date": "20/03/2020", "totalNegatifTests" : 385, "totalConfirmedCases" : 86, "totalDeath" : 3, "totalRecovered" : 2, "negatifTests" :78, "confirmedCases" : 23, "death" : 1, "recovered" :0, "plusPercent" :37},
{"day": 20,"date": "21/03/2020", "totalNegatifTests" : 441, "totalConfirmedCases" : 96, "totalDeath" : 3, "totalRecovered" : 3, "negatifTests" :56, "confirmedCases" : 10, "death" : 0, "recovered" :1, "plusPercent" :12},
{"day": 21,"date": "22/03/2020", "totalNegatifTests" : 512, "totalConfirmedCases" : 115, "totalDeath" : 4, "totalRecovered" : 3, "negatifTests" :71, "confirmedCases" : 19, "death" : 1, "recovered" :0, "plusPercent" :20},
{"day": 22,"date": "23/03/2020", "totalNegatifTests" : 643, "totalConfirmedCases" : 143, "totalDeath" : 4, "totalRecovered" : 5, "negatifTests" :131, "confirmedCases" : 28, "death" : 0, "recovered" :2, "plusPercent" :24},
{"day": 23,"date": "24/03/2020", "totalNegatifTests" : 685, "totalConfirmedCases" : 170, "totalDeath" : 5, "totalRecovered" : 6, "negatifTests" :42, "confirmedCases" : 27, "death" : 1, "recovered" :1, "plusPercent" :19},
{"day": 24,"date": "25/03/2020", "totalNegatifTests" : 740, "totalConfirmedCases" : 225, "totalDeath" : 6, "totalRecovered" : 7, "negatifTests" :55, "confirmedCases" : 55, "death" : 1, "recovered" :1, "plusPercent" :32},
{"day": 25,"date": "26/03/2020", "totalNegatifTests" : 931, "totalConfirmedCases" : 275, "totalDeath" : 10, "totalRecovered" : 8, "negatifTests" :191, "confirmedCases" : 50, "death" : 4, "recovered" :1, "plusPercent" :22},
{"day": 26,"date": "27/03/2020", "totalNegatifTests" : 1423, "totalConfirmedCases" : 345, "totalDeath" : 23, "totalRecovered" : 11, "negatifTests" :492, "confirmedCases" : 70, "death" : 13, "recovered" :3, "plusPercent" :25},
{"day": 27,"date": "28/03/2020", "totalNegatifTests" : 1574, "totalConfirmedCases" : 402, "totalDeath" : 25, "totalRecovered" : 12, "negatifTests" :151, "confirmedCases" : 57, "death" : 2, "recovered" :1, "plusPercent" :17},
{"day": 28,"date": "29/03/2020", "totalNegatifTests" : 1794, "totalConfirmedCases" : 479, "totalDeath" : 26, "totalRecovered" : 13, "negatifTests" :220, "confirmedCases" : 77, "death" : 1, "recovered" :1, "plusPercent" :19},
{"day": 29,"date": "30/03/2020", "totalNegatifTests" : 2195, "totalConfirmedCases" : 556, "totalDeath" : 33, "totalRecovered" : 15, "negatifTests" :401, "confirmedCases" : 77, "death" : 7, "recovered" :2, "plusPercent" :16},
{"day": 30,"date": "31/03/2020", "totalNegatifTests" : 2462, "totalConfirmedCases" : 617, "totalDeath" : 36, "totalRecovered" : 24, "negatifTests" :267, "confirmedCases" : 61, "death" : 3, "recovered" :9, "plusPercent" :11},
{"day": 31,"date": "01/04/2020", "totalNegatifTests" : 2691, "totalConfirmedCases" : 654, "totalDeath" : 39, "totalRecovered" : 29, "negatifTests" :229, "confirmedCases" : 37, "death" : 3, "recovered" :5, "plusPercent" :6},
{"day": 32,"date": "02/04/2020", "totalNegatifTests" : 2916, "totalConfirmedCases" : 708, "totalDeath" : 44, "totalRecovered" : 31, "negatifTests" :225, "confirmedCases" : 54, "death" : 5, "recovered" :2, "plusPercent" :8},
{"day": 33,"date": "03/04/2020", "totalNegatifTests" : 3119, "totalConfirmedCases" : 791, "totalDeath" : 48, "totalRecovered" : 57, "negatifTests" :203, "confirmedCases" : 83, "death" : 4, "recovered" :26, "plusPercent" :12},
{"day": 34,"date": "04/04/2020", "totalNegatifTests" : 3402, "totalConfirmedCases" : 919, "totalDeath" : 59, "totalRecovered" : 66, "negatifTests" :283, "confirmedCases" : 128, "death" : 11, "recovered" :9, "plusPercent" :16},
{"day": 35,"date": "05/04/2020", "totalNegatifTests" : 3827, "totalConfirmedCases" : 1021, "totalDeath" : 70, "totalRecovered" : 76, "negatifTests" :425, "confirmedCases" : 102, "death" : 11, "recovered" :10, "plusPercent" :11},
{"day": 36,"date": "06/04/2020", "totalNegatifTests" : 3984, "totalConfirmedCases" : 1120, "totalDeath" : 80, "totalRecovered" : 81, "negatifTests" :157, "confirmedCases" : 99, "death" : 10, "recovered" :5, "plusPercent" :10},
{"day": 37,"date": "07/04/2020", "totalNegatifTests" : 4253, "totalConfirmedCases" : 1184, "totalDeath" : 90, "totalRecovered" : 93, "negatifTests" :269, "confirmedCases" : 64, "death" : 10, "recovered" :12, "plusPercent" :6},



];


const tests = Math.max(...barDataset.map(d => d.totalNegatifTests));
const cases = Math.max(...barDataset.map(d => d.totalConfirmedCases));
const deaths = Math.max(...barDataset.map(d => d.totalDeath));
const recovered = Math.max(...barDataset.map(d => d.totalRecovered));
d3.select("#tests").text(tests + cases);
d3.select("#cases").text(cases);
d3.select("#deaths").text(deaths);
d3.select("#recovered").text(recovered);


const confirmedPercent = cases/(cases + tests)*100;
const deathsPercent = deaths/cases*100;
const recoveredPercent = recovered/cases*100;
d3.select("#casesPercent").text(confirmedPercent);
d3.select("#deathsPercent").text(deathsPercent);
d3.select("#recoveredPercent").text(recoveredPercent);

function update() {
  const cumuleItem = d3.select("#cumule");
  const cumule = cumuleItem.attr("class") === "cumule_nok";
  if (cumule) {
    cumuleItem.attr("class", "cumule_ok");
  } else {
    cumuleItem.attr("class", "cumule_nok");
  }
  drawBarGraph(barDataset, cumule);
}


function drawBarGraph(data, cumule) {
  
  var status = cumule ? ["totalConfirmedCases", "totalDeath", "totalRecovered"] : 
        ["confirmedCases", "death", "recovered"];
  
  const label = {
      "totalConfirmedCases" : "Confirmed cases", "confirmedCases" : "Confirmed cases", 
      "totalDeath" : "Death", "death" : "Death", 
      "totalRecovered" : "Recovered", "recovered" : "Rrecovered", 
    } 

  var min = Math.min(...barDataset.map(d => d.day));
  var max = Math.max(...barDataset.map(d => d.day));

var margin = {top: 30, right: 30, bottom: 40, left: 60},
    width  = window.innerWidth*0.7 - margin.left - margin.right,
    height = (max - min) * 20;

  var z = d3.scale.ordinal()
  .range(["#CCDBDC", "#ED254E", "#71B340"]);
  
  var x = d3.scale.linear()
  .rangeRound([0, width]);

  var y = d3.scale.linear()
  .domain([min, max])
  .rangeRound([0, height]);

  var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  // .ticks(5)
  .tickFormat(d3.format("d"));


  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();

  chartWrapper.style("background-color", "#333b66");

  const ul = chartWrapper
  .append("ul")
  .attr("class", "vbroadcast-legend");
  ul.append("li").attr("class", "cases").html("Confirmed");
  ul.append("li").attr("class", "deaths").html("Deads");
  ul.append("li").attr("class", "recovered").html("Recovered");
  const cumuleItem = ul.append("div").attr("id", "cumule").html("Cumule").on("click", update);

  if (cumule) {
    cumuleItem.attr("class", "cumule_ok");
  } else {
    cumuleItem.attr("class", "cumule_nok");
  }

  var svg = chartWrapper
  .append("svg") 
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  ;

  var layers = d3.layout.stack()
  (status.map(function (c) {
    return data.map(function (d) {
      return {x: d.day, y: d[c], plusPercent: d.plusPercent, type: label[c], date: d.date};
    });
  }));
  
  

layers = layers.map(function (group) {
    return group.map(function (d) {
        // Invert the x and y values, and y0 becomes x0
        return {
          ...d,
            x: d.y,
            y: d.x,
            x0: d.y0
        };
    });
});


  x.domain([
    0, d3.max(layers[layers.length - 1], function (d) {
      return d.y0 + d.x;
    })
  ]);


  // gridlines in y axis function
  function make_y_gridlines() {
    return d3.svg.axis().scale(y)
      .orient("left")
      //.ticks(5)
    ;
  }

  // add the Y gridlines
  svg.append("g")
    .attr("class", "gridline")
    .call(make_y_gridlines()
          //.tickSize(-width)
          .tickFormat("")
         );

  svg.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-20em")
    .attr("y", "-2.5em")
    .style("text-anchor", "end") 
    .text("Days since first case 02/03/2020");
  
  
  var tooltip = chartWrapper.append("div")
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
    tooltip.transition()
      .duration(200)
      .style("opacity", 1);
      debugger;
    tooltip.html("<span>" + d.date + ": " + d.x + " " + d.type + "</span>")
      .style("left", (d3.event.pageX - 25) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
    .on("mouseout", function (d) {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  })
  .attr("x", function (d) {
    return 0;
  })
    .attr("y",  function(d) {
    return y(d.y);
  })
    .attr("width", 0)
    .attr("height", 8)
    .transition().duration(1500)
    .attr("x", function (d) {
    return x(d.x0);
  })
    .attr("width", function (d) {
    return x(d.x);
  })  ;
}

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






















function drawWaffles() {

  const myColors = {
    "Negatifs": "#CCDBDC", 
    "Positifs": "#E6C229", 
    "Recovereds": "#71B340", 
    "Deads": "#ED254E"
  }

  const selectedColors = {
    "Negatifs": "#97D6DB", 
    "Positifs": "#D3B117", 
    "Recovereds": "#6ED321", 
    "Deads": "#A8324A"
  }

  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();

  chartWrapper.style("background-color", "white");


  const legendDiv = chartWrapper.append("div");
          
  const legendRow = legendDiv.selectAll("foo")
      .data(Object.keys(myColors))
      .enter()
      .append("div")
      .attr('class', 'waffle-chart-legend--items');

  legendRow.append("div")
      .html("&nbsp")
      .attr("class", "rect")
      .style("background-color", k => myColors[k]);

  legendRow.append("div")
      .attr('class', 'waffle-chart-legend--text')
      .html(d => d);

  d3.select("#cucmule").style("display", "none");
  d3.select("#cucmuleLabel").style("display", "none");

  const div = d3.select("#chart-wrapper")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)

        let width = window.innerWidth * 0.78 - 10,
            squaresPerLign = 10,
            squareSize,
            gap = 1,
            theData = [];

            if (width > 400) {
              width = 400;
            }
        
            // 
        
            // width = ((squareSize + gap) * squaresPerLign);
            
            // width / (squareSize + gap) = (squaresPerLign);
            // (squareSize + gap) = (squaresPerLign) / width;
            squareSize = width / (squaresPerLign + gap);

        // width = (squareSize * widthSquares) + widthSquares * gap + squareSize;
        // height = (squareSize * heightSquares) + heightSquares * gap + squareSize;

        const svg = d3.select("#chart-wrapper")
            .append("svg")
            .attr('class', 'waffle')
            .attr("width", width)
            .attr("height", width)

        const totalTestsDone = tests + cases + deaths + recovered;

        const originalDataPercent = {
          Negatifs: Math.round(tests / totalTestsDone * 100),
          Positifs: Math.round(cases / totalTestsDone * 100),
          Recovereds: Math.round(recovered / totalTestsDone * 100),
          Deads: Math.round(deaths / totalTestsDone * 100)
        }
        const originalData = {
          Negatifs: tests,
          Positifs: cases,
          Recovereds: recovered,
          Deads: deaths
        }

        theData = Object.keys(originalDataPercent).map(k => d3.range(originalDataPercent[k]).map(i => {return {type: k} }))
          .reduce((x, y) => x.concat(y));
  
  

            svg.append("g")
            .attr('transform', "translate(10, 10)")
            .selectAll("div")
            .data(theData)
            .enter()
            .append("rect")
            .attr("width", squareSize)
            .attr("height", squareSize)
            .attr("class", d => d.type)
            .attr("fill", d => myColors[d.type])
            .attr("y", function(d, i) {
                let row = Math.floor(i / squaresPerLign);
                return (row * squareSize) + (row * gap);
            })
            .attr("x", function(d, i) {
                let col = i % squaresPerLign;
                return ((col * squareSize) + (col * gap))
            })
            .on("mouseover", function(d){
                div.transition()
                .duration(100)
                .style("opacity", 1);
              
               d3.selectAll("." + d.type).attr("fill", d => selectedColors[d.type]);
                 div.html("<span style = 'font-weight: bold'>" + originalData[d.type] + " (" + originalDataPercent[d.type] + "%) " + d.type + "</span>")
                div.style("visibility", "visible")
                .style("left", (d3.event.pageX - 20) + "px")    
                .style("top", (d3.event.pageY - 35) + "px")
              
          })
            .on("mousemove", function(d){
            div.style("left", (d3.event.pageX - 20) + "px")    
            .style("top", (d3.event.pageY - 65) + "px")
          })
          .on("mouseout", function(d){
            div.transition()
            .duration(500)
            div.style("visibility", "hidden")
              
        
               d3.selectAll("."+d.type).attr("fill", d => { return myColors[d.type] });
              
           
          })
    }



















function drawHistory() {
  drawBarGraph(barDataset, false);
}


function drawWaffle() {
  //drawSankeyGraph(sankeyData);
  drawWaffles()
}


function drawMap() {
  const data = {
    "Casablanca-Settat":"353",
    "Marrakech-Safi":"204",
    "Rabat-Salé-Kénitra":"186",
    "Fès-Meknès":"160",
    "Tanger-Tetouan-Al Hoceima":"99",
    "Oriental":"73",
    "Béni Mellal-Khénifra":"34",
    "Drâa-Tafilalet":"51",
    "Souss-Massa":"19",
    "Laayoun-saqialhamra":"4",
    "Guelmim-Oued Noun":"1",
    "Dakhla-ouadidahab":"0",
  };


  
  const max = Math.max(...Object.keys(data).map(k => data[k]));
  var color = d3
    .scale.linear()
    .domain([0, max])
    .range(['#5F7F17', '#E55812']);

  d3.select("#cucmule").style("display", "none");
  d3.select("#cucmuleLabel").style("display", "none");


  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();

  chartWrapper.style("background-color", "white");

  const width = (window.innerWidth) * 0.75 - 3;
  let scale = width / 15;
  if (width > 400) {
    scale = 10;
  }
  // if (scale > 1) {
  //   scale = 1;
  // }
  console.log("width", width);
  console.log("scale", scale);
  chartWrapper.html(
  '	<svg ' +
  '	width="' + width + '"	' +
  '	height="' + width + '"	' +
  // '	viewBox="10 0 ' + width*20 + ' ' + width*20 + '" > ' +
  '	viewBox="10 0 ' + width*scale + ' ' + width*scale + '" > ' +
  '	<g transform="translate(10, 10) " > ' +
  ' <text x="0" y="300"  id="regionName"></text>' + 
  ' <text x="0" y="600" id="cases"></text>' + 
'  <path class="region" id="Tanger-Tetouan-Al Hoceima" d="m 3182.2,135.71 c -1.9159,-0.0644 -5.1856,0.39161 -7.8066,1.1211 -4.9071,1.3658 -5.5994,1.3616 -7.0078,-0.0469 -2.0647,-2.0646 -3.9652,-0.99025 -12.359,6.9902 -3.575,3.3988 -6.8375,6.1896 -7.25,6.2012 -0.4125,0.0116 -0.75,0.55498 -0.75,1.207 0,1.6333 -4.0591,5.8144 -5.6445,5.8144 -0.7124,0 -2.772,0.82672 -4.5762,1.8359 -4.6335,2.5918 -7.9826,3.2523 -11.443,2.2598 -2.0601,-0.59083 -4.0535,-0.41378 -6.3847,0.56641 -2.9523,1.2414 -3.9789,1.2315 -7.9649,-0.0723 -3.8013,-1.2433 -5.16,-1.2816 -8.0312,-0.23046 -7.7475,2.8364 -10.754,4.8842 -11.318,7.707 -0.3067,1.5335 -2.1657,4.3962 -4.1308,6.3613 -4.5467,4.5467 -10.264,5.0156 -13.65,1.1211 -2.4284,-2.7928 -5.6124,-3.6986 -14.856,-4.2246 -3.575,-0.20345 -7.0133,-0.43438 -7.6406,-0.51367 -0.6273,-0.0793 -2.4505,0.39768 -4.0508,1.0605 -2.6591,1.1014 -3.1435,2.1287 -5.6289,11.918 -1.4957,5.8913 -3.8318,14.536 -5.1914,19.211 -2.3168,7.9663 -8.9781,35.409 -12.137,50 -2.7487,12.698 -6.29,22.449 -9.125,25.125 -1.696,1.6007 -3.6463,5.3994 -5.1192,9.9727 -1.3086,4.0631 -2.9947,8.3269 -3.748,9.4766 -0.7533,1.1496 -3.5688,9.7032 -6.2559,19.008 -2.6871,9.3048 -6.7954,22.768 -9.1289,29.918 -2.3335,7.15 -4.1847,14.052 -4.1133,15.338 0.096,1.7256 -0.6371,2.6282 -2.7968,3.4434 -2.6789,1.0112 -3.3972,2.4669 -8.4864,17.205 -4.9319,14.283 -12.578,40.189 -12.578,42.613 0,0.49499 1.5488,0.90039 3.4414,0.90039 1.8925,0 3.7187,0.45 4.0586,1 1.575,2.5484 14.607,0.32396 17.256,-2.9453 2.3645,-2.9186 8.7575,-4.3132 13.244,-2.8887 5.4726,1.7376 9.1553,4.7356 8.8379,7.1934 -0.6516,5.0469 4.2294,6.3268 8.1621,2.1406 1.2917,-1.375 3.003,-2.5 3.8027,-2.5 2.4226,0 12.005,5.935 17.869,11.066 6.9927,6.1192 13.922,8.0605 21.176,5.9316 6.1459,-1.8037 9.489,-1.6021 16.402,0.99023 5.3534,2.0074 5.7473,2.3751 5.7246,5.334 -0.014,1.748 -0.4859,5.1835 -1.0508,7.6348 -0.934,4.053 -0.8291,4.6055 1.1543,6.1016 2.1299,1.6066 2.1437,1.7598 0.5821,6.543 -1.2142,3.7191 -1.5053,7.7303 -1.2051,16.664 0.2174,6.4711 -0.01,13.165 -0.4961,14.877 -1.2076,4.2107 0.4091,7.2328 3.4609,6.4668 1.2612,-0.31655 3.0994,0.0721 4.168,0.88085 1.0514,0.79566 3.2967,1.461 4.9883,1.4785 1.9585,0.0202 3.9283,0.93935 5.4238,2.5312 3.3719,3.5892 6.662,3.2756 8.6152,-0.82031 2.5742,-5.3981 12.572,-6.9472 14.367,-2.2266 0.67,1.7624 1.9419,2.4581 5.4512,2.9844 3.9676,0.59498 4.8766,1.2062 6.8184,4.5801 1.7102,2.9716 2.9512,3.9623 5.2441,4.1875 2.6322,0.25851 3.0436,0.72755 3.334,3.7871 0.1822,1.9202 0.7368,3.7406 1.2324,4.0469 0.4957,0.30631 1.5154,2.3311 2.2656,4.498 1.2649,3.6535 1.6117,3.9186 4.7696,3.6465 2.3811,-0.20514 4.0921,0.34564 5.6855,1.8301 1.2534,1.1678 3.8502,2.3777 5.7715,2.6894 1.9212,0.31178 3.7332,0.95578 4.0273,1.4316 0.2941,0.47582 1.2028,0.86523 2.0176,0.86523 2.3161,0 7.3131,4.121 8.9316,7.3652 1.9756,3.9601 1.8486,6.5959 -0.4414,9.0703 -1.8841,2.0358 -2.4308,4.0568 -2.205,8.1543 0.1465,2.6568 4.733,4.973 6.6679,3.3672 1.6093,-1.3356 11.451,0.94035 17.209,3.9805 4.688,2.4752 12.454,2.7124 14.342,0.4375 0.7417,-0.89376 1.2095,-2.9535 1.0391,-4.5781 -0.5355,-5.105 2.0558,-6.7968 10.412,-6.7968 h 7.2441 l 2.0996,-4.0312 c 2.5049,-4.8057 2.5253,-4.9688 0.6016,-4.9688 -1.9732,0 -1.9268,-3.4005 0.068,-5.0566 1.4457,-1.1998 1.5825,-8.1779 0.3906,-19.943 -0.084,-0.825 0.05,-6.1824 0.2969,-11.906 l 0.4472,-10.408 5.5606,-5.3418 c 3.1032,-2.9822 6.4849,-5.3438 7.6523,-5.3438 1.1503,0 3.77,-0.9 5.8223,-2 2.0524,-1.1 4.3683,-2 5.1465,-2 0.7783,0 5.886,-1.6582 11.352,-3.6856 8.1939,-3.0394 10.272,-3.478 11.838,-2.5 2.7991,1.7481 7.7603,1.4434 11.307,-0.69336 1.7149,-1.0333 4.8666,-2.439 7.0039,-3.123 2.1373,-0.68405 5.4802,-2.3249 7.4277,-3.6465 4.5445,-3.084 7.8347,-3.8883 9.6699,-2.3652 1.846,1.532 10.078,0.51679 17.018,-2.0996 2.75,-1.0368 5.5043,-1.8864 6.1211,-1.8867 0.7272,-3.2e-4 1.3753,4.2546 1.8437,12.102 0.8018,13.435 2.2125,18.044 6.2891,20.539 1.5096,0.92389 4.4234,2.7868 6.4746,4.1406 3.6444,2.4055 4.0318,2.446 17,1.7891 17.01,-0.86166 21.367,0.20897 24.272,5.9648 1.1,2.1801 2.0888,4.1279 2.1973,4.3281 0.1086,0.20021 1.3786,-0.56369 2.8222,-1.6992 2.06,-1.6204 3.9541,-2.04 8.8028,-1.9473 3.3979,0.065 6.8527,0.64229 7.6777,1.2832 0.825,0.6409 4.0998,2.6023 7.2773,4.3574 l 5.7774,3.1914 2.4414,-2.7754 c 1.3426,-1.5257 2.4605,-3.6734 2.4863,-4.7734 0.089,-3.8059 1.3799,-4.5034 8.0762,-4.3652 12.126,0.25011 19.941,-1.9399 19.941,-5.5898 0,-0.77525 0.8571,-1.6826 1.9062,-2.0156 2.5465,-0.80821 3.3142,-3.1 1.5333,-4.5781 -0.7923,-0.65756 -1.4395,-1.7292 -1.4395,-2.3809 0,-0.6517 3.7003,-4.6932 8.2246,-8.9805 9.3609,-8.8707 9.1954,-8.8644 15.076,-0.49804 4.6895,6.6716 10.553,10.115 15.859,9.3144 2.7779,-0.41891 3.8834,-0.14798 4.5937,1.1211 0.8578,1.5329 1.3032,1.4856 5.3418,-0.57031 4.7373,-2.4116 20.386,-17.751 21.414,-20.99 0.5022,-1.5821 1.538,-1.9706 5.3066,-1.9844 7.0484,-0.0258 23.183,-4.5559 24.644,-6.9199 0.3609,-0.58392 2.0927,-1.0724 3.8477,-1.084 4.8888,-0.0322 20.024,-4.7702 21.512,-6.7344 0.9,-1.1879 1.082,-2.8604 0.5684,-5.2441 -1.2948,-6.0102 -0.6572,-13.296 1.6191,-18.5 2.5484,-5.8257 2.9019,-12.174 1.0488,-18.793 -0.855,-3.0538 -1.0556,-6.3755 -0.5722,-9.457 0.622,-3.9642 1.0797,-14.608 1.5566,-36.176 0.042,-1.8841 0.4556,-4.1345 0.9199,-5.002 0.5773,-1.0787 0.1045,-2.5063 -1.4961,-4.5137 -1.8576,-2.3297 -3.2408,-2.986 -6.7089,-3.1875 -5.1175,-0.29732 -14.688,-3.6766 -17.408,-6.1465 -3.6368,-3.3019 -5.553,-7.338 -5.1446,-10.836 0.2175,-1.8635 0.2743,-3.3887 0.127,-3.3887 -0.1473,0 -2.9409,1.8348 -6.2071,4.0762 -5.6257,3.8607 -6.3863,4.0926 -14.471,4.4316 -4.6936,0.19684 -9.5737,0.91406 -10.844,1.5938 -1.27,0.6797 -2.5336,1.2146 -2.8086,1.1875 -0.9961,-0.098 -5.5569,1.7137 -8,3.1777 -6.4838,3.8854 -9.9019,4.9247 -17.217,5.2344 -5.7039,0.24147 -8.6794,0.89544 -11.412,2.5078 -2.7465,1.6204 -5.3888,2.1953 -10.283,2.2402 -5.3117,0.0487 -7.4935,0.59333 -11.266,2.8066 -2.5729,1.5097 -5.3317,2.7441 -6.1289,2.7441 -0.7972,0 -2.0087,0.675 -2.6934,1.5 -0.6847,0.825 -2.3154,1.5 -3.623,1.5 -1.3077,0 -2.377,0.43 -2.377,0.95508 0,1.7421 -7.2637,2.3904 -11.961,1.0684 -2.4963,-0.70259 -7.2391,-1.3336 -10.539,-1.4043 -4.5061,-0.0966 -7.7096,-0.93803 -12.863,-3.375 -4.2263,-1.9985 -8.4516,-3.2526 -11,-3.2676 -2.2757,-0.0134 -7.8156,-1.0746 -12.31,-2.3574 -4.495,-1.2829 -8.726,-1.9895 -9.4043,-1.5703 -2.0013,1.2369 -10.105,-1.7454 -12.35,-4.5449 -1.9049,-2.376 -2.3411,-2.4917 -5.377,-1.4277 -2.7922,0.97854 -4.3415,0.81227 -10,-1.0703 -3.6827,-1.2253 -7.124,-2.6283 -7.6465,-3.1172 -0.5225,-0.48892 -1.9244,-0.88867 -3.1152,-0.88867 -1.1909,0 -3.3085,-0.9 -4.707,-2 -1.3984,-1.1 -3.2614,-2 -4.1407,-2 -0.8794,0 -2.5755,-1.1229 -3.7695,-2.4961 -1.194,-1.3732 -4.1239,-3.4427 -6.5098,-4.5977 -2.3858,-1.155 -6.6486,-4.7551 -9.4726,-8.002 -3.0255,-3.4786 -5.9457,-5.9043 -7.1094,-5.9043 -4.2896,0 -13.57,-5.1672 -16.072,-8.9492 -1.3577,-2.0517 -5.5475,-6.8337 -9.3105,-10.627 -3.763,-3.7933 -7.9668,-8.2528 -9.3418,-9.9102 -2.003,-2.4143 -3.3643,-3.0534 -6.8477,-3.2129 -2.3913,-0.10947 -5.4306,-0.90837 -6.7539,-1.7754 -1.3245,-0.86788 -4.6844,-6.1156 -7.4746,-11.676 -4.8359,-9.6366 -7.7642,-13.195 -14.018,-17.035 -1.5097,-0.92722 -4.2378,-3.9697 -6.0644,-6.7598 -3.4006,-5.1945 -5.3281,-6.4022 -9.9961,-6.2695 -1.4645,0.0416 -3.4203,-0.76243 -4.3477,-1.7871 -0.9273,-1.0247 -2.2356,-1.6518 -2.9062,-1.3945 -3.1233,1.1985 -7.6999,-9.2284 -12.637,-28.783 -2.316,-9.1737 -2.7338,-12.272 -1.9356,-14.371 0.8997,-2.3663 0.8118,-2.5899 -0.7519,-1.9219 -3.4224,1.4621 -7.3014,1.6896 -8.7207,0.51172 -3.4804,-2.8884 -7.4074,-22.379 -9.127,-45.295 -0.4652,-6.1986 -0.2809,-9.664 0.6309,-11.865 1.1511,-2.7789 1.0872,-3.2231 -0.5977,-4.166 -3.7996,-2.1264 -6.4531,-5.6439 -6.4531,-8.5547 0,-2.5128 -0.443,-2.9957 -3.0938,-3.3848 -0.2126,-0.0312 -0.4587,-0.0513 -0.7324,-0.0606 z"/> ' +
'  <path class="region" id="Oriental" d="m 3818.2,289.03 c -1.1866,-0.0405 -5.3739,4.95 -4.789,5.8965 0.3068,0.49643 0.077,1.0638 -0.5117,1.2598 -0.588,0.19601 -1.2269,1.4725 -1.42,2.8359 -0.043,0.30378 -0.1029,0.59775 -0.1543,0.89649 0.01,0.0192 0.013,0.0476 0.024,0.0644 0.2799,0.45287 0.1699,0.82465 -0.2071,0.95313 -0.7054,3.3937 -1.9716,6.4599 -3.83,9.2578 -0.8417,1.7475 -1.4551,3.2628 -1.4551,3.6719 0,1.6474 -8.105,15.449 -11.631,19.805 -3.0577,3.7776 -6.7796,5.9458 -9.6015,5.8945 -3.9218,2.4906 -6.9953,2.9037 -9.2598,1.248 -0.2582,0.36705 -0.5063,0.71404 -0.7949,1.1426 -0.7629,1.1328 -1.5826,2.2261 -2.4317,3.2773 1.8435,0.84221 0.4206,3.9479 -3.748,7.6172 -4.0855,3.5962 -8.5215,5.6212 -11.039,5.0391 -0.4915,-0.11366 -1.5695,0.0661 -2.3945,0.39844 -1.477,0.59499 -4.1423,1.362 -14.988,4.3164 -3.0184,0.8222 -6.3934,2.3162 -7.5,3.3203 -4.455,4.0426 -5.9957,4.2907 -19.34,3.1055 -12.421,-1.1032 -19.172,-2.6053 -19.172,-4.2656 0,-0.45886 -0.8697,-0.36818 -1.9336,0.20117 -3.4892,1.8674 -8.5061,1.091 -15.926,-2.4648 -4.1398,-1.984 -8.8519,-3.5 -10.877,-3.5 -5.0493,0 -24.55,-11.703 -30.875,-18.527 -2.3078,-2.4902 -2.9333,-2.6586 -7.5742,-2.043 -2.782,0.36905 -5.7107,1.3239 -6.5079,2.1211 -0.7971,0.79715 -2.0547,1.4492 -2.7949,1.4492 -1.161,0 -3.5117,7.5004 -3.5117,11.205 0,2.2758 -5.2616,7.8872 -9.3086,9.9277 -2.3057,1.1625 -4.3433,2.248 -4.5293,2.4121 -0.1859,0.16416 0.6623,1.6512 1.8848,3.3047 1.4709,1.9895 1.9723,3.6223 1.4843,4.8281 -1.3528,3.3426 -1.9271,11.698 -1.6953,24.68 0.1263,7.0716 -0.1712,13.372 -0.6621,14 -1.181,1.5118 -1.4051,9.6415 -0.3047,11.041 2.1789,2.771 2.164,11.285 -0.031,18.199 -1.2054,3.7959 -2.079,7.7176 -1.9414,8.7129 0.1377,0.99529 -0.2606,2.4236 -0.8848,3.1758 -0.8484,1.0222 -0.8311,2.3839 0.07,5.3926 1.3777,4.5984 4.5456,5.9748 9.4571,4.1074 4.5107,-1.715 7.6515,0.40556 7.3515,4.9648 -0.5138,7.8073 -1.2071,7.5488 20.18,7.5488 h 19.094 l 2.4179,2.8066 c 2.1142,2.4534 2.418,3.7926 2.418,10.668 0,6.9018 -0.4206,8.7398 -3.4395,15.039 -3.8022,7.934 -3.6906,9.6638 0.9688,15.201 2.9915,3.5551 3.1736,6.4274 0.4648,7.2871 -2.9697,0.94256 -7.8602,5.3407 -9.5293,8.5684 -0.8053,1.5572 -1.4648,4.9013 -1.4648,7.4316 0,4.3622 -0.1917,4.6808 -3.709,6.1504 -5.2671,2.2007 -16.976,1.4986 -18.9,-1.1328 -0.9098,-1.2442 -1.3906,-1.4302 -1.3906,-0.53906 0,2.5712 -3.2465,5.0195 -6.6562,5.0195 h -3.3477 l 1.9844,3.7031 c 1.7125,3.1952 1.8009,3.9838 0.6386,5.7578 -1.1522,1.7584 -1.0975,2.5212 0.3848,5.2852 0.953,1.777 2.3124,3.9307 3.0215,4.7852 0.9766,1.1767 1.0096,1.8341 0.1328,2.7109 -0.6367,0.63669 -1.1582,1.9455 -1.1582,2.9082 0,0.9627 -0.6377,2.111 -1.418,2.5508 -0.7804,0.43983 -2.3674,3.2048 -3.5254,6.1465 -3.1718,8.0576 -6.5844,11.865 -13.732,15.312 -4.9467,2.3857 -6.1333,3.3636 -5.2988,4.3691 0.778,0.9374 0.6605,2.2877 -0.4238,4.8828 -1.4215,3.4021 -1.3991,3.5879 0.4492,3.5879 2.0183,0 2.8054,3.3521 1.043,4.4414 -0.4984,0.30801 -0.683,1.4138 -0.4102,2.457 0.2728,1.0432 -0.025,2.8711 -0.6621,4.0625 -0.8783,1.6411 -0.8786,2.5056 0,3.5625 0.6772,0.81607 0.8876,2.622 0.5078,4.3516 -0.3809,1.734 -0.1409,3.7712 0.5801,4.9258 1.5546,2.4892 -0.5359,7.3269 -5.0176,11.615 -2.6645,2.5495 -3.7919,2.918 -8.959,2.918 h -5.9101 l 0.9921,2.8496 c 0.5466,1.568 0.7138,3.9687 0.3711,5.334 -0.5611,2.2359 -0.3197,2.4824 2.4219,2.4824 2.3529,0 3.266,0.58653 4.0254,2.584 0.5403,1.4212 0.7676,2.9328 0.5039,3.3594 -0.2636,0.42659 0.07,1.9485 0.7422,3.3809 1.2733,2.713 8.1135,5.6758 13.102,5.6758 1.3767,0 2.806,0.49232 3.1777,1.0938 0.6362,1.0295 -0.5805,9.0876 -2.5527,16.906 -0.4856,1.925 -1.1483,8.675 -1.4747,15 -0.7303,14.153 -1.2162,17.445 -3.3007,22.367 l -1.6387,3.8691 3.7051,3.3945 c 2.0378,1.8675 3.7051,3.8064 3.7051,4.3086 0,0.50223 -2.429,2.303 -5.3985,4.002 -2.9694,1.699 -5.6554,3.7578 -5.9687,4.5742 -0.3133,0.81642 -1.1814,1.4844 -1.9278,1.4844 -4.7105,0 -9.2943,14.567 -7.4765,23.76 0.8543,4.3209 0.6185,5.7004 -2.25,13.139 -2.4522,6.3586 -4.5805,9.8297 -9.0625,14.775 -5.812,6.4134 -5.8543,6.5041 -5.4004,11.645 0.2516,2.8496 0.8844,6.9573 1.4082,9.127 0.5237,2.1696 0.7552,4.2636 0.5137,4.6543 -0.9909,1.6032 -9.4582,5.9008 -11.615,5.8945 -1.277,-0.004 -6.912,2.0998 -12.522,4.6758 -8.8733,4.0749 -9.9782,4.8477 -8.5,5.9414 1.5933,1.1788 1.5951,1.4318 0.02,4.0723 -1.325,2.2211 -2.5276,2.8807 -5.6934,3.1211 -3.8719,0.29397 -3.9564,0.37343 -2.3496,2.25 0.9161,1.0699 2.8594,1.9453 4.3184,1.9453 2.1365,0 2.7678,0.57376 3.2421,2.9453 0.6468,3.2336 -2.6018,14.519 -4.9316,17.133 -1.9952,2.2384 -1.7432,4.6796 0.5586,5.4102 1.0813,0.3432 4.1188,2.8193 6.75,5.502 5.7497,5.8622 9.2361,7.4449 12.814,5.8145 2.0278,-0.92384 3.212,-0.821 6.0313,0.52343 4.4221,2.1088 11.756,2.1992 13.443,0.16602 0.6875,-0.82839 1.5458,-2.9487 1.9062,-4.7109 0.5667,-2.7708 1.2372,-3.3453 4.9609,-4.252 3.4594,-0.84231 4.5731,-1.6849 5.668,-4.2891 1.1002,-2.6165 1.933,-3.2422 4.3184,-3.2422 4.4214,0 11.088,8.2306 11.312,13.969 0.1322,3.3733 0.3551,3.8323 1.1523,2.3594 0.544,-1.005 2.5203,-3.5477 4.3926,-5.6484 3.7771,-4.2379 3.8344,-6.0089 0.207,-6.5254 -3.0581,-0.43539 -11.922,-7.0989 -11.922,-8.9629 0,-0.76882 3.2625,-6.0148 7.25,-11.658 l 7.25,-10.262 8.6269,-3.2031 c 9.3042,-3.4546 11.633,-5.3661 17.137,-14.068 3.0211,-4.7768 4.1858,-5.7404 8.8574,-7.3301 4.4125,-1.5015 6.0078,-2.7254 8.879,-6.8125 3.7982,-5.4065 12.982,-18.203 19.746,-27.512 2.3361,-3.2149 5.0039,-8.2002 5.9278,-11.078 0.9239,-2.878 2.8793,-6.3823 4.3457,-7.7871 2.2887,-2.1928 3.2413,-2.4629 6.7344,-1.9043 3.3325,0.53288 4.6483,1.457 7.2656,5.1016 2.0949,2.917 5.0248,5.3464 8.5039,7.0527 2.9191,1.4317 5.7765,3.6327 6.3496,4.8906 0.6022,1.3217 3.1926,3.212 6.1367,4.4785 3.5864,1.5428 5.9685,3.4615 8.0469,6.4824 4.336,6.3022 10.73,11.132 16.48,12.447 2.7287,0.62399 8.1129,2.1082 11.963,3.2988 6.4762,2.0027 8.8823,2.1511 32.176,1.9805 l 25.178,-0.18359 1.5722,4.6152 c 0.865,2.5388 1.5743,5.6445 1.5743,6.9024 0,3.0274 -5.2702,8.9101 -11.629,12.98 -7.5686,4.8447 -11.371,10.091 -11.371,15.689 0,4.0214 -0.5456,5.1224 -4.8946,9.8809 -2.6918,2.9452 -6.0244,5.9597 -7.4062,6.6992 -1.3819,0.73956 -3.3249,2.8522 -4.3164,4.6934 -1.224,2.2728 -2.7793,3.5568 -4.8438,3.998 -4.0521,0.86616 -6.539,3.6606 -6.539,7.3477 0,2.3398 -0.6727,3.3648 -3,4.5684 -1.65,0.85325 -3,1.8974 -3,2.3203 0,1.9672 53.344,52.59 61.791,58.639 4.5335,3.2463 17.66,18.015 22.111,24.879 0.7714,1.1894 2.6135,3.9621 4.0937,6.1621 4.1451,6.1609 4.9877,9.5158 3.6524,14.54097 -1.5522,5.8414 -10.831,13.511 -24.148,19.961 -9.4207,4.5627 -12.086,5.2767 -46,12.338 -46.549,9.6916 -44.914,9.4134 -59.564,10.125 l -12.562,0.6114 -10.82,-4.6231 c -5.9519,-2.5424 -13.526,-5.4854 -16.83,-6.541 -3.3045,-1.0557 -6.5443,-2.6533 -7.1992,-3.5488 -1.0932,-1.4951 -1.4294,-1.4754 -4.1074,0.2246 -1.6042,1.0184 -4.7578,3.664 -7.0078,5.8809 -2.2499,2.2168 -7.0837,6.9334 -10.742,10.48 -6.5907,6.3898 -7.8729,8.5312 -18.506,30.914 -1.5773,3.3203 -5.414,6.984 -16.16,15.432 -6.4739,5.0892 -13.885,13.985 -21.221,25.473 -2.9038,4.5469 -8.3615,13.097 -12.129,19 -3.7674,5.903 -8.9734,13.207 -11.568,16.232 -9.639,11.237 -13.431,17.578 -14.09,23.566 -1.0877,9.8815 3.3963,15.566 19.258,24.416 3.1625,1.7645 5.75,3.5582 5.75,3.9864 0,0.4282 -1.1025,2.7504 -2.4493,5.1601 -2.1468,3.8411 -2.3283,4.9154 -1.4746,8.7149 1.6564,7.3721 4.5661,11.697 12.994,19.314 8.3948,7.5875 13.14,15.029 17.434,27.342 2.5325,7.2615 3.5084,18.369 1.8984,21.596 l -1.2949,2.5957 4.8906,-0.9668 c 2.6899,-0.5319 6.4177,-0.682 8.2832,-0.332 2.7896,0.5233 3.5828,1.2626 4.4727,4.1621 0.7012,2.2846 0.7594,4.6526 0.164,6.7285 -1.8758,6.5406 -1.4133,7.4607 4.127,8.2227 7.745,1.0652 21.039,0.8252 27.394,-0.4942 6.3789,-1.3243 11.561,-0.075 11.561,2.7871 0,0.8563 -3.375,5.0248 -7.5,9.2637 -4.125,4.2388 -7.5,8.5176 -7.5,9.5078 0,2.0671 3.7633,6.4297 5.5468,6.4297 2.1133,0 10.819,-4.1836 15.191,-7.3008 3.7893,-2.7014 5.0076,-3.0192 11.5,-3.0039 5.8241,0.014 9.3368,0.7572 17.748,3.7578 5.7681,2.0576 11.792,4.4145 13.385,5.2383 1.593,0.8237 5.6467,1.8862 9.0079,2.3613 5.9281,0.838 6.2013,0.7766 9.1445,-2.0761 1.6688,-1.6174 5.7219,-4.5662 9.0058,-6.5528 7.0858,-4.2866 24.19,-12.424 26.115,-12.424 2.7777,0 1.1204,3.4947 -7.5606,15.934 l -8.916,12.773 -1.1953,9.8965 c -2.7009,22.344 -0.8952,31.939 10.756,57.125 5.1516,11.136 6.8193,13.922 7.6757,12.822 1.0795,-1.3863 19.36,-4.798 20.846,-3.8906 0.4125,0.2519 0.75,1.0162 0.75,1.6992 0,1.9826 -11.592,15.104 -15.809,17.894 -5.611,3.7132 -21.191,16.854 -21.191,17.873 0,1.1393 -1.5356,1.3664 18.182,-2.6875 30.662,-6.3043 44.246,-9.5157 44.932,-10.625 0.7978,-1.291 40.752,-9.8145 46.006,-9.8145 1.0606,0 1.1448,-4.096 0.1133,-5.5 -0.4041,-0.55 -1.6344,-1.505 -2.7344,-2.123 -1.4784,-0.8307 -1.9378,-2.0044 -1.7598,-4.5 0.5932,-8.3181 0.184,-13.095 -1.2441,-14.524 -0.8232,-0.8232 -1.4976,-2.0276 -1.5,-2.6758 0,-0.6482 -1.8024,-3.5485 -4,-6.4472 -3.4282,-4.5218 -3.9961,-5.9819 -3.9961,-10.281 0,-3.5133 -0.4452,-5.1818 -1.4883,-5.582 -0.8182,-0.314 -2.9387,-3.5625 -4.7129,-7.2188 -1.7741,-3.6562 -4.0902,-7.8537 -5.1465,-9.3261 -1.8685,-2.6042 -1.8727,-2.8784 -0.1601,-10.15 1.6615,-7.0555 2.1437,-7.8572 8.5801,-14.244 l 6.8183,-6.7656 25.805,-0.3789 c 14.192,-0.2084 27.83,-0.471 30.305,-0.582 2.475,-0.1111 7.019,0.1316 10.098,0.539 l 5.5976,0.7422 6.0918,-4.8906 c 5.3841,-4.321 6.9415,-5.0202 13.402,-6.0254 4.0207,-0.6255 9.1105,-1.6238 11.31,-2.2168 5.4876,-1.4791 14.5,-2.2191 14.5,-1.1914 0,0.4634 8.1,0.8418 18,0.8418 11.446,0 18,-0.3679 18,-1.0098 0,-1.9535 3.9158,-3.6059 5.957,-2.5136 1.0512,0.5626 3.0909,1.0234 4.5332,1.0234 1.4423,0 6.3449,1.5404 10.895,3.4238 7.7639,3.2138 8.6667,3.3716 14.693,2.5606 6.7468,-0.9079 13.733,-2.6857 15.422,-3.9258 0.55,-0.4039 5.5629,-2.4404 11.139,-4.5234 l 10.137,-3.7872 4.6621,1.7813 c 2.5637,0.9791 5.4912,2.835 6.5059,4.125 1.5001,1.907 2.7868,2.3457 6.8906,2.3457 2.7759,0 5.3261,-0.45 5.666,-1 1.0923,-1.7674 8.0797,-1.1188 10.773,1 1.3984,1.1 3.0341,2 3.6348,2 0.6008,0 1.0929,0.3375 1.0938,0.75 8e-4,0.4125 2.5883,0.7846 5.75,0.8262 3.1616,0.042 7.773,0.7863 10.248,1.6562 12.185,4.2831 14.87,5.0992 19.5,5.9219 2.75,0.4886 6.3818,0.8699 8.0703,0.8477 1.6884,-0.022 5.0068,0.6429 7.375,1.4785 2.3682,0.8356 5.3473,1.5195 6.6192,1.5195 1.2719,0 6.0242,1.197 10.56,2.6602 l 8.248,2.6601 9.1739,-1.8027 c 5.4426,-1.0701 10.348,-1.5108 12.062,-1.0821 1.5896,0.3974 8.59,1.6724 15.557,2.8321 10.957,1.824 13.198,1.9323 16.609,0.8066 3.4373,-1.1344 4.4127,-1.0785 7.6035,0.4356 2.9366,1.3935 5.2821,1.6234 11.865,1.1621 6.6237,-0.4641 8.5383,-0.2743 9.9356,0.9902 2.813,2.5457 13.534,0.2832 16.82,-3.5508 1.375,-1.604 4.1875,-3.5009 6.25,-4.2148 3.9694,-1.3738 4.6827,-2.8787 2.3008,-4.8555 -0.7974,-0.6618 -2.3944,-3.1504 -3.5469,-5.5312 -1.5867,-3.2776 -3.0606,-4.7158 -6.0703,-5.92 -4.6168,-1.8473 -6.6284,-2.0035 -7.1113,-0.5546 -0.1897,0.5691 -4.0367,1.7613 -8.5489,2.6503 -8.6114,1.6965 -11.273,1.1239 -11.273,-2.4257 0,-1.5645 7.1283,-9.2362 8.6328,-9.291 0.4772,-0.017 2.1274,-1.1407 3.668,-2.4961 2.7843,-2.4496 2.7939,-2.5008 1.6094,-8.5215 -0.8523,-4.3322 -0.8896,-6.6827 -0.1309,-8.2539 2.5961,-5.3764 3.0729,-13.988 0.8945,-16.166 -3.3722,-3.3722 -3.1575,-5.7222 0.8164,-8.9101 4.0866,-3.2784 7.6768,-10.356 7.6973,-15.178 0.01,-1.6813 0.7546,-4.0398 1.6621,-5.2403 2.3134,-3.0605 12.661,-6.5308 17.527,-5.8789 2.1318,0.2856 4.3818,0.097 5,-0.418 0.6182,-0.5154 2.3615,-2.0338 3.875,-3.375 1.5136,-1.3411 4.309,-3.1786 6.2128,-4.082 1.9037,-0.9034 3.7022,-2.3855 3.9961,-3.2949 0.6545,-2.0253 6.1128,-7.9442 9.8125,-10.641 1.4997,-1.0931 2.7266,-2.7734 2.7266,-3.7325 0,-1.0181 1.0233,-1.999 2.459,-2.3593 2.3156,-0.5812 2.371,-0.7512 0.9512,-2.918 -0.8291,-1.2655 -2.9172,-2.8857 -4.6407,-3.5996 -3.5687,-1.4782 -21.077,-14.162 -30.77,-22.291 -3.575,-2.9984 -12.812,-10.326 -20.527,-16.283 -11.711,-9.0418 -16.447,-11.967 -28.668,-17.711 l -14.639,-6.8808 -12.283,-20.119 c -6.7554,-11.066 -16.242,-26.355 -21.082,-33.975 -4.84,-7.62 -8.7926,-14.595 -8.7832,-15.5 0.02,-1.9702 9.8429,-6.5193 12.158,-5.6308 2.2929,0.8798 5.6699,-6.9273 5.0742,-11.732 -0.3297,-2.6601 0.096,-4.4858 1.498,-6.4101 1.8033,-2.4755 1.8494,-3.0553 0.584,-7.2598 -1.3782,-4.5793 -5.4591,-9.008 -8.3652,-9.0761 -1.5563,-0.037 -6.3475,-3.4155 -8.3613,-5.8965 -0.6075,-0.7484 -3.4083,-3.8984 -6.2227,-7 -3.3866,-3.7321 -5.3391,-6.8719 -5.7754,-9.2871 -0.3627,-2.0072 -1.7376,-5.239 -3.0547,-7.1797 -1.317,-1.9408 -2.5437,-4.5531 -2.7246,-5.8067 -0.1896,-1.31337 -2.0079,-3.41827 -4.2929,-4.96677 -2.4367,-1.6513 -4.6377,-4.2704 -5.709,-6.7929 -0.9589,-2.2578 -2.1674,-4.1055 -2.6856,-4.1055 -1.1963,0 -4.6051,-5.731 -5.4785,-9.2109 -0.366,-1.458 -0.126,-3.9181 0.5332,-5.4688 0.7298,-1.7168 1.2197,-8.2956 1.252,-16.82 0.043,-11.295 0.3908,-14.658 1.8027,-17.404 0.9625,-1.872 1.75,-4.2237 1.75,-5.2266 0,-1.0028 1.077,-2.5293 2.3945,-3.3926 2.9197,-1.913 3.5942,-3.9649 4.2461,-12.934 0.3865,-5.3159 0.9522,-7.2708 2.4004,-8.2852 1.0425,-0.73016 2.8037,-3.3803 3.9141,-5.8906 1.8147,-4.1024 1.8702,-4.7806 0.5332,-6.6895 -1.7364,-2.4791 -1.9691,-7.2629 -0.4004,-8.2324 0.699,-0.432 0.742,-1.0158 0.1211,-1.6367 -0.5328,-0.53284 -0.7372,-3.8197 -0.4551,-7.334 0.4994,-6.2222 0.4498,-6.385 -2.125,-7.0312 -3.9548,-0.99259 -7.154,-5.5098 -9.1641,-12.936 -1.616,-5.9701 -2.0149,-6.5839 -3.8828,-5.9766 -6.6009,2.1463 -13.582,1.6137 -13.582,-1.0371 0,-0.80762 -1.8418,-2.6304 -4.0918,-4.0508 -3.2585,-2.057 -3.9794,-3.0272 -3.5469,-4.7637 0.2987,-1.1991 0.8355,-4.022 1.1934,-6.2734 0.574,-3.6119 1.5221,-4.7763 8.0488,-9.8887 4.5393,-3.5556 7.3965,-6.5228 7.3965,-7.6816 0,-1.0386 -1.4224,-7.5729 -3.1621,-14.52 -3.6033,-14.388 -3.7754,-11.279 2.4922,-45.316 1.9749,-10.725 4.4706,-24.885 5.5469,-31.465 l 1.957,-11.963 -5.0625,-12.037 c -10.49,-24.934 -10.527,-25.084 -11.031,-44.035 -0.2247,-8.4492 -0.4605,-9.3366 -3.8281,-14.5 -1.9729,-3.025 -5.4375,-7.1653 -7.6992,-9.2012 -4.3702,-3.9338 -7.2129,-8.4944 -7.2129,-11.57 0,-1.0293 2.8125,-5.3069 6.25,-9.5059 3.4375,-4.1989 8.6075,-10.571 11.49,-14.158 l 5.2422,-6.5215 -3.2422,-1.6934 c -1.7827,-0.93093 -4.222,-1.7411 -5.4218,-1.8008 -1.1998,-0.0597 -3.3148,-1.3321 -4.7012,-2.8281 -1.3864,-1.496 -2.9721,-2.7207 -3.5234,-2.7207 -0.5515,0 -1.2799,-1.4805 -1.6192,-3.2891 -0.3451,-1.8397 -2.1287,-4.7632 -4.0469,-6.6387 -1.8856,-1.8437 -3.4277,-4.0803 -3.4277,-4.9688 0,-2.514 -6.2141,-11.768 -9.0293,-13.447 -1.3908,-0.82945 -3.3978,-1.4287 -4.4609,-1.332 -3.1349,0.28506 -3.0092,-3.2006 0.2402,-6.6797 1.6151,-1.7294 3.9755,-4.8834 5.2461,-7.0098 1.2707,-2.1263 3.1547,-4.8263 4.1875,-6 6.7427,-7.6623 8.573,-10.497 9.1269,-14.135 0.4307,-2.8282 1.5541,-4.7988 3.836,-6.7285 1.7751,-1.5011 3.0316,-2.899 2.791,-3.1055 -0.2406,-0.2065 -3.9201,-2.129 -8.1777,-4.2715 -4.2576,-2.1425 -9.5129,-4.7983 -11.678,-5.9023 -2.165,-1.1041 -4.9878,-2.9933 -6.2715,-4.1992 -1.2836,-1.2059 -4.1939,-2.4898 -6.4687,-2.8535 -3.592,-0.57438 -4.2148,-1.0586 -4.7383,-3.6758 -0.3315,-1.6575 -0.6035,-4.3291 -0.6035,-5.9375 0,-2.6672 -0.6815,-3.2444 -7.75,-6.5703 -4.2625,-2.0056 -7.975,-3.8974 -8.25,-4.2031 -0.5939,-0.66018 -4.7813,-2.6426 -7.25,-3.4316 -0.9625,-0.30761 -1.75,-1.4609 -1.75,-2.5644 0,-2.4301 -11.535,-11.974 -14.533,-12.023 -2.9175,-0.0486 -14.201,-8.8449 -21.346,-16.643 -5.8412,-6.3746 -9.887,-9.3906 -12.596,-9.3906 -0.6848,0 -2.77,-1.6352 -4.6348,-3.6328 -5.5906,-5.9891 -10.337,-10.358 -11.258,-10.363 -0.4767,-0.003 -0.5594,-1.0164 -0.1836,-2.2539 0.3759,-1.2375 0.8155,-3.875 0.9766,-5.8613 0.2902,-3.5769 0.2394,-3.629 -5.3164,-5.3711 -5.0408,-1.5806 -7.8554,-2.9066 -18.494,-8.7188 -1.7135,-0.93608 -4.3303,-1.7236 -5.8144,-1.75 -1.4841,-0.0264 -6.4341,-1.2702 -11,-2.7637 -4.5659,-1.4935 -8.5555,-2.731 -8.8672,-2.75 -0.3117,-0.019 -3.3843,2.4398 -6.8281,5.4648 -3.4437,3.025 -7.239,6.0302 -8.4336,6.6777 -10.211,5.5351 -19.364,7.6876 -26.686,6.2754 -2.4677,-0.476 -6.6139,-0.8862 -9.2148,-0.91015 -5.7509,-0.053 -16.177,-3.1129 -24.272,-7.125 -3.3,-1.6357 -6.2831,-2.9608 -6.6289,-2.9453 -0.3458,0.0155 -1.2055,1.4197 -1.9102,3.1211 l -1.2812,3.0938 -9.0899,-0.6582 c -8.1373,-0.58937 -10.033,-1.1359 -18.09,-5.2109 -8.5008,-4.2996 -15.5,-9.5626 -15.5,-11.654 0,-0.51878 -1.3388,-3.1188 -2.9746,-5.7773 -4.0921,-6.6505 -4.5427,-9.026 -2.25,-11.857 1.8755,-2.3161 1.8689,-2.4006 -0.5215,-6.8965 -2.2992,-4.3241 -2.5274,-7.3402 -0.8516,-11.217 0.5567,-1.2878 0.1293,-1.5006 -2.2832,-1.1465 -2.3873,0.35039 -3.5582,-0.21954 -6.0117,-2.918 -3.3738,-3.7107 -3.8677,-7.0948 -1.7656,-12.133 1.778,-4.2612 1.2661,-12.39 -0.9336,-14.82 -1.5256,-1.6858 -1.5741,-2.3659 -0.4199,-5.8633 1.226,-3.7149 0.8247,-17.554 -0.5488,-18.928 -0.05,-0.0501 -0.1163,-0.0754 -0.1954,-0.0781 z"/> ' +
'  <path class="region" id="Rabat-Salé-Kénitra" d="m 2996.6,425.56 c -2.6383,-0.004 -4.9758,1.0373 -6.2618,3 -2.3432,3.5761 -12.748,5.0834 -21.869,3.168 l -7,-1.4707 -1.9102,4.123 c -1.0507,2.2669 -4.0786,10.162 -6.7285,17.545 -4.8269,13.448 -5.0405,16.076 -1.3105,16.076 1.766,0 5.4492,4.8228 5.4492,7.1348 0,1.0258 0.45,1.8652 1,1.8652 0.55,0 1,0.92152 1,2.0488 0,4.7854 -6.3542,12.52 -9.3438,11.373 -1.7944,-0.68861 -2.2523,-3.9337 -0.6914,-4.8984 0.5344,-0.33026 0.047,-1.5116 -1.0937,-2.6524 -1.5975,-1.5975 -1.9792,-3.0422 -1.707,-6.4648 0.1928,-2.4237 0.1185,-4.4062 -0.1661,-4.4062 -0.5183,0 -12.136,26.76 -16.012,36.881 -8.5332,22.285 -41.662,89.107 -53.668,108.25 -24.733,39.437 -25.275,40.414 -23.207,41.705 3.0143,1.8825 2.2083,4.1174 -2.1972,6.0898 -3.8104,1.7059 -4.2812,2.383 -6.9512,10.012 -5.3495,15.285 -20.914,41.107 -31.934,52.98 -5.4865,5.9118 -5.603,6.1889 -3.8047,9.0684 1.723,2.759 -0.1707,4.6464 -3.0937,3.082 -2.4897,-1.3325 -1.3255,-2.4109 -18.059,16.721 -6.8354,7.8152 -12.728,14.209 -13.094,14.209 -0.7439,0 -6.9556,5.1503 -10.902,9.0391 -5.4239,5.3443 -13.058,9.9609 -16.471,9.9609 -1.1916,0 -5.1314,2.4928 -8.7559,5.5391 l -6.5918,5.5371 2.6211,4.9941 c 2.155,4.1062 2.9766,4.8786 4.6211,4.3438 1.1,-0.35779 3.35,-0.70863 5,-0.78125 2.6233,-0.11547 3.0055,0.20918 3.0449,2.5977 0.025,1.5311 1.1996,3.9481 2.6719,5.5 1.4447,1.5227 2.9462,4.5695 3.3359,6.7695 0.3898,2.2 1.0469,4.45 1.461,5 1.3387,1.7784 3.0101,11.557 2.3945,14.01 -0.3603,1.4354 0.037,3.2861 0.998,4.6582 0.8772,1.2523 1.5938,3.0073 1.5938,3.9004 0,0.8931 0.772,3.1553 1.7148,5.0273 0.9429,1.872 1.7108,5.2043 1.7071,7.4043 0,2.2762 0.6016,4.4617 1.4043,5.0723 0.7758,0.59011 1.5415,2.2626 1.7011,3.7168 0.1596,1.4542 1.2729,4.0251 2.4747,5.7129 1.2018,1.6878 1.9742,3.6182 1.7168,4.2891 -0.2576,0.67087 0.1071,1.757 0.8105,2.4141 1.0096,0.9431 1.4003,0.71423 1.8516,-1.084 0.9614,-3.8303 5.1999,-7.6211 8.5214,-7.6211 1.6489,0 3.3591,0.60608 3.7989,1.3477 1.1204,1.889 7.2751,2.8712 17.799,2.8398 6.1058,-0.0182 9.7122,0.42965 11.215,1.3926 1.2182,0.78065 3.5513,1.4199 5.1836,1.4199 2.0896,0 3.1547,0.59186 3.6016,2 0.3491,1.1 1.0396,2 1.5332,2 0.4936,0 1.3568,0.85769 1.918,1.9062 2.0704,3.8687 -6.0804,18.094 -10.367,18.094 -1.2729,0 -3.5001,0.93235 -4.9492,2.0723 -3.9684,3.1215 -3.5283,7.0044 1.3652,12.047 4.3066,4.4376 5.0608,7.8953 2.4688,11.322 -1.7675,2.3367 -1.9913,14.625 -0.4122,22.672 0.5814,2.9626 1.1923,11.832 1.3575,19.709 0.2475,11.8 0.5961,14.617 1.9785,16 1.3943,1.3945 4.2501,1.7285 16.893,1.9746 12.436,0.24207 16.271,0.67881 20.996,2.3946 3.1794,1.1545 6.0181,2.4829 6.3086,2.9531 0.2906,0.4701 1.6453,0.85555 3.0098,0.85555 2.8004,0 10.4,3.584 10.4,4.9043 0,0.4747 0.8866,1.094 1.9688,1.3769 1.0821,0.2831 2.7304,2.1167 3.664,4.0743 1.9527,4.095 2.923,3.9463 3.9219,-0.6016 1.0498,-4.7795 3.3562,-7.7539 6.0137,-7.7539 3.9138,0 7.0698,-2.01785 8.7871,-5.61915 1.8054,-3.786 4.8562,-5.3524 11.51,-5.9102 2.4004,-0.20123 4.4684,-0.50176 4.5957,-0.66797 2.9339,-3.832 5.5391,-8.7597 5.5391,-10.475 0,-1.2139 -1.5718,-5.2717 -3.4941,-9.0176 -4.0828,-7.9558 -4.2383,-9.473 -1.375,-13.494 1.9444,-2.7306 2.0179,-3.3383 0.83,-6.9375 -1.2802,-3.8792 -1.2442,-4.0065 2.2657,-7.6621 1.963,-2.0444 3.8827,-5.2105 4.2656,-7.0352 0.3828,-1.8247 1.3285,-3.5588 2.1016,-3.8555 1.0819,-0.41521 1.4062,-2.9172 1.4062,-10.865 0,-9.3606 0.1827,-10.384 1.9512,-10.945 2.777,-0.88135 9.4063,1.1174 11.545,3.4805 0.9976,1.1023 2.8078,2.0039 4.0234,2.0039 1.2156,0 3.4525,0.97766 4.9707,2.1719 2.6137,2.0559 6.5672,2.7826 15.297,2.8125 3.05,0.0104 9.2129,3.4441 9.2129,5.1328 0,0.40728 -0.7293,1.4695 -1.6211,2.3613 -1.2923,1.2923 -1.6522,4.0131 -1.7715,13.402 l -0.1504,11.781 4.5606,-0.4375 c 3.3664,-0.32347 4.9099,-0.0184 5.8945,1.168 1.5014,1.8092 4.3446,2.0754 7,0.6543 1.1621,-0.62193 3.1394,-0.55889 5.6856,0.18164 5.0607,1.4719 6.2289,2.42 7.8945,6.4062 1.6712,3.9999 3.5252,4.5509 14.012,4.1621 7.4265,-0.27536 8.0196,-0.45728 8.3164,-2.5469 0.2492,-1.755 0.9712,-2.25 3.2813,-2.25 1.7103,0 3.2047,-0.63386 3.5371,-1.5 0.6955,-1.8125 5.0245,-2.0052 5.6152,-0.25 0.3234,0.96072 0.7493,0.97939 1.8399,0.0801 0.7802,-0.64354 3.4405,-1.0906 5.9121,-0.99219 3.9616,0.15771 4.484,0.44611 4.414,2.4219 -0.067,1.8963 0.4714,2.2599 3.5,2.3691 6.5441,0.23602 12.54,0.69829 16.08,1.2383 2.7486,0.41927 4.0904,0.0174 6.25,-1.8691 1.5125,-1.3212 2.75,-2.6475 2.75,-2.9473 0,-0.2998 -1.6483,-2.3686 -3.6621,-4.5977 l -3.6602,-4.0527 1.6602,-3.4844 c 2.0187,-4.2332 2.0821,-9.0574 0.1621,-12.416 -1.856,-3.2467 -1.8793,-6.6879 -0.051,-7.7109 0.7972,-0.44617 2.6066,-3.4262 4.0196,-6.6211 1.413,-3.1949 2.0847,-5.5088 1.4921,-5.1426 -1.2559,0.77622 -8.9609,-4.2803 -8.9609,-5.8809 0,-1.412 5.7393,-6.2928 8.9746,-7.6328 2.4123,-0.99912 2.5149,-1.3793 2.2969,-8.4512 -0.1654,-5.3668 -0.9223,-8.9747 -2.75,-13.107 -2.8774,-6.5064 -3.147,-8.9989 -1.0625,-9.7988 0.802,-0.30778 2.1994,-3.1095 3.1055,-6.2266 1.3008,-4.4744 1.4055,-6.1983 0.5,-8.1855 -0.9886,-2.1697 -0.7733,-3.0552 1.5585,-6.4199 1.4877,-2.1468 4.2474,-5.2567 6.1329,-6.9121 2.9427,-2.5837 3.6066,-4.0307 4.6836,-10.211 0.6901,-3.9598 2.1897,-9.0265 3.332,-11.26 l 2.0762,-4.0605 -2.4063,-3.0742 c -1.323,-1.6905 -4.2551,-3.8135 -6.5176,-4.7188 -2.9988,-1.1999 -3.9508,-2.0697 -3.5136,-3.209 2.2694,-5.914 1.3457,-9.377 -2.4981,-9.377 -2.7605,0 -8.9121,-5.8364 -8.9121,-8.4551 0,-3.8757 1.9473,-8.0478 4.2324,-9.0664 1.4773,-0.65855 2.5521,-2.4529 3.2774,-5.4785 0.8301,-3.463 1.5872,-4.5744 3.2851,-4.8203 1.359,-0.19683 2.2051,-1.024 2.2051,-2.1562 0,-2.827 -5.1265,-12.061 -7.5938,-13.678 -3.6484,-2.3906 -7.6704,-8.9372 -6.9277,-11.277 0.361,-1.1374 1.0673,-2.0684 1.5684,-2.0684 0.5012,0 0.398,-1.125 -0.2285,-2.5 -0.6264,-1.375 -1.8292,-2.5 -2.6739,-2.5 -3.3035,0 -9.168,-5.4255 -13.199,-12.211 -3.3772,-5.6847 -4.0669,-7.6557 -3.625,-10.379 0.7946,-4.8968 6.1685,-11.05 11.393,-13.045 4.0474,-1.5457 4.3598,-1.9084 3.6836,-4.2773 -0.4064,-1.4235 -0.773,-3.9379 -0.8164,-5.5879 -0.075,-2.8291 0.162,-3.0166 4.1699,-3.3066 3.9913,-0.28878 4.25,-0.49162 4.25,-3.3203 0,-2.4899 0.3633,-2.9575 2.0898,-2.6934 1.4918,0.22825 2.8489,2.1028 4.75,6.5586 1.8219,4.2703 3.2166,6.2418 4.4239,6.25 0.9699,0.007 2.6045,0.53748 3.6328,1.1797 1.5153,0.9463 2.5675,0.75673 5.5449,-1 2.0207,-1.1922 4.5872,-2.168 5.7051,-2.168 1.9384,0 2.0001,0.3912 1.3301,8.4336 l -0.7012,8.4336 3.4531,0.64843 c 1.8995,0.35633 5.2132,0.18647 7.3633,-0.37695 2.15,-0.56343 6.1019,-1.0125 8.7832,-0.99805 3.8501,0.0208 5.3463,0.53475 7.1152,2.4434 1.2318,1.3292 2.5481,2.416 2.9239,2.416 0.3759,0 3.1042,-1.5498 6.0644,-3.4434 4.9002,-3.1346 5.4442,-3.851 6.0664,-8 0.5976,-3.9848 0.9906,-4.5566 3.1348,-4.5566 1.3487,0 3.3229,0.46581 4.3867,1.0352 1.3429,0.71868 2.5451,0.70796 3.9336,-0.0352 1.3878,-0.74271 2.5924,-0.75297 3.9336,-0.0352 1.5703,0.84041 2.0509,0.65941 2.5664,-0.96484 0.349,-1.0996 1.2318,-2 1.9609,-2 3.0084,0 2.4585,-4.9072 -0.5586,-4.9844 -0.3291,-0.008 -1.3276,-1.8721 -2.2187,-4.1406 -1.24,-3.1566 -1.3643,-4.6234 -0.5274,-6.25 1.9386,-3.768 5.136,-6.625 7.4122,-6.625 4.2906,0 4.5667,-5.5739 0.6816,-13.729 -3.3536,-7.0392 -4.8734,-8.4137 -8.75,-7.9121 -4.2352,0.54795 -8.5,-2.6476 -8.5,-6.3692 0,-1.5801 0.4735,-3.1647 1.0508,-3.5215 1.2271,-0.75839 -2.4133,-4.2397 -5.8008,-5.5488 -2.4343,-0.94078 -2.9286,-3.7842 -1.2148,-6.9863 1.1383,-2.127 4.9363,-2.5534 8.0214,-0.90234 2.1624,1.1573 6.5639,-0.64293 9.6641,-3.9512 0.9784,-1.0441 4.2998,-2.5544 7.3789,-3.3555 7.8216,-2.0348 9.0623,-2.9105 11.9,-8.3945 1.9873,-3.8401 3.0402,-4.8508 5.1309,-4.9297 3.4013,-0.12838 7.1339,-3.5497 6.2851,-5.7617 -0.3512,-0.91502 -0.1168,-2.2935 0.5215,-3.0625 0.7608,-0.9167 0.8128,-1.6141 0.1504,-2.0234 -1.2279,-0.75884 0.081,-4.5765 2.9512,-8.6074 l 1.9882,-2.791 -5.5507,-2.0781 c -6.8288,-2.555 -7.117,-2.5571 -7.7657,-0.0762 -0.6871,2.6273 -4.8252,2.6472 -6.4589,0.0312 -0.6761,-1.0827 -2.6736,-2.3432 -4.4395,-2.8008 -2.5418,-0.65864 -3.3974,-1.5484 -4.1035,-4.2734 -1.2062,-4.6551 -0.2334,-9.8201 2.293,-12.174 3.5641,-3.3205 0.079,-9.2171 -6.1895,-10.471 -1.5466,-0.30931 -2.8125,-0.90613 -2.8125,-1.3262 0,-0.42007 -1.6875,-1.0694 -3.75,-1.4434 -2.0625,-0.374 -4.4998,-1.6462 -5.416,-2.8262 -1.4973,-1.9285 -1.9194,-2.0096 -4.1817,-0.79883 -3.543,1.8961 -5.1702,0.91271 -7.1777,-4.3438 -0.9608,-2.5157 -2.3591,-4.5742 -3.1094,-4.5742 -0.9248,0 -1.3652,-1.2882 -1.3652,-4 0,-3.7077 -0.2036,-4 -2.7812,-4 -2.171,0 -3.0289,-0.65771 -3.9122,-2.998 -0.6224,-1.6488 -1.9579,-3.2559 -2.9687,-3.5723 -1.0107,-0.3164 -2.7379,-1.0694 -3.8379,-1.6738 -1.1,-0.60442 -3.35,-1.3765 -5,-1.7148 -2.0331,-0.41685 -3.0977,-1.2942 -3.3047,-2.7207 -0.4574,-3.1528 -3.5825,-1.8448 -6.6426,2.7793 -2.1663,3.2735 -3.1322,3.9004 -6.0078,3.9004 -1.8847,0 -3.705,0.45 -4.0449,1 -0.3399,0.55 -1.5442,1 -2.6758,1 -1.6074,0 -1.9353,-0.46627 -1.5,-2.1309 0.7248,-2.7718 -1.9413,-5.4313 -5.039,-5.0254 -1.3143,0.17224 -3.0982,-0.2746 -3.9629,-0.99219 -0.8646,-0.71758 -2.7536,-1.1868 -4.1973,-1.043 -1.9869,0.19789 -3.3133,-0.61175 -5.4609,-3.3301 -2.6802,-3.3923 -2.7601,-3.7681 -1.4356,-6.7852 1.3844,-3.1535 1.5126,-15.204 0.2735,-25.627 -0.2899,-2.4382 -0.1461,-4.6882 0.3203,-5 0.4665,-0.31175 1.3125,-1.4145 1.8789,-2.4512 0.7984,-1.4615 0.5923,-2.3217 -0.918,-3.832 -1.6461,-1.6461 -1.8396,-2.748 -1.25,-7.1152 0.3837,-2.8421 1.0901,-5.9159 1.5703,-6.8301 0.7261,-1.3824 -0.1108,-1.9948 -4.9785,-3.6387 -5.3963,-1.8224 -6.2727,-1.8644 -11.238,-0.53516 -9.6321,2.5785 -18.637,0.35087 -26.076,-6.4531 -2.3707,-2.1682 -6.556,-5.3299 -9.3007,-7.0254 -4.9615,-3.0649 -5.0023,-3.0721 -7.0645,-1.1348 -1.4981,1.4074 -3.4952,1.9492 -7.1914,1.9492 -4.5092,0 -5.364,-0.34673 -7.1894,-2.9102 -1.1393,-1.6001 -1.8308,-3.5337 -1.5372,-4.2988 0.3397,-0.88516 -0.7462,-2.0011 -2.9843,-3.0684 -1.6386,-0.7814 -3.3292,-1.1616 -4.9121,-1.1641 z"/> ' +
'  <path class="region" id="Fès-Meknès" d="m 3604.6,467.31 c -5.9685,0.0562 -6.6744,0.28135 -7.1739,2.2715 -0.4594,1.8304 -2.407,2.7485 -11.394,5.375 -5.9615,1.7422 -11.524,3.027 -12.361,2.8555 -0.8377,-0.17158 -2.11,0.42982 -2.8282,1.3359 -1.3134,1.6572 -21.035,6.8516 -26.012,6.8516 -1.5543,0 -3.1474,0.88647 -4.0449,2.25 -3.6322,5.5185 -16.81,17.646 -22.627,20.824 l -6.2695,3.4258 -1.748,-2.1406 c -1.282,-1.5697 -2.1866,-1.8936 -3.3926,-1.2188 -1.1838,0.66248 -3.542,-0.0459 -8.4277,-2.5293 -5.2939,-2.6909 -7.4097,-4.4548 -9.627,-8.0293 -1.563,-2.5197 -3.0912,-4.582 -3.3965,-4.582 -0.8025,0 -9.5499,7.1798 -10.92,8.9629 -0.7086,0.92229 -0.8271,2.1316 -0.3027,3.1113 1.3781,2.5751 -0.05,5.9021 -4.5528,10.602 -3.6392,3.7982 -5.0671,4.5513 -10.596,5.582 -3.5143,0.65523 -8.7268,1.132 -11.582,1.0606 -4.9239,-0.1233 -5.2227,0.0166 -5.8106,2.6934 -0.3409,1.5521 -1.2028,3.0447 -1.916,3.3184 -0.7132,0.27368 -1.5746,1.8867 -1.914,3.584 -0.3741,1.8703 -1.2352,3.0859 -2.1836,3.0859 -1.6565,0 -7.0987,-2.5767 -14.396,-6.8164 -6.0893,-3.5376 -12.556,-3.7629 -16.772,-0.58398 -4.8675,3.671 -6.6904,3.1875 -8.1191,-2.1543 -0.9994,-3.7366 -1.8317,-4.8122 -4.6231,-5.9785 -4.1093,-1.717 -5.7936,-1.7877 -20.787,-0.88086 -11.622,0.70292 -11.741,0.68669 -15.184,-1.9395 -1.9086,-1.4557 -3.8542,-2.6465 -4.3242,-2.6465 -0.4699,0 -2.3438,-1.244 -4.1641,-2.7637 -3.6396,-3.0384 -6.0764,-8.7671 -6.0996,-14.34 -0.01,-1.9818 -0.299,-6.3076 -0.6445,-9.6133 l -0.627,-6.0098 -4.2343,1.2734 c -6.734,2.0266 -15.025,2.7835 -17.281,1.5762 -1.632,-0.8734 -2.7461,-0.57767 -5.8711,1.5586 -2.1213,1.4502 -5.8398,3.2378 -8.2617,3.9746 -2.4219,0.7368 -5.7969,2.3851 -7.5,3.6621 -2.4905,1.8674 -4.2701,2.3012 -9.0957,2.2168 -3.3,-0.0577 -6.5288,-0.43316 -7.1758,-0.83399 -1.4967,-0.92729 -12.55,3.124 -13.658,5.0059 -0.5726,0.9721 -1.7479,1.2136 -3.7519,0.77344 -2.0652,-0.4536 -3.9038,-0.0323 -6.2852,1.4394 -1.8511,1.144 -4.2111,2.0917 -5.2461,2.1055 -1.0351,0.0138 -3.8553,1.8842 -6.2656,4.1582 l -4.3809,4.1348 -0.3359,9.5918 c -0.1838,5.2748 -0.2923,10.265 -0.2422,11.09 0.05,0.825 0.2404,7.125 0.4238,14 0.2967,11.119 0.09,13.068 -1.875,17.639 -2.1616,5.0306 -2.3121,5.1522 -7.207,5.7422 -2.75,0.33149 -6.4363,0.60655 -8.1914,0.61133 -3.5229,0.01 -5.1454,1.5714 -3.4219,3.2949 1.8403,1.8403 1.2836,3.5857 -2.1367,6.6973 -2.7049,2.4607 -4.1147,2.9619 -8.4102,2.9863 -4.5163,0.0257 -5.4857,0.41296 -7.748,3.1016 -1.9261,2.289 -2.3485,3.5147 -1.6582,4.8047 0.5618,1.0496 0.5661,2.3011 0.012,3.1777 -0.5032,0.79537 -0.9213,2.6289 -0.9297,4.0762 -0.019,3.1958 -5.3733,8.7768 -9.1543,9.541 -1.9083,0.38572 -3.0532,1.5904 -4.1386,4.3535 -1.643,4.1826 -6.3633,7.2537 -13.09,8.5156 -2.0762,0.3895 -4.9799,1.718 -6.4531,2.9531 -4.3742,3.6672 -10.107,6.3324 -12.471,5.7969 -1.9368,-0.43892 -1.839,-0.18377 0.791,2.0684 1.65,1.4129 3.3375,2.5857 3.75,2.6055 1.5023,0.072 0.763,5.0352 -0.75,5.0352 -0.825,0 -1.5,0.67815 -1.5,1.5078 0,1.2582 0.3319,1.3015 2,0.25977 1.5932,-0.995 2.4039,-0.99653 3.9863,-0.008 1.0926,0.6823 2.6676,1.2402 3.5,1.2402 0.8325,0 1.5137,0.45418 1.5137,1.0078 0,0.55364 1.1033,1.9647 2.4512,3.1367 1.348,1.172 2.7549,3.5171 3.1269,5.2109 0.372,1.6938 1.0397,3.7683 1.4844,4.6113 4.0844,7.7432 4.6898,10.491 2.584,11.734 -0.7447,0.43983 -1.8856,1.8113 -2.5352,3.0488 -0.705,1.343 -2.1135,2.25 -3.4922,2.25 -6.111,0 -7.3771,8.844 -1.5566,10.873 1.6814,0.58616 2.9375,1.743 2.9375,2.707 0,2.2451 -3.6618,8.0762 -5.5195,8.7891 -0.8139,0.31231 -1.4805,1.5354 -1.4805,2.7168 0,1.8518 -0.3791,2.049 -2.75,1.4258 -1.5125,-0.39761 -4.2917,-0.70191 -6.1758,-0.67578 -1.8841,0.0261 -4.2522,-0.39615 -5.2637,-0.9375 -1.9597,-1.0488 -2.1052,-0.85455 -3.2421,4.3379 -0.4293,1.9606 -2.3657,3.8664 -6.834,6.7285 -7.3183,4.6876 -10.979,5.1164 -13.309,1.5606 -1.6202,-2.4728 -1.629,-2.4722 -13.99,-1.8457 l -12.369,0.62695 -1.1269,-2.9043 c -0.6197,-1.5964 -0.8967,-5.2219 -0.6153,-8.0586 l 0.5117,-5.1582 -4.4062,1.9492 c -3.331,1.4734 -4.8804,1.6956 -6.3516,0.9082 -1.0704,-0.57285 -2.839,-1.043 -3.9297,-1.043 -1.4217,0 -2.4574,-1.2435 -3.6601,-4.3926 -1.67,-4.373 -1.6948,-4.3888 -5.8321,-3.8613 -2.2854,0.29135 -4.2523,0.60056 -4.3691,0.6875 -0.1168,0.0869 0.4457,1.4263 1.25,2.9766 2.5331,4.8826 1.9246,6.129 -4.3262,8.8398 -5.7375,2.4883 -11.211,7.9122 -11.211,11.111 0,2.4572 7.0649,13.552 9.8828,15.52 1.4396,1.0053 3.7422,2.1066 5.1172,2.4473 1.5435,0.3824 3.4126,2.2299 4.8848,4.8281 l 2.3847,4.207 -2.1543,1.7441 -2.1523,1.7441 5.0176,4.9414 c 2.7605,2.7173 5.021,5.3382 5.0234,5.8242 0,0.48599 1.3508,2.9078 2.9961,5.3828 1.6453,2.475 2.9938,5.3033 2.9961,6.2852 0.01,2.3736 -2.8998,6.7148 -4.4941,6.7148 -1.5371,0 -2.7547,3.5016 -2.5215,7.25 0.1406,2.2587 -0.2444,2.7514 -2.1543,2.7578 -1.5368,0.005 -2.7448,0.90908 -3.5606,2.666 -1.5273,3.2894 -0.6947,4.4344 5.2578,7.2324 5.7294,2.6931 7.8952,5.864 6.5039,9.5234 -1.3252,3.4854 -1.4651,3.1463 1.8692,4.5273 1.5924,0.65959 4.3564,3.0191 6.1445,5.2441 l 3.252,4.0469 -2.2657,5.125 c -1.2462,2.8196 -2.9319,8.4908 -3.7461,12.602 -1.3485,6.809 -1.9665,7.9981 -6.9355,13.365 -4.779,5.1618 -5.3741,6.256 -4.8066,8.8398 0.7315,3.3303 -2.1429,15.249 -4.0625,16.842 -0.9531,0.79098 -0.6981,2.3308 1.1445,6.8926 1.7154,4.2469 2.4546,8.2708 2.6699,14.529 l 0.2988,8.6562 -4.8203,2.623 c -5.4608,2.9722 -5.6671,4.5497 -0.6894,5.2773 3.0605,0.44738 3.527,0.94496 4.4375,4.7188 0.5597,2.3197 1.5722,4.7714 2.25,5.4492 0.6778,0.6778 1.2324,1.8131 1.2324,2.5234 0,0.7103 0.9,1.854 2,2.541 1.1,0.687 2,1.8464 2,2.5762 0,0.83406 0.6853,1.1099 1.8438,0.74219 1.0574,-0.33561 2.8687,0.21362 4.25,1.2891 4.9394,3.8461 15.794,7.6397 24.906,8.7051 1.375,0.16077 2.725,0.37728 3,0.48047 0.275,0.10319 3.1577,0.25304 6.4062,0.33203 5.5044,0.13384 6.0132,0.34893 7.4532,3.166 0.8499,1.6626 2.9153,3.9174 4.5918,5.0098 1.6765,1.0924 3.4942,2.9941 4.0371,4.2266 0.5429,1.2325 1.5651,2.2402 2.2715,2.2402 0.7063,0 1.7795,1.0876 2.3847,2.416 0.6053,1.3284 1.9841,2.6467 3.0664,2.9297 1.4653,0.3832 1.8018,1.0424 1.3125,2.584 -0.3844,1.211 -0.2142,2.0703 0.4102,2.0703 1.4131,0 1.2964,4.1052 -0.332,11.693 l -1.3301,6.1934 2.7578,2.6406 c 2.2595,2.1648 2.8815,3.8429 3.4473,9.3066 0.6252,6.0367 1.0776,7.06663 4.7988,10.90003 4.5701,4.7083 9.7653,6.7702 19.228,7.6347 5.2686,0.4813 7.0376,0.1254 14.453,-2.9101 9.7355,-3.9851 12.045,-4.2193 14.527,-1.4766 1.4656,1.6195 1.6961,3.1271 1.2636,8.25 -0.8054,9.5376 -3.9579,16.889 -8.2304,19.19 -2.9178,1.5714 -3.4967,2.4203 -3.3985,4.9863 0.2674,6.9893 1.2472,9.0433 4.875,10.219 3.6632,1.1869 4.7231,3.157 4.9063,9.1152 0.069,2.2319 -0.5233,3.6302 -1.9004,4.4902 -2.7433,1.7132 -2.5832,2.1164 2.0547,5.1856 4.7175,3.1219 11.95,13.719 11.936,17.488 -0.01,1.4274 -1.14,5.0229 -2.5214,7.9903 -1.3815,2.9675 -2.2988,5.6075 -2.0391,5.8672 0.2598,0.2598 3.0821,-1.949 6.2715,-4.9082 10.414,-9.6614 9.8894,-9.3531 12.738,-7.4864 5.8316,3.821 11.56,0.8128 11.56,-6.0703 0,-2.8322 0.5545,-3.5346 4.25,-5.3808 2.3375,-1.1678 6.5546,-3.6867 9.3711,-5.5977 l 5.1211,-3.4746 -1.8711,-6.0117 c -1.029,-3.3064 -1.8711,-6.3475 -1.8711,-6.7578 0,-0.4104 1.9488,-2.7321 4.3301,-5.1602 2.3813,-2.4282 5.1459,-5.6719 6.1426,-7.207 0.9967,-1.535 3.692,-3.8915 5.9902,-5.2383 3.9492,-2.3144 4.8596,-2.4277 16.607,-2.0605 6.8363,0.2137 15.897,0.7188 20.135,1.123 l 7.7051,0.7344 2.1679,-3.6758 c 2.4776,-4.1993 4.0424,-4.202 5.2949,-0.01 2.6863,8.9916 4.4128,12.291 9.1153,17.406 4.4484,4.8387 5.5051,6.7983 7.3535,13.648 2.6582,9.8514 2.6733,11.433 0.1582,16.363 -3.3041,6.4766 -2.8701,7.3629 5.25,10.721 8.3894,3.4691 14.836,5.2011 23.193,6.2285 5.0373,0.6192 7.3217,0.2972 15,-2.1094 10.062,-3.1538 16.43,-3.1133 26.057,0.168 4.8533,1.6542 5,1.8201 5,5.6035 0,5.0395 2.2433,7.827 11,13.672 11.649,7.7754 14.924,10.424 26.469,21.408 11.717,11.148 19.241,21.352 27.295,37.016 3.7254,7.2452 4.6927,8.387 8.2617,9.75 5.4314,2.0743 6.1497,2.0044 15.139,-1.457 4.285,-1.65 8.344,-3 9.0195,-3 0.6755,0 3.7761,1.5002 6.8906,3.334 5.2475,3.0897 5.9844,3.2611 10.045,2.332 l 4.3809,-1.0019 v -4.961 c 0,-4.3117 0.6713,-5.9577 5.1289,-12.582 2.8205,-4.1916 6.5928,-9.1961 8.3828,-11.121 4.5786,-4.9238 11.856,-15.484 20.367,-29.557 9.4014,-15.544 20.063,-28.692 28.18,-34.754 9.6253,-7.1879 13.568,-11.405 15.473,-16.551 3.9932,-10.785 10.712,-21.913 16.766,-27.77 3.3372,-3.228 8.1392,-7.9055 10.672,-10.394 5.2121,-5.1223 11.235,-8.9746 14.031,-8.9746 1.0373,0 2.4747,0.8293 3.1934,1.8438 0.7187,1.0143 3.7816,2.6448 6.8066,3.623 3.025,0.9782 10.225,3.792 16,6.252 l 10.5,4.4726 12.5,-0.6836 c 12.552,-0.6861 19.828,-1.9918 69.5,-12.475 26.566,-5.6066 34.547,-8.6219 46.256,-17.478 7.4849,-5.6617 9.2441,-7.9742 9.2441,-12.148 0,-6.14593 -19.259,-31.80303 -29.371,-39.12903 -4.7209,-3.42 -49.428,-45.186 -59.475,-55.561 -5.0072,-5.1711 -5.0957,-7.2689 -0.4316,-10.203 2.1542,-1.3552 3.2223,-2.8309 3.2695,-4.5137 0.094,-3.3467 4.2513,-7.8983 7.875,-8.623 1.9844,-0.39689 3.5218,-1.6836 4.7598,-3.9824 1.0056,-1.8674 2.1493,-3.3945 2.5429,-3.3945 0.3936,0 3.4422,-2.5232 6.7735,-5.6074 5.8487,-5.4148 6.0566,-5.7784 6.0566,-10.59 0,-4.4484 0.475,-5.5364 4.4238,-10.143 2.4328,-2.8377 6.3703,-6.2373 8.75,-7.5547 2.3797,-1.3174 5.6277,-3.9276 7.2188,-5.8008 2.7153,-3.1965 2.8219,-3.6467 1.7265,-7.3027 l -1.1679,-3.8945 -24.725,0.13086 c -23.306,0.12341 -25.03,0.004 -30.014,-2.0547 -2.9079,-1.2015 -6.612,-2.1836 -8.2305,-2.1836 -6.9218,0 -18.693,-7.5545 -22.976,-14.746 -1.2962,-2.176 -3.7581,-4.0541 -7.4649,-5.6934 -3.4246,-1.5145 -5.9536,-3.373 -6.6406,-4.8809 -0.6341,-1.3916 -3.2174,-3.4241 -6.0274,-4.7402 -2.9776,-1.3946 -6.1922,-3.9797 -8.1464,-6.5527 -5.5736,-7.3383 -8.873,-6.4627 -12.551,3.3301 -1.8909,5.0348 -3.6768,7.7869 -16.676,25.678 -3.3,4.5419 -7.5611,10.561 -9.4688,13.377 -2.9023,4.2844 -4.3972,5.4597 -9.1679,7.1992 -4.7846,1.7446 -6.1239,2.7973 -8.3281,6.5586 -4.7655,8.1317 -9.2946,11.883 -18.074,14.965 l -8.041,2.8223 -6.498,9.0918 -6.4981,9.0918 3.1758,2.75 c 1.7465,1.5125 4.266,2.75 5.5996,2.75 2.2229,0 6.8008,4.5279 6.8008,6.7266 0,0.44422 -1.9277,3.0505 -4.2832,5.791 -2.3555,2.7406 -5.0663,6.2199 -6.0234,7.7324 -0.9572,1.5125 -2.6394,2.75 -3.7403,2.75 -2.366,0 -4.2269,-4.0646 -3.3886,-7.4043 0.4028,-1.6052 -0.3976,-3.5282 -2.7481,-6.6016 -1.8243,-2.3853 -3.7664,-4.4749 -4.3164,-4.6426 -0.55,-0.16768 -1.675,1.1474 -2.5,2.9219 -1.1743,2.5259 -2.2087,3.2949 -4.7637,3.541 -2.6853,0.25868 -3.5325,0.96026 -4.7871,3.9629 -2.5961,6.2132 -4.0857,7.2227 -10.654,7.2227 -3.285,0 -7.1798,-0.66374 -8.7969,-1.5 -2.2674,-1.1725 -3.4387,-1.257 -5.3574,-0.38281 -3.5262,1.6067 -11.016,-1.4314 -14.371,-5.8301 -1.4201,-1.8619 -4.5368,-4.5316 -6.9257,-5.9316 -5.3239,-3.12 -5.5308,-5.1324 -1.4102,-13.732 1.6135,-3.3675 3.2111,-7.5275 3.5508,-9.2441 0.5689,-2.8753 0.4303,-3.085 -1.7715,-2.6641 -3.1223,0.59688 -7.7129,-4.6348 -7.7129,-8.791 0,-2.8547 0.1231,-2.9258 5.25,-2.9648 l 5.25,-0.0391 -2.8125,-1.5234 c -1.5465,-0.83837 -2.6637,-2.0588 -2.4824,-2.7109 0.4784,-1.7204 24.803,-13.567 27.988,-13.631 1.4811,-0.0297 4.2524,-0.97601 6.1601,-2.1016 l 3.4688,-2.0469 -2.045,-7.5195 c -2.4245,-8.9194 -2.2497,-9.4371 6.3633,-18.953 6.6696,-7.3689 10.333,-15.663 9.9082,-22.434 -0.5339,-8.5135 -0.3889,-10.521 1.2969,-17.902 1.6023,-7.0158 4.8387,-12.098 7.7051,-12.098 0.5217,0 0.9492,-0.40923 0.9492,-0.91016 0,-0.50094 2.0973,-1.9273 4.6602,-3.168 l 4.6601,-2.2559 -2.6601,-2.1211 c -3.0166,-2.4054 -3.4649,-6.0894 -1.2579,-10.357 1.6661,-3.2219 2.4513,-8.5007 3.0762,-20.688 0.2539,-4.95 0.6442,-10.125 0.8653,-11.5 0.9794,-6.0896 2.8138,-15.248 3.3183,-16.562 0.3836,-0.99954 -0.166,-1.4372 -1.8047,-1.4375 -1.2964,-2.8e-4 -4.7238,-0.90028 -7.6172,-2 -2.8934,-1.0997 -6.1718,-2 -7.2832,-2 -2.4225,0 -3.6161,-2.5023 -2.0781,-4.3555 0.6068,-0.73111 0.8461,-1.5856 0.5313,-1.9004 -0.3148,-0.3148 -0.069,-1.5111 0.5449,-2.6582 0.9795,-1.8303 0.8355,-2.0881 -1.1699,-2.1016 -3.7799,-0.0253 -5.1089,-1.555 -5.336,-6.1465 -0.118,-2.3855 -0.5422,-5.5819 -0.9433,-7.1016 -1.114,-4.2203 0.8349,-5.809 6.8847,-5.6113 6.7566,0.22079 9.3415,-0.70837 11.024,-3.9609 1.964,-3.798 0.9809,-11.905 -1.5411,-12.705 -1.0302,-0.32696 -1.873,-0.99146 -1.873,-1.4785 0,-1.615 2.3066,-5.9805 3.1602,-5.9805 1.4614,0 0.9066,-5.2317 -0.6778,-6.3906 -1.3519,-0.98879 -1.335,-1.5786 0.1641,-5.3945 1.2129,-3.0874 1.3797,-4.5891 0.5957,-5.373 -2.0511,-2.0511 0.8612,-5.8334 6.5723,-8.5352 6.7403,-3.1886 11.481,-8.0981 13.674,-14.164 0.923,-2.5531 2.4242,-6.1139 3.334,-7.9121 1.5909,-3.1442 1.5625,-3.4418 -0.7344,-7.7715 -2.0113,-3.7913 -2.2077,-4.9017 -1.2383,-7.0293 0.9132,-2.0042 0.8408,-3.1258 -0.3496,-5.4277 -2.9962,-5.7941 -1.1422,-10.58 3.1641,-8.1699 2.122,1.1875 5.3359,-0.2045 5.3359,-2.3106 0,-2.0197 3.7879,-4.3903 6.0645,-3.7949 1.0644,0.27835 1.9355,1.0812 1.9355,1.7832 0,1.766 2.3268,2.4902 8,2.4902 7.0224,0 8,-0.60868 8,-4.9844 0,-2.074 0.6541,-5.3356 1.4531,-7.248 1.3971,-3.3437 6.9418,-9.0652 9.6641,-9.9727 0.9716,-0.32386 0.7514,-1.1448 -0.8477,-3.1777 -1.186,-1.5078 -2.6732,-4.3072 -3.3047,-6.2207 -1.0436,-3.162 -0.8205,-4.1681 2.4434,-11.041 3.0399,-6.4011 3.5918,-8.6177 3.5918,-14.436 0,-10.17 -0.334,-10.312 -23.09,-9.7148 l -18.033,0.47265 -1.8438,-3.6113 c -1.0483,-2.055 -1.6287,-4.7346 -1.3457,-6.2148 0.4962,-2.5957 0.4811,-2.6031 -6.123,-2.541 z"/> ' +
'  <path class="region" id="Casablanca-Settat" d="m 2726.9,804.25 c -0.4001,0.0132 -0.8002,0.19928 -1.2266,0.53711 -0.6634,0.52563 -2.9924,1.2779 -5.1738,1.6719 -2.1815,0.39395 -5.1211,1.5394 -6.5332,2.5449 -1.4121,1.0055 -4.3517,2.1273 -6.5332,2.4922 -4.3243,0.72338 -10.467,3.5011 -10.467,4.7344 0,0.42493 -0.6866,0.77344 -1.5254,0.77344 -0.8389,0 -4.362,2.6388 -7.8301,5.8652 -3.4681,3.2264 -7.6191,6.7027 -9.2246,7.7246 -3.0582,1.9466 -6.4199,5.2704 -6.4199,6.3477 0,1.6368 -6.3164,4.0618 -11.369,4.3652 -3.8364,0.23037 -6.335,0.97221 -7.875,2.3359 -16.05,14.213 -30.661,25.361 -33.236,25.361 -0.8726,0 -3.7227,1.083 -6.334,2.4062 -5.297,2.6842 -13.233,4.2119 -15.924,3.0664 -4.9508,-2.1075 -12.786,1.2773 -24.262,10.479 -1.375,1.1025 -2.8672,2.0151 -3.3164,2.0274 -0.4492,0.0122 -2.2492,1.0926 -4,2.4023 -4.2821,3.2033 -16.914,9.6191 -18.94,9.6191 -0.8943,0 -1.9097,-0.45763 -2.2558,-1.0176 -0.3901,-0.63119 -1.6602,-0.2828 -3.3438,0.91602 -1.4936,1.0635 -5.1744,3.1333 -8.1797,4.6016 -3.0053,1.4683 -8.1648,4.1939 -11.465,6.0566 -3.6212,2.044 -7.405,3.399 -9.5449,3.416 -2.3901,0.019 -5.9749,1.4875 -11,4.5098 -4.0999,2.4658 -8.0233,4.4908 -8.7168,4.5 -1.3015,0.0172 -3.433,0.92822 -18.738,8.0059 -8.9131,4.1217 -14.488,6.2196 -19.69,7.4062 -1.4794,0.33753 -4.8544,1.9571 -7.5,3.5996 -2.6455,1.6426 -7.5021,3.4833 -10.791,4.0898 -3.2889,0.6065 -7.2029,1.736 -8.6992,2.5098 -1.4962,0.77376 -3.7981,1.4062 -5.1152,1.4062 -2.914,0 -4.8152,2.0286 -7.6914,8.2051 -1.362,2.9247 -4.3318,6.5011 -7.8516,9.457 -3.1138,2.615 -6.7871,5.8561 -8.1621,7.2012 -6.7443,6.5978 -20.732,14.114 -26.299,14.131 -2.7205,0.008 -7.5064,-2.7593 -7.875,-4.5547 -0.5227,-2.5464 -6.7021,2.21 -9.8223,7.5606 -1.631,2.7969 -3.4539,4.6215 -4.8164,4.8203 -1.2056,0.1759 -3.4283,1.9698 -4.9395,3.9863 -1.5112,2.01653 -4.2105,5.14953 -5.998,6.96293 -3.6076,3.6599 -3.8696,4.8281 -1.7188,7.6719 2.1553,2.8496 1.8722,7.8253 -0.5312,9.3262 -1.1,0.687 -2,1.8225 -2,2.5234 0,1.3082 -0.7391,2.3512 -8.1797,11.553 -7.6369,9.4441 -10.804,13.621 -11.496,15.156 -0.3719,0.825 -2.1593,3.2525 -3.9707,5.3945 -1.8113,2.142 -3.0392,4.3058 -2.7285,4.8086 0.9735,1.575 -4.8295,8.8554 -8.1719,10.252 -1.7551,0.7333 -3.9293,2.3938 -4.8301,3.6894 -2.0013,2.8785 -24.683,27.673 -33.623,36.754 -3.575,3.6316 -9.5126,9.077 -13.193,12.102 -3.6809,3.0246 -6.7184,6.2875 -6.75,7.25 -0.032,0.9625 -0.4121,1.75 -0.8476,1.75 -0.4354,0 -2.463,1.575 -4.5039,3.5 -2.0408,1.925 -3.9622,3.5 -4.2715,3.5 -0.3092,0 -1.6995,1.35 -3.0879,3 -1.3883,1.65 -3.1884,3 -4.0019,3 -0.8136,0 2.8253,3.6202 8.0878,8.0449 5.2625,4.4247 9.5684,8.3425 9.5684,8.7071 0,0.3647 -1.511,2.2568 -3.3574,4.205 -3.9673,4.1862 -7.2669,13.114 -5.2617,14.236 0.6966,0.3898 1.8772,2.5584 2.623,4.8183 0.8124,2.4615 2.5865,4.9704 4.4258,6.2578 1.6885,1.1821 3.7293,3.067 4.5351,4.1895 0.8057,1.1225 3.3932,4.1125 5.75,6.6445 2.3567,2.532 4.2852,5.0234 4.2852,5.5352 0,1.144 10.851,6.3765 13.203,6.3672 0.9367,0 2.9252,0.5514 4.4199,1.2324 2.1604,0.9844 2.8028,0.9844 3.1309,0 0.227,-0.681 1.2917,-1.2383 2.3652,-1.2383 1.0735,0 2.9479,-0.6217 4.1661,-1.3809 3.1242,-1.9471 11.679,-2.8947 13.381,-1.4824 1.0482,0.8699 1.7992,0.7532 3.1817,-0.498 2.3342,-2.1124 4.1523,-2.0911 4.1523,0.049 0,1.3667 0.5222,1.1961 2.75,-0.8926 6.2159,-5.8278 15.311,-3.5511 23.373,5.8477 3.7395,4.3598 4.8578,6.5804 5.8497,11.623 1.2923,6.5699 7.3238,23.476 10.824,30.338 1.1389,2.2322 3.7265,5.3218 5.75,6.8653 3.3938,2.5885 3.6377,3.1132 3.1465,6.7753 -0.4996,3.7254 -0.4418,3.8407 0.9433,1.8633 0.8117,-1.159 2.3354,-2.1074 3.3848,-2.1074 1.0495,0 2.3898,-0.9 2.9785,-2 0.7762,-1.4504 2.0941,-2 4.7949,-2 2.5475,0 4.0904,-0.5875 4.8848,-1.8594 0.6694,-1.0719 2.8889,-2.1357 5.2402,-2.5117 2.6253,-0.4198 4.0801,-1.1756 4.0801,-2.1211 0,-1.5437 0.1987,-1.6055 11.77,-3.5898 6.4216,-1.1013 7.495,-1.6063 9.1934,-4.3321 2.5272,-4.0559 11.742,-12.897 15.537,-14.906 1.65,-0.8736 6.375,-3.0188 10.5,-4.7656 10.011,-4.2395 22.957,-10.751 25.797,-12.977 1.2633,-0.9898 3.6497,-2.096 5.3027,-2.459 3.5385,-0.7772 10.933,-8.0805 14.658,-14.478 1.4413,-2.475 3.6604,-5.7715 4.9317,-7.3262 2.8943,-3.5398 2.9928,-8.3799 0.3281,-16.125 -3.2414,-9.4213 -3.6322,-17.237 -1.1524,-23.092 2.4814,-5.8586 5.0984,-16.659 5.1192,-21.125 0.029,-6.138 3.3135,-11.583 9.4394,-15.65 6.0428,-4.0123 9.5762,-4.2262 9.5762,-0.582 0,1.0802 0.675,2.2225 1.5,2.5391 0.825,0.3166 1.5,1.2125 1.5,1.9922 0,0.7798 1.1601,1.8592 2.5781,2.3984 2.1919,0.8333 2.4851,1.4092 1.9512,3.8398 -0.6784,3.0888 1.6962,6.6817 8.2598,12.494 1.8092,1.6021 3.2142,3.6389 3.123,4.5254 -0.2879,2.796 2.4401,8.1894 3.8652,7.6425 0.7284,-0.2795 2.9892,1.237 5.0235,3.3692 2.0343,2.1323 5.2742,4.561 7.1992,5.3984 1.925,0.8374 5.3,3.7426 7.5,6.4551 6.0534,7.4636 14.783,13.515 19.848,13.758 8.6039,0.413 9.3128,0.9581 10.02,7.7188 0.4671,4.4688 1.1661,6.4536 2.6348,7.4824 1.0995,0.77 1.998,2.0206 1.998,2.7773 0,0.7568 0.8774,1.654 1.9492,1.9942 1.0719,0.3402 2.2099,1.4406 2.5293,2.4472 0.3195,1.0065 1.439,2.8214 2.4883,4.0313 1.0493,1.2099 1.6858,2.7781 1.4141,3.4863 -0.2753,0.7173 0.4117,1.5244 1.5507,1.8223 1.1245,0.2941 2.5174,1.7799 3.0957,3.3008 1.9584,5.1511 9.8125,9.3727 17.5,9.4062 2.9572,0.013 5.969,0.6801 7.3125,1.6211 1.5567,1.0903 3.3401,1.4009 5.6016,0.9766 2.6762,-0.502 3.4339,-1.1983 3.9141,-3.5996 0.5002,-2.5006 1.0694,-2.9766 3.5625,-2.9766 1.6625,0 3.5435,0.7699 4.2754,1.75 0.913,1.2227 2.7144,1.7566 5.9785,1.7734 3.1834,0.016 5.35,0.6383 6.8008,1.9512 2.0447,1.8505 2.2356,1.8579 4.8281,0.1719 5.1948,-3.3783 9.5636,-4.9049 11.17,-3.9043 0.8411,0.5239 3.7793,4.3603 6.5293,8.5273 3.7892,5.7417 5.5676,7.5962 7.3438,7.6543 1.4713,0.048 2.5392,0.8289 2.871,2.0977 0.4071,1.5569 0.8373,1.7648 1.8672,0.9101 1.5543,-1.29 7.0342,-0.352 8.1621,1.3965 0.4158,0.6446 1.6559,1.6847 2.7559,2.3125 1.178,0.6724 1.902,2.0081 1.7617,3.25 -0.1952,1.7274 0.3019,2.1094 2.75,2.1094 1.6435,0 2.9883,0.4361 2.9883,0.9688 0,0.5327 0.592,0.7408 1.3164,0.4628 0.7288,-0.2796 3.3453,1.695 5.8555,4.42 4.6921,5.0938 7.4286,6.2641 15.469,6.6152 3.5501,0.1551 4.4976,-0.2659 6.6465,-2.959 1.771,-2.2196 5.0357,-4.1189 11.129,-6.4746 7.3337,-2.8353 8.6955,-3.7224 9.1133,-5.9336 0.2701,-1.4298 1.4542,-5.2996 2.6309,-8.5996 9.3336,-26.174 9.6403,-28.372 5.3281,-38.123 -2.7554,-6.2306 -2.655,-8.377 0.3926,-8.377 2.1467,0 2.5446,-1.6524 3.6386,-15.074 l 0.6172,-7.5742 -3.3183,-2.295 c -1.8253,-1.2623 -4.2184,-3.575 -5.3184,-5.1406 -1.1,-1.5657 -3.7191,-4.8601 -5.8203,-7.3203 l -3.8203,-4.4727 1.6718,-5.8125 c 0.9197,-3.1961 2.4795,-7.6396 3.4668,-9.875 1.0033,-2.2718 1.5687,-5.2507 1.2813,-6.7539 -0.3502,-1.8322 0.6154,-4.9989 3.0293,-9.9355 4.6364,-9.4815 5.9455,-14.772 5.2168,-21.08 -0.8979,-7.7729 -1.4236,-25.766 -0.8008,-27.389 0.4188,-1.0915 1.6574,-1.2744 5.2715,-0.7773 l 4.7227,0.6484 3.2265,-6.1953 c 1.8216,-3.5001 3.0039,-7.0426 2.7168,-8.1406 -0.2796,-1.0691 0.5773,-4.2775 1.9043,-7.1289 1.6473,-3.5396 2.2329,-6.1586 1.8457,-8.2559 -0.4897,-2.6527 -0.084,-3.4414 2.9766,-5.7754 3.1338,-2.3903 3.4302,-2.9957 2.5761,-5.2421 -1.6245,-4.2729 -1.175,-6.3197 1.5352,-7 2.2147,-0.5558 2.5018,-1.1576 2.5137,-5.2696 0.01,-2.5529 1.351,-8.4656 2.9863,-13.141 1.6353,-4.6754 2.979,-9.2306 2.9863,-10.12303 0.021,-2.6009 8.4243,-9.6421 12.967,-10.865 6.2888,-1.6934 6.6762,-3.339 4.9981,-21.314 -1.8631,-19.957 -1.8947,-34.858 -0.078,-37.045 1.5478,-1.863 0.7634,-3.4142 -3.6875,-7.2988 -1.8191,-1.5877 -2.5859,-3.4647 -2.9453,-7.2051 -0.4418,-4.5983 -0.213,-5.328 2.5098,-8.0508 1.6471,-1.6471 4.2881,-3.3046 5.8711,-3.6836 4.0221,-0.963 5.4246,-2.2854 7.5781,-7.1426 1.7557,-3.9599 1.77,-4.3885 0.2227,-6.75 -1.1063,-1.6883 -2.5645,-2.5215 -4.4141,-2.5215 -1.5194,0 -3.3011,-0.64871 -3.959,-1.4414 -0.8749,-1.0542 -3.6612,-1.4573 -10.373,-1.502 -14.855,-0.0988 -17.762,-0.45223 -19.135,-2.3301 -1.7236,-2.3571 -3.0215,-2.1686 -4.9121,0.7168 -1.0046,1.5331 -1.3885,3.511 -1.0293,5.3066 0.6869,3.4348 -1.506,5.732 -4.5508,4.7656 -1.1264,-0.35749 -2.0496,-0.95854 -2.0508,-1.334 0,-0.37543 -1.3506,-2.2566 -2.998,-4.1816 -1.6474,-1.925 -3.0105,-4.175 -3.0293,-5 -0.019,-0.825 -0.6945,-2.3738 -1.5019,-3.4414 -0.8075,-1.0676 -1.4688,-2.9244 -1.4688,-4.127 0,-1.2025 -0.675,-2.747 -1.5,-3.4316 -1.0236,-0.84955 -1.5,-3.1219 -1.5,-7.1543 0,-4.3299 -0.4008,-6.0626 -1.5,-6.4844 -0.9103,-0.34932 -1.5,-1.8606 -1.5,-3.8457 0,-2.2177 -0.678,-3.7228 -2.1074,-4.6719 -1.8786,-1.2474 -1.9952,-1.8094 -1.0684,-5.166 0.7971,-2.8869 0.6865,-4.9837 -0.4707,-8.9726 -0.8305,-2.8628 -1.7585,-6.7498 -2.0625,-8.6387 -0.3244,-2.0156 -1.95,-4.8736 -3.9355,-6.918 -2.4765,-2.5499 -3.2164,-4.0423 -2.7578,-5.5664 0.5101,-1.6952 0.383,-1.8498 -0.6856,-0.83203 -1.4375,1.3691 -5.7614,1.6472 -7.5273,0.48438 -0.6136,-0.40409 -2.0704,-2.6158 -3.2364,-4.916 -1.8246,-3.5994 -3.0145,-5.1118 -4.2148,-5.0723 z"/> ' +
'  <path class="region" id="Béni Mellal-Khénifra" d="m 2933.3,914 c -2.2668,0 -2.3262,0.23476 -2.3262,9.2598 0,8.1764 -0.2339,9.4049 -2,10.508 -1.1296,0.70547 -2,2.3326 -2,3.7383 0,1.426 -1.4529,4.0962 -3.4023,6.2539 -3.2528,3.6005 -3.3371,3.8893 -1.9375,6.5605 1.359,2.5937 1.275,3.1124 -1.1543,7.2578 l -2.6153,4.4668 3.5547,6.6953 c 4.5827,8.6302 4.6457,12.627 0.3047,19.217 -3.3633,5.1055 -6.6511,7.4029 -9.1973,6.4258 -2.9066,-1.1154 -8.6156,1.6795 -10.195,4.9922 -1.6716,3.5054 -6.2746,6.625 -9.7773,6.625 -2.2808,0 -4.5801,3.3727 -4.5801,6.7188 0,2.4338 -3.0087,5.2812 -5.5801,5.2812 -1.6369,0 -2.922,-1.1853 -4.6094,-4.25 -1.4898,-2.7059 -3.1532,-4.3668 -4.5761,-4.5703 -1.2293,-0.1757 -2.2344,-0.8895 -2.2344,-1.5879 0,-1.5235 -4.2168,-3.5918 -7.3242,-3.5918 -1.2268,0 -3.1182,-0.5937 -4.2031,-1.3184 -5.5454,-3.7047 -12.002,-5.0669 -24.973,-5.2714 -7.15,-0.1128 -13.978,-0.2522 -15.174,-0.3086 -1.1953,-0.056 -3.536,-1.2494 -5.2032,-2.6524 -2.771,-2.3316 -3.3785,-2.4577 -7.0585,-1.4668 -5.4049,1.4554 -9.7089,6.2813 -11.609,13.018 -0.8534,3.025 -2.1512,7.075 -2.8848,9 -0.7336,1.925 -1.6624,6.3679 -2.0644,9.873 -0.5869,5.1191 -1.1143,6.4725 -2.6758,6.8809 -1.3365,0.3495 -1.7288,1.0143 -1.2578,2.127 1.8261,4.3138 1.5568,5.8311 -1.4825,8.3886 -1.8294,1.5393 -2.8524,3.1823 -2.5214,4.045 0.3066,0.7991 -0.8276,4.5066 -2.5196,8.2382 -1.692,3.7316 -2.8236,7.5785 -2.5156,8.5489 0.3151,0.9929 -0.9928,4.8463 -2.9902,8.8125 -3.6611,7.2699 -5.9962,8.985 -10.6,7.7812 -1.6506,-0.4316 -1.9107,-0.1661 -1.4024,1.4356 0.3431,1.0808 0.1479,2.5376 -0.4336,3.2382 -0.7267,0.8755 -0.7747,5.259 -0.1543,14.014 1.0101,14.252 0.2524,18.521 -5.0527,28.463 -2.6324,4.933 -2.748,5.5441 -1.2617,6.6309 1.4892,1.089 1.4018,1.5965 -0.9532,5.6152 -1.424,2.4299 -3.4368,7.1407 -4.4726,10.469 -2.1083,6.7741 -1.5941,8.4782 3.9844,13.23 1.4831,1.2634 2.9445,3.0637 3.248,4.002 0.3036,0.9384 2.1122,2.7669 4.0195,4.0625 1.9072,1.2957 3.7348,3.1959 4.0606,4.2226 0.3259,1.0268 0.1088,7.167 -0.4805,13.645 -0.8945,9.8315 -1.3951,12 -3.0293,13.129 -1.8579,1.2834 -1.8762,1.5384 -0.3613,5 3.2307,7.3816 3.4423,12.593 0.8691,21.461 -1.3067,4.5033 -3.7587,11.268 -5.4492,15.031 -1.6906,3.7637 -3.0742,7.7148 -3.0742,8.7812 0,1.0664 -0.611,3.3864 -1.3574,5.1562 -1.1756,2.7878 -2.4309,3.5967 -9.3926,6.0411 -4.4198,1.5519 -9.0192,3.8675 -10.221,5.1465 l -2.1836,2.3261 2.7383,4.3399 2.7402,4.3398 -1.834,10.512 c -2.1317,12.22 -2.1399,12.511 -0.4277,16.662 1.149,2.7856 1.0017,4.1135 -1.2871,11.5 -4.8494,15.65 -5.2751,21.281 -2.0684,27.352 0.581,1.1 1.2482,6.1561 1.4825,11.236 l 0.4257,9.2364 4.6719,4.4785 c 2.5696,2.4622 5.8468,5.2463 7.2832,6.1875 3.7772,2.4749 5.0725,6.4117 2.7461,8.3496 -2.6726,2.2262 -2.7622,16.661 -0.1074,17.356 1.1897,0.311 1.7925,1.4229 1.7949,3.3124 0,3.5979 3.4889,9.3975 6.0469,10.066 1.0724,0.2804 1.9492,1.0962 1.9492,1.8125 0,0.7163 0.6341,2.5776 1.4082,4.1347 4.6519,9.3568 4.5172,10.33 -1.4219,10.33 -3.6721,0 -3.9337,0.2047 -4.5625,3.5566 -0.5323,2.8374 -0.2379,4.0123 1.4551,5.8145 2.9293,3.1181 2.6893,4.1714 -1.6113,7.0937 -3.1982,2.1732 -4.8352,2.5352 -11.447,2.5352 -5.4983,0 -10.042,0.7338 -15.807,2.5547 -8.7744,2.7719 -10.584,2.6259 -15.697,-1.2676 -2.7594,-2.1012 -4.0604,-2.3816 -9.748,-2.1055 l -6.5645,0.3184 v 3.25 c 0,2.6907 -0.3891,3.2566 -2.2519,3.291 -1.2375,0.023 -3.9714,1.5644 -6.0762,3.4238 -3.3786,2.9847 -3.6924,3.6318 -2.6738,5.5352 1.3754,2.5698 0.6615,5 -1.4688,5 -0.8886,0 -1.5312,0.8802 -1.5312,2.0977 0,1.9719 0.3566,2.0575 5.9179,1.4121 5.423,-0.6294 6.0149,-0.5053 7.086,1.4961 0.6429,1.2012 1.0746,4.5048 0.9589,7.3398 -0.1156,2.8351 -0.1543,5.6356 -0.086,6.2227 0.068,0.587 2.5388,1.8287 5.4922,2.7597 5.2194,1.6453 5.4294,1.8554 7.4961,7.5235 1.1694,3.2071 2.916,6.5181 3.8808,7.3574 1.0354,0.9007 4.8097,1.7947 9.211,2.1836 4.1034,0.3626 7.8066,1.2094 8.2344,1.8828 1.2354,1.9445 0.9337,7.1584 -0.5977,10.32 -0.7734,1.597 -1.7262,5.3793 -2.1172,8.4043 -0.8235,6.3702 -2.9089,11 -4.9551,11 -2.0771,0 -5.9057,9.0371 -4.4179,10.428 0.8215,0.7678 1.2773,0.7172 1.6054,-0.1777 0.2521,-0.6875 1.4795,-1.25 2.7286,-1.25 1.9716,0 2.5683,1.0215 4.5293,7.75 1.2422,4.2625 2.9007,8.425 3.6835,9.25 1.0116,1.066 3.4368,1.4833 8.3868,1.4434 6.7267,-0.054 7.0814,-0.1833 10.357,-3.7598 2.1795,-2.3795 3.9477,-3.4902 4.9453,-3.1074 0.8539,0.3276 2.8795,3.4332 4.502,6.9004 l 2.9511,6.3046 4.6016,-0.8593 c 2.5309,-0.4728 5.2642,-0.6057 6.0742,-0.2949 4.7338,1.8165 37.238,2.6845 51.029,1.3632 7.9418,-0.7612 10.33,-1.36 11.606,-2.9082 1.944,-2.3589 4.8659,-17.942 5.1718,-27.582 l 0.2227,-7 3,0.1699 c 1.65,0.093 5.925,0.4751 9.5,0.8496 l 6.5,0.6817 9.7246,-7.4883 c 8.0857,-6.2273 15.293,-10.461 26.775,-15.728 0.825,-0.3784 1.6445,-1.6547 1.8203,-2.836 0.3317,-2.2297 3.5267,-3.014 4.6797,-1.1484 1.4063,2.2754 4.5328,0.8114 7.5098,-3.5156 3.1632,-4.5976 9.7854,-8.7101 18.49,-11.484 2.2,-0.7012 6.475,-2.5012 9.5,-4 3.025,-1.4988 7.3,-3.2961 9.5,-3.9941 2.2,-0.698 13.798,-5.7013 25.773,-11.117 11.976,-5.416 24.535,-10.561 27.91,-11.436 12.816,-3.3208 22.962,-8.0023 30.748,-14.184 1.5447,-1.2263 5.3889,-7.1723 8.5411,-13.215 5.6669,-10.863 5.7889,-11.008 10.961,-12.943 2.8769,-1.0764 6.8002,-2.2514 8.7187,-2.6113 1.9185,-0.36 5.2311,-1.6331 7.3614,-2.8281 3.8717,-2.1718 3.8738,-2.176 3.6035,-8.0098 -0.1812,-3.9122 0.1944,-6.3831 1.1406,-7.498 0.7763,-0.9148 2.3839,-3.2891 3.5723,-5.2754 l 2.1621,-3.6114 -3.3535,-4.3886 c -2.8478,-3.7261 -4.5972,-4.8397 -11.584,-7.375 -4.5259,-1.6423 -8.3921,-3.2492 -8.5918,-3.5723 -0.6308,-1.0207 2.5224,-23.215 4.0625,-28.596 0.8114,-2.8347 1.4903,-6.4347 1.5098,-8 0.038,-3.0528 1.1574,-5.385 4.7011,-9.7969 2.1172,-2.6358 2.5323,-2.7454 7.8106,-2.0859 7.6245,0.9526 18.908,-2.9958 22.176,-7.7598 1.2081,-1.7613 5.5409,-6.6906 9.6289,-10.953 7.0277,-7.3277 7.671,-7.7508 11.791,-7.7695 10.088,-0.046 17.995,-1.8934 21.582,-5.043 3.1429,-2.7596 3.8745,-2.9715 8.1152,-2.3535 2.5634,0.3736 6.2352,1.4619 8.1602,2.4199 3.0675,1.5266 13.764,4.9961 15.404,4.9961 0.3279,0 0.5957,-0.8584 0.5957,-1.9082 0,-1.1541 -2.5107,-3.8838 -6.3516,-6.9023 -5.2581,-4.1322 -6.6363,-5.86 -8,-10.029 -0.9061,-2.7703 -1.6484,-5.5267 -1.6484,-6.127 0,-0.6004 1.8,-3.3691 4,-6.1523 2.2,-2.7832 4,-5.4504 4,-5.9278 0,-0.4773 -3.15,-1.8065 -7,-2.9531 -5.4768,-1.6311 -7,-2.4969 -7,-3.9824 0,-1.0443 0.45,-2.1777 1,-2.5176 1.4786,-0.9138 1.2158,-5.5097 -0.623,-10.906 -1.2531,-3.6779 -1.3725,-5.3104 -0.5235,-7.1739 0.7436,-1.632 0.7838,-3.2425 0.1231,-4.9804 -0.5373,-1.413 -0.9766,-2.9252 -0.9766,-3.3594 0,-0.4342 5.5125,-1.0463 12.25,-1.3613 20.737,-0.9695 26.804,-4.466 23.76,-13.692 -0.6791,-2.0577 -0.9131,-4.7561 -0.5196,-5.9961 0.6232,-1.9636 1.1868,-2.1745 4.3633,-1.6425 2.006,0.336 4.659,0.8871 5.8965,1.2265 1.9836,0.5441 2.25,0.25 2.25,-2.4941 0,-1.7119 0.9628,-5.8932 2.1387,-9.291 1.8708,-5.406 1.9788,-6.6173 0.8672,-9.6914 -1.207,-3.3379 -1.1272,-3.6413 1.6113,-6.0938 3.6754,-3.2915 6.6837,-16.264 5.1016,-21.998 -1.2841,-4.6539 -1.2355,-8.5792 0.1718,-13.865 0.8443,-3.1712 0.8599,-5.3947 0.057,-8.3769 -0.8675,-3.2215 -0.7784,-5.0288 0.4355,-8.7402 0.8415,-2.5729 1.2919,-5.5909 1,-6.7071 -0.3342,-1.2782 0.3714,-3.1077 1.9063,-4.9433 1.3403,-1.6029 2.7415,-3.886 3.1132,-5.0743 0.3717,-1.1883 1.7441,-2.8605 3.0508,-3.7168 1.5231,-0.9979 2.2049,-2.213 1.8985,-3.3847 -0.2629,-1.0053 1.3512,-5.6094 3.5859,-10.23 2.2347,-4.621 4.0625,-9.1072 4.0625,-9.9687 0,-2.8288 -6.8883,-11.867 -11.422,-14.986 -5.7834,-3.979 -6.7123,-6.7362 -3.207,-9.5312 1.6325,-1.3017 2.6289,-3.086 2.6289,-4.709 0,-2.1966 -0.5978,-2.7548 -3.75,-3.4941 l -3.75,-0.8789 -1.6914,-8.4395 c -1.8495,-9.2313 -1.7275,-9.6522 3.6113,-12.527 4.1999,-2.2618 7.5801,-10.094 7.5801,-17.562 0,-5.8022 -0.5517,-5.9674 -8.3613,-2.5137 -7.4247,3.2836 -11.055,4.0096 -18.639,3.7305 -9.3557,-0.3445 -14.832,-2.4429 -21.207,-8.125 -5.4969,-4.8993 -5.5616,-5.0204 -5.9649,-11.356 -0.3487,-5.4758 -0.872,-6.934 -3.6172,-10.061 -3.693,-4.2061 -3.562,-3.339 -1.6914,-11.086 1.8807,-7.789 1.8604,-8.1182 -0.6386,-10.617 -1.1649,-1.1649 -2.4298,-3.2896 -2.8125,-4.7207 -0.4344,-1.6243 -1.6095,-2.8176 -3.127,-3.1758 -1.3369,-0.31561 -2.5952,-1.422 -2.7949,-2.459 -0.4602,-2.3895 -2.1347,-4.0714 -4.9434,-4.9629 -1.2119,-0.38462 -2.2593,-1.1199 -2.3281,-1.6328 -0.069,-0.51293 -0.1812,-1.4941 -0.25,-2.1816 -0.08,-0.80379 -2.6238,-1.4673 -7.125,-1.8574 -10.048,-0.87086 -19.399,-3.3425 -27.9,-7.377 -4.0742,-1.9334 -8.2386,-3.5233 -9.2539,-3.5332 -1.8548,-0.0181 -7.4145,-5.9658 -8.6309,-9.2324 -1.0146,-2.7249 -2.683,-2.0732 -4.2421,1.6582 -0.7832,1.8746 -1.9962,3.6019 -2.6973,3.8379 -1.0211,0.3436 -1.0277,0.72917 -0.027,1.9414 1.9284,2.3374 2.6371,10.113 1.293,14.186 -1.0819,3.2781 -0.9724,3.8997 1.1328,6.5156 1.2799,1.5904 3.5986,3.1624 5.1524,3.4922 3.9126,0.83041 3.1667,2.5091 -3.5215,7.9336 -5.9594,4.8334 -10.123,6.5962 -11.254,4.7656 -0.3675,-0.59457 -3.0044,-1.0886 -5.8594,-1.0996 -9.0055,-0.0349 -18.035,-1.7396 -19.537,-3.6875 -0.9845,-1.2765 -1.518,-1.4328 -1.8516,-0.54297 -0.5757,1.5358 -4.9339,1.6562 -5.8574,0.16211 -0.4838,-0.78285 -0.9749,-0.78285 -1.7578,0 -0.5979,0.59792 -2.1217,1.0879 -3.3867,1.0879 -1.5759,0 -2.3008,0.58639 -2.3008,1.8613 0,1.4979 -1.0236,1.9826 -5.25,2.4902 -14.06,1.6888 -22.59,-0.22936 -23.764,-5.3438 -0.8343,-3.6346 -4.5065,-5.1394 -10.736,-4.4004 -4.0593,0.48156 -5.8456,0.232 -7.8809,-1.1016 -1.8137,-1.1884 -3.7228,-1.5486 -6.1406,-1.1562 -6.8857,1.1174 -7.3301,0.19767 -6.875,-14.236 0.2217,-7.0338 0.9068,-13.73 1.5235,-14.883 1.4164,-2.6466 0.3958,-3.009 -10.25,-3.6426 -6.1443,-0.36564 -8.3537,-0.92213 -10.064,-2.5293 -1.2055,-1.1326 -3.322,-2.0586 -4.7031,-2.0586 -1.3857,0 -3.5634,-1.1205 -4.8594,-2.5 -1.2917,-1.375 -3.3947,-2.5 -4.6738,-2.5 z"/> ' +
'  <path class="region" id="Drâa-Tafilalet" d="m 3331.6,1038.3 c -0.2845,0.036 -0.775,0.4219 -1.6015,1.17 -1.6296,1.4747 -3.0355,1.6677 -8.25,1.1386 -3.4571,-0.3507 -12.585,-0.8851 -20.285,-1.1875 -12.859,-0.5049 -14.26,-0.3858 -17.195,1.4668 -1.7576,1.1093 -3.9944,3.2776 -4.9707,4.8164 -0.9763,1.5387 -3.4446,4.4524 -5.4844,6.4766 l -3.709,3.6816 1.9219,6.3184 c 1.0569,3.4758 1.9255,6.6157 1.9297,6.9765 0.012,1.0136 -9.6006,7.6797 -14.522,10.07 -3.959,1.9235 -4.4681,2.5758 -5.0527,6.4746 -0.818,5.4549 -4.1147,8.2988 -9.6192,8.2988 -2.162,0 -4.838,-0.4865 -5.9472,-1.0801 -1.7491,-0.9361 -2.8569,-0.2725 -8.3477,5 -3.4821,3.3436 -6.7579,6.0801 -7.2793,6.0801 -0.5213,0 -0.7373,1.1 -0.4805,2.4434 0.3848,2.0133 -0.1226,2.6938 -2.8886,3.8808 -3.5562,1.5261 -7.8555,5.1601 -7.8555,6.6387 0,0.4864 -1.1255,2.22 -2.5,3.8535 -2.0466,2.4322 -2.2277,3.0738 -1,3.5449 2.1815,0.8371 1.8361,3.546 -0.7168,5.6133 -2.0048,1.6233 -2.2357,2.7871 -2.4082,12.16 -0.258,14.025 -0.2619,14.88 -0.1113,22.615 0.2261,11.618 -1.1805,18.964 -3.9805,20.799 -2.1294,1.3953 -2.3507,2.0873 -1.7734,5.5039 0.468,2.7701 0.052,5.6618 -1.4258,9.9317 -1.1465,3.313 -2.0912,7.4842 -2.0996,9.2695 -0.026,5.5469 -1.0483,6.2501 -7.4063,5.0977 -5.0892,-0.9225 -7.1088,-0.4157 -4.5781,1.1484 1.3556,0.8378 1.2668,7.8197 -0.1387,10.904 -2.1901,4.8067 -11.379,7.582 -25.131,7.5898 l -9.7696,0.01 0.6055,2.4082 c 0.3322,1.3237 0.086,3.3709 -0.5449,4.5508 -0.8915,1.6656 -0.8128,3.196 0.3535,6.8437 0.8262,2.5838 1.4185,6.4644 1.3145,8.6231 l -0.1895,3.9238 6.3008,1.877 c 3.4654,1.0317 6.5354,2.4869 6.8222,3.2343 0.6284,1.6375 -1.9112,6.7571 -5.7226,11.539 -2.6072,3.2713 -2.7098,3.7552 -1.5938,7.3867 0.7365,2.3967 2.6634,5.0788 5.0313,7 2.1113,1.713 4.9693,4.0283 6.3496,5.1465 1.8157,1.4709 2.6546,3.3229 3.0352,6.6992 0.4872,4.3225 0.3442,4.7139 -1.9395,5.2871 -3.0426,0.7636 -12.806,-1.6917 -19.941,-5.0136 -6.8818,-3.2037 -8.8589,-3.1405 -12.236,0.3847 -2.5467,2.6583 -3.6953,2.9913 -14.34,4.1778 l -11.57,1.291 -6.0976,6.0762 c -3.3538,3.3422 -7.761,8.1446 -9.793,10.672 -3.1074,3.8646 -4.9252,5.031 -11.445,7.3457 -6.0934,2.1632 -8.7591,2.6186 -12.451,2.1289 -4.3697,-0.5797 -4.8783,-0.4065 -7.3027,2.4746 -1.4333,1.7035 -2.6055,4.3319 -2.6055,5.8399 0,1.508 -0.6361,4.9596 -1.4141,7.6719 -1.2536,4.3701 -2.4512,11.217 -3.9257,22.459 l -0.461,3.5254 7.8653,2.7852 c 6.2257,2.2052 8.4927,3.5773 10.871,6.5801 5.4329,6.8596 5.6087,8.559 1.5938,15.299 -3.5938,6.033 -4.5399,11.372 -2.3965,13.516 0.623,0.623 0.8949,1.7498 0.6055,2.5039 -0.7357,1.9173 -11.452,7.3824 -16.098,8.209 -2.1221,0.3775 -5.7963,1.628 -8.166,2.7793 -3.7665,1.8299 -4.7677,3.0738 -7.9648,9.8867 -5.2694,11.229 -8.2747,14.863 -16.09,19.455 -8.5947,5.0502 -14.683,7.6076 -24.812,10.424 -4.3413,1.2069 -17.166,6.3703 -28.5,11.473 -11.334,5.1023 -23.982,10.638 -28.107,12.303 -30.209,12.192 -29.712,11.931 -34.262,18.09 -3.8294,5.1838 -4.1123,5.3575 -7.8555,4.8554 -2.1355,-0.2864 -3.8828,-0.1468 -3.8828,0.3086 0,0.4555 -4.6125,3.1087 -10.25,5.8965 -5.9579,2.9462 -14.228,8.2057 -19.75,12.561 -8.9575,7.0643 -9.7856,7.4919 -14.5,7.4843 -2.75,0 -6.6875,-0.4 -8.75,-0.8789 l -3.75,-0.8711 v 6.2852 c 0,8.6498 -3.5833,25.53 -5.9141,27.861 -1.0214,1.0218 -4.0452,2.2927 -6.7207,2.8223 -6.4013,1.2672 -46.794,1.111 -55.082,-0.2129 -6.8419,-1.093 -9.6896,-0.6894 -12.496,1.7734 -2.6618,2.3358 -4.0631,1.0723 -7.2891,-6.5742 l -2.9882,-7.084 -2.0059,2.459 c -3.6184,4.439 -19.285,5.5927 -23.686,1.7442 -0.9243,-0.8084 -2.6227,-4.5743 -3.7754,-8.3692 -1.932,-6.3608 -2.2458,-6.8053 -4.0137,-5.7011 -1.5668,0.9783 -2.277,0.8715 -3.8809,-0.5801 -1.8896,-1.71 -2.1143,-1.6825 -5.9707,0.7519 -5.2118,3.2901 -7.2087,6.2141 -6.5371,9.5723 1.0321,5.1603 -3.79,10.947 -15.439,18.523 -5.7957,3.7694 -13.705,8.184 -17.576,9.8106 -6.1087,2.5666 -7.8563,2.8817 -13.221,2.3808 -5.1552,-0.4814 -6.4511,-0.2793 -7.8086,1.2207 -0.8952,0.9892 -3.5327,2.3589 -5.8613,3.043 -2.3286,0.684 -5.6052,2.5521 -7.2793,4.1504 -2.7828,2.6569 -3.8543,2.9609 -12.5,3.5469 -10.033,0.6802 -12.955,1.5522 -12.955,3.8672 0,0.7869 -0.7353,2.9731 -1.6348,4.8593 -1.3376,2.8051 -2.8818,3.9328 -8.4824,6.1875 -3.7659,1.516 -7.5907,3.5757 -8.498,4.5782 -0.9073,1.0026 -3.6152,2.7745 -6.0176,3.9375 -3.0416,1.4724 -4.3672,2.7357 -4.3672,4.1582 0,1.1235 -0.9607,3.5964 -2.1348,5.4961 -1.9069,3.0854 -2.479,3.3883 -5.3613,2.8476 -3.6848,-0.6913 -5.1888,0.5576 -6.0566,5.0293 -0.421,2.1698 0.21,4.1154 2.4941,7.6895 1.6817,2.6316 3.0586,5.5043 3.0586,6.3828 0,0.8785 0.907,3.0635 2.0156,4.8574 1.6165,2.6155 1.8146,3.7911 1,5.9336 -0.5586,1.4694 -1.0156,5.7628 -1.0156,9.541 0,3.7783 -0.6251,9.9372 -1.3887,13.686 -0.7636,3.7485 -1.6892,11.177 -2.0566,16.51 l -0.668,9.6953 2.9082,1.5039 c 2.5277,1.3072 3.5891,1.3236 8.1328,0.125 6.7628,-1.784 14.796,-2.1961 16.164,-0.8281 1.1858,1.1858 -0.9903,3.6189 -6.7656,7.5606 -4.37,2.9827 -5.5193,6.3964 -3.6387,10.818 1.9114,4.4942 0.9935,10.17 -2.3555,14.561 -1.436,1.8828 -2.4349,3.5628 -2.2207,3.7324 0.2141,0.1697 7.1315,0.8631 15.373,1.541 8.2417,0.6778 15.139,1.3851 15.326,1.5723 0.8051,0.8052 3.2784,13.589 3.8516,19.904 0.5144,5.6663 0.3473,7.035 -0.9512,7.7617 -1.4213,0.7954 -1.3836,1.5826 0.3926,7.9922 2.2774,8.2184 3.8344,11.523 8.5508,18.16 1.8741,2.6375 3.1313,5.2437 2.793,5.791 -1.3227,2.1402 -8.5605,5.9141 -11.342,5.9141 -2.4125,0 -3.8485,1.1513 -8.086,6.4766 -4.5754,5.75 -6.2602,7.0109 -15.025,11.25 -6.5557,3.1705 -10.056,5.4452 -10.42,6.7734 -0.8917,3.2551 -0.6547,8.5035 0.5684,12.586 l 1.1445,3.8164 3.1055,-1.5917 c 1.7085,-0.8757 4.412,-2.6815 6.0078,-4.0137 4.1272,-3.4454 4.9384,-2.0703 7.6387,12.951 2.0646,11.485 2.6689,13.247 6.0918,17.803 4.1876,5.5731 5.7992,11.123 3.8964,13.416 -0.6597,0.7948 -0.8897,1.9497 -0.5097,2.5645 0.9974,1.6139 -3.3627,5.934 -8.0176,7.9433 l -4,1.7266 5.6152,0.7051 c 4.9063,0.616 6.3088,0.3642 11.106,-1.9883 l 5.4902,-2.6914 5.2344,4.1367 c 2.8789,2.2756 5.5748,4.1367 5.9902,4.1367 0.4154,0 1.569,-0.9 2.5645,-2 2.5486,-2.8162 4.1364,-2.5285 11.367,2.0586 6.2435,3.9606 6.4963,4.0278 13.002,3.3867 l 6.6368,-0.6543 4.7539,9.3906 c 4.9715,9.8177 10.018,16.384 11.762,15.307 0.6278,-0.388 0.7933,-3.0242 0.4297,-6.8106 -0.3263,-3.3974 -0.5223,-10.212 -0.4356,-15.144 0.1461,-8.3027 0.3679,-9.2058 2.9824,-12.184 1.553,-1.7688 5.5524,-7.634 8.8887,-13.033 3.3363,-5.399 8.7828,-13.191 12.104,-17.316 3.3212,-4.125 6.7563,-9.1374 7.6328,-11.139 2.5577,-5.8404 4.9216,-6.4991 12.256,-3.4121 3.4137,1.4368 10.125,3.6685 14.914,4.959 4.7887,1.2905 10.282,2.9985 12.207,3.7949 3.2358,1.3388 4.368,1.2274 15,-1.4668 12.695,-3.2169 17.564,-3.1728 22.119,0.1953 l 2.8125,2.0782 2.2032,-2.9766 c 1.9571,-2.6471 2.2125,-4.2872 2.3105,-14.756 0.061,-6.4773 -0.1946,-12.969 -0.5683,-14.426 -0.9266,-3.6117 0.6457,-4.8516 6.1523,-4.8516 4.5759,0 4.6557,0.057 6.9707,5 1.288,2.75 2.89,5 3.5605,5 2.3579,0 20.993,-4.049 25.572,-5.5566 2.5478,-0.8389 5.4294,-2.4071 6.4043,-3.4844 3.1058,-3.4319 6.9656,-2.5401 10.359,2.3926 2.0588,2.9924 2.8112,5.0529 2.4062,6.6015 -0.65,2.4857 0.9468,4.0066 4.2325,4.0313 2.0755,0.016 7.5685,5.9529 15.586,16.844 2.3071,3.1339 6.3739,7.454 9.0371,9.5996 4.6701,3.7624 4.8418,4.0854 4.8418,9.1075 0,5.2067 -5e-4,5.207 -6.25,10.025 -3.4375,2.6503 -7.7659,6.5349 -9.6191,8.6328 l -3.3711,3.8144 8.8711,9.5039 c 11.665,12.498 16.357,18.533 16.363,21.045 0,1.1304 -1.059,5.1804 -2.3593,9 l -2.3633,6.9434 2.9824,6 c 1.6405,3.3 3.1539,6.1873 3.3633,6.416 0.2093,0.2287 4.698,-0.8578 9.9746,-2.416 8.2369,-2.4325 10.051,-2.6682 12.822,-1.666 1.7754,0.6419 4.3637,1.166 5.7519,1.166 4.0431,0 6.017,2.9654 5.0586,7.5977 -0.7512,3.6309 -1.2045,4.0448 -6.4863,5.9277 -3.1229,1.1133 -7.2972,3.5883 -9.2774,5.5 -3.0542,2.9485 -3.5056,3.9298 -2.9726,6.4746 0.3456,1.65 1.007,7.275 1.4687,12.5 0.4617,5.225 1.5166,12.2 2.3457,15.5 0.8291,3.3 1.7847,10.275 2.1231,15.5 0.3383,5.225 1.3689,12.54 2.289,16.254 l 1.6719,6.752 -3.082,3.248 c -3.2957,3.4729 -6.3047,8.7498 -6.3047,11.057 0,0.7756 1.125,3.0695 2.5,5.0957 2.852,4.2026 3.2264,9.1115 0.9434,12.371 -1.7192,2.4545 -7.2278,15.404 -7.6661,18.022 -0.388,2.3166 9.1495,3.5336 13.58,1.7325 2.2148,-0.9004 8.0712,-1.2033 19.844,-1.0235 12.664,0.1933 17.344,-0.077 19.363,-1.125 1.4646,-0.7599 4.833,-1.3828 7.4843,-1.3828 2.6513,0 6.0358,-0.4625 7.5215,-1.0273 2.0684,-0.7865 4.2519,-0.5753 9.3164,0.9004 7.0616,2.0577 17.451,4.1269 20.723,4.1269 1.0944,0 2.5493,-0.5591 3.2324,-1.2422 0.6832,-0.6832 4.0349,-1.7687 7.4492,-2.4121 3.4144,-0.6435 10.484,-2.3299 15.709,-3.748 5.225,-1.4182 11.94,-2.5827 14.922,-2.5879 3.5883,-0.01 6.0271,-0.558 7.2148,-1.6328 1.9859,-1.7972 18.385,-3.8937 23.144,-2.959 7.2556,1.4247 14.023,3.9668 16.822,6.3222 2.5265,2.1259 2.9763,3.1105 2.5039,5.4727 -0.3168,1.584 -1.6454,4.3218 -2.9531,6.084 -1.9853,2.6753 -4.6543,8.6872 -4.6543,10.484 0,1.5433 7.6588,-1.1514 10.592,-3.7266 1.9128,-1.6795 3.8764,-3.0547 4.3633,-3.0547 0.4869,0 3.0583,2.4107 5.7148,5.3574 2.8843,3.1995 6.0386,5.6482 7.8301,6.0782 1.65,0.3961 3.8176,1.4572 4.8164,2.3574 1.2487,1.1255 3.344,1.5703 6.7109,1.4238 3.2611,-0.1419 5.3258,0.2754 6.1836,1.2481 0.7084,0.8031 1.3804,1.477 1.4922,1.498 0.1118,0.021 1.0511,-1.8754 2.0879,-4.2129 1.7384,-3.9193 23.051,-35.215 46.139,-67.75 14.61,-20.588 14.361,-20.012 12.086,-27.943 -1.3703,-4.7782 0.1062,-8.8849 6.8496,-19.057 3.9572,-5.969 6.6683,-8.9847 9.1055,-10.129 1.9089,-0.8962 4.3839,-2.9993 5.5,-4.6738 1.9792,-2.9695 12.433,-11.643 21.586,-17.908 2.5067,-1.7159 5.1499,-3.8337 5.8731,-4.7051 0.7232,-0.8714 2.201,-1.584 3.2832,-1.584 1.0985,0 10.652,-7.4185 21.627,-16.795 10.813,-9.2377 21.91,-18.645 24.66,-20.904 3.1199,-2.5631 20.963,-12.08 47.453,-25.309 l 42.453,-21.201 38.799,-38.057 38.799,-38.059 10.248,-3.9004 c 5.6362,-2.1455 16.098,-6.0675 23.248,-8.7168 l 13,-4.8184 19.5,-1.1172 c 10.725,-0.6144 22.753,-1.7972 26.728,-2.6289 3.9758,-0.8318 9.1644,-1.4391 11.529,-1.3496 2.3649,0.089 5.3592,-0.4045 6.6543,-1.0976 2.6943,-1.442 9.0415,-0.7446 12.408,1.3633 4.4831,2.807 9.2081,2.8501 13.232,0.1191 2.0497,-1.391 4.2253,-2.5317 4.836,-2.5352 0.6108,0 1.8775,-1.3535 2.8144,-3 0.9369,-1.6465 2.3438,-2.9941 3.127,-2.9941 0.7833,0 1.948,-0.6312 2.5879,-1.4023 0.6399,-0.771 2.3789,-1.7056 3.8632,-2.0782 1.4844,-0.3725 2.9285,-1.0408 3.209,-1.4843 1.1988,-1.8952 11.36,-7.059 12.918,-6.5645 2.7121,0.8608 6.0918,-3.0281 6.0918,-7.0098 0,-1.9035 0.3789,-3.4609 0.8418,-3.4609 1.0586,0 3.1582,-6.8716 3.1582,-10.336 0,-1.4318 -0.9423,-4.41 -2.0938,-6.6192 -1.5515,-2.9766 -2.2361,-6.6177 -2.6464,-14.062 -0.3044,-5.5254 -0.9372,-10.284 -1.4063,-10.574 -1.8902,-1.1682 -0.8026,-4.3828 1.6953,-5.0098 1.7792,-0.4465 2.7231,-1.51 3.125,-3.5195 0.6099,-3.0495 2.9806,-3.8261 5.127,-1.6797 0.9333,0.9333 1.1992,0.8222 1.1992,-0.5 0,-0.935 0.45,-1.6992 1,-1.6992 0.55,0 1,-1.0531 1,-2.3398 0,-1.525 0.8703,-2.7361 2.5,-3.4786 1.7203,-0.7839 2.5,-1.9389 2.5,-3.7031 0,-1.41 0.5625,-3.2338 1.25,-4.0547 3.1144,-3.7186 3.9718,-4.4044 4.8379,-3.8691 0.5095,0.3149 1.1966,-0.2449 1.5273,-1.2422 0.3306,-0.9974 1.4552,-3.7277 2.5,-6.0684 1.1499,-2.5762 1.9813,-6.942 2.1055,-11.062 0.1751,-5.8109 -0.1187,-7.1558 -2.0078,-9.1836 -1.2172,-1.3065 -2.2129,-2.7949 -2.2129,-3.3085 0,-0.5136 -0.675,-0.3742 -1.5,0.3105 -1.2029,0.9983 -1.8439,0.9737 -3.2363,-0.127 -2.7814,-2.1984 -5.1946,-5.2686 -5.2305,-6.6542 -0.018,-0.7048 -0.7082,-1.5409 -1.5332,-1.8575 -0.825,-0.3166 -1.5,-1.2458 -1.5,-2.0664 0,-2.0228 -3.0346,-8.2949 -4.0137,-8.2949 -0.4327,0 -1.1939,1.6875 -1.6914,3.75 l -0.9062,3.75 -5.8067,-0.123 c -5.9921,-0.1273 -8.1279,-1.4711 -6.957,-4.377 0.3325,-0.825 0.7361,-2.85 0.8965,-4.5 0.1603,-1.65 0.3874,-3.45 0.5039,-4 0.5007,-2.3614 -0.1285,-10.115 -0.9219,-11.367 -0.9768,-1.5419 -3.54,-0.4221 -3.7031,1.6172 -0.055,0.6875 -0.1675,2.375 -0.25,3.75 -0.1092,1.8201 -0.7169,2.5 -2.2363,2.5 -1.3962,0 -2.4601,0.9833 -3.211,2.9727 -1.3917,3.687 -3.4477,4.5683 -5.7656,2.4707 -0.9751,-0.8825 -2.8073,-1.4552 -4.0723,-1.2735 -1.8064,0.2595 -2.3065,0.974 -2.332,3.3301 -0.025,2.3225 -0.4849,3 -2.0332,3 -1.8279,0 -2.0252,-0.7644 -2.291,-8.877 -0.2298,-7.0164 0.044,-9.244 1.3047,-10.637 1.6483,-1.8213 1.8894,-3.5769 1.125,-8.1582 -1.0192,-6.1084 -1.8494,-8.8281 -2.6934,-8.8281 -0.4922,0 -1.568,-1.3038 -2.3926,-2.8984 -1.336,-2.5835 -1.332,-3.2358 0.035,-5.9766 0.844,-1.6917 2.9686,-4.2073 4.7226,-5.5898 1.7541,-1.3826 2.6977,-2.5174 2.0957,-2.5235 -1.8807,-0.019 -6.4062,-4.4891 -6.4062,-6.3281 0,-2.5004 2.9583,-6.6836 4.7266,-6.6836 1.1509,0 1.3528,-0.7604 0.8769,-3.2969 -0.7224,-3.8508 3.4682,-13.703 5.8281,-13.703 1.8757,0 4.5684,2.7434 4.5684,4.6543 0,2.588 2.4822,0.8391 2.8164,-1.9844 0.2664,-2.2511 1.0327,-2.8548 4.8281,-3.8105 3.2341,-0.8143 4.7644,-1.8047 5.4082,-3.4981 0.4939,-1.299 1.6745,-2.3613 2.6231,-2.3613 1.3415,0 1.4567,-0.2659 0.5234,-1.1992 -1.5337,-1.5337 -1.7414,-74.348 -0.2148,-75.291 0.5412,-0.3345 23.001,-5.5072 49.912,-11.496 60.976,-13.57 57.104,-12.527 57.104,-15.396 0,-2.3688 8.839,-10.508 21.666,-19.951 3.2575,-2.3981 7.4145,-6.2408 9.2363,-8.541 l 3.3106,-4.1836 -4.3555,0.6133 c -6.306,0.8862 -6.8574,1.1629 -6.8574,3.4394 0,1.918 -4.5676,4.7722 -5.748,3.5918 -1.6831,-1.6831 -14.157,-30.085 -17.365,-39.539 -3.467,-10.216 -3.8831,-12.484 -3.8496,-21 0.021,-5.2507 0.604,-14.047 1.2949,-19.547 1.2558,-9.9963 1.2574,-10.004 8.0176,-19.721 l 6.7637,-9.7188 -5.4317,2.4004 c -7.6147,3.3676 -15.461,8.2514 -20.342,12.658 -4.0236,3.6331 -4.3502,3.7372 -10,3.2325 -3.2123,-0.2869 -7.6398,-1.2109 -9.8398,-2.0547 -23.941,-9.1829 -25.125,-9.5459 -31.5,-9.6699 -5.6326,-0.1095 -6.9721,0.2336 -10.031,2.5742 -1.9415,1.4856 -6.7966,4.09 -10.789,5.789 l -7.2578,3.0899 -2.9217,-2.0842 c -1.6065,-1.1439 -3.8846,-3.4338 -5.0625,-5.0879 -1.9192,-2.6953 -2.0047,-3.3326 -0.8359,-6.1543 0.7173,-1.7318 4.2504,-6.2818 7.8515,-10.109 6.1161,-6.5008 6.3492,-6.9137 3.5469,-6.2754 -5.3292,1.2138 -24.787,1.7759 -32.5,0.9395 l -7.5,-0.8125 -0.3086,-3.7109 c -0.1694,-2.0406 0.1045,-5.2 0.6074,-7.0215 0.5303,-1.9203 0.5462,-4.3053 0.039,-5.6758 -0.8126,-2.1968 -1.2428,-2.3183 -6.1055,-1.7246 -2.8777,0.3513 -6.2332,0.9127 -7.4551,1.2461 -3.3271,0.9076 -5.0193,-3.2762 -2.9472,-7.2832 2.9042,-5.6161 -0.093,-18.572 -7.5313,-32.549 -2.0023,-3.7628 -5.7531,-8.1633 -10.967,-12.871 -8.4481,-7.6282 -11.694,-12.74 -13.82,-21.766 -1.1625,-4.9334 -1.0939,-5.6543 0.8711,-9.1504 l 2.1328,-3.7949 -4.7578,-2.7324 c -8.6947,-4.9943 -15.218,-10.469 -17.272,-14.494 -2.1809,-4.2749 -2.7235,-4.4816 -7.8828,-3.002 -2.9783,0.8542 -4.1323,0.5513 -9.6269,-2.5215 l -6.2422,-3.4902 -7.8438,3.0195 c -9.1352,3.5177 -9.9418,3.5811 -17.144,1.3106 -5.1193,-1.6137 -5.6042,-2.0577 -8.4434,-7.75 -1.6565,-3.321 -5.734,-10.539 -9.0605,-16.039 -9.0953,-15.038 -27.594,-33.205 -45.742,-44.92 -8.5771,-5.5369 -14.494,-12.482 -13.615,-15.982 0.4995,-1.99 -0.046,-2.4418 -4.7481,-3.9239 -7.1277,-2.2468 -10.17,-2.119 -19.35,0.8125 -9.5936,3.0639 -17.711,3.2139 -28.264,0.5196 -8.5074,-2.1721 -21.03,-7.4184 -22.236,-9.3164 -1.3693,-2.1536 -0.821,-6.7029 1.3125,-10.885 1.901,-3.7264 1.9897,-4.6678 0.9492,-9.957 -1.6433,-8.3527 -3.3397,-11.808 -8.0312,-16.348 -3.9603,-3.8324 -8.0176,-11.059 -8.0176,-14.281 0,-0.6429 -0.079,-0.9562 -0.3633,-0.92 z"/> ' +
'  <path class="region" id="Marrakech-Safi" d="m 2497.3,1124.7 c -0.5675,-0.098 -1.6548,0.6075 -3.9863,2.3261 -4.6046,3.3943 -5.2831,5.0617 -7.3223,17.973 -0.6515,4.125 -2.2931,10.425 -3.6465,14 -2.8226,7.4564 -2.6619,12.727 0.6856,22.457 2.9709,8.6352 2.7048,15.233 -0.791,19.564 -1.5436,1.9128 -3.9857,5.5035 -5.4258,7.9785 -3.6581,6.2867 -11.424,13.811 -15.383,14.904 -1.8299,0.5053 -4.5772,1.8039 -6.1055,2.8848 -4.197,2.9682 -21.939,11.643 -29.174,14.266 -7.2496,2.628 -16.537,10.449 -21.311,17.945 -2.4027,3.7731 -3.385,4.5086 -6.0801,4.5508 -10.154,0.1587 -11.856,0.4991 -14.012,2.8027 -1.2113,1.2941 -3.8856,2.6635 -5.9414,3.043 -2.1744,0.4014 -4.1759,1.5082 -4.7851,2.6465 -0.7669,1.433 -2.0992,1.957 -4.9766,1.957 -2.9062,0 -4.2084,0.5209 -5,2 -0.5887,1.1 -1.9786,2 -3.0879,2 -1.3419,0 -2.3667,1.004 -3.0625,3 -0.8808,2.5266 -1.5732,3 -4.3887,3 -4.3172,0 -4.768,-0.8967 -3.3261,-6.623 l 1.1914,-4.7266 -3.6289,-3.0742 c -2.2782,-1.9304 -4.9078,-5.8682 -7.0625,-10.576 -3.1154,-6.8074 -8.6497,-23.391 -10.088,-30.228 -0.7411,-3.5235 -8.1393,-12.067 -12.191,-14.078 -3.7733,-1.8729 -6.9441,-1.2664 -10.477,2.0058 -2.3459,2.1731 -3.2407,2.3697 -8.5,1.8653 -8.9396,-0.8574 -12.592,-0.6618 -15.879,0.8476 -1.65,0.7577 -4.2531,1.9586 -5.7852,2.6699 -2.1966,1.0199 -3.4814,1.0424 -6.0722,0.1055 -1.807,-0.6534 -3.89,-1.1875 -4.6289,-1.1875 -3.0016,0 -15.912,-6.9989 -17.182,-9.3145 -2.4124,-4.3999 -9.274,-12.345 -12.535,-14.514 -2.0852,-1.3864 -3.6239,-3.5328 -4.4082,-6.1504 -0.8399,-2.8033 -1.763,-4.0215 -3.0469,-4.0215 -1.2158,0 -1.8418,-0.7284 -1.8418,-2.1426 0,-4.0058 3.9808,-15.532 5.9941,-17.354 1.1029,-0.9981 2.0059,-2.1326 2.0059,-2.5234 0,-0.3907 -3.413,-3.5342 -7.584,-6.9844 -8.6846,-7.1836 -6.6714,-7.6611 -16.875,4.0039 -6.8625,7.8454 -19.624,19.556 -36.797,33.772 -11.628,9.6258 -12.622,10.706 -11.25,12.223 0.8279,0.9148 1.5059,2.1394 1.5059,2.7207 0,1.8466 2.4651,5.66 6.291,9.7305 3.2073,3.4125 3.709,4.5898 3.709,8.7129 0,8.3008 -4.7139,19.469 -11.258,26.674 -3.0372,3.3439 -3.7726,4.8255 -3.2324,6.5 0.3848,1.1928 0.9219,3.5995 1.1953,5.3496 0.3968,2.5395 1.2442,3.4814 4.1953,4.6622 6.5194,2.6085 7.7373,9.0601 3.6055,19.111 -2.2546,5.4848 -2.3319,6.1854 -0.9766,8.9023 2.8463,5.7055 1.1024,18.43 -3.3125,24.172 -2.331,3.0317 -9.8467,11.872 -11.797,13.877 -1.0156,1.0441 -1.52,3.0552 -3.3398,13.291 -0.4103,2.3082 -1.2207,4.7832 -1.7989,5.5 -0.5781,0.7168 -1.379,2.8777 -1.7812,4.8027 -0.4696,2.2482 -2.7462,5.6517 -6.3652,9.5156 -3.0989,3.3084 -8.5598,9.5491 -12.135,13.869 -3.5752,4.3199 -7.4511,8.8129 -8.6133,9.9843 -1.1623,1.1715 -5.4904,6.4059 -9.6172,11.631 -4.1268,5.2251 -8.4632,10.356 -9.6367,11.404 -1.1735,1.0477 -2.1328,2.3334 -2.1328,2.8555 0,0.522 -3.4875,4.9071 -7.75,9.7461 -4.2625,4.839 -8.875,10.43 -10.25,12.424 -4.1786,6.0579 -11.733,15.786 -16.385,21.102 l -4.4023,5.0293 -0.502,10.971 c -0.3582,7.8153 -1.0672,12.263 -2.4648,15.469 -2.369,5.4342 -9.9059,16.465 -16.451,24.078 -3.4971,4.0675 -4.7949,6.4163 -4.7949,8.6778 0,1.7055 -0.675,3.7765 -1.5,4.6015 -0.825,0.825 -1.5,2.1146 -1.5,2.8672 0,1.6639 -7.415,13.06 -11.365,17.467 -3.3477,3.7346 -5.6856,7.9258 -4.8731,8.7383 0.3139,0.3139 1.5886,0.5703 2.8321,0.5703 5.5968,0 8.8965,10.46 8.1816,25.934 -0.3533,7.6461 -0.9884,10.77 -3.1621,15.56 -1.4959,3.2967 -2.5004,6.8327 -2.2324,7.8575 0.268,1.0249 0.043,3.0344 -0.502,4.4668 -0.701,1.8437 -0.6301,3.2782 0.2422,4.9082 1.0603,1.9812 0.7751,3.4066 -2.0391,10.223 -2.401,5.8154 -3.0942,8.7203 -2.6093,10.928 0.3632,1.6537 0.1756,3.9122 -0.418,5.0214 -0.8989,1.6794 -0.7028,2.2166 1.1816,3.209 3.3273,1.7524 3.783,2.8244 3.7793,8.8926 0,5.2477 1.0645,13.376 2.5235,19.209 0.4634,1.8527 -0.01,4.124 -1.4883,7.1836 -2.3022,4.7556 -2.4877,6.2018 -1.4668,11.357 0.5088,2.5697 1.1387,3.25 3.0098,3.25 1.3014,0 4.163,0.7189 6.3593,1.5977 4.3217,1.7292 5.5668,4.6366 4.8809,11.396 -0.3106,3.0611 -0.039,3.3971 3.9414,4.8633 l 4.2773,1.5742 -0.1699,6.0352 c -0.1136,4.0183 0.4919,7.7033 1.8145,11.033 1.0923,2.75 2.2685,5.7875 2.6132,6.75 0.951,2.6552 6.2162,2.2125 10.246,-0.8613 2.3103,-1.7621 4.1582,-2.4268 5.6836,-2.0469 1.9968,0.4974 2.7746,-0.4231 6.6778,-7.8906 3.9455,-7.5484 4.7177,-8.4512 7.2265,-8.4512 1.9133,0 3.3472,0.8197 4.4942,2.5703 l 1.6836,2.5703 3.4961,-6.6211 c 3.074,-5.8233 3.807,-6.5853 6.0878,-6.3203 2.0919,0.243 2.5863,0.8254 2.5567,3.0156 -0.032,2.3434 0.2795,2.6368 2.2715,2.1368 1.5491,-0.3888 5.0916,0.7743 10.768,3.5351 4.6519,2.2626 9.1192,4.1133 9.9296,4.1133 2.6394,0 6.5158,-2.2595 7.1153,-4.1484 0.3223,-1.0153 1.7936,-2.1132 3.2695,-2.4375 1.4758,-0.3244 3.1336,-0.707 3.6836,-0.8516 0.55,-0.1445 2.7434,0.3453 4.875,1.0879 4.8905,1.7038 4.625,1.7567 4.625,-0.9277 0,-2.7782 2.6189,-6.7227 4.4629,-6.7227 0.7418,0 3.6243,3.0698 6.4062,6.8223 2.7818,3.7525 6.5394,7.6208 8.3497,8.5957 1.8103,0.9749 4.6385,3.5629 6.2851,5.7519 3.4567,4.5955 4.5183,4.6111 14.818,0.2129 3.3977,-1.4509 7.1902,-2.5999 8.4277,-2.5527 1.2375,0.047 3.0375,0.047 4,0 6.7032,-0.3299 25.624,0.297 29.293,0.9707 2.4509,0.4499 5.582,0.5485 6.957,0.2187 2.1444,-0.5143 2.5385,-1.2329 2.7754,-5.0586 0.152,-2.4531 0.7478,-6.8238 1.3223,-9.7109 0.9341,-4.6942 1.4964,-5.515 5.33,-7.7617 2.3578,-1.3818 6.6743,-3.2196 9.5918,-4.086 3.4947,-1.0378 7.6535,-3.5093 12.188,-7.2402 17.875,-14.709 18.001,-14.766 23.303,-10.723 1.9195,1.4641 3.4902,3.335 3.4902,4.1582 0,0.8233 1.1778,2.5897 2.6172,3.9238 1.586,1.4698 2.3837,3.0357 2.0234,3.9746 -0.3337,0.8696 0.273,2.4175 1.3828,3.5273 1.0875,1.0875 1.9766,3.0754 1.9766,4.418 0,1.3425 0.4232,2.7024 0.9395,3.0215 0.5163,0.3191 0.9454,4.1488 0.955,8.5117 0.013,6.0163 0.5166,8.9099 2.0821,11.978 3.0983,6.0731 4.3923,5.2197 3.7734,-2.4902 l -0.5254,-6.5371 3.6367,-1.8828 c 2.0008,-1.0353 5.8723,-4.1685 8.6016,-6.9629 5.3277,-5.4548 7.7165,-6.1558 10.973,-3.2188 2.6843,2.4211 9.9203,4.1387 17.442,4.1387 3.2957,0 7.2602,0.4988 8.8085,1.1074 1.5483,0.6086 7.5395,1.5418 13.314,2.0742 12.91,1.1901 13.19,1.1933 20.113,0.295 3.8078,-0.4941 5.8366,-0.3653 6.3086,0.3984 1.1582,1.8741 11.075,1.3493 14.772,-0.7812 1.819,-1.0483 5.7816,-2.2293 8.8066,-2.625 9.1742,-1.2006 14.098,-3.1538 18.412,-7.3008 3.2886,-3.1614 6.262,-4.6435 15.205,-7.586 l 11.115,-3.6582 5.1699,2.0371 c 2.8439,1.1209 7.3281,2.0391 9.9629,2.0391 2.8094,0 7.3474,1.0398 10.975,2.5137 l 6.1856,2.5136 4.7383,-2.2636 c 3.3571,-1.6039 5.6811,-3.7149 7.9804,-7.2442 3.8645,-5.9319 8.2559,-18.549 8.2559,-23.723 0,-2.3028 0.5852,-4.0249 1.5527,-4.5664 0.8543,-0.4781 2.359,-3.9954 3.3418,-7.8164 2.7742,-10.785 5.4819,-14.228 15.938,-20.262 l 9.0371,-5.2168 -1.6777,-2.9238 c -2.3247,-4.0506 -0.7354,-5.5465 3.8809,-3.6504 1.8849,0.7742 4.8193,1.1948 6.5195,0.9336 2.6639,-0.4092 3.255,-0.078 4.2793,2.3946 0.987,2.3827 2.14,3.0905 6.791,4.1718 3.081,0.7163 6.132,1.5068 6.7813,1.7559 1.269,0.487 3.0636,-2.5436 3.9472,-6.666 0.3607,-1.6827 2.0007,-3.3443 4.8282,-4.8926 2.3548,-1.2895 5.4062,-3.3254 6.7812,-4.5254 1.375,-1.2 5.3163,-3.2676 8.7578,-4.5937 6.3764,-2.457 7.35,-3.7059 9.7637,-12.537 0.3082,-1.1277 9.3917,-2.4023 17.123,-2.4023 3.5331,0 5.0557,-0.6343 8.1035,-3.375 2.0641,-1.8561 5.2601,-3.7017 7.1036,-4.1016 1.8435,-0.3998 4.3185,-1.6935 5.5,-2.875 1.8648,-1.8648 3.2836,-2.1484 10.754,-2.1484 7.9439,0 9.1573,-0.283 15.779,-3.6738 18.388,-9.4158 28.05,-18.255 26.537,-24.281 -0.8675,-3.4562 3.2665,-8.814 9.4765,-12.281 4.1967,-2.3431 4.9265,-3.2799 6.5782,-8.4492 1.3549,-4.2404 2.3454,-5.8145 3.6562,-5.8145 2.4785,0 3.4518,-2.2412 4.9024,-11.279 0.6866,-4.2783 1.6354,-8.0169 2.1074,-8.3086 0.472,-0.2918 0.8574,-1.6282 0.8574,-2.9707 0,-2.3787 -0.1991,-2.4414 -7.7773,-2.4414 h -7.7754 l -2.7578,-4.25 c -1.5164,-2.3375 -3.2397,-5.8615 -3.8301,-7.8301 -0.9427,-3.1435 -1.7375,-3.8042 -6.5196,-5.4297 -2.9949,-1.0179 -5.7233,-2.3015 -6.0644,-2.8535 -0.3412,-0.5519 -0.5363,-4.1303 -0.4336,-7.9512 l 0.1855,-6.9472 -5.9296,0.6719 c -6.5457,0.7406 -6.8702,0.5313 -8.1758,-5.2579 -0.6102,-2.7054 -0.435,-4.0321 0.6972,-5.2832 1.0075,-1.1133 1.1553,-1.8894 0.4454,-2.3281 -2.0524,-1.2685 -1.0289,-3.298 3.0097,-5.9707 2.2657,-1.4994 4.5283,-3.9996 5.0977,-5.6328 0.6487,-1.861 1.7205,-2.9375 2.9258,-2.9375 1.1997,0 1.9023,-0.6987 1.9023,-1.8926 0,-2.1758 1.8638,-3.1074 6.2207,-3.1074 1.7493,0 3.6017,-0.7428 4.3281,-1.7363 1.2058,-1.649 1.3674,-1.649 3.1895,0 1.0555,0.9552 2.6574,1.7363 3.5605,1.7363 0.9031,0 3.5683,1.3319 5.9219,2.9609 l 4.2793,2.9629 8.3633,-2.4629 c 5.3531,-1.5757 10.932,-2.4717 15.5,-2.4921 8.1473,-0.036 11.866,-1.7056 9.0351,-4.0547 -1.2993,-1.0783 -1.4854,-2.356 -0.9238,-6.3809 0.3863,-2.7683 0.6935,-5.791 0.6816,-6.7168 -0.032,-2.4993 2.626,-4.4346 4.086,-2.9746 1.7225,1.7225 2.7578,1.4069 2.7578,-0.8418 0,-1.1111 -0.6667,-2 -1.5,-2 -0.825,0 -1.5,-0.7629 -1.5,-1.6953 0,-0.9324 -1.0774,-2.8449 -2.3945,-4.25 -1.3171,-1.4051 -3.615,-4.9172 -5.1055,-7.8047 -1.4906,-2.8875 -3.0274,-5.25 -3.416,-5.25 -0.3886,0 -0.6782,-4.742 -0.6445,-10.537 0.048,-8.2012 0.393,-10.759 1.5605,-11.543 1.2792,-0.8593 1.1659,-1.2416 -0.7715,-2.5996 -1.2496,-0.8759 -4.4636,-3.6832 -7.1426,-6.2383 -5.5582,-5.3012 -7.0716,-9.336 -7.08,-18.881 0,-3.515 -0.6423,-7.5309 -1.4454,-9.084 -2.6994,-5.2201 -1.7216,-20.928 1.7286,-27.783 2.3737,-4.7165 2.825,-9.2109 1.2363,-12.283 -1.2953,-2.5049 -1.2268,-4.0098 0.6289,-13.936 2.1909,-11.718 1.7915,-14.437 -1.9785,-13.451 -0.9638,0.2521 -2.8758,-0.584 -4.252,-1.8594 -1.3753,-1.2746 -3.3049,-2.1619 -4.2871,-1.9727 -0.9823,0.1891 -2.6069,-0.3996 -3.6113,-1.3086 -1.2019,-1.0877 -2.0512,-1.2889 -2.4844,-0.5879 -0.9177,1.4847 -4.5406,1.3368 -4.5449,-0.1855 -0.01,-2.1433 -7.1464,-9.75 -9.1523,-9.75 -1.0487,0 -2.1659,-0.675 -2.4825,-1.5 -0.3237,-0.8436 -1.8112,-1.5 -3.4004,-1.5 -1.9623,0 -3.0228,-0.62 -3.4707,-2.0312 -1.0281,-3.2392 -5.1072,-6.8278 -6.6504,-5.8497 -1.964,1.2449 -5.2556,1.0639 -6.6953,-0.3691 -0.6907,-0.6875 -2.4693,-1.25 -3.9511,-1.25 -2.2512,0 -2.7487,-0.4934 -3.0332,-3 -0.4348,-3.8298 -8.8541,-15.782 -10.475,-14.871 -0.6521,0.3668 -2.6183,1.7257 -4.3691,3.0195 -3.8565,2.85 -6.9868,2.9561 -10.316,0.3516 -3.2888,-2.5726 -4.7892,-2.5001 -5.1797,0.25 -0.2619,1.8439 -0.952,2.25 -3.8203,2.25 -3.1496,0 -3.532,-0.3004 -3.8262,-3 -0.397,-3.6422 -2.1738,-5.8769 -2.1738,-2.7344 0,2.6913 -2.6617,4.1701 -8.8125,4.8985 -3.652,0.4326 -5.0652,0.1886 -6.0937,-1.0508 -0.9113,-1.098 -2.9778,-1.6164 -6.4668,-1.6231 -6.3931,-0.012 -14.175,-3.4782 -17.988,-8.0097 -1.5293,-1.8175 -4.2128,-4.0213 -5.961,-4.8985 -2.5165,-1.2627 -3.1393,-2.1659 -2.9902,-4.3379 0.124,-1.8069 -0.3028,-2.7441 -1.25,-2.7441 -0.7911,0 -1.4375,-0.675 -1.4375,-1.5 0,-0.825 -0.666,-1.5 -1.4805,-1.5 -0.8146,0 -1.7526,-1.2375 -2.084,-2.75 -1.0438,-4.7636 -1.2608,-5.0869 -3.625,-5.4219 -1.9468,-0.276 -2.3271,-0.951 -2.4199,-4.2812 -0.061,-2.1744 -0.6231,-4.1251 -1.25,-4.334 -0.6269,-0.209 -1.1406,-1.2428 -1.1406,-2.2969 0,-1.3516 -0.7002,-1.916 -2.377,-1.916 -1.3078,0 -3.8953,-0.6368 -5.75,-1.4141 -3.5636,-1.4935 -12.888,-8.1856 -14.074,-10.102 -2.3797,-3.8439 -9.8686,-10.34 -12.615,-10.943 -1.7507,-0.3845 -3.1836,-1.0904 -3.1836,-1.5683 0,-1.8015 -4.8163,-5.9727 -6.8965,-5.9727 -1.1916,0 -2.4096,-0.7875 -2.707,-1.75 -0.2975,-0.9625 -0.9506,-2.425 -1.4512,-3.25 -0.5006,-0.825 -1.8297,-3.4125 -2.9531,-5.75 -1.1235,-2.3375 -2.4194,-4.25 -2.8809,-4.25 -1.7499,0 -6.1113,-7.7109 -6.1113,-10.805 0,-2.1239 -0.4867,-3.1953 -1.4492,-3.1953 -1.925,0 -6.2134,-4.0441 -6.6797,-6.2988 -0.1227,-0.593 -0.2767,-0.941 -0.6172,-1 z"/> ' +
'  <path class="region" id="Souss-Massa" d="m 2550.7,1637.3 c -0.9682,-0.035 -1.576,0.1919 -1.207,0.7891 0.7431,1.2023 -0.9432,2.4763 -11.029,8.3379 -7.627,4.4325 -9.4033,5.9712 -11.646,10.082 -1.4558,2.6679 -3.2073,7.4931 -3.8926,10.723 -0.6854,3.2296 -1.7609,6.1959 -2.3886,6.5917 -0.6276,0.3959 -1.7185,3.5991 -2.4258,7.1192 -1.8275,9.0957 -4.6101,15.995 -8.9141,22.111 -2.967,4.2166 -4.9189,5.8159 -9.5195,7.791 l -5.7891,2.4844 -6.7109,-2.5859 c -3.6915,-1.4227 -9.5268,-2.8614 -12.967,-3.1953 -3.4402,-0.3339 -7.673,-1.2029 -9.4063,-1.9317 -2.8675,-1.2057 -4.1065,-1.0097 -13.746,2.1738 -8.3686,2.7637 -11.445,4.3165 -14.645,7.3887 -4.3186,4.1464 -7.157,5.2759 -17.418,6.9297 -3.5585,0.5735 -7.8876,1.9182 -9.6191,2.9883 -3.6608,2.2625 -15.187,2.7284 -18.367,0.7422 -1.5106,-0.9434 -3.0137,-0.9265 -6.9472,0.082 -2.7612,0.7076 -5.5227,0.9772 -6.1368,0.5977 -0.614,-0.3795 -5.9344,-1.0775 -11.822,-1.5508 -5.8876,-0.4733 -12.49,-1.4892 -14.672,-2.2578 -2.1817,-0.7686 -5.4583,-1.1788 -7.2813,-0.9102 -4.4473,0.6552 -15.06,-1.5456 -18.295,-3.7949 l -2.6094,-1.8145 -4.7968,4.8692 c -2.6383,2.6786 -5.9645,5.353 -7.3906,5.9433 -2.4069,0.9962 -2.5779,1.4854 -2.3731,6.8067 0.2701,7.0163 -0.4893,8.362 -4.834,8.5703 -3.1486,0.1509 -3.5801,-0.2201 -6.1367,-5.2676 -2.2491,-4.4404 -2.75,-6.7504 -2.75,-12.689 0,-3.9939 -0.45,-7.541 -1,-7.8809 -0.55,-0.3399 -1,-1.9252 -1,-3.5234 0,-1.8824 -0.7044,-3.2832 -2,-3.9766 -1.1492,-0.615 -2,-2.0942 -2,-3.4766 0,-1.3232 -0.4572,-2.6881 -1.0156,-3.0332 -0.5583,-0.345 -1.644,-2.1354 -2.4141,-3.9785 -0.7701,-1.8431 -2.2878,-3.8254 -3.373,-4.4062 -2.2717,-1.2158 -3.6761,-0.3355 -15.375,9.6367 -4.0271,3.4326 -9.3473,6.9739 -11.822,7.8711 -8.321,3.0168 -14.8,6.4276 -15.514,8.164 -0.3895,0.9481 -1.228,5.5062 -1.8633,10.129 -1.1469,8.3449 -1.1796,8.4132 -4.6406,9.6114 -2.7539,0.9535 -5.1664,0.9324 -11.484,-0.1016 -9.8975,-1.6198 -20.202,-1.7625 -24.295,-0.3359 -2.0755,0.7236 -3.6812,0.7524 -4.8691,0.088 -1.2454,-0.697 -2.578,-0.5758 -4.4844,0.4101 -1.4921,0.7716 -6.2085,2.5144 -10.48,3.8711 -8.5459,2.7138 -8.9281,2.6196 -12.422,-3.0332 -1.142,-1.8479 -3.8771,-4.3724 -6.0782,-5.6094 -2.201,-1.2371 -5.9429,-4.8625 -8.3164,-8.0566 -4.4547,-5.9946 -5.5527,-6.002 -5.5527,-0.037 0,2.4006 -0.2184,2.5097 -3.75,1.8652 -10.903,-1.9897 -11.146,-1.978 -13.232,0.6739 -1.0885,1.3837 -3.7359,3.219 -5.8828,4.0781 -3.8172,1.5273 -4.0746,1.4888 -11.633,-1.7969 -4.2512,-1.8481 -8.1823,-3.8131 -8.7344,-4.3652 -0.552,-0.552 -2.5216,-0.7562 -4.377,-0.4551 -2.0296,0.3293 -3.9842,0.041 -4.9062,-0.7246 -1.8107,-1.5028 -1.6608,-1.6321 -4.3809,3.7617 -2.5777,5.1115 -6.0496,5.7876 -8.7285,1.6992 -2.0629,-3.1484 -2.5418,-2.7092 -7.332,6.7168 -3.5629,7.0109 -3.8857,7.3383 -7.3086,7.4082 -2.2755,0.046 -4.887,1.0699 -7.1641,2.8067 -3.4506,2.6319 -3.7554,2.6844 -8.2187,1.4238 -4.6114,-1.3024 -4.6511,-1.3518 -7.8575,-9.6699 -2.4402,-6.3303 -3.1047,-9.3973 -2.7402,-12.631 0.4708,-4.1772 0.3994,-4.2967 -3.1992,-5.4844 -4.2398,-1.3992 -5.4147,-3.7427 -4.8047,-9.5742 0.4813,-4.6018 -0.6897,-6.0824 -5.5801,-7.0605 -3.9189,-0.7838 -5.1105,1.4755 -3.1719,6.0136 1.7061,3.9937 1.5413,8.7988 -0.4765,13.842 -1.531,3.8263 -1.5146,4.0775 0.3574,5.3887 5.0449,3.5335 3.4032,11.329 -6.4512,30.623 -1.3345,2.6128 -2.4277,5.5452 -2.4277,6.5175 0,0.9722 -1.8,3.9471 -4,6.6094 -2.2,2.6623 -4,5.7207 -4,6.7969 0,1.0763 -0.4076,2.7184 -0.9062,3.6504 -0.4988,0.9319 -1.1256,3.7914 -1.3926,6.3535 -0.4344,4.1681 -0.2525,4.7162 1.7187,5.2109 1.2117,0.3042 3.9148,0.08 6.0078,-0.498 4.3822,-1.21 7.8109,-0.5713 11.666,2.1738 1.4934,1.0634 3.3517,1.9336 4.1289,1.9336 1.9416,0 12.479,11.413 14.572,15.783 1.3248,2.7657 2.5983,3.8031 5.7051,4.6445 3.6498,0.9885 4.3292,1.7385 7.7578,8.5645 2.0666,4.1146 3.9537,8.1615 4.1934,8.9941 0.2397,0.8327 1.1552,4.0546 2.0332,7.1582 1.4182,5.0128 2.3362,6.642 6.5371,11.606 0.5819,0.6875 2.1945,1.25 3.584,1.25 8.5672,0 9.6903,6.3749 5.1074,29 -0.8356,4.125 -2.2652,12.225 -3.1777,18 -0.9124,5.775 -2.2856,13.008 -3.0508,16.07 -0.7651,3.0628 -1.1468,6.5045 -0.8477,7.6485 1.1975,4.5793 -6.8147,32.911 -11.25,39.781 -1.7755,2.75 -6.2182,11.75 -9.8711,20 -3.6528,8.25 -7.7376,16.97 -9.0781,19.377 -1.3405,2.4067 -2.4375,5.2366 -2.4375,6.289 0,1.0524 -1.575,4.2528 -3.5,7.1113 -1.925,2.8585 -3.5,6.1613 -3.5,7.3399 0,1.1787 -2.0588,4.785 -4.5762,8.0137 -2.5175,3.2287 -5.1674,7.2191 -5.8886,8.8691 -1.3498,3.0878 -14.548,16.908 -29.604,31 -6.129,5.7366 -9.2764,9.5653 -11.123,13.531 -1.4163,3.0418 -3.3021,6.1351 -4.1914,6.8731 -2.0696,1.7177 -2.0672,5.4789 0.01,8.6426 1.0543,1.6091 1.4136,3.5231 1.0253,5.4648 -0.3464,1.7319 -0.1762,2.9883 0.4063,2.9883 1.3595,0 0.5722,10.96 -0.9981,13.894 -1.431,2.6737 -0.6142,7.1055 1.3086,7.1055 0.7293,0 4.1099,-1.8 7.5137,-4 4.1657,-2.6924 7.313,-4 9.6289,-4 2.8269,0 3.7242,-0.5444 5.0254,-3.0605 3.5564,-6.8774 7.6241,0.2486 5.5234,9.6757 -0.6772,3.0392 -2.1367,6.0514 -3.5976,7.4239 -1.3522,1.2704 -2.459,2.712 -2.459,3.2031 0,0.491 1.575,2.3778 3.5,4.1933 2.2773,2.1478 3.5,4.2211 3.5,5.9336 0,1.4475 0.5336,2.6309 1.1856,2.6309 0.6521,0 2.2591,1.0084 3.5703,2.2402 2.063,1.9381 3.2835,2.1989 9.0644,1.9395 8.4682,-0.3799 9.9321,-0.8229 10.701,-3.2461 0.3432,-1.0813 2.2313,-2.6384 4.1953,-3.459 1.9639,-0.8206 4.6092,-2.6124 5.8789,-3.9824 1.7242,-1.8604 3.329,-2.4922 6.3379,-2.4922 3.4781,0 4.1168,0.3468 4.666,2.5352 0.6592,2.6262 4.9071,5.4648 8.1777,5.4648 1.0316,0 2.8483,1.0353 4.0372,2.3008 1.8054,1.9218 2.0104,2.8281 1.2441,5.5 -0.922,3.2148 0.2011,4.5763 1.3359,1.6191 1.274,-3.3199 0.5731,-9.19 -1.3945,-11.691 -2.5247,-3.2096 -2.5472,-5.3507 -0.064,-6 2.5021,-0.6543 5.3544,1.3865 8.0644,5.7715 2.2706,3.6738 5.3629,4.6032 6.3926,1.9199 0.3339,-0.87 0.6074,-3.3362 0.6074,-5.4785 0,-4.1867 1.9091,-6.1677 7.1875,-7.4648 2.4544,-0.6031 2.91,-0.2186 5.2852,4.4687 1.449,2.8593 3.6912,5.6282 5.0644,6.2539 1.581,0.7203 2.4629,1.9493 2.4629,3.4278 0,1.2809 0.8883,2.778 2,3.373 1.5175,0.8122 2.0016,0.7603 2.0059,-0.2148 0,-0.7069 0.474,-2.9727 1.0468,-5.0352 1.1648,-4.1943 4.3469,-5.2151 5.4473,-1.748 0.5421,1.7079 1.2097,1.9096 4.5527,1.375 2.7705,-0.443 4.6334,-0.1576 6.3672,0.9785 2.3851,1.5627 2.4597,1.5341 2.7657,-1.1231 0.2637,-2.2888 1.1112,-2.9958 5.2343,-4.3633 4.4575,-1.4784 5.0975,-2.0871 6.8262,-6.4882 1.0494,-2.6714 2.4012,-5.1627 3.0039,-5.5352 0.6027,-0.3726 4.1766,-0.9852 7.9414,-1.3633 5.4462,-0.5469 7.3441,-0.3596 9.291,0.916 1.3458,0.8818 3.6424,1.6016 5.1016,1.6016 1.4592,0 4.1213,1.2375 5.916,2.75 1.7948,1.5125 5.2113,4.325 7.5938,6.25 6.0136,4.8588 8.9062,8.0341 8.9062,9.7754 0,0.8153 2.925,4.5834 6.5,8.373 3.575,3.7897 6.5,7.57 6.5,8.4024 0,0.8323 -0.6538,3.079 -1.4531,4.9922 -1.3662,3.2697 -1.2315,4.2612 2.2324,16.508 3.1831,11.253 4.1985,13.564 7.4531,16.951 2.0724,2.1569 3.7676,4.2077 3.7676,4.5566 0,0.3488 0.9465,1.963 2.1035,3.5879 2.653,3.7258 4.8694,11.934 4.8848,18.092 0.012,4.7157 -0.024,4.7676 -7.7051,10.871 -4.2442,3.3727 -8.7315,6.5946 -9.9726,7.1601 l -2.2579,1.0274 2.9746,3.3867 c 3.3743,3.843 3.5868,4.996 1.4786,8.0059 -2.3903,3.4127 -13.496,11.31 -15.904,11.31 -4.8577,0 -6.0842,-5.107 -2.4512,-10.209 l 2.1504,-3.0195 -2.4004,0.748 c -6.5978,2.0578 -7.1412,2.4574 -6.4727,4.75 1.7706,6.0719 1.7652,9.1215 -0.023,14.385 -1.8577,5.4652 -1.856,5.5414 0.1094,6.9023 3.8994,2.6999 4.4863,3.5629 4.4863,6.5801 0,1.6809 -0.8914,4.3096 -1.9824,5.8418 l -1.9844,2.7852 2.7344,10.863 2.7324,10.863 3.5352,0.5625 c 6.6315,1.0568 7.6174,2.8596 3.0449,5.5606 -2.6313,1.5544 -2.9522,2.3157 -3.25,7.7129 -0.3152,5.7143 -0.1918,6.078 2.6894,7.9648 1.6607,1.0875 5.4857,5.3413 8.5,9.4512 3.0143,4.1099 6.3805,7.806 7.4805,8.2148 2.8574,1.0617 15.545,2.8287 25.639,3.5703 l 8.6386,0.6348 4.0215,4.9434 c 2.9898,3.6753 4.195,6.2065 4.6993,9.873 0.3729,2.7119 0.4353,5.3228 0.1386,5.8027 -0.2966,0.4801 2.3923,3.764 5.9766,7.2969 3.7748,3.7208 8.7771,10.209 11.889,15.422 5.3188,8.9112 23.277,32.278 45.498,59.197 l 11.5,13.932 0.2578,-58.238 0.2578,-58.24 3.7383,-1.1973 c 2.0581,-0.6582 10.899,-4.7412 19.646,-9.0742 8.747,-4.333 16.679,-7.8789 17.627,-7.8789 0.9482,0 2.2652,-0.6512 2.9258,-1.4473 0.6607,-0.796 3.3019,-2.234 5.8711,-3.1953 2.5691,-0.9612 6.6498,-3.235 9.0664,-5.0527 2.4166,-1.8177 4.7479,-3.3047 5.1817,-3.3047 0.4339,0 1.0878,-0.9409 1.4531,-2.0918 0.8216,-2.5886 25.403,-27.908 27.471,-28.295 0.825,-0.1544 3.7153,-2.3959 6.4238,-4.9805 2.7085,-2.5847 5.6335,-4.6053 6.5,-4.4902 0.8665,0.115 3.7718,-1.9439 6.4551,-4.5742 2.6833,-2.6303 6.5083,-5.5324 8.5,-6.4493 1.9917,-0.9169 5.2651,-3.3461 7.2754,-5.3984 2.2543,-2.3015 4.2327,-3.5089 5.1621,-3.1523 1.3983,0.5366 19.538,-11.907 21.143,-14.504 0.3621,-0.5859 1.4238,-1.0645 2.3594,-1.0645 0.9357,0 2.822,-1.0305 4.1914,-2.2891 1.3694,-1.2586 5.4152,-3.9204 8.9902,-5.916 3.575,-1.9955 8.208,-4.79 10.295,-6.2109 2.0869,-1.4208 4.4585,-2.584 5.2696,-2.584 1.028,0 1.3052,-0.6815 0.916,-2.25 -0.444,-1.7892 0.7431,-3.5536 5.7988,-8.6172 6.9485,-6.9592 10.034,-9.0434 13.471,-9.0976 1.2375,-0.02 2.25,-0.6483 2.25,-1.3985 0,-1.3042 5.4,-3.7996 11.25,-5.1972 1.6646,-0.3977 2.75,-1.3279 2.75,-2.3575 0,-1.9993 8.5709,-9.6172 15,-13.332 2.475,-1.43 7.65,-3.7937 11.5,-5.2539 3.85,-1.4601 8.2504,-3.3283 9.7793,-4.1504 1.529,-0.822 4.8437,-1.6618 7.3652,-1.8672 2.5215,-0.2055 4.6786,-0.5096 4.793,-0.6758 1.2707,-1.8452 3.5625,-10.153 3.5625,-12.912 0,-3.9377 2.5792,-7.0294 7.3828,-8.8496 3.0546,-1.1575 11.821,-0.072 15.555,1.9258 3.5365,1.8927 15.759,1.1661 25.912,-1.5391 5.3076,-1.4143 10.848,-2.3319 12.312,-2.041 1.6703,0.3319 3.1174,-0.018 3.8809,-0.9375 0.6694,-0.8066 3.0718,-1.7487 5.3379,-2.0937 3.676,-0.5597 5.6281,-2.1619 18.119,-14.856 11.324,-11.508 14.955,-14.587 18.994,-16.113 2.7464,-1.0377 8.1464,-3.489 12,-5.4472 6.1779,-3.1393 7.8471,-3.5493 14.119,-3.4688 5.8628,0.075 8.236,0.6476 13.5,3.2578 9.2446,4.5841 13.505,5.5209 16.971,3.7285 3.435,-1.7763 8.0855,-1.8871 9.7402,-0.2324 0.8094,0.8094 3.7609,1.1171 8.7168,0.9102 6.1725,-0.2576 8.1167,0.054 11.033,1.7754 1.9562,1.1541 5.2818,2.0898 7.4317,2.0898 2.7449,0 4.6701,0.7228 6.5371,2.4531 1.6848,1.5614 4.34,2.6629 7.3027,3.0313 2.5601,0.3183 6.2293,0.7669 8.1543,0.9961 4.6536,0.5539 7.0028,-0.9165 11.893,-7.4434 4.8854,-6.521 9.0588,-8.4469 20.482,-9.4512 4.861,-0.4273 8.4475,-1.2658 9.373,-2.1914 0.9788,-0.9788 2.4574,-1.2884 4.2598,-0.8925 1.5185,0.3335 6.9034,0.9372 11.967,1.3418 8.2873,0.6622 9.3351,0.5523 10.492,-1.0997 1.5306,-2.1852 9.4012,-7.322 15.133,-9.8769 3.8153,-1.7006 4.3302,-2.4352 7.4336,-10.598 1.8339,-4.8234 4.1513,-9.9639 5.1504,-11.424 2.3042,-3.3672 2.291,-5.366 -0.059,-8.6914 -4.4186,-6.2532 -3.2862,-13.847 3.0938,-20.74 2.5664,-2.7729 2.7407,-3.3821 1.7187,-6 -0.6255,-1.6025 -1.7343,-9.2141 -2.4648,-16.914 -0.7305,-7.6999 -1.9987,-16.974 -2.8184,-20.609 -0.8196,-3.6355 -1.5034,-9.3593 -1.5195,-12.719 -0.016,-3.3594 -0.4401,-6.9106 -0.9414,-7.8907 -0.5013,-0.98 -1.1784,-3.1983 -1.5059,-4.9296 -0.5335,-2.8204 -0.056,-3.6581 4.6074,-8.0567 3.4818,-3.2843 6.7473,-5.3389 9.8653,-6.207 5.02,-1.3977 7.0393,-4.4088 4,-5.9649 -4.5261,-2.3173 -9.9596,-2.0843 -19.699,0.8399 -5.3922,1.6189 -10.19,2.7047 -10.66,2.4141 -0.47,-0.2906 -2.6214,-4.0421 -4.7813,-8.3379 l -3.9277,-7.8106 2.5117,-8.1797 c 3.0666,-9.9855 3.6107,-8.8462 -12.354,-25.875 -6.1875,-6.6001 -11.25,-12.656 -11.25,-13.459 0,-1.5133 12.914,-14.302 17.432,-17.262 4.4997,-2.9483 3.5203,-6.6078 -3.6816,-13.758 -3.4375,-3.4128 -9.3268,-10.142 -13.088,-14.951 -6.1382,-7.8496 -7.1763,-8.7441 -10.143,-8.7441 -3.627,0 -4.5052,-1.2246 -4.541,-6.332 -0.012,-1.7425 -0.8421,-4.2329 -1.8437,-5.5352 l -1.8203,-2.3691 -3.9786,2.6328 c -2.5986,1.7196 -7.9403,3.5007 -15.406,5.1347 -6.2859,1.3759 -13.202,2.9166 -15.369,3.4258 -2.1669,0.5093 -4.3133,0.6961 -4.7695,0.4141 -0.4561,-0.2819 -1.9524,-2.7303 -3.3262,-5.4414 -3.1525,-6.2211 -6.0475,-6.782 -6.0918,-1.1797 -0.016,2.0625 -0.1824,6 -0.3691,8.75 -0.1866,2.75 -0.016,7.25 0.3789,10 0.677,4.7171 0.5028,5.2956 -3.082,10.221 -2.0899,2.8713 -4.5104,5.2338 -5.377,5.25 -0.8666,0.016 -2.6244,-1.0885 -3.9082,-2.4551 -3.6103,-3.8429 -7.2353,-3.9632 -20.949,-0.6914 -12.337,2.9432 -12.428,2.949 -16.633,1.1465 -2.3254,-0.9967 -8.5425,-2.9595 -13.816,-4.3633 -5.2739,-1.4037 -11.311,-3.4302 -13.416,-4.5039 -4.2349,-2.1606 -5.1835,-1.8717 -6.9317,2.1094 -0.655,1.4917 -3.8485,5.9917 -7.0957,10 -3.2472,4.0083 -9.1509,12.462 -13.119,18.787 -3.9681,6.325 -8.0458,12.4 -9.0625,13.5 -1.4289,1.546 -1.8753,3.7024 -1.9629,9.5 -0.1273,8.4178 0.336,14.461 1.3516,17.639 0.727,2.2744 -2.7358,9.3613 -4.5743,9.3613 -4.2851,0 -10.427,-7.2844 -16.76,-19.881 l -3.209,-6.3828 -6.168,0.5625 c -5.8768,0.5345 -6.4611,0.3769 -12.312,-3.3164 -6.0474,-3.817 -6.169,-3.8471 -7.9043,-1.9297 -2.5695,2.8394 -5.562,2.405 -11.475,-1.6621 l -5.2461,-3.6074 -4.7344,2.2188 c -4.2304,1.9814 -5.5188,2.1253 -12.078,1.3574 -7.2115,-0.8443 -7.3545,-0.9171 -7.9922,-4.0489 -0.6738,-3.309 0.408,-5.3105 2.8711,-5.3105 2.9277,0 8.2012,-3.2576 8.2012,-5.0664 0,-1.0114 0.5297,-2.9999 1.1758,-4.418 1.0591,-2.3244 0.7564,-3.171 -3.0664,-8.5918 -3.7316,-5.2913 -4.4964,-7.3574 -6.3731,-17.219 -1.1728,-6.1633 -2.2049,-11.329 -2.2949,-11.482 -0.09,-0.153 -2.4288,0.8595 -5.1973,2.25 -7.8345,3.9351 -8.7302,3.6062 -10.775,-3.9493 -1.827,-6.7491 -1.5709,-15.489 0.5273,-18.018 0.5858,-0.7058 5.3534,-3.4406 10.594,-6.0762 8.1589,-4.1037 10.24,-5.689 14.496,-11.037 3.6823,-4.6277 5.8038,-6.4097 8.1914,-6.8809 4.4385,-0.8759 8.7227,-2.6009 8.7227,-3.5117 0,-0.4166 -1.5884,-3.3941 -3.5293,-6.6172 -3.2464,-5.3913 -6.5202,-14.38 -8.082,-22.189 -0.4787,-2.3935 -0.2376,-3.314 0.9902,-3.7852 2.137,-0.8201 2.1244,-5.8647 -0.035,-15.1 -1.6528,-7.0668 -1.7424,-7.2006 -5.2618,-7.7676 -3.8385,-0.6185 -26.08,-2.4991 -29.863,-2.5254 -1.2547,-0.01 -2.5497,-0.7134 -2.877,-1.5664 -0.6654,-1.7339 3.233,-6.4492 5.332,-6.4492 0.7291,0 1.3262,-0.6592 1.3262,-1.4648 0,-0.8057 0.9,-1.9465 2,-2.5352 2.4056,-1.2875 2.5557,-4.4263 0.4512,-9.4629 -1.8987,-4.5444 -0.6616,-9.3337 3.3808,-13.082 3.1085,-2.8824 2.8194,-2.9372 -4.9277,-0.9297 -5.5618,1.4412 -6.0984,1.4167 -9.7559,-0.4492 -3.1963,-1.6306 -3.9775,-2.6362 -4.4863,-5.7715 -0.6148,-3.7886 0.6155,-18.337 2.3516,-27.805 1.7101,-9.3249 1.9561,-24.165 0.4336,-26.174 -0.761,-1.004 -1.3986,-2.621 -1.4161,-3.5918 -0.018,-0.9709 -1.3812,-4.1565 -3.0312,-7.0801 -3.3691,-5.9697 -3.634,-8.1992 -1.5645,-13.152 l 1.4356,-3.4356 -3.4609,-0.6484 c -1.9028,-0.357 -4.0095,-1.3896 -4.6836,-2.293 -0.7616,-1.0207 -3.3766,-1.8081 -4.9903,-1.8672 z"/> ' +
'  <path class="region" id="Guelmim-Oued Noun" d="m 1968.3,2104.8 -1.6699,2.5489 c -0.9184,1.4017 -1.6699,2.9589 -1.6699,3.4609 0,0.502 -0.7018,1.496 -1.5586,2.207 -1.6483,1.368 -4.4771,7.126 -5.1133,10.408 -0.2085,1.0761 -0.776,2.2018 -1.2617,2.502 -0.4856,0.3001 -1.1837,2.3443 -1.5508,4.543 -0.9786,5.8616 -2.5422,9.6778 -5.1211,12.498 -1.2574,1.375 -3.4031,5.0247 -4.7675,8.1113 -1.3643,3.0865 -5.3593,8.9365 -8.879,13 -9.0665,10.467 -13.748,16.903 -13.748,18.898 0,0.9468 -0.8314,2.7938 -1.8457,4.1054 -1.0144,1.3117 -2.6663,4.565 -3.6719,7.2305 -1.4218,3.7685 -3.2917,6.0216 -8.4062,10.125 -3.6175,2.9024 -7.9262,5.9833 -9.5762,6.8477 -6.4623,3.3854 -24.122,22.31 -30.506,32.691 -2.0259,3.2943 -4.3876,6.7775 -5.248,7.7402 -0.8604,0.9627 -2.6656,3.8306 -4.0098,6.373 -1.3442,2.5425 -3.8221,6.1425 -5.5078,8 -1.6858,1.8576 -6.0731,6.7256 -9.75,10.818 -8.159,9.0817 -10.531,11.001 -26.883,21.77 -23.163,15.254 -55.199,33.552 -84.418,48.217 -8.6235,4.3282 -18.821,9.7152 -22.662,11.971 -3.8413,2.2556 -7.658,4.1016 -8.4804,4.1016 -1.9178,0 -11.026,6.1806 -11.053,7.5 -0.077,3.8449 -18.611,23.532 -31.086,33.02 -3.0821,2.3439 -6.6716,5.7733 -7.9746,7.6211 -4.7199,6.6933 -11.828,13.995 -21.279,21.859 -3.6354,3.025 -6.6183,5.725 -6.6289,6 -0.011,0.275 -1.3313,2.035 -2.9356,3.9121 -1.6043,1.8771 -3.198,4.9098 -3.541,6.7383 -0.4237,2.2585 -1.9293,4.3714 -4.6953,6.5879 -2.2394,1.7944 -4.4942,4.1617 -5.0098,5.2617 -2.7932,5.9592 -4.5529,8.5049 -9.3379,13.5 -2.8977,3.025 -5.8092,7.1986 -6.4687,9.2754 -0.6632,2.0885 -2.6115,4.8643 -4.3613,6.209 -9.6245,7.3967 -13.653,10.108 -18.824,12.674 -3.1508,1.5633 -6.0058,2.8418 -6.3457,2.8418 -0.3399,0 -3.1782,1.1689 -6.3066,2.5977 -10.164,4.6419 -11.572,5.1853 -20.357,7.8476 -7.4581,2.26 -29.396,10.787 -30.441,11.832 -1.9134,1.9134 6.7454,15.085 13.467,20.486 3.7236,2.9924 3.9585,3.5375 5.5742,12.93 1.9131,11.121 7.3936,24.7 14.451,35.807 2.4465,3.85 7.1393,12.175 10.428,18.5 7.543,14.508 12.473,19.798 23.787,25.52 8.4002,4.2477 8.9149,4.369 22.5,5.3203 11.408,0.7989 15.878,1.6045 24.904,4.4922 6.05,1.9356 14.375,4.4956 18.5,5.6875 4.125,1.1918 10.464,3.7558 14.088,5.6973 l 6.5879,3.5293 16.912,-2.1074 c 9.3015,-1.1584 26.137,-2.6221 37.412,-3.2539 17.129,-0.9598 21.07,-1.4726 23.969,-3.1133 1.9082,-1.0801 8.6464,-2.8476 14.973,-3.9297 12.804,-2.1902 19.108,-1.8465 25.494,1.3926 3.6041,1.8281 4.534,1.896 11,0.7988 3.8847,-0.6593 11.114,-1.5863 16.064,-2.0605 25.26,-2.4193 39.883,-4.1679 49.44,-5.9102 13.042,-2.3779 40.626,-4.5209 46.904,-3.6445 2.5609,0.3575 6.9943,1.4578 9.8535,2.4453 4.7769,1.6496 6.0104,2.8172 15.199,14.408 11.158,14.074 13.884,16.451 16.971,14.799 1.1007,-0.5891 4.6841,-1.0703 7.9629,-1.0703 h 5.9609 l 3.1035,4.8379 c 1.7073,2.6607 3.1209,5.2482 3.1407,5.75 0.1257,3.1901 11.604,11.412 15.932,11.412 0.9183,0 3.9789,-0.6854 6.8008,-1.5234 4.2519,-1.2627 5.5132,-2.2048 7.3652,-5.5 2.0636,-3.6717 2.5641,-3.9766 6.5332,-3.9766 3.7502,0 4.8431,0.5545 8.5664,4.3457 8.3637,8.516 12.768,14.417 12.768,17.111 0,7.9624 12.716,20.695 32.451,32.492 13.625,8.1449 21.272,13.243 30.004,20.004 5.5435,4.2921 8.5754,6.015 10,5.6797 1.1244,-0.2646 5.6449,-0.9847 10.045,-1.5996 15.227,-2.128 21.91,-4.168 38.1,-11.625 l 16.262,-7.4883 15.666,9.5489 c 13.906,8.4778 17.362,11.171 30.762,23.98 14.976,14.316 15.186,14.472 26.717,19.555 l 11.623,5.1231 11.15,12.186 c 6.1323,6.7028 11.729,12.971 12.436,13.928 1.486,2.0108 15.351,7.7844 24.805,10.33 7.212,1.9421 19.744,4.127 24.73,4.3106 l 3.25,0.1191 -0.058,-345.5 -12.076,-14.5 c -21.305,-25.579 -43.668,-54.495 -48.422,-62.611 -2.5411,-4.3386 -7.779,-11.098 -11.641,-15.022 -6.9988,-7.11 -7.0227,-7.1515 -7.2442,-13.098 -0.1884,-5.0589 -0.7174,-6.5824 -3.4843,-10.025 -3.6293,-4.5162 -5.3076,-5.2131 -12.576,-5.2246 -2.75,0 -9.8921,-0.7572 -15.871,-1.6718 l -10.871,-1.6622 -5.9121,-7.9746 c -3.2523,-4.3864 -7.5522,-9.1631 -9.5547,-10.615 -3.6402,-2.6396 -3.6406,-2.6432 -3.4043,-9.6191 0.13,-3.8376 0.4823,-7.9891 0.7832,-9.2266 0.3918,-1.6117 0.1,-2.25 -1.0273,-2.25 -2.242,0 -3.0578,-2.0204 -6.1719,-15.279 l -2.7656,-11.777 2.1465,-2.2872 c 3.2901,-3.5021 2.7992,-6.2863 -1.3516,-7.6562 -4.0791,-1.3462 -4.1503,-1.7968 -1.5,-9.5 2.3947,-6.9603 2.4728,-9.124 0.5,-13.846 -2.4771,-5.9285 -2.2167,-6.2513 7.752,-9.5723 14.314,-4.7688 15.484,-4.1108 8.748,4.918 -6.5056,8.7195 -5.3163,9.3012 3.8496,1.8848 l 6.3203,-5.1133 -3.1836,-3.2852 c -4.047,-4.1755 -3.4582,-6.3944 2.8301,-10.656 2.5758,-1.7457 6.8211,-4.939 9.4336,-7.0957 4.0341,-3.3302 4.75,-4.4538 4.75,-7.461 0,-4.5824 -1.8796,-11.068 -4.1816,-14.428 -1.0002,-1.4599 -1.8184,-2.9632 -1.8184,-3.3398 0,-0.3765 -1.6845,-2.4614 -3.7422,-4.6329 -3.9271,-4.1443 -5.5344,-8.0761 -9.7773,-23.912 -2.4313,-9.0745 -2.4776,-9.7229 -0.959,-13.357 l 1.5957,-3.8223 -6.5586,-6.7929 c -3.6074,-3.7366 -6.5586,-7.5379 -6.5586,-8.4473 0,-3.1726 -15.771,-15.904 -21.119,-17.049 -1.8597,-0.3981 -3.878,-1.1208 -4.4844,-1.6074 -0.6064,-0.4865 -3.7864,-0.6047 -7.0664,-0.2618 l -5.9629,0.6231 -2.334,5.8769 c -1.5997,4.0275 -2.882,5.877 -4.0762,5.877 -0.9584,0 -2.0017,0.675 -2.3183,1.5 -0.3166,0.825 -1.434,1.5 -2.4825,1.5 -1.3182,0 -2.0909,0.9256 -2.5058,3 -0.7379,3.6893 -3.9017,4.0514 -7.3223,0.8379 -2.0964,-1.9694 -2.6619,-2.0538 -6.3359,-0.9531 -2.2185,0.6647 -4.4378,0.9575 -4.9317,0.6523 -0.4939,-0.3053 -1.195,0.8003 -1.5585,2.4551 -0.7725,3.5173 -2.698,3.8358 -7.9688,1.3223 -2.5189,-1.2012 -3.5332,-2.3401 -3.5332,-3.9649 0,-1.2549 -0.8969,-2.7593 -1.9961,-3.3476 -1.0982,-0.5877 -2.922,-2.8814 -4.0527,-5.0977 -2.916,-5.7159 -5.1983,-4.9725 -6.2051,2.0234 -0.4278,2.9728 -1.2761,6.0049 -1.8848,6.7383 -1.3853,1.6692 -8.0463,1.7486 -9.6797,0.1152 -0.9584,-0.9583 -1.0867,-0.5566 -0.5996,1.879 0.3668,1.8342 0.1695,3.3745 -0.4824,3.7773 -0.6054,0.3742 -1.0996,1.7223 -1.0996,2.9961 0,1.7939 -0.7045,2.4573 -3.125,2.9414 -5.5982,1.1196 -5.7567,0.9906 -6.0762,-4.9727 -0.2972,-5.5468 -0.335,-5.6094 -4.2988,-6.9843 -2.2,-0.7632 -4.7991,-1.3942 -5.7754,-1.4024 -1.1668,-0.01 -1.9806,-1.0435 -2.375,-3.0156 -0.7205,-3.6023 -2.2112,-3.7856 -5.5605,-0.6816 -1.3764,1.2756 -3.8581,2.8817 -5.5157,3.5683 -1.6576,0.6866 -3.5015,2.3189 -4.0976,3.627 -1.1682,2.5641 -2.8118,3.0083 -14.396,3.8925 -6.0011,0.4581 -7.0189,0.2635 -9.5,-1.8242 -1.5283,-1.2861 -3.6793,-2.5099 -4.7793,-2.7187 -1.4709,-0.2792 -2.0782,-1.303 -2.293,-3.8711 -0.2225,-2.6601 -1.2888,-4.3616 -4.4804,-7.1445 l -4.1895,-3.6543 1.7188,-3.3457 c 0.9451,-1.8409 2.6031,-4.4727 3.6855,-5.8477 2.3973,-3.0454 4.0936,-9.23 1.9883,-7.25 -0.731,0.6875 -2.9284,1.2515 -4.8809,1.2539 -2.2713,0 -5.1697,1.0837 -8.0488,3.002 -5.8048,3.8675 -12.822,6.5762 -13.988,5.3984 -0.4923,-0.497 -1.4682,-3.0584 -2.1699,-5.6914 -1.0418,-3.9093 -1.0373,-5.1695 0.027,-6.875 1.709,-2.7365 2.2561,-8.9796 0.9278,-10.58 -0.576,-0.6941 -0.8007,-2.4986 -0.5,-4.0098 0.3008,-1.5111 -0.017,-3.7984 -0.7051,-5.082 z"/> ' +
'  <path class="region" id="Laayoun-saqialhamra" d="m 1500.5,2530.4 c -2.623,0.2337 -17.251,6.1144 -18.959,7.7207 -0.5225,0.4913 -1.6811,0.8926 -2.5742,0.8926 -2.2137,0 -17.548,6.7092 -22.477,9.834 -2.2,1.3948 -7.473,4.2386 -11.719,6.3203 -4.2457,2.0818 -8.5794,4.6439 -9.6289,5.6934 -2.0966,2.0966 -10.807,5.1656 -21.652,7.6289 -3.85,0.8744 -9.7,2.2174 -13,2.9843 -14.357,3.3362 -21.18,4.7842 -40.5,8.5938 -11.275,2.2232 -27.576,5.3575 -36.223,6.9648 -8.6472,1.6073 -17.872,3.6017 -20.5,4.4317 -5.265,1.663 -24.758,4.9496 -38.777,6.539 -16.401,1.8594 -36.942,4.8123 -41,5.8946 -2.2,0.5867 -6.6306,1.0787 -9.8457,1.0918 -6.2357,0.026 -11.24,2.1457 -12.199,5.1679 -0.2987,0.941 -2.0994,2.6286 -4,3.75 -1.9007,1.1213 -3.4551,2.6625 -3.4551,3.4258 0,0.7632 -1.0843,2.5577 -2.4102,3.9883 -1.3259,1.4307 -2.7196,4.0843 -3.0976,5.8965 -0.378,1.8121 -1.4872,5.0949 -2.4629,7.2949 -2.2197,5.0049 -4.0293,10.68 -4.0293,12.633 0,0.8201 -1.3317,2.4746 -2.959,3.6777 -1.8324,1.3548 -3.6405,4.1426 -4.75,7.3223 -2.2348,6.4051 -7.4399,11.5 -14.812,14.5 -3.0631,1.2462 -6.887,3.3749 -8.498,4.7305 -1.611,1.3555 -4.4482,2.9653 -6.3047,3.5781 -2.7528,0.9085 -3.6097,1.8929 -4.6406,5.3359 -0.6952,2.322 -2.7718,7.2192 -4.6153,10.881 -1.8816,3.7373 -3.8234,9.6038 -4.4258,13.375 -0.5903,3.6948 -1.6757,7.8983 -2.4121,9.3418 -0.7364,1.4434 -2.0553,5.8079 -2.9316,9.6973 -0.8763,3.8894 -3.3587,11.539 -5.5156,17 -2.157,5.4606 -5.3588,14.653 -7.1172,20.428 -1.7584,5.775 -4.282,12.47 -5.6074,14.877 -1.3255,2.4067 -2.4098,5.1067 -2.4102,6 0,2.7479 -5.68,13.804 -11.252,21.912 -2.9144,4.2406 -6.8241,10.861 -8.6894,14.711 -1.8653,3.85 -4.3693,8.575 -5.5645,10.5 -1.1951,1.925 -2.4651,5.075 -2.8222,7 -0.3572,1.925 -1.1379,5.75 -1.7344,8.5 -0.5964,2.75 -1.212,7.25 -1.3672,10 -0.1616,2.863 -2.0235,9.4876 -4.3555,15.5 -2.2399,5.775 -5.3863,13.875 -6.9941,18 -3.879,9.9515 -6.2207,17.344 -6.2207,19.643 0,2.4222 -5.0463,16.631 -7.8379,22.068 -1.1889,2.3156 -2.1621,4.8361 -2.1621,5.6016 0,0.7655 -2.4385,6.3626 -5.4199,12.438 -4.1507,8.4572 -7.0211,12.753 -12.25,18.334 -7.8394,8.367 -13.496,13.666 -17.227,16.143 -6.0637,4.0242 -21.7,14.83 -22.826,15.775 -0.67293,0.5645 -2.2479,1.4891 -3.5,2.0546 -1.2521,0.5656 -3.1773,1.5776 -4.2773,2.2481 -8.1093,4.9432 -16.666,9.8137 -18.186,10.35 -0.99744,0.3518 -2.9394,1.6691 -4.3144,2.9277 -1.375,1.2587 -5.2859,3.6664 -8.6914,5.3516 -3.4055,1.6852 -9.2555,5.6966 -13,8.9141 -8.561,7.3562 -13.009,10.142 -22.365,14.01 -12.34,5.1009 -31.617,9.0586 -37.955,7.791 -2.8235,-0.5647 -3.0975,-0.2953 -6.1836,6.1036 -1.7762,3.6827 -5.3845,9.0749 -8.0176,11.982 -2.633,2.9075 -4.7871,5.6818 -4.7871,6.164 0,0.4823 -2.5151,2.8389 -5.5898,5.2383 -3.0747,2.3994 -7.6872,6.2173 -10.25,8.4824 -6.2836,5.5538 -9.7175,7.1522 -18.346,8.5469 -6.5636,1.0609 -7.7414,1.6141 -11.473,5.377 -5.84,5.8894 -13.902,17.451 -18.289,26.228 l -3.7246,7.4492 1.832,3.5918 c 1.5532,3.0464 1.7563,5.2678 1.3457,14.639 -0.26622,6.0763 -0.64774,12.174 -0.84766,13.549 -1.0766,7.4049 -1.9194,11.043 -2.668,11.506 -0.46009,0.2844 -1.6052,2.8747 -2.543,5.7558 -0.93771,2.881 -2.2587,5.9133 -2.9375,6.7383 -0.67885,0.825 -1.5152,2.9839 -1.8574,4.7988 -0.34222,1.8148 -2.4284,6.3947 -4.6367,10.176 -2.2083,3.7811 -4.0156,7.5398 -4.0156,8.3535 0,2.1844 -12.574,20.69 -16.424,24.172 -3.3721,3.0495 -3.9026,4.5382 -9.2559,26 -0.82312,3.3 -2.0728,7.575 -2.7773,9.5 -2.8381,7.7542 -3.6,11.032 -3.9863,17.127 -0.78938,12.453 -7.1847,26.138 -18.689,39.998 -6.1601,7.4213 -9.8672,15.441 -9.8672,21.346 0,3.5527 -0.78756,6.7418 -2.4961,10.109 -1.3727,2.7057 -2.4977,5.9496 -2.5,7.209 -0.002,1.2594 -0.87845,4.0045 -1.9473,6.0996 -1.5188,2.9771 -1.8185,5.0202 -1.3711,9.3554 0.4717,4.5704 0.0879,6.7844 -2.1836,12.574 -2.6333,6.7117 -2.703,7.3193 -1.5312,13.529 0.90172,4.779 0.94747,7.808 0.16992,11.434 -0.73189,3.4127 -0.74062,6.0829 -0.0273,8.6661 0.56701,2.0535 0.76347,4.4345 0.43555,5.289 -0.32791,0.8546 0.0766,2.2968 0.90039,3.2071 3.6883,4.0755 4.5077,9.431 3.4102,22.287 -0.5751,6.7363 -1.4868,13.072 -2.0254,14.078 -0.55669,1.0402 -0.69372,4.496 -0.31836,8.0098 0.57809,5.4117 0.22397,7.5104 -2.8418,16.863 -1.9258,5.8751 -4.6171,13.3 -5.9805,16.5 -3.9572,9.2877 -5.8933,19.518 -5.1426,27.17 0.60602,6.1775 0.47359,6.8406 -1.8691,9.3632 -2.5103,2.7029 -2.5134,2.7359 -0.9043,7.7676 1.6725,5.2301 2.318,5.9568 19.773,22.246 8.4722,7.9061 12.224,9.682 23.949,11.33 13.094,1.8405 25.388,9.0358 30.297,17.734 4.4938,7.9625 10.695,13.107 19.047,15.797 l 7.1055,2.2872 23.775,-7.627 c 13.076,-4.1954 25.125,-7.8801 26.775,-8.1875 1.65,-0.3074 16.463,-1.2422 32.918,-2.0762 29.45,-1.4926 30.099,-1.4815 41.5,0.586 18.07,3.2767 57.529,13.724 68.582,18.158 10.309,4.1355 21.06996,7.1538 22.45296,6.2988 0.4326,-0.2673 10.884,-3.1488 23.227,-6.4023 15.947,-4.2036 24.779,-7.0893 30.518,-9.9747 4.4417,-2.2333 17.015,-7.2577 27.939,-11.166 l 19.863,-7.1074 23,-2.1035 c 18.973,-1.7364 24.331,-1.9123 30.602,-1 10.097,1.469 52.332,10.944 57.398,12.877 2.2,0.8393 12.146,4.5937 22.102,8.3418 9.9561,3.748 19.929,7.7457 22.162,8.8848 6.1629,3.1441 19.128,8.2521 24.736,9.7461 7.5334,2.0067 17.134,0.9557 42.59,-4.666 12.569,-2.7758 25.455,-5.9484 28.633,-7.0488 8.9486,-3.0983 19.248,-4.0739 29.709,-2.8164 13.04,1.5675 31.103,5.3802 44.588,9.4121 6.4274,1.9217 12.202,3.4941 12.832,3.4941 0.8557,0 1.2079,-59.02 1.3964,-233.75 l 0.252,-233.75 54.5,-0.2305 c 29.975,-0.1262 227.19,-0.2387 438.25,-0.25 l 383.75,-0.02 v -330.72 l -9.25,-1.2246 c -12.096,-1.6022 -22.972,-4.3696 -34.482,-8.7754 l -9.336,-3.5742 -12.873,-14.182 -12.873,-14.184 -11.344,-4.9219 c -11.246,-4.8805 -11.476,-5.048 -27.117,-19.842 -13.692,-12.95 -17.607,-16.02 -29.66,-23.25 -7.6377,-4.5813 -14.307,-8.3301 -14.82,-8.3301 -0.513,0 -7.6422,3.0924 -15.84,6.8711 -15.95,7.352 -18.157,7.9878 -38.447,11.098 l -13.184,2.0214 -8.1367,-6.3476 c -4.4755,-3.4905 -13.537,-9.7587 -20.137,-13.93 -22.954,-14.506 -26.032,-16.598 -31.416,-21.363 -6.4173,-5.6802 -13.084,-15.557 -13.084,-19.383 0,-1.4974 -0.6465,-3.2595 -1.4375,-3.916 -0.791,-0.6565 -3.3785,-3.8538 -5.75,-7.1055 -2.7541,-3.7764 -5.577,-6.4285 -7.8125,-7.3398 l -3.5,-1.4258 -2.3457,3.8984 c -2.0183,3.356 -3.2726,4.1891 -9,5.9668 -7.7471,2.4047 -11.555,2.0271 -18.141,-1.7988 -5.2475,-3.0483 -7.5525,-5.4714 -9.6387,-10.131 -4.0794,-9.1116 -7.6188,-10.874 -14.883,-7.4101 -3.4188,1.6303 -3.736,1.6194 -7.2227,-0.25 -2.2573,-1.2102 -7.4298,-6.7173 -13.578,-14.455 -9.1413,-11.505 -10.381,-12.674 -15.562,-14.672 -3.7863,-1.4603 -7.9211,-2.1839 -12.629,-2.2109 -10.041,-0.057 -36.783,2.4466 -45,4.2129 -3.85,0.8276 -14.875,2.2249 -24.5,3.1054 -9.625,0.8806 -23.817,2.5501 -31.537,3.711 l -14.037,2.1113 -4.209,-2.1484 c -2.3153,-1.1812 -6.1693,-2.4162 -8.5625,-2.7442 -6.507,-0.8919 -24.278,2.3718 -28.94,5.3145 -2.9549,1.8654 -5.0446,2.3839 -9.0293,2.2402 -5.7427,-0.207 -41.314,1.9053 -43.686,2.5938 -0.825,0.2395 -7.575,1.1429 -15,2.0078 l -13.5,1.5723 -8,-4.0684 c -7.5404,-3.8334 -20.393,-8.0937 -41,-13.594 -6.5528,-1.7489 -11.656,-2.4073 -18.768,-2.4179 -9.7,-0.014 -9.836,-0.049 -19.5,-4.9278 -12.838,-6.482 -17.096,-11.044 -25.67,-27.514 -3.7014,-7.1103 -8.4064,-15.435 -10.455,-18.5 -6.3399,-9.4838 -12.748,-25.469 -14.174,-35.356 -1.2077,-8.3762 -1.4551,-8.9544 -5.3496,-12.443 -5.8056,-5.2011 -12.324,-13.81 -13.088,-17.287 -0.358,-1.6299 -1.0919,-3.2352 -1.6309,-3.5683 -0.061,-0.038 -0.1806,-0.047 -0.3554,-0.031 z"/> ' +
'  <path class="region" id="Dakhla-ouadidahab" d="m 680.6,3566 -3.6191,3.8809 c -1.9904,2.1345 -5.9336,5.0532 -8.7617,6.4863 -5.396,2.7344 -7.2085,4.9435 -7.2188,8.793 -0.003,1.2736 -0.67839,3.6043 -1.5,5.1797 -0.82161,1.5754 -1.4941,3.9038 -1.4941,5.1738 0,5.7291 -6.8594,10.402 -25.646,17.477 -5.9702,2.2481 -12.072,4.9653 -13.562,6.0371 -1.49,1.0718 -3.0484,1.9492 -3.4609,1.9492 -0.41251,0 -2.5668,1.9125 -4.7891,4.25 -2.2223,2.3375 -5.616,5.6789 -7.541,7.4258 -4.6934,4.2591 -10.85,12.039 -17.619,22.264 -9.9447,15.022 -19.547,25.622 -28.881,31.879 -5.7735,3.87 -18.532,15.93 -24.146,22.824 -2.1196,2.603 -5.766,6.5052 -8.1035,8.6719 -2.3375,2.1668 -4.25,4.4614 -4.25,5.0996 0,1.3913 -8.3663,9.5329 -12.287,11.957 -2.3758,1.4688 -2.7022,2.1948 -2.2168,4.9258 0.7968,4.4825 -1.9852,8.5173 -9.9082,14.371 -10.577,7.8145 -12.496,8.9869 -24.975,15.262 -13.286,6.681 -17.624,9.9245 -15.137,11.316 0.83818,0.4691 1.5234,2.1263 1.5234,3.6816 0,1.5554 0.675,3.3876 1.5,4.0723 0.825,0.6847 1.5,1.797 1.5,2.4727 0,0.6757 1.112,3.3238 2.4726,5.8828 1.976,3.7163 2.2779,5.167 1.5,7.2129 -1.2883,3.3885 -1.228,4.0853 0.22656,2.6308 0.66001,-0.66 2.4122,-1.1992 3.8926,-1.1992 2.0135,0 2.8444,0.6092 3.2988,2.4199 0.85995,3.4264 -0.0745,5.196 -3.9531,7.4844 -2.577,1.5205 -3.6498,3.0491 -4.4961,6.4102 -0.85423,3.3924 -2.5938,5.8472 -7.5254,10.615 -3.5286,3.4116 -6.416,6.7819 -6.416,7.4883 0,1.9787 -4.5055,9.9942 -8.7129,15.504 -2.0835,2.7284 -5.1002,7.0735 -6.7051,9.6562 -1.6049,2.5826 -3.6299,4.9092 -4.5,5.168 -1.3789,0.4101 -6.7627,10.3 -8.4902,15.598 -0.33091,1.0147 -1.5242,2.0862 -2.6504,2.3808 -1.1262,0.2945 -3.5711,2.9185 -5.4336,5.8301 -2.0914,3.2694 -4.7223,5.9269 -6.8809,6.9512 l -3.4961,1.6582 2.4355,4.3613 c 1.3387,2.3979 2.4336,5.3072 2.4336,6.4668 0,1.1595 -2.5688,7.374 -5.709,13.809 -4.8858,10.012 -6.9053,12.94 -14,20.301 -7.234,7.5057 -8.291,9.0578 -8.291,12.174 0,2.3503 -0.85468,4.5857 -2.5,6.541 -1.375,1.6341 -2.5,3.3902 -2.5,3.9004 0,0.5102 -2.2711,4.2245 -5.0469,8.2539 -3.882,5.6351 -4.9244,7.9264 -4.5117,9.9277 0.79798,3.87 -7.9236,17.812 -15.74,25.162 -2.7949,2.628 -5.8782,6.87 -6.5586,8.8809 1.6764,-0.9948 2.4369,-0.9125 4.3828,0.1289 1.2386,0.6629 2.3779,1.642 3.4023,2.8359 4.0703,3.2544 7.03,10.308 7.0195,18.094 -0.0107,7.9091 -3.283,16.862 -6.8027,18.615 -1.2949,0.645 -4.2199,2.9408 -6.5,5.1016 -2.2801,2.1608 -5.2854,4.6308 -6.6797,5.4883 -3.5548,2.1864 -15.283,6.7949 -17.293,6.7949 -0.91935,0 -1.6719,0.6227 -1.6719,1.3848 0,0.7621 -0.67012,2.6746 -1.4883,4.25 -1.1416,2.1981 -1.1997,2.9587 -0.25,3.2656 3.9421,1.274 3.6377,7.5618 -0.67773,13.975 -4.4134,6.5583 -9.1192,16.618 -9.9824,21.34 -0.37355,2.0433 -0.83881,8.7933 -1.0332,15 -0.20373,6.5048 -0.97105,12.98 -1.8125,15.285 -0.80288,2.2 -1.781,6.4693 -2.1738,9.4883 -0.39279,3.0189 -1.6096,6.9375 -2.7031,8.707 -1.7845,2.8874 -13.073,12.305 -14.75,12.305 -1.1606,0 -3.9733,6.341 -4.4355,10 -0.24319,1.925 -0.92807,4.85 -1.5215,6.5 -0.59343,1.65 -1.6339,7.0129 -2.3125,11.918 -1.2173,8.7995 -4.8112,17.638 -8.375,20.596 -0.81622,0.6774 -1.4844,2.516 -1.4844,4.0859 0,6.7483 -24.154,19.9 -36.547,19.9 -3.6731,0 -4.4917,-0.4362 -6.5742,-3.4941 -4.0455,-5.9404 -9.0523,-4.3484 -14.139,4.4941 -1.4237,2.475 -3.8226,5.4 -5.3301,6.5 -1.5075,1.1 -3.309,2.5625 -4.0039,3.25 -0.69492,0.6875 -1.7212,1.25 -2.2793,1.25 -1.9789,0 -4.127,4.5032 -4.127,8.6504 0,4.5801 -1.3131,6.4418 -6.3457,9 -1.7354,0.8821 -3.2542,1.6826 -3.375,1.7793 -0.37391,0.2993 -7.3747,19.755 -9.2559,25.723 -0.98008,3.1091 -2.9443,8.0591 -4.3652,11 -1.4209,2.941 -2.7971,6.4727 -3.0586,7.8477 -0.6782,3.5657 -2.6175,9.0081 -4.4551,12.5 -0.86831,1.65 -1.6533,5.319 -1.7441,8.1543 -0.23015,7.1838 -4.3539,15.381 -10.908,21.688 -4.7619,4.5816 -5.5018,5.8585 -6.6289,11.422 -1.2226,6.0352 -1.1889,6.32 0.93359,7.8066 1.2116,0.8487 2.2031,2.439 2.2031,3.5352 0,2.6248 -2.611,7.6274 -6.0274,11.551 -2.3934,2.7485 -2.687,3.7835 -2.2754,8 0.26,2.6638 0.8887,6.2165 1.3984,7.8946 0.60731,1.9992 0.52881,4.9293 -0.23047,8.5 -0.63729,2.9969 -1.2746,9.7242 -1.416,14.949 -0.14136,5.225 -0.75064,11.071 -1.3535,12.992 -0.60286,1.9214 -1.0957,5.0055 -1.0957,6.8516 0,1.8459 -1.1521,7.6805 -2.5586,12.967 -1.4065,5.2862 -2.7953,12.554 -3.0879,16.15 -0.29257,3.5964 -1.1366,8.5641 -1.875,11.039 -1.8536,6.2127 -2.9207,14.592 -2.5801,20.252 0.15729,2.6133 -0.18639,6.8883 -0.76367,9.5 -4.0804,18.46 -4.3843,20.655 -3.7695,27.27 0.39111,4.2082 0.25114,7.0968 -0.36328,7.4765 -0.55078,0.3404 -1.0071,2.0556 -1.0137,3.8106 -0.007,1.7551 -0.67634,5.6664 -1.4883,8.6914 -0.81196,3.025 -1.4818,8.3125 -1.4883,11.75 -0.0105,5.5087 -0.2274,6.2287 -1.9512,6.2461 h 4.7285 c 0.56134,0 1.057,-0.016 1.5215,-0.039 -1.2836,-0.06 -1.3932,-0.7055 -0.84179,-3.6445 0.38038,-2.0276 1.909,-5.5151 3.3965,-7.75 4.9018,-7.3646 7.2163,-15.137 12.131,-40.748 2.6717,-13.923 5.4973,-27.114 6.2793,-29.314 l 1.4219,-4 20.9,-0.7539 c 11.496,-0.4145 245.17,-0.8645 519.28,-1 l 498.37999,-0.2461 -0.6602,-11 c -1.0545,-17.55 -5.3949,-85.656 -8.0937,-127 -1.3643,-20.9 -4.5096,-70.625 -6.9903,-110.5 -2.4807,-39.875 -4.9396,-76.199 -5.4629,-80.721 -0.5233,-4.5215 -4.8566,-22.468 -9.6289,-39.881 l -8.6758,-31.658 5.2403,-17.621 c 2.8827,-9.6911 5.8129,-18.969 6.5097,-20.619 0.6968,-1.65 7.3158,-11.12 14.709,-21.045 12.879,-17.288 13.837,-18.314 22.871,-24.449 5.1862,-3.5223 30.58,-20.8 56.43,-38.395 l 47,-31.99 55,-8.2266 27.5,-13.83 c 24.862,-12.503 28.891,-14.208 42,-17.75 7.975,-2.1549 16.864,-4.5817 19.754,-5.3946 l 5.2539,-1.4785 -0.5078,-265.18 -13,-3.8653 c -20.114,-5.979 -42.166,-10.113 -54,-10.123 -8.0537,-0.01 -11.46,0.4819 -17.5,2.5117 -4.125,1.3862 -18.075,4.878 -31,7.7617 -35.323,7.8806 -41.858,7.5541 -65,-3.2519 -4.675,-2.1829 -16.15,-6.8242 -25.5,-10.314 -9.35,-3.4898 -18.8,-7.1085 -21,-8.039 -4.2875,-1.8134 -45.64,-11.493 -57.898,-13.553 -6.3806,-1.0721 -10.561,-0.9534 -30.252,0.8574 l -22.85,2.1016 -18.029,6.5078 c -9.9162,3.5791 -22.516,8.6063 -28,11.172 -6.8201,3.1908 -16.448,6.376 -30.471,10.08 -11.275,2.9784 -21.986,5.9036 -23.803,6.5 -4.2036,1.3805 -13.88399,-0.8617 -26.68899,-6.1817 -9.7196,-4.0378 -48.984,-14.486 -67.268,-17.9 -10.592,-1.9778 -12.548,-2.0401 -33,-1.0312 -39.317,1.9396 -39.819,2.0208 -67.043,10.883 l -24.301,7.9121 -8.1094,-2.6445 c -9.5478,-3.1128 -16.281,-8.5044 -20.947,-16.774 -4.8045,-8.513 -15.467,-14.93 -27.896,-16.793 -2.4444,-0.3663 -7.2872,-1.3968 -10.764,-2.2891 -5.9345,-1.5232 -7.1614,-2.3996 -20.051,-14.342 -12.405,-11.494 -13.911,-13.259 -15.631,-18.32 z"/> ' +
'  </svg> ' 
  );

  // chartWrapper.append("div").attr("id", "tooltip")
  //   .attr("class", "tooltip")
  //   .style("opacity", 0);
    
  // const tooltip = chartWrapper.select("#tooltip");

  chartWrapper.select("svg").select("g").selectAll("path")
  .style("fill", function () { return color(data[d3.select(this).attr("id")])})
  .on("mouseover", function () {
  // tooltip.transition()
  //   .duration(200)
  //   .style("opacity", 1);
  // tooltip.html("<span>" +d3.select(this).attr("id") + "</span>")
  // .style("left", (d3.event.pageX - 25) + "px")
  // .style("top", (d3.event.pageY - 28) + "px");
  chartWrapper.select("#regionName").text(d3.select(this).attr("id"));
  chartWrapper.select("#cases").text(data[d3.select(this).attr("id")]);
})
//   .on("mouseout", function () {
//   tooltip.transition()
//     .duration(500)
//     .style("opacity", 0);
//     chartWrapper.select("#regionDetails").text("");
//     chartWrapper.select("#cases").text("");
// })
  
}


drawBarGraph(barDataset, false);






// function isButtonChecked(id) {
//   const buttonItem = d3.select(id);
//   const buttonBool = buttonItem.attr("class") === "mapButton_nok";
//   if (buttonBool) {
//     buttonItem.attr("class", "mapButton_ok");
//   } else {
//     buttonItem.attr("class", "mapButton_nok");
//   }

//   return buttonBool;
// }

// function appendBubblesButton(chartWrapper, id, buttonBool, label, updateFct) {
//   const buttonItem = chartWrapper.append("div")
//   .attr("id", id)
//   .style("margin-right", "10px")
//   .html(label)
//   .on("click", updateFct);

//   if (buttonBool) {
//     buttonItem.attr("class", "mapButton_ok");
//   } else {
//     buttonItem.attr("class", "mapButton_nok");
//   }
// }

// function drawBubblesGraph() {
//   drawBubblesGraph_(true, false);
// }

// function updateBubblesPer1M() {
//   const per1M = isButtonChecked("#per1M");

//   const buttonItem = d3.select("#circleSize");
//   const buttonBool = buttonItem.attr("class") === "mapButton_ok";

//   drawBubblesGraph_(per1M, buttonBool);
// }

// function updateBubblesCircleSize() {
//   const circleSize = isButtonChecked("#circleSize");

//   const buttonItem = d3.select("#per1M");
//   const buttonBool = buttonItem.attr("class") === "mapButton_ok";

//   drawBubblesGraph_(buttonBool, circleSize);
// }

// function drawBubblesGraph_(per1M, circleSize) { 

//   console.log("per1M", per1M);
//   console.log("circleSize", circleSize);
//   const chartWrapper = d3.select("#chart-wrapper");
//   chartWrapper.selectAll("*").remove();

//   chartWrapper.style("background-color", "white");


//   var tooltip = chartWrapper.append("div")
//   .attr("class", "tooltip")
//   .style("opacity", 0);



//   appendBubblesButton(chartWrapper, "per1M", per1M, "Per millions", updateBubblesPer1M);
//   appendBubblesButton(chartWrapper, "circleSize", circleSize, "Show mortality", updateBubblesCircleSize);

    
//   let data = 
//   [
  
//     {"country" : "USA", "totalConfirmedCases" : "158571", "totalDeath" : "2938", "totalRecovered" : "5211", "totalConfirmedCasesPer1M" : "479", "totalDeathPer1M" : "9"},
//     {"country" : "Italy", "totalConfirmedCases" : "101739", "totalDeath" : "11591", "totalRecovered" : "14620", "totalConfirmedCasesPer1M" : "1683", "totalDeathPer1M" : "192"},
//     {"country" : "Spain", "totalConfirmedCases" : "85195", "totalDeath" : "7340", "totalRecovered" : "16780", "totalConfirmedCasesPer1M" : "1822", "totalDeathPer1M" : "157"},
//     {"country" : "China", "totalConfirmedCases" : "81470", "totalDeath" : "3304", "totalRecovered" : "75700", "totalConfirmedCasesPer1M" : "57", "totalDeathPer1M" : "2"},
//     {"country" : "Germany", "totalConfirmedCases" : "63929", "totalDeath" : "560", "totalRecovered" : "9211", "totalConfirmedCasesPer1M" : "763", "totalDeathPer1M" : "7"},
//     {"country" : "France", "totalConfirmedCases" : "44550", "totalDeath" : "3024", "totalRecovered" : "7927", "totalConfirmedCasesPer1M" : "683", "totalDeathPer1M" : "46"},
//     {"country" : "UK", "totalConfirmedCases" : "22141", "totalDeath" : "1408", "totalRecovered" : "135", "totalConfirmedCasesPer1M" : "326", "totalDeathPer1M" : "21"},
//     {"country" : "S.Korea", "totalConfirmedCases" : "9661", "totalDeath" : "158", "totalRecovered" : "5228", "totalConfirmedCasesPer1M" : "188", "totalDeathPer1M" : "3"},
//     {"country" : "Egypt", "totalConfirmedCases" : "656", "totalDeath" : "41", "totalRecovered" : "150", "totalConfirmedCasesPer1M" : "6", "totalDeathPer1M" : "0.4"},
//     {"country" : "Algeria", "totalConfirmedCases" : "584", "totalDeath" : "35", "totalRecovered" : "37", "totalConfirmedCasesPer1M" : "13", "totalDeathPer1M" : "0.8"},
//     {"country" : "Morocco", "totalConfirmedCases" : "534", "totalDeath" : "33", "totalRecovered" : "14", "totalConfirmedCasesPer1M" : "14", "totalDeathPer1M" : "0.9"},
    
//   ];

//   data = data
//     .map(d => { return {...d, deathPercent: Math.round(d.totalDeath / d.totalConfirmedCases * 100)};})
//     .sort((a, b) => (a.deathPercent <= b.deathPercent) ? 1 : -1);

//   const maxCases = Math.max(...data.map(d => (per1M ? d.totalConfirmedCasesPer1M : d.totalConfirmedCases)));
//   const maxDeaths = Math.max(...data.map(d => (per1M ? d.totalDeathPer1M : d.totalDeath)));
//   const maxR = 50;

//   //chart size and margin
//   var margin = { top: 10, right: 30, bottom: 50, left: 50 },
//   width = window.innerWidth*0.78 - margin.left - margin.right - maxR,
//   height = window.innerWidth*0.78 - margin.top - margin.bottom - maxR;

//   //append the sv object to canvas
//   var svg = chartWrapper
//   .append("svg")
//   .attr("width", width + margin.left + margin.right + maxR)
//   .attr("height", height + margin.top + margin.bottom + maxR)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   svg.selectAll("defs").data(data).enter()
//   .append("defs")
//   .append("pattern")
//     .attr("id", d => d.country)
//     .attr("x", "0%")
//     .attr("y", "0%")
//     .attr("height", "100%")
//     .attr("width", "100%")
//     .attr("viewBox", "0 0 512 512")
//   .append("image")
//     .attr("x", "0%")
//     .attr("y", "0%")
//     .attr("height", "512")
//     .attr("width", "512")
//     .attr("xlink:href", d => "assets/" + d.country + ".png")
//     ;

//   //add X axis
//   var x = d3
//   .scale.linear()
//   .domain([0, maxCases])
//   .range([0+(per1M ? maxR : 10), width+maxR]);

//   //add Y axis
//   var y = d3
//   .scale.linear()
//   .domain([0, maxDeaths])
//   .range([height-(per1M ? maxR : 10), 0+maxR]);


//   var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom")
//   // .tickFormat((d, i) => {return formatDate(new Date(d))}) 
//   .tickFormat(d3.format("d"))
//   .ticks(10);

//   var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient("left")
//   .ticks(10)
//   .tickFormat(d3.format("d"));

//   var xAxisItem = svg.append("g")
//   .attr("class", "axis axis--x")
//   .attr("transform", "translate(0," + height + ")") 
//   .call(xAxis);

//   xAxisItem.append("text")
//   .attr("transform", "translate(" + width*2/3 + ",0)")
//   .attr("y", "3em")
//   .style("text-anchor", "middle")
//   .text("number of cases" + (per1M ? "/1 Million" : ""));


//   xAxisItem.append("text")
//   .attr("transform", "translate(" + width*2/3 + ",15)")
//   .attr("y", "3em")
//   .style("text-anchor", "middle")
//   .text("Circle size show mortality");

//   svg.selectAll("g.tick")
//   .selectAll("text").attr("transform", "translate(-10, 10)  rotate(-90)");

//   svg.append("g")
//   .attr("class", "axis axis--y")
//   .call(yAxis)
//   .append("text")
//   .attr("transform", "translate(0, 0) rotate(-90)")
//   .attr("x", "-5em")
//   .attr("y", "-2.5em")
//   .style("text-anchor", "end")
//   .text("Number of deaths" + (per1M ? "/1 Million" : ""))

//   //add a scale for bubble size
//   var z = d3
//   .scale.linear()
//   .domain([1, 12])
//   .range([1, maxR]);
//   var color = d3
//   .scale.linear()
//   .domain([1, 12])
//   .range(['#5F7F17', '#E55812']);

//   //    .range(['#22c1c3', '#fdbb2d']);
//   //add bubbles
//   svg
//   .append("g")
//   .selectAll("dot")
//   .data(data)
//   .enter()
//   .append("circle")
//   .attr("country", function(d) {
//     return d.country;
//   })
//   .attr("cx", function(d) {
//     return x(per1M ? d.totalConfirmedCasesPer1M : d.totalConfirmedCases);
//   })
//   .attr("cy", function(d) {
//     return y(per1M ? d.totalDeathPer1M : d.totalDeath);
//   })
//   .attr("r", function(d) {
//     return circleSize ? z(d.deathPercent) : 10;
//   })
//   //.style("fill", "#69b3a2")
//   .style("fill", d => color(d.deathPercent))
//   .style("fill", d => "url(#" + d.country + ")")
//   .style("opacity", "0.7")
//   .attr("stroke", "black")
//   .on("mouseover", function (d) {
//     tooltip.transition()
//       .duration(200)
//       .style("opacity", 1);
//     tooltip
//     .html(
//     "Country: " +
//       d.country +
//       "<br>" +
//       "Death: " +
//       d.totalDeath +
//       "<br>" +
//       "Confirmed Cases: " +
//       d.totalConfirmedCases + 
//       "<br>" +
//       "Mortality: " +
//       d.deathPercent + "%"
//     )
//     .style("left", (d3.event.pageX - 25) + "px")
//     .style("top", (d3.event.pageY - 28) + "px");
//     // chartWrapper.select("#regionName").text(d3.select(this).attr("id"));
//     // chartWrapper.select("#cases").text(data[d3.select(this).attr("id")]);
//   })
//     .on("mouseout", function (d) {
//     tooltip.transition()
//       .duration(500)
//       .style("opacity", 0);
//       chartWrapper.select("#regionDetails").text("");
//       chartWrapper.select("#cases").text("");
//   });





//   var mouseover = function(d) {
//     tooltip.style("opacity", 1);
//     d3.select(this)
//     .style("stroke", "green")
//     .style("opacity", 1)
//     .attr("r", function(d) {
//     return d3.select(this).attr("r") * 1.1;
//     });
//     };
    
//     var mousemove = function(d) {
//     tooltip
//     .html(
//     "Country: " +
//       d.country +
//       "<br>" +
//       "Death: " +
//       d.totalDeath +
//       "<br>" +
//       "Confirmed Cases: " +
//       d.totalConfirmedCases + 
//       "<br>" +
//       "Mortality: " +
//       d.deathPercent + "%"
//     )
//     .style("top", d3.mouse(this)[1], "px")
//     .style("left", d3.mouse(this)[0], "px");
//     };
    
//     var mouseleave = function(d) {
//     tooltip.style("opacity", 0);
//     d3.select(this)
//     //.style("stroke", "none")
//     .style("opacity", 0.8)
//     .attr("r", function(d) {
//     return d3.select(this).attr("r") / 1.1;
//     });
//     };
// }








