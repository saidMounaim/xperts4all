//https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Morocco
//https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_maladie_%C3%A0_coronavirus_de_2020_au_Maroc

//const cumule = false;

$(".wrapper").delay(600).fadeIn(500);
$(".chart-sankey").delay(600).fadeIn(500);



d3.select("#cucmule").on("change", update);

var formatDate = d3.time.format("%d/%m");
var parseDate = d3.time.format("%d/%m/%Y").parse;

var barDataset = [
  
  {"day": 	1	,"date": "	02/03/2020	", "totalNegatifTests" : 	28	, "totalConfirmedCases" : 	1	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	28	, "confirmedCases" : 	1	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	2	,"date": "	03/03/2020	", "totalNegatifTests" : 	32	, "totalConfirmedCases" : 	1	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	4	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	3	,"date": "	04/03/2020	", "totalNegatifTests" : 	34	, "totalConfirmedCases" : 	1	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	2	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	4	,"date": "	05/03/2020	", "totalNegatifTests" : 	48	, "totalConfirmedCases" : 	2	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	14	, "confirmedCases" : 	1	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	100	},
  {"day": 	5	,"date": "	06/03/2020	", "totalNegatifTests" : 	50	, "totalConfirmedCases" : 	2	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	2	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	6	,"date": "	07/03/2020	", "totalNegatifTests" : 	55	, "totalConfirmedCases" : 	2	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	5	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	7	,"date": "	08/03/2020	", "totalNegatifTests" : 	60	, "totalConfirmedCases" : 	2	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	5	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	8	,"date": "	09/03/2020	", "totalNegatifTests" : 	60	, "totalConfirmedCases" : 	2	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	0	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	9	,"date": "	10/03/2020	", "totalNegatifTests" : 	63	, "totalConfirmedCases" : 	3	, "totalDeath" : 	0	, "totalRecovered" : 	0	, "negatifTests" :	3	, "confirmedCases" : 	1	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	50	},
  {"day": 	10	,"date": "	11/03/2020	", "totalNegatifTests" : 	78	, "totalConfirmedCases" : 	6	, "totalDeath" : 	1	, "totalRecovered" : 	0	, "negatifTests" :	15	, "confirmedCases" : 	3	, "death" : 	1	, "recovered" :	0	, "plusPercent" :	100	},
  {"day": 	11	,"date": "	12/03/2020	", "totalNegatifTests" : 	91	, "totalConfirmedCases" : 	6	, "totalDeath" : 	1	, "totalRecovered" : 	0	, "negatifTests" :	13	, "confirmedCases" : 	0	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	0	},
  {"day": 	12	,"date": "	13/03/2020	", "totalNegatifTests" : 	106	, "totalConfirmedCases" : 	8	, "totalDeath" : 	1	, "totalRecovered" : 	1	, "negatifTests" :	15	, "confirmedCases" : 	2	, "death" : 	0	, "recovered" :	1	, "plusPercent" :	33	},
  {"day": 	13	,"date": "	14/03/2020	", "totalNegatifTests" : 	112	, "totalConfirmedCases" : 	18	, "totalDeath" : 	1	, "totalRecovered" : 	1	, "negatifTests" :	6	, "confirmedCases" : 	10	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	125	},
  {"day": 	14	,"date": "	15/03/2020	", "totalNegatifTests" : 	122	, "totalConfirmedCases" : 	28	, "totalDeath" : 	1	, "totalRecovered" : 	1	, "negatifTests" :	10	, "confirmedCases" : 	10	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	56	},
  {"day": 	15	,"date": "	16/03/2020	", "totalNegatifTests" : 	152	, "totalConfirmedCases" : 	37	, "totalDeath" : 	1	, "totalRecovered" : 	1	, "negatifTests" :	30	, "confirmedCases" : 	9	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	32	},
  {"day": 	16	,"date": "	17/03/2020	", "totalNegatifTests" : 	183	, "totalConfirmedCases" : 	44	, "totalDeath" : 	2	, "totalRecovered" : 	1	, "negatifTests" :	31	, "confirmedCases" : 	7	, "death" : 	1	, "recovered" :	0	, "plusPercent" :	19	},
  {"day": 	17	,"date": "	18/03/2020	", "totalNegatifTests" : 	263	, "totalConfirmedCases" : 	54	, "totalDeath" : 	2	, "totalRecovered" : 	1	, "negatifTests" :	80	, "confirmedCases" : 	10	, "death" : 	0	, "recovered" :	0	, "plusPercent" :	23	},
  {"day": 	18	,"date": "	19/03/2020	", "totalNegatifTests" : 	307	, "totalConfirmedCases" : 	63	, "totalDeath" : 	2	, "totalRecovered" : 	2	, "negatifTests" :	44	, "confirmedCases" : 	9	, "death" : 	0	, "recovered" :	1	, "plusPercent" :	17	},
  {"day": 	19	,"date": "	20/03/2020	", "totalNegatifTests" : 	385	, "totalConfirmedCases" : 	86	, "totalDeath" : 	3	, "totalRecovered" : 	2	, "negatifTests" :	78	, "confirmedCases" : 	23	, "death" : 	1	, "recovered" :	0	, "plusPercent" :	37	},
  {"day": 	20	,"date": "	21/03/2020	", "totalNegatifTests" : 	441	, "totalConfirmedCases" : 	96	, "totalDeath" : 	3	, "totalRecovered" : 	3	, "negatifTests" :	56	, "confirmedCases" : 	10	, "death" : 	0	, "recovered" :	1	, "plusPercent" :	12	},
  {"day": 	21	,"date": "	22/03/2020	", "totalNegatifTests" : 	512	, "totalConfirmedCases" : 	115	, "totalDeath" : 	4	, "totalRecovered" : 	3	, "negatifTests" :	71	, "confirmedCases" : 	19	, "death" : 	1	, "recovered" :	0	, "plusPercent" :	20	},
  {"day": 	22	,"date": "	23/03/2020	", "totalNegatifTests" : 	643	, "totalConfirmedCases" : 	143	, "totalDeath" : 	4	, "totalRecovered" : 	5	, "negatifTests" :	131	, "confirmedCases" : 	28	, "death" : 	0	, "recovered" :	2	, "plusPercent" :	24	},
  {"day": 	23	,"date": "	24/03/2020	", "totalNegatifTests" : 	685	, "totalConfirmedCases" : 	170	, "totalDeath" : 	5	, "totalRecovered" : 	6	, "negatifTests" :	42	, "confirmedCases" : 	27	, "death" : 	1	, "recovered" :	1	, "plusPercent" :	19	},
  {"day": 	24	,"date": "	25/03/2020	", "totalNegatifTests" : 	740	, "totalConfirmedCases" : 	225	, "totalDeath" : 	6	, "totalRecovered" : 	7	, "negatifTests" :	55	, "confirmedCases" : 	55	, "death" : 	1	, "recovered" :	1	, "plusPercent" :	32	},
  


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

let initSize = 30;
// if (window.innerWidth < 600) {
//   initSize = 10;
// }

var margin = {top: 30, right: initSize, bottom: 40, left: initSize},
    width  = window.innerWidth*0.78 - margin.left - margin.right,
    height = 290 - margin.top - margin.bottom;

  var z = d3.scale.ordinal()
  .range(["#50E3C2", "#EF5C6E", "#FFFFFF"]);

  var n = Math.max(...barDataset.map(d => d.day));

  var x = d3.scale.linear()
  //.domain([parseDate("02/03/2020"), parseDate("23/03/2020")])
  .domain([1, n])
  .rangeRound([0, width], .1);

  var y = d3.scale.linear()
  .rangeRound([height, 0]);

  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  // .tickFormat((d, i) => {return formatDate(new Date(d))}) 
  .tickFormat(d3.format("d"))
  .ticks(30);

  var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(5)
  .tickFormat(d3.format("d"));


  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();

  chartWrapper.style("background-color", "#333b66");
  d3.select("#cucmule").style("display", null);
  d3.select("#cucmuleLabel").style("display", null);

  const ul = chartWrapper
  .append("ul")
  .attr("class", "vbroadcast-legend");
  ul.append("li").attr("class", "cases").html("Confirmed cases");
  ul.append("li").attr("class", "deaths").html("Deaths");
  ul.append("li").attr("class", "recovered").html("Recovered");

  var svg = chartWrapper
  .append("svg")
  .attr("width", "100%")
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  ;

  var layers = d3.layout.stack()
  (status.map(function (c) {
    return data.map(function (d) {
      // return {x: parseDate(d.date), y: d[c], type: label[c]};
      return {x: d.day, y: d[c], plusPercent: d.plusPercent, type: label[c], date: d.date};
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
          //.tickSize(-width)
          .tickFormat("")
         );

  svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")") 
    .call(xAxis)
    .append("text")
    .attr("transform", "translate(" + width/2 + ",0)")
    .attr("y", "3em")
    .style("text-anchor", "middle")
    .text("Days since first case 02/03/2020");
  //  svg.selectAll("g.tick")
  //    .selectAll("text")
  //    .attr("transform", "translate(0,20) rotate(-90)");

  svg.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", "-5em")
    .attr("y", "-2.5em")
    .style("text-anchor", "end")
    .text("Cases/Deaths/Recoveries");

  var tooltip = chartWrapper.append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function sumAll(d) {
  return status.map(i => d[i]).reduce((a,b) => a + b, 0);
}

  svg.selectAll("g.text")
    .data(data).enter()
    .append("g")
    .attr("class", "text")
    .attr("transform", d => "translate(" + (8 + x(d.day)) + "," + y(sumAll(d)) + ") rotate(-90)")
    .append("text")
    .text(function (d) {
      return d.plusPercent + '%';
    })



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
    tooltip.html("<span>" + d.date + ": " + d.y + " " + d.type + "</span>")
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














var sankeyData = {
  "nodes": [
		{
			"name": "Tests dones"  // 0
		},
		{
			"name": "Positifs"     // 1
		},
		{
			"name": "Negatifs"     // 2
		},
		{
			"name": "Negatifs/Recovered"  // 3
		},
		{
			"name": "Deads"               // 4
		},
		{
			"name": "Still sick"          // 5
		}
	],
	"links": [
		{
			"source": 0,
			"target": 1,
			"value": cases
		},
		{
			"source": 1,
			"target": 5,
			"value": cases - recovered - deaths
		},
		{
			"source": 1,
			"target": 3,
			"value": recovered
		},
		{
			"source": 1,
			"target": 4,
			"value": deaths
		},
		{
			"source": 0,
			"target": 2,
			"value": tests
		},
		{
			"source": 2,
			"target": 3,
			"value": tests
		}
	]
};

// var margin = {top: 1, right: 1, bottom: 6, left: 1},
//     width = window.innerWidth*0.9 - margin.left - margin.right,
//     height = window.innerWidth*0.48 - margin.top - margin.bottom;

let initSize = 30;
var margin = {top: 30, right: 1, bottom: 6, left: 1},
    width  = window.innerWidth*0.78 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;



var formatNumber = d3.format(",.0f"),
    format = function(d) { return formatNumber(d) + " TWh"; };
const color = //d3.scale.category20();
      {"Tests dones" : "gray",
      "Negatifs/Recovered" : "green",
      "Negatifs" : "green",
      "Positifs" : "yellow",
      "Still sick" : "yellow",
      "Deads" : "red",
      "Recovered" : "green",}


function drawSankeyGraph(data) {

  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();


  d3.select("#cucmule").style("display", "none");
  d3.select("#cucmuleLabel").style("display", "none");


  const tooltipWrapper = chartWrapper.append("div").attr("id", "tooltip");
  tooltipWrapper.append("p").html("Move the mouse");

  chartWrapper.append("div").attr("id", "chart-sankey");

  chartWrapper.style("background-color", "white");

  const tooltip = d3.select("#tooltip")
    .append('div')
    .attr('id', 'tooltip');


  var svg = d3.select("#chart-sankey").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var sankey = d3.sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .size([width, height]);

  var path = sankey.link();


  sankey
      .nodes(data.nodes)
      .links(data.links)
      .layout(32);

  var link = svg.append("g").selectAll(".link")
      .data(data.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; })

      .on('mouseenter', function (d) {
        d3
          .select(this)
          .transition()
          .attr('opacity', 1);

        tooltip
          .selectAll('p')
          .remove();

        const percent = Math.floor(d.value / d.source.value * 100);
        
        tooltip
          .append('p')
          .html(`<strong>${d.value}</strong> (${percent}%) of <strong>${d.source.name}</strong> are <strong>${d.target.name}</strong>`);

        tooltip
          .style('opacity', 1)
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY}px`);
      })
      .on('mouseout', function () {
        d3
          .select(this)
          .transition()
          .attr('opacity', 0.5);

        tooltip
          .style('opacity', 0)
          .selectAll('p')
          .remove();
          
        tooltip
        .append('p')
        .html('Move the mouse');
      });


  link.append("text")
      .attr("fill", "black").append("textPath")
      .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

  var node = svg.append("g").selectAll(".node")
      .data(data.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { this.parentNode.appendChild(this); })
      .on("drag", dragmove));

  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { return d.color = color[d.name]; })  //.replace(/ .*/, "")
      .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { return d.name + "\n" + format(d.value); });

  node.append("text")
      .attr("x", 20)
      .attr("x", function(d) { return d.dx/10; })
      .attr("y", -5)
      //.attr("y", function(d) { return d.dy / 2; })
      //.attr("dy", ".35em")
      //.attr("text-anchor", "middle")
      .attr("transform", "rotate(90)")
      .attr("font-size", 12)
      .attr("fill", "black")
      .text(function(d) { return d.name; })
    
    /*.filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start")*/;
}

function dragmove(d) {
  d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
  sankey.relayout();
  link.attr("d", path);
}
















function drawWaffles() {


  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();


  d3.select("#cucmule").style("display", "none");
  d3.select("#cucmuleLabel").style("display", "none");

  const div = d3.select("#chart-wrapper")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)

        let width,
            height,
            widthSquares = 40,
            heightSquares = 40,
            squareSize = 25,
            gap = 1,
            theData = [];

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
        

        width = (squareSize * widthSquares) + widthSquares * gap + squareSize;
        height = (squareSize * heightSquares) + heightSquares * gap + squareSize;

        const svg = d3.select("#chart-wrapper")
            .append("svg")
            .attr('class', 'waffle')
            .attr("width", width)
            .attr("height", height)

        const originalData = {
          Negatifs: 965 - 225,
          Positifs: 225,
          Recovereds: 7,
          Deads: 6
        }
        
        const total = Object.keys(originalData).map(k => originalData[k]).reduce((x, y) => x + y);
  theData = Object.keys(originalData).map(k => d3.range(originalData[k]).map(i => {return {type: k} }))
    .reduce((x, y) => x.concat(y));
  
  

            svg.append("g")
            .attr('transform', "translate(30, 10)")
            .selectAll("div")
            .data(theData)
            .enter()
            .append("rect")
            .attr("width", squareSize)
            .attr("height", squareSize)
            .attr("class", d => d.type)
            .attr("fill", d => myColors[d.type])
            .attr("y", function(d, i) {
                let row = Math.floor(i / widthSquares);
                console.log("y", (row * squareSize) + (row * gap));
                return (row * squareSize) + (row * gap);
            })
            .attr("x", function(d, i) {
                let col = i % widthSquares;
                console.log("x", ((col * squareSize) + (col * gap)));
                return ((col * squareSize) + (col * gap))
            })
            .on("mouseover", function(d){
                div.transition()
                .duration(100)
                .style("opacity", 1);
              
              const itemNumber = d3.selectAll("." + d.type).size();
               total
               d3.selectAll("."+d.type).attr("fill", d => selectedColors[d.type]);
                 div.html("<span style = 'font-weight: bold'>" + itemNumber + " (" + Math.ceil(itemNumber/total*100) + "%) " + d.type + "</span>")
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


function drawSankey() {
  //drawSankeyGraph(sankeyData);
  drawWaffles()
}


function drawMap() {
  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();
  chartWrapper.append("img").attr("src", "assets/morocco.svg")
  
}


drawBarGraph(barDataset, false);