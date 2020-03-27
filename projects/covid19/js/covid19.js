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
      .attr('class', 'waffle-chart-legend--items')

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



        const originalData = {
          Negatifs: Math.ceil((965 - 225 - 7 - 6) / 965 * 100),
          Positifs: Math.ceil((225 - 7 - 6) / 965 * 100),
          Recovereds: Math.ceil(7 / 965 * 100),
          Deads: Math.ceil(6 / 965 * 100)
        }
        const total = Object.keys(originalData).map(k => originalData[k]).reduce((x, y) => x + y);
        theData = Object.keys(originalData).map(k => d3.range(originalData[k]).map(i => {return {type: k} }))
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


function drawWaffle() {
  //drawSankeyGraph(sankeyData);
  drawWaffles()
}


function drawMap() {
  d3.select("#cucmule").style("display", "none");
  d3.select("#cucmuleLabel").style("display", "none");


  const chartWrapper = d3.select("#chart-wrapper");
  chartWrapper.selectAll("*").remove();

  chartWrapper.style("background-color", "white");

  const width = (window.innerWidth);
  let scale = 612 / width;
  if (scale < 0.4 || scale > 1) {
    scale = 0.5;
  }
  console.log("scale", scale);
  chartWrapper.html(
  '	<svg ' +
  '	width="' + width + '"	' +
  '	height="' + width + '">	' +
  '	<g transform="translate(10, 10) scale(' + scale +', ' + scale + ')" > ' +
  '	<path class="region" ' +
  '	d="m 444.9853,0.47393 0.15,0.46 0.45,-0.01 0.28,1.31 1.38,0.42 -0.47,2.17 0.73,5.4 0.57,1.35 1.74,-0.12 -0.4,1.07 0.56,2.81 1.17,2.52 0.52,-0.1 0.32,0.54 0.63,-0.13 1.02,0.46 0.77,1.27 1.79,1.28 0.95,1.91 0.07,0.24 0.63,1.11 1.21,0.35 0.52,-0.19 3.37,3.94 1.16,0.62 1.14,0.15 1.32,1.54 1.44,0.84 0.46,0.58 3.81,1.54 1.26,-0.45 0.7,0.89 0.65,0.27 0.95,-0.12 2.59,0.78 1.14,-0.06 1.45,0.69 0,0 -1.09,1.26 -0.17,1.35 0.66,0.69 0.18,2.36 -0.93,2.41 -2.54,1.66 -3.84,0.68 -4.02,3.51 -0.83,0.04 -0.63,0.51 -0.75,1.3 -0.81,0.12 -1.49,0.77 -1.15,-0.05 -2.81,0.74 -1.01,-0.32 -0.63,0.42 -0.89,0 -2.48,1.17 -1.13,1.3 0,0 -2.59,-0.68 -3.25,1.39 -4.14,-0.87 -1.86,-1.07 -1.51,-2.41 -1.11,-0.59 -0.53,-0.79 -0.27,-0.09 -1.23,0.88 -1.27,-0.26 -1.62,0.07 -0.65,-0.43 -1.36,-2.03 -1.45,-0.68 -0.73,-0.82 -1.7,-0.25 -0.85,-0.99 -2.08,-0.17 -2.3,-0.9 -5.26,-0.95 -2.53,0.15 -3.63,-0.35 0,0 3.05,-9.56 0.52,-0.21 0.41,-0.69 2.43,-8.46 0.75,-1.26 0.39,-1.5 0.87,-0.81 0.89,-2.52 0.19,-1.76 0.23,-0.44 0.96,-4.72 1.27,-4.57 0.23,-0.06 -0.02,-0.63 0.86,-0.62 1.65,0.23 0.67,-0.21 1.6,0.61 0.01,0.34 0.92,0.19 1.11,-1.05 0.03,-0.91 1.02,-0.25 0.14,-0.35 0.46,0.1 0.75,-0.47 1.31,0.61 0.85,-0.43 1.1,0.26 0.67,-0.21 0.82,-0.67 0.08,0.23 0.31,-0.08 1.72,-1.93 0.51,-0.06 0.4,-0.97 0.24,0.21 0.42,-0.48 0.35,0 0.52,0.51 0.16,-0.29 0.92,-0.03 0.48,-0.5 z"	' +
  '	title="Tanger-Tétouan"	' +
  '	id="MA-01" />	' +
  '	<path class="region" ' +
  '	d="m 412.7153,43.84393 3.63,0.35 2.53,-0.15 5.26,0.95 2.3,0.9 2.08,0.17 0.85,0.99 1.7,0.25 0.73,0.82 1.45,0.68 1.36,2.03 0.65,0.43 1.62,-0.07 1.27,0.26 1.23,-0.88 0.27,0.09 0.53,0.79 1.11,0.59 1.51,2.41 1.86,1.07 4.14,0.87 3.25,-1.39 2.59,0.68 0,0 -0.45,1.49 -0.01,1.65 -0.57,2.56 0.05,0.52 0.58,0.29 -0.21,0.69 -0.44,0.37 -1.03,-0.19 -1.27,0.53 -0.2,0.89 -0.48,0.43 -0.63,0.47 -1.39,0.32 -0.27,0.5 0.03,1.09 -0.56,0.49 -1.07,0.25 -0.56,1.07 -2.52,1.51 -1.72,0.46 -0.31,0.64 0.72,0.83 -0.31,0.56 0.19,0.73 0.5,0.11 0.71,-0.42 0.52,0.24 -0.13,0.53 0,0 0,1.13 0.99,1.44 0,0 -0.5,0.45 -1.08,-0.02 -0.15,1.75 -0.83,1 -0.92,0.5 -0.25,0.58 0.75,1.04 -2.29,0.66 -1.44,1.87 -0.56,-0.18 -0.34,-0.78 0.29,-0.7 -0.09,-0.83 -0.6,-0.41 -2.31,-0.4 -1.35,0.27 -0.86,-0.27 -0.24,-0.69 0.84,-1.61 -0.49,-0.61 -1.35,-0.13 -0.49,-0.7 -1.35,-0.13 -1.37,1.04 0.08,1.19 -0.47,0.51 -0.53,0.33 -1.39,0.21 -0.37,0.33 0.42,1.09 0.76,-0.11 0.46,0.26 0.65,2.39 0,0 -2.11,-0.06 -1.86,-0.57 -1.62,-0.02 -6.97,-2.14 -6.64,0.55 -3.79,-0.94 -3.52,1.58 -0.43,-0.28 -1.58,-0.06 -0.65,-0.34 -0.73,-1.1 -1.83,0.16 -0.52,-0.97 0,0 1.23,-3.15 0.15,-0.43 5.76,-9.42 5.09,-10.4 3.31,-7.91 0.64,0.18 -0.37,1.05 0.11,0.41 0.87,0.31 0.13,0.35 0.36,-0.75 0.34,-0.1 -0.03,-0.99 -1.27,-0.41 -0.25,-0.32 -0.31,0.08 1.78,-5.23 z"	' +
  '	title="Gharb-Chrarda-Beni Hssen"	' +
  '	id="MA-02" />	' +
  '	<path class="region" ' +
  '	d="m 500.9753,31.12393 0.47,0.32 -0.44,0.49 0.27,0.17 -0.09,0.41 0.87,1.03 1.88,0.6 1.65,-0.28 0,0 0.31,1.31 -0.51,2.95 0.37,1.63 0.01,2.4 0.3,0.43 -0.14,5.57 0.54,0.3 0.08,0.85 0.39,0.17 1.69,-0.21 0.12,0.27 -0.59,0.5 0.32,0.46 2.02,-0.25 1.54,0.99 1.64,-0.21 0.43,0.48 -0.43,0.66 0.45,0.87 -0.14,1.38 -0.9,1.55 0.35,0.6 0.95,0.49 0.06,0.54 -0.59,0.28 -1.42,-0.01 -0.25,0.26 0.42,1.93 -0.14,0.64 -0.87,0.8 0.15,0.32 1.94,-0.68 0.64,0.74 0.06,0.99 0.31,0.38 1.9,0.75 0.69,-0.05 0.89,-2.97 0.78,-0.32 0.11,-1.02 1.28,0.4 1.14,-1.33 2.5,-1.43 0.58,-1.19 -0.04,-1.28 0.49,-0.32 4.83,0.08 0.81,0.46 1.34,1.79 1.23,-0.04 1.86,1.09 0.54,0.7 1.55,0.54 0.13,0.49 -0.66,1.74 1.45,0.76 0.11,0.65 -0.38,0.17 -2.08,-0.91 -2.27,1.09 0.15,1.43 -0.65,2.53 -1.35,0.09 0.22,0.96 -0.26,0.52 -0.85,0.2 -0.49,0.83 -2.38,1.18 -0.35,0.77 0.13,0.46 -0.38,0.38 0.16,0.87 0.68,0.9 1.13,1.18 1.76,1.17 0.24,4.61 1.6,1.37 0.04,0.64 -1.44,3.14 -1.01,0.65 -3.75,1.4 -0.35,0.67 -0.15,2.15 1.74,1.34 2.65,3.66 1.01,2.31 0.09,2.17 0,0 -3.39,-0.61 -1.47,-0.53 -2.76,-2.02 -3.25,-0.71 -0.57,-0.32 -1.75,-2.11 -0.89,-0.27 -0.29,-0.43 -1.03,-0.46 -0.51,-0.85 -0.5,-0.02 -0.51,0.14 -0.58,1.61 -0.97,0.58 -2.04,3.7 -1.51,1.22 -1.43,0.54 -0.31,0.73 -1.35,1.45 -1.41,0.91 -0.25,1.35 -0.39,0.21 -0.81,1.31 -3.17,1.4 -1.3,0.88 -4,0.35 -1.55,-1.96 1.34,-2.04 0.09,-0.74 -0.98,-0.59 -0.78,-0.03 -0.72,0.1 -1.36,0.94 -1.02,-1.73 0.17,-3.14 0.92,-1.52 1.98,-1.21 -0.45,-0.31 -2.51,0.12 -0.47,-0.41 -0.59,-0.06 -0.53,-2.05 -0.2,-0.21 -1.03,-0.02 -1.04,-0.74 -0.95,0.01 -2.75,2 -0.54,-0.12 -1.39,-1.12 -1.32,-0.17 -1.37,-0.6 -1.12,-1.13 0.04,-3.22 -0.12,-0.63 -0.81,-0.98 0.11,-0.69 -0.52,-0.38 -1.39,-0.08 -1.07,-0.86 -1.49,-0.09 -0.41,-0.43 -1.37,-0.3 -0.88,-1.66 0.18,-0.86 -0.27,-1.23 -0.9,0.29 -0.61,-0.1 0.15,-1.41 -0.19,-0.63 -0.54,-0.18 -0.92,0.5 -1.84,0.01 -0.02,-0.79 -0.64,-0.41 0.12,-0.43 0.98,-0.14 -0.64,-0.96 -0.46,-0.05 -0.7,0.69 -0.68,0.19 -0.24,-0.4 0.57,-0.65 -0.44,-0.74 -3.18,-0.27 -0.42,0.66 -0.4,0.03 -0.14,-0.34 0.25,-0.45 -0.4,-0.03 -1.17,0.87 -0.38,-0.11 0.05,-0.81 -0.43,-0.32 -1.83,-0.32 -1.58,0.61 -0.8,0.79 -0.86,-0.27 -0.35,0.28 -1.25,0.06 -1.79,0.69 -0.65,-0.93 -1.37,0.53 -1.59,-1.71 0,0 0.13,-0.53 -0.52,-0.24 -0.71,0.42 -0.5,-0.11 -0.19,-0.73 0.31,-0.56 -0.72,-0.83 0.31,-0.64 1.72,-0.46 2.52,-1.51 0.56,-1.07 1.07,-0.25 0.56,-0.49 -0.03,-1.09 0.27,-0.5 1.39,-0.32 0.63,-0.47 0.48,-0.43 0.2,-0.89 1.27,-0.53 1.03,0.19 0.44,-0.37 0.21,-0.69 -0.58,-0.29 -0.05,-0.52 0.57,-2.56 0.01,-1.65 0.45,-1.49 0,0 1.13,-1.3 2.48,-1.17 0.89,0 0.63,-0.42 1.01,0.32 2.81,-0.74 1.15,0.05 1.49,-0.77 0.81,-0.12 0.75,-1.3 0.63,-0.51 0.83,-0.04 4.02,-3.51 3.84,-0.68 2.54,-1.66 0.93,-2.41 -0.18,-2.36 -0.66,-0.69 0.17,-1.35 1.09,-1.26 0,0 0.98,0.33 0.84,-0.21 1.88,0.51 0.56,-0.45 0.57,-0.05 0.4,-0.45 0.95,-0.21 0.27,-0.26 1.15,-0.48 1.31,0.15 0.13,-0.26 1.88,-0.53 0.51,0.23 0.58,-0.13 3.21,-1.35 0.26,-0.39 0.39,0.17 0.71,-0.31 0.26,0.36 1.12,-0.19 1.42,-1.05 0.64,-0.11 z"	' +
  '	title="Taza-Al Hoceima-Taounate"	' +
  '	id="MA-03" />	' +
  '	<path class="region" ' +
  '	d="m 537.6053,22.86393 0.51,0.59 -0.55,0.68 0.36,0.4 -0.63,1.82 0.58,0.84 -0.14,2.66 1.41,0.99 0.15,0.41 2.81,2.93 -1.08,-0.58 -0.23,-0.59 -0.9,-0.64 -0.57,-0.88 -0.43,0.15 0.2,1.22 0.33,0.4 0.37,-0.1 0.26,0.26 -0.15,0.33 -0.32,-0.26 -0.54,0.59 0.04,0.69 0.78,1.04 0.13,0.71 0.82,0.69 2.53,1.27 2.34,0.04 0.16,-0.5 -0.19,-0.31 -1.26,-0.9 -0.2,-0.6 -0.8,-0.5 -1.25,-1.45 3.65,3.23 3.81,1.58 3.01,0.41 1.79,-0.36 1.48,-0.71 2.29,-2.03 0.05,0.35 0.52,0.22 2.56,0.59 4.75,1.75 -0.06,1.76 1.1,0.72 0.65,0.99 1.75,0.73 0.1,0.55 1.19,1.27 1.94,1.38 2.48,-0.46 0.13,2.67 2.95,1.63 0.2,1.58 1.12,0.22 1.44,0.96 0.54,-0.22 -0.07,0.54 2.65,1.42 -1.27,0.91 -0.14,1.17 -2.9,3.78 0.52,-0.07 0.87,0.59 1,1.54 0,0.47 0.84,0.79 0.1,0.58 0.42,0.17 0.2,0.63 2.32,0.99 -3.66,4.67 0.53,0.87 1.39,1.29 1.01,1.6 -0.29,3.23 2.44,6.04 -1.95,10.78 1.09,4.44 -2.21,1.7 -0.33,1.59 1.01,0.56 0.16,0.44 2.03,-0.19 0.86,2.33 1.21,0.73 0.13,0.45 -0.26,1.32 0.31,0.09 -0.01,0.34 -0.36,0.43 0.58,1.22 -1.23,1.75 -0.16,2 -0.29,0.71 -0.49,0.35 -0.69,2 0.09,3.47 -0.32,1.07 1.43,2.43 1.14,0.95 1,2.54 1.58,1.87 0.76,0.61 1.02,0.35 0.63,0.75 0.36,1.23 -0.57,0.92 0.17,0.81 -0.52,1.28 -0.4,0.37 -0.54,-0.11 -1.26,0.53 6.14,9.82 4.22,1.97 10.29,7.92 0.07,0.29 -1.84,1.62 -0.8,1.2 -1.36,0.81 -0.71,0.78 -1.12,-0.16 -1.82,0.64 -0.39,0.53 -0.53,2.11 -1.01,0.79 0.53,0.76 -0.43,2.64 0.18,2.04 -2.21,1.72 0.48,0.36 2.73,-0.74 1.29,0.55 0.41,1.23 0.61,0.33 -0.02,0.79 -1.15,0.36 -0.72,0.79 -1.88,0.38 -0.65,-0.45 -2.06,0.18 -1.33,-0.4 -0.78,0.23 -1.56,-0.08 -2.28,-0.31 -0.81,-0.39 -2.87,0.52 -4,-1.05 -1.09,0.07 -4.24,-1.42 -1.84,-0.04 -0.91,-0.69 -0.86,0 -0.23,0.5 -0.67,-0.33 -0.92,0.05 -0.76,-0.75 -1,-0.36 -3.32,1.28 -2.63,0.49 -0.71,-0.02 -3.32,-1.14 -0.97,0.55 -6.1,-0.15 -3.15,0.65 -2.03,1.44 -2.41,-0.22 -2.47,0.31 -3.47,-0.2 -2.33,0.19 -1.16,-0.43 -0.75,1.14 -0.34,2.87 1.77,2.96 0.19,1.4 1.34,2.23 0.2,1.15 -0.19,0.97 0.85,0.98 -0.06,0.67 -6.4,1.51 0.02,0.26 -10,2.16 0,0 -1.27,-8.51 -0.08,-2.48 0.5,-4.2 1.56,-3.04 -0.34,-1.13 -1.35,-0.42 -6.62,-1.04 -3.59,-0.36 -2.79,0.49 -1.43,-0.14 -0.62,-0.37 -0.07,-0.69 0.68,-1.46 -0.66,-0.84 -1.36,-0.4 -1.2,-1.15 -0.75,-0.29 -1.84,0.01 -0.99,-0.47 -0.84,-3.88 -4.42,-9 -1.26,-1.52 -1.32,-0.58 0,0 -0.16,-0.74 2.09,-3.29 2.23,-2.44 3.34,-6.38 1.95,-3.09 2.99,-2.98 1.92,-1.14 4.79,-0.51 3.92,0.05 3.61,0.57 2.74,-0.12 2.26,-0.49 4.28,-1.75 1.71,-0.29 2.41,-0.86 0.83,-1.24 0.32,-1.85 -0.55,-1.54 -3.01,-3.58 -1.54,-2.58 -2.68,-2.44 -2.45,-1.53 -0.74,-1.49 0.01,-0.93 0.93,-2.09 2.5,-2.73 1.09,-1.71 0.76,-2.94 0,0 -0.09,-2.17 -1.01,-2.31 -2.65,-3.66 -1.74,-1.34 0.15,-2.15 0.35,-0.67 3.75,-1.4 1.01,-0.65 1.44,-3.14 -0.04,-0.64 -1.6,-1.37 -0.24,-4.61 -1.76,-1.17 -1.13,-1.18 -0.68,-0.9 -0.16,-0.87 0.38,-0.38 -0.13,-0.46 0.35,-0.77 2.38,-1.18 0.49,-0.83 0.85,-0.2 0.26,-0.52 -0.22,-0.96 1.35,-0.09 0.65,-2.53 -0.15,-1.43 2.27,-1.09 2.08,0.91 0.38,-0.17 -0.11,-0.65 -1.45,-0.76 0.66,-1.74 -0.13,-0.49 -1.55,-0.54 -0.54,-0.7 -1.86,-1.09 -1.23,0.04 -1.34,-1.79 -0.81,-0.46 -4.83,-0.08 -0.49,0.32 0.04,1.28 -0.58,1.19 -2.5,1.43 -1.14,1.33 -1.28,-0.4 -0.11,1.02 -0.78,0.32 -0.89,2.97 -0.69,0.05 -1.9,-0.75 -0.31,-0.38 -0.06,-0.99 -0.64,-0.74 -1.94,0.68 -0.15,-0.32 0.87,-0.8 0.14,-0.64 -0.42,-1.93 0.25,-0.26 1.42,0.01 0.59,-0.28 -0.06,-0.54 -0.95,-0.49 -0.35,-0.6 0.9,-1.55 0.14,-1.38 -0.45,-0.87 0.43,-0.66 -0.43,-0.48 -1.64,0.21 -1.54,-0.99 -2.02,0.25 -0.32,-0.46 0.59,-0.5 -0.12,-0.27 -1.69,0.21 -0.39,-0.17 -0.08,-0.85 -0.54,-0.3 0.14,-5.57 -0.3,-0.43 -0.01,-2.4 -0.37,-1.63 0.51,-2.95 -0.31,-1.31 0,0 1.29,-0.89 0.81,-2.44 1.59,-0.63 1.15,0.1 0.44,0.8 2.88,1.96 2.07,0.44 1.73,0.85 1.48,-0.33 0.9,0.63 3.42,0.32 1.27,-0.89 1.74,-0.37 0.76,-0.48 0.43,0.08 0.34,-0.28 0.96,0.21 1.37,-1.35 0.87,-1.52 1.09,0.62 1.5,-1.06 2.04,-3.83 0.05,-0.82 0.05,-0.3 0.54,-0.75 0.06,-0.83 1.19,-0.24 z"	' +
  '	title="LOriental"	' +
  '	id="MA-04" />	' +
  '	<path class="region" ' +
  '	d="m 443.8353,74.31393 1.6,1.71 1.36,-0.53 0.65,0.93 1.8,-0.69 1.24,-0.06 0.35,-0.28 0.86,0.27 0.8,-0.79 1.58,-0.61 1.83,0.31 0.43,0.33 -0.04,0.81 0.37,0.11 1.17,-0.87 0.4,0.04 -0.24,0.45 0.13,0.34 0.41,-0.04 0.42,-0.65 3.18,0.27 0.44,0.74 -0.57,0.65 0.24,0.4 0.68,-0.19 0.7,-0.69 0.46,0.06 0.65,0.95 -0.98,0.14 -0.12,0.44 0.64,0.41 0.02,0.79 1.83,-0.01 0.93,-0.5 0.54,0.19 0.19,0.63 -0.15,1.41 0.61,0.1 0.89,-0.29 0.28,1.23 -0.18,0.85 0.88,1.66 1.37,0.3 0.41,0.43 1.49,0.08 1.06,0.87 1.39,0.08 0.52,0.38 -0.11,0.69 0.8,0.98 0.12,0.63 -0.03,3.22 1.11,1.13 1.37,0.6 1.32,0.17 1.39,1.12 0.54,0.12 2.75,-2 0.94,-0.01 1.05,0.74 1.03,0.02 0.2,0.21 0.52,2.05 0.59,0.06 0.47,0.41 2.5,-0.11 0.45,0.3 -1.98,1.22 -0.92,1.52 -0.18,3.14 1.02,1.73 1.37,-0.95 0.71,-0.09 0.78,0.02 0.98,0.6 -0.09,0.74 -1.35,2.04 1.55,1.95 4,-0.34 1.3,-0.88 3.16,-1.4 0.82,-1.31 0.38,-0.21 0.25,-1.36 1.41,-0.91 1.34,-1.45 0.31,-0.74 1.43,-0.53 1.51,-1.22 2.04,-3.7 0.98,-0.58 0.58,-1.61 0.51,-0.14 0.51,0.02 0.5,0.85 1.04,0.46 0.29,0.43 0.89,0.27 1.75,2.11 0.57,0.32 3.25,0.71 2.76,2.02 1.47,0.53 3.39,0.61 0,0 -0.76,2.94 -1.09,1.72 -2.49,2.72 -0.93,2.09 -0.01,0.94 0.73,1.49 2.45,1.52 2.68,2.44 1.54,2.58 3.01,3.58 0.55,1.54 -0.32,1.85 -0.83,1.24 -2.4,0.86 -1.71,0.29 -4.29,1.75 -2.25,0.49 -2.74,0.13 -3.61,-0.58 -3.92,-0.05 -4.79,0.52 -1.92,1.14 -2.99,2.98 -1.95,3.09 -3.34,6.38 -2.23,2.44 -2.09,3.29 0.16,0.74 0,0 -1.36,0.55 -1.11,0.07 -2.77,-0.05 -1.41,-0.36 -1.1,0.22 -0.91,-0.32 -0.31,-0.56 -0.12,-3.17 -3.48,-3.51 -1.54,-0.98 -0.94,-2.04 -0.62,-0.69 -0.56,-0.37 -2.54,-0.21 -4.59,0.69 -1.71,-0.7 -1.5,-1.16 -0.36,-0.89 0.11,-1.07 0.48,-0.75 0.13,-0.82 -3.53,-3.99 -1.97,-6.3 -1.37,-3.13 -2.33,-2.07 -0.71,-1.38 -0.12,-0.89 0.25,-0.78 3.9,-5.65 0.3,-1.02 -0.25,-1.47 -1.62,-1.72 -2.16,-1.75 -3.65,-0.5 -0.86,-0.54 -0.41,-0.86 -0.02,-1.01 1.75,-4.58 -0.23,-2.27 -1.28,-2.04 -0.89,-0.52 -0.82,-3.1 -2.23,-0.63 -1.15,0.04 -0.55,-0.66 -0.65,-1.57 -0.48,-0.39 -1,-0.21 -1.24,0.6 -0.54,-0.18 -0.38,-2.17 0.2,-3 -0.21,-2.11 -0.41,-1.45 -0.45,-0.48 0,0 -0.99,-1.44 z"	' +
  '	title="Fès-Boulemane"	' +
  '	id="MA-05" />	' +
  '	<path class="region" ' +
  '	d="m 444.8353,76.89393 0.45,0.48 0.41,1.45 0.21,2.11 -0.2,3 0.38,2.17 0.54,0.18 1.24,-0.6 1,0.21 0.48,0.39 0.65,1.57 0.55,0.66 1.15,-0.04 2.23,0.63 0.82,3.1 0.89,0.52 1.28,2.04 0.23,2.27 -1.75,4.58 0.02,1.01 0.41,0.86 0.86,0.54 3.65,0.5 2.16,1.75 1.62,1.72 0.25,1.47 -0.3,1.02 -3.9,5.65 -0.25,0.78 0.12,0.89 0.71,1.38 2.33,2.07 1.37,3.13 1.97,6.3 3.53,3.99 -0.13,0.82 -0.48,0.75 -0.11,1.07 0.36,0.89 1.5,1.16 1.71,0.7 4.59,-0.69 2.54,0.21 0.56,0.37 0.62,0.69 0.94,2.04 1.54,0.98 3.48,3.51 0.12,3.17 0.31,0.56 0.91,0.32 1.1,-0.22 1.41,0.36 2.77,0.05 1.11,-0.07 1.36,-0.55 0,0 1.31,0.58 1.27,1.52 4.42,8.99 0.83,3.88 0.99,0.47 1.84,-0.01 0.75,0.3 1.2,1.14 1.36,0.41 0.66,0.84 -0.68,1.45 0.08,0.69 0.62,0.38 1.43,0.14 2.79,-0.5 3.59,0.36 6.62,1.04 1.35,0.42 0.34,1.13 -1.55,3.04 -0.51,4.19 0.09,2.48 1.27,8.51 0,0 -15.24,3.4 0,10.29 0.67,0.34 -0.52,0.71 -0.46,-0.32 -0.25,0.64 -1.22,0.38 -0.06,0.53 -0.36,0.35 -0.49,-0.07 -0.21,-0.66 -0.31,-0.1 -0.33,0.63 0.14,0.3 -0.39,0.26 0.07,1.04 -0.87,0.79 0.13,0.27 0.28,-0.23 0.2,0.6 0.49,-0.18 -0.08,0.83 -0.93,0.65 0.13,0.3 -0.42,0.26 0.31,0.64 0.39,-0.06 0.22,1.71 0.28,0.19 -0.67,1.43 0.17,1.23 0.46,-0.26 0.72,0.04 0.41,0.34 0.26,-0.8 -0.39,-0.48 0.89,-0.36 -0.13,-0.51 0.45,-0.45 0.29,0.4 0.51,0.08 0.36,0.61 0.06,1.39 -0.36,1.47 0.49,-0.16 0.07,-0.54 0.76,0.4 0.31,-0.28 -0.29,-0.46 -0.02,-0.88 -0.26,-0.19 0.49,-0.32 0.07,1.34 0.27,0.21 0.52,-0.57 -0.06,0.89 0.47,0.17 0.08,0.96 0.44,-0.03 -0.02,0.71 0.69,0.67 0.07,-0.38 0.49,0.11 -0.08,-0.51 0.34,-0.14 -0.1,1.04 0.25,0.38 0.24,-0.3 0.16,2.86 -0.41,0.45 0.29,0.03 0.02,0.34 -0.64,0.3 0.18,0.42 -0.23,-0.06 -0.04,0.48 -0.59,-0.21 -0.01,0.51 -0.42,0.14 0.14,0.5 -0.4,0.59 -0.43,-0.01 -0.42,1.28 -0.32,0.04 -0.33,-0.15 -0.66,0.93 -0.15,1.76 -0.39,0.35 0.24,1.34 0.53,-0.22 0.61,0.34 0.47,1.42 -0.51,0.27 -0.43,1.09 -7.74,3.29 -5.76,1.54 -5.73,0.33 -6.63,2.48 -10.88,10.79 -12.5,6.22 -6.92,5.85 0,0 -1.32,-3.82 -0.52,-0.28 -1,-1.38 -0.36,-1.85 -0.5,-0.96 0.24,-3.31 -0.1,-5.52 0.43,-2.26 -0.03,-7.21 -1.89,-2.59 -0.19,-0.88 -1.12,-1.4 -2.02,-3.52 -0.71,-3.39 -0.08,-1.33 1.14,-5.58 0.86,-6.67 1.59,-3.72 0.92,-3.36 0.18,-2.63 -0.26,-1.36 -0.47,-1.08 -1.14,-1.28 -0.94,-0.6 -2.96,-0.91 -2.76,-1.69 -0.99,-1.83 -0.6,-0.48 -5.3,-1.45 -2.72,0.64 -2.73,-0.39 -0.48,-0.49 0.45,-1.38 8.67,-9.18 1.01,-2.12 -0.44,-0.58 -5.2,-3.55 -0.94,-0.05 -2.5,1.78 -1.5,0.37 0,0 0.27,-0.75 -0.35,-1.33 -0.85,-0.29 -0.34,-0.74 0.26,-0.63 0.86,-0.38 -0.2,-1.55 0.99,-0.69 0.03,-1.55 0.85,-0.82 1.37,-0.07 0.75,-0.71 0.57,-0.74 0.2,-1.31 0.28,-0.3 0.89,-0.44 2.32,-0.44 1.92,0.46 0.63,-0.44 0.2,-1.1 -0.99,-0.84 0.88,-2.01 -0.46,-0.82 0.68,-1.02 0.12,-1.06 0.84,-1.23 -0.96,-2.21 -1.39,-1.99 -0.4,-1.46 -2.24,-0.21 -0.34,-0.56 -1.59,-1.11 -1.13,-0.2 -1.27,1.07 -0.99,-0.07 -0.5,-2.59 -0.39,-0.79 -0.78,-0.4 -0.83,-1.08 -0.77,0.16 -0.65,-0.32 -0.66,-1.38 -1.7,-0.99 -2.34,0.37 -0.44,-0.18 0,0 -0.33,-0.63 0.2,-1.27 -0.34,-0.5 0.08,-0.37 0.8,-0.51 -1.36,-1.82 -0.25,-1.26 -0.74,-0.29 -1.77,0.78 -0.65,0.01 -0.57,-0.48 0.09,-1.7 1.7,-0.36 0.65,-0.48 0.07,-0.66 -0.35,-0.44 -1.67,-0.72 -0.33,-1.65 -2.14,-1.03 -1.76,-1.71 -1.51,-0.5 -0.44,-1.2 -3.73,-1.27 -0.36,-0.67 0.11,-0.76 0.43,-0.8 0.71,-0.53 0.13,-0.72 0,0 -0.97,-1.89 0.77,-1.77 -0.41,-0.69 0.5,-1.79 0.57,-0.48 2.31,-0.53 1.03,-0.02 1.17,0.72 0.55,-0.12 0.55,-0.64 0.53,0.28 0.43,0.91 0.43,0.19 0.92,-0.13 0.31,0.29 -0.01,0.81 0.33,0.44 0.13,2.19 0.55,0.77 1.52,0.16 0.42,0.56 0.73,0.13 0.77,-0.38 1.51,-1.74 1.44,-0.46 4.74,1.39 0.88,-0.32 0.71,-1.35 0.06,-1.28 -0.59,-1.6 -0.13,-3.39 0.41,-4.93 0.72,-2.76 0.55,-5.65 -0.09,-1.73 -0.44,-0.69 -1,-0.64 -0.28,-0.67 -0.06,-0.87 0.37,-1.03 -0.62,-0.28 -0.78,0.25 -0.24,-0.52 0.02,-0.96 2.05,-1.94 -0.34,-1.71 -2.46,-2.04 -0.49,-0.73 -0.14,-2.29 0,0 -0.64,-2.4 -0.46,-0.26 -0.76,0.12 -0.42,-1.09 0.36,-0.33 1.4,-0.21 0.53,-0.33 0.48,-0.51 -0.08,-1.19 1.37,-1.04 1.34,0.12 0.5,0.7 1.34,0.13 0.49,0.61 -0.83,1.62 0.23,0.69 0.86,0.26 1.35,-0.26 2.31,0.39 0.6,0.41 0.15,0.86 -0.29,0.7 0.34,0.78 0.56,0.18 1.44,-1.87 2.29,-0.67 -0.75,-1.03 0.24,-0.58 0.92,-0.5 0.83,-1.01 0.15,-1.75 1.08,0.02 z"	' +
  '	title="Meknès-Tafilalet"	' +
  '	id="MA-06" />	' +
  '	<path class="region" ' +
  '	d="m 395.1753,80.57393 0.52,0.97 1.83,-0.16 0.73,1.1 0.65,0.34 1.58,0.06 0.43,0.28 3.52,-1.58 3.79,0.94 6.64,-0.55 6.97,2.14 1.62,0.02 1.86,0.57 2.11,0.06 0,0 0.14,2.29 0.49,0.74 2.46,2.04 0.34,1.71 -2.05,1.94 -0.02,0.96 0.24,0.52 0.78,-0.26 0.62,0.28 -0.38,1.03 0.07,0.87 0.28,0.67 0.99,0.64 0.45,0.69 0.09,1.72 -0.55,5.65 -0.72,2.77 -0.41,4.92 0.13,3.39 0.6,1.6 -0.07,1.28 -0.71,1.35 -0.88,0.32 -4.74,-1.38 -1.44,0.46 -1.5,1.74 -0.78,0.38 -0.73,-0.13 -0.43,-0.56 -1.52,-0.16 -0.55,-0.77 -0.14,-2.19 -0.33,-0.44 0.01,-0.81 -0.31,-0.29 -0.92,0.14 -0.43,-0.19 -0.42,-0.91 -0.54,-0.27 -0.55,0.64 -0.54,0.12 -1.18,-0.71 -1.02,0.01 -2.32,0.54 -0.57,0.47 -0.5,1.8 0.41,0.69 -0.77,1.77 0.98,1.89 0,0 -2.22,1.22 -0.79,-0.05 -1.57,1.02 -1.02,1.85 -0.53,0.33 -1.62,-2.26 -1.51,-1.06 -2.98,0.23 -0.83,0.31 -1.82,-0.83 -1.36,0.68 -2.12,-0.99 0.45,-1.16 -0.42,-2.81 0.13,-0.64 0.95,-1.22 0.22,-1.2 -1.26,-1.76 -0.47,-1.24 -0.05,-1.04 2.39,-3.64 0.35,-1.68 -0.98,-0.09 -0.57,0.39 -2.74,0.16 -0.37,-0.64 -0.73,-0.33 -0.78,-1.26 -1.37,-0.6 -0.6,0 -0.04,0.4 -0.55,-0.03 0.34,-1.12 -1.18,-2 -0.03,-1.99 -0.33,-1.2 -0.88,-1.5 -1.69,-0.13 -0.51,-0.92 0,0 2.3,-1.9 0.41,0.1 0.97,-0.4 1.04,-0.85 -0.03,-0.25 0.84,-0.32 0.11,-0.43 0.56,-0.19 0.29,-0.54 1.58,-1.37 2.88,-3.47 1.98,-2.21 2.85,-4.52 z"	' +
  '	title="Rabat-Salé-Zemmour-Zaer"	' +
  '	id="MA-07" />	' +
  '	<path class="region" ' +
  '	d="m 370.9053,101.99393 0.03,0 0,0 -0.03,0 z m -1.76,-0.15 0.15,0.62 0.58,0 0.17,-0.05 0.45,-0.08 0.43,-0.34 0,0 0.02,0.6 -0.98,1.1 0.48,1.04 -1.43,0.37 0.28,0.4 -0.5,1.06 0.22,0.22 -0.18,0.95 0.57,0.58 -0.44,1.2 0.36,1.07 0.68,0.42 0.28,1.22 -0.4,0.19 -0.49,-0.24 -0.27,0.52 -0.74,0.26 0.52,1.11 -1.75,0.23 -0.07,0.53 -1,0.19 -1.96,1.6 -0.43,1.75 -0.91,1.66 -0.85,0.05 -0.51,-0.27 -0.63,-2.24 1.3,-0.71 2.09,-0.64 -0.19,-0.14 -1.69,-0.66 -1.3,-0.09 -0.7,0.47 -0.56,-0.69 -1.69,0.73 -0.17,-0.93 -1.13,-0.47 -0.43,-0.65 -0.78,0.28 -0.42,-0.33 -0.73,0.31 -0.66,-0.67 -0.6,0.14 -0.75,-0.27 -1.12,0.46 -0.86,-0.88 -0.2,-0.82 0,0 2.41,-1.44 0.3,-0.42 0.24,0.47 0.61,-0.01 0.3,-0.21 0.11,-0.04 1.35,-0.69 1.7,-1.03 0.2,-0.62 0.4,0.1 0.54,-0.6 0.62,-0.14 0.41,-0.67 0.39,0.49 0.34,-0.28 0.62,0.15 0.05,-0.01 0.39,0.18 0,-0.24 0.07,-0.11 0.35,0.42 0.01,-0.5 0.37,0.37 1.18,-0.69 1.21,-0.24 3,-2.46 0.15,-0.25 0.88,-0.61 0.74,-1.08 z"	' +
  '	title="Grand Casablanca"	' +
  '	id="MA-08" />	' +
  '	<path class="region" ' +
  '	d="m 379.4053,96.90393 0.51,0.92 1.69,0.13 0.88,1.5 0.33,1.2 0.03,1.99 1.18,2 -0.34,1.12 0.55,0.03 0.04,-0.4 0.6,0 1.37,0.6 0.78,1.26 0.73,0.33 0.37,0.64 2.74,-0.16 0.57,-0.39 0.98,0.09 -0.35,1.68 -2.39,3.64 0.05,1.04 0.47,1.24 1.26,1.76 -0.22,1.2 -0.95,1.22 -0.13,0.64 0.42,2.81 -0.45,1.16 2.12,0.99 1.36,-0.68 1.82,0.83 0.83,-0.31 2.98,-0.23 1.51,1.06 1.62,2.26 0.53,-0.33 1.02,-1.85 1.57,-1.02 0.79,0.05 2.22,-1.22 0,0 -0.13,0.72 -0.71,0.53 -0.43,0.8 -0.11,0.76 0.37,0.66 3.72,1.27 0.44,1.2 1.51,0.51 1.76,1.71 2.14,1.03 0.33,1.65 1.67,0.72 0.35,0.44 -0.07,0.66 -0.65,0.49 -1.7,0.35 -0.09,1.71 0.57,0.48 0.64,-0.01 1.77,-0.78 0.74,0.3 0.25,1.26 1.36,1.82 -0.79,0.51 -0.09,0.37 0.34,0.5 -0.2,1.27 0.34,0.63 0,0 -0.98,0.88 -0.51,0.98 -1.4,0.85 -3.76,0.38 -2.78,1.07 -4.05,0.09 -0.72,-0.21 -2.11,0.21 -1.54,-0.71 -2.13,-0.4 -1.93,0.34 -0.58,0.59 -0.52,0.12 -0.23,0.39 0.49,0.5 -0.17,0.49 -1.75,-0.19 -1.07,-0.56 -1.9,-0.07 -1.22,-0.56 -0.41,0.08 -0.31,0.62 -1.57,0.2 -1.25,1.11 -1.82,0.66 -0.85,0 -0.84,-0.93 -0.88,-0.25 0.16,0.52 -0.44,1.21 -0.25,4.05 -1.78,4.82 -2.14,2.2 0,0 -0.55,-0.79 -1.46,-0.16 -0.7,-1.03 -1.13,-0.39 -1.3,-1.15 -2.42,-0.28 -1.71,-2.4 -2.92,0.15 -1.12,0.62 -0.5,-0.39 -0.37,0.25 0.04,0.82 -1.74,1.09 -1.26,0.11 -0.81,-0.55 -0.31,0.47 -0.37,0 -1.08,-1.78 -1.02,-2.56 -0.52,-0.84 -1.06,-0.41 -1.39,-3.22 -0.54,-0.66 -0.58,-0.39 -1.27,-0.16 -1.06,-0.92 -3.5,-1.08 -0.19,-1.13 -1.65,-2.36 -0.61,-1.73 -0.83,-0.03 0,0 0.57,-0.59 -0.04,-0.19 -0.81,-0.02 0.06,-0.45 0.75,-0.42 -0.21,-0.21 -0.75,-0.18 -0.83,0.68 -1,0.02 1.04,-0.89 -0.84,-0.47 0.18,-1.32 0.35,-0.39 -0.94,-0.86 0.75,-0.35 -0.19,-0.45 -0.65,-0.35 0.58,-0.39 -0.15,-0.58 0.58,-0.56 -0.55,-0.68 0.19,-0.27 0.61,0.02 0.02,-0.31 -0.76,-0.87 0.32,-2.11 -0.19,-0.25 -0.69,0.38 -0.33,-0.19 0.41,-0.62 -1.03,-0.78 -0.07,-0.83 -0.54,-0.12 -0.21,0.37 -0.23,-0.06 0,-0.35 -0.5,-0.49 0.06,-0.35 0.9,-0.15 0.66,-1.16 0.2,-1.12 0.67,-0.31 0.92,0.29 1.38,-0.11 0.56,-0.83 -0.9,-0.43 1.59,-0.67 1.21,-1.64 -1.07,-0.39 -0.17,-0.97 -0.46,0.15 -0.3,-0.39 1.15,-0.79 -0.65,-0.66 0.81,-1.31 -0.49,-0.35 -0.17,-0.78 -1.48,-1.95 0,0 1.59,-0.88 1.13,-0.14 1.54,-0.74 0,0 0.2,0.82 0.86,0.88 1.12,-0.46 0.75,0.27 0.6,-0.14 0.66,0.67 0.73,-0.31 0.42,0.33 0.78,-0.28 0.43,0.65 1.13,0.47 0.17,0.93 1.69,-0.73 0.56,0.69 0.7,-0.47 1.3,0.09 1.69,0.66 0.19,0.14 -2.09,0.64 -1.3,0.71 0.63,2.24 0.51,0.27 0.85,-0.05 0.91,-1.66 0.43,-1.75 1.96,-1.6 1,-0.19 0.07,-0.53 1.75,-0.23 -0.52,-1.11 0.74,-0.26 0.27,-0.52 0.49,0.24 0.4,-0.19 -0.28,-1.22 -0.68,-0.42 -0.36,-1.07 0.44,-1.2 -0.57,-0.58 0.18,-0.95 -0.22,-0.22 0.5,-1.06 -0.28,-0.4 1.43,-0.37 -0.48,-1.04 0.98,-1.1 -0.02,-0.6 0,0 0,0 0,0 -0.03,0 0,0 0,-0.17 0.18,-0.06 0.13,-0.35 1.03,-0.57 1.87,-1.77 0.71,-0.24 0.34,-0.43 0.39,0.01 -0.01,-0.34 1.66,-0.06 0.55,-0.48 0.37,-0.03 0.59,-0.54 0.31,0.34 0.36,-0.43 z"	' +
  '	title="Chaouia-Ouardigha"	' +
  '	id="MA-09" />	' +
  '	<path class="region" ' +
  '	d="m 345.9653,113.76393 1.48,1.95 0.17,0.78 0.49,0.35 -0.81,1.31 0.65,0.66 -1.15,0.79 0.3,0.39 0.46,-0.15 0.17,0.97 1.07,0.39 -1.21,1.64 -1.59,0.67 0.9,0.43 -0.56,0.83 -1.38,0.11 -0.92,-0.29 -0.67,0.31 -0.2,1.12 -0.66,1.16 -0.9,0.15 -0.06,0.35 0.5,0.49 0,0.35 0.23,0.06 0.21,-0.37 0.54,0.12 0.07,0.83 1.03,0.78 -0.41,0.62 0.33,0.19 0.69,-0.38 0.19,0.25 -0.32,2.11 0.76,0.87 -0.02,0.31 -0.61,-0.02 -0.19,0.27 0.55,0.68 -0.58,0.56 0.15,0.58 -0.58,0.39 0.65,0.35 0.19,0.45 -0.75,0.35 0.94,0.86 -0.35,0.39 -0.18,1.32 0.84,0.47 -1.04,0.89 1,-0.02 0.83,-0.68 0.75,0.18 0.21,0.21 -0.75,0.42 -0.06,0.45 0.81,0.02 0.04,0.19 -0.57,0.59 0,0 -0.78,0.24 -0.91,1.03 -0.22,1.13 0.46,1.09 -0.33,0.41 0,0.72 -1.39,1.08 0.25,0.47 -0.25,0.74 1.07,1.64 0.21,1.11 -0.26,1.28 -0.23,0.21 -0.44,-0.2 -1.34,1.92 -0.97,0.7 -0.56,0.83 -1.14,0.52 -0.52,0.62 -2.37,0.04 -0.62,0.52 0.03,1.54 -0.23,0.35 -1.66,-0.01 -1.12,0.48 -0.8,1.3 -2.93,0.94 -0.29,1.47 0.13,0.92 1.18,2.91 1.61,2.22 1.52,1.34 1.31,0.24 2.3,1.27 1.54,1.3 0.15,0.65 -0.05,0.8 -0.48,-0.68 -0.64,-0.1 -0.15,1.97 -1.42,0.85 -1.66,1.47 -1.41,2.53 -0.24,1.51 -0.92,1.17 -0.16,0.68 -1.73,2.17 0.7,2.34 0.62,0.14 1.23,1.69 -1.11,0.42 -0.51,-0.1 -1.26,-0.91 -2.75,1.17 -1.98,-0.66 -0.73,-1.2 -1.12,-0.66 -3.19,0.48 -0.61,0.33 -0.93,-0.48 -0.51,0.11 -0.77,1.01 -0.29,0.08 -0.36,-0.61 -0.53,0.82 -0.43,-0.08 -1.33,-1.17 -1.02,0.4 -0.5,-0.38 0.03,-0.84 -2.28,-0.53 -0.29,-0.71 -2.07,-1.18 -0.55,-2.47 -0.63,-1.16 -1.97,-0.69 -4.96,-0.47 -2.66,0.44 -2.07,-0.19 -3.65,-1.32 0,0 2.99,-3.5 0.42,-0.36 0.06,-0.12 0.15,-0.63 -0.25,0.02 0.63,-0.84 0.26,-2.1 2.31,-2.79 0.32,-1.15 0.05,-1.02 -0.54,-1.27 0.82,-2.15 -0.06,-0.29 -0.18,-0.55 -1.15,-0.47 -0.37,-1.54 0.19,-0.6 1.41,-1.75 0.65,-2.68 -1.18,-1.25 -0.36,-1.11 -0.53,-0.65 6.3,-5.37 2.91,-3.46 0.18,0.25 0.37,-0.49 -0.44,0.11 5.31,-4.39 4.18,-4.62 0.4,-0.63 0.88,-0.93 0.45,0 0.32,-0.64 -0.29,0.09 -0.04,0.39 -0.52,0.05 1.58,-1.89 0.59,-0.31 0.03,-0.33 0.79,-1.37 1.9,-2.14 0.12,-0.3 0.13,-0.29 0.14,-0.38 -0.88,0.41 0.43,-0.45 0.74,-0.21 -0.65,-0.99 0.17,-0.43 1.48,-1.69 1.19,-0.64 -0.13,-0.41 0.48,-0.63 1.36,-0.96 0.36,0.1 0.22,0.36 -0.2,0.23 0.43,0.35 1.66,-0.31 1.88,-1.12 1.67,-1.58 0.62,-0.28 1.25,-2.14 3.42,-0.89 1.19,-0.86 1.95,-0.4 4.69,-2.07 z"	' +
  '	title="Doukhala-Abda"	' +
  '	id="MA-10" />	' +
  '	<path class="region" ' +
  '	d="m 346.6453,142.81393 0.83,0.03 0.61,1.73 1.65,2.36 0.19,1.13 3.5,1.08 1.06,0.92 1.27,0.16 0.58,0.39 0.54,0.66 1.39,3.22 1.06,0.41 0.52,0.84 1.02,2.56 1.08,1.78 0.37,0 0.31,-0.47 0.81,0.55 1.26,-0.11 1.74,-1.09 -0.04,-0.82 0.37,-0.25 0.5,0.39 1.12,-0.62 2.92,-0.15 1.71,2.4 2.42,0.28 1.3,1.15 1.13,0.39 0.7,1.03 1.46,0.16 0.55,0.79 0,0 0.06,2.49 -0.38,1.41 0.77,3.52 -0.4,1.6 0.44,3.85 1.1,1.84 1.29,0.55 0.44,1.74 -0.87,0.96 -0.11,0.67 0.45,0.53 -0.15,0.78 1.92,2.35 -0.31,0.45 -0.84,0.1 -0.19,0.71 0.38,1.59 -0.64,0.59 -1.8,-0.29 -2.47,0.57 -1.52,-0.83 -1.01,-0.06 -0.86,0.16 -1.13,0.68 -0.62,0.86 -0.01,2.83 0.35,0.69 1.56,0.93 -0.25,1.57 0.68,0.41 0.41,-0.31 1.95,-0.37 0.74,0.14 0.22,0.85 -0.13,1.43 -1.22,3.46 -0.15,1.26 0.08,1.34 0.43,1.24 0,0 -2.25,0.67 -0.98,0.65 -1.99,2.75 -2.52,0.56 -3.5,0.19 -1.86,0.9 -3.09,3.24 -1.02,0.63 -1.45,0.39 -2.23,0.03 -2.15,1.05 -3.13,2.94 -2.7,1.46 -0.16,0.29 0.35,0.57 -0.28,1.18 -3.18,2.8 -2.57,1.5 -0.51,-0.14 0.14,-1.42 -1.21,-1 -3.18,1.5 -1.34,0.37 -3.94,0.67 -1.82,-0.47 -0.82,0.21 -1.26,1.31 -6.17,-0.15 -1.12,0.25 -1.32,1.25 -1.34,0.16 -0.99,-3.58 -0.72,-0.74 -1.51,-0.39 -0.4,-0.97 -0.66,-0.15 -0.8,0.07 -1.49,1.76 -1.07,0.74 -4.12,1.83 -0.9,1.51 -0.95,0.46 -3.47,-0.53 -1.98,0.87 -1.89,0.04 -1.19,0.72 -2.08,-0.22 -0.89,-0.8 -2.5,0.27 -0.68,0.47 -1.03,0.15 -1.31,-0.71 -1.27,-0.29 -0.17,-0.26 0.27,-1.03 -0.39,-0.28 -1.39,1.99 -1.09,0.5 -1.93,-0.81 -0.89,0.3 -2.07,-0.07 0.16,-0.27 -0.86,-2.24 -2.85,-2.88 0,0 -0.25,-0.55 0.11,-0.61 0.61,-1.3 -0.36,-0.85 -0.03,-1.25 -0.25,-0.18 0.32,-1.48 -0.97,-0.58 0.32,-0.79 -0.2,-0.66 0.37,-0.88 -0.12,-0.32 0.67,-1.19 -0.29,-0.33 0.07,-1.68 0.89,-1.95 0.14,-1.76 -0.14,-1.43 -0.42,-1.03 -0.32,-0.34 -0.93,-0.15 0.29,-1.14 1.28,-1.32 0.99,-1.93 0.21,0.11 0.13,-0.99 -0.59,-0.09 1.59,-1.33 1.95,-2.8 0.49,-1.53 -0.16,-2.83 1.66,-1.33 1.85,-2.85 1.08,-0.95 1.42,-2.06 3.24,-3.65 0,0 3.65,1.32 2.07,0.19 2.66,-0.44 4.96,0.47 1.97,0.69 0.63,1.16 0.55,2.47 2.07,1.18 0.29,0.71 2.28,0.53 -0.03,0.84 0.5,0.38 1.02,-0.4 1.33,1.17 0.43,0.08 0.53,-0.82 0.36,0.61 0.29,-0.08 0.77,-1.01 0.51,-0.11 0.93,0.48 0.61,-0.33 3.19,-0.48 1.12,0.66 0.73,1.2 1.98,0.66 2.75,-1.17 1.26,0.91 0.51,0.1 1.11,-0.42 -1.23,-1.69 -0.62,-0.14 -0.7,-2.34 1.76,-2.16 0.16,-0.68 0.92,-1.17 0.24,-1.51 1.41,-2.53 1.66,-1.47 1.42,-0.85 0.15,-1.97 0.64,0.1 0.48,0.68 0.05,-0.8 -0.15,-0.65 -1.54,-1.3 -2.3,-1.27 -1.31,-0.24 -1.52,-1.34 -1.61,-2.22 -1.18,-2.91 -0.13,-0.92 0.29,-1.47 2.93,-0.94 0.8,-1.3 1.12,-0.48 1.66,0.01 0.23,-0.35 -0.03,-1.54 0.62,-0.52 2.37,-0.04 0.52,-0.62 1.14,-0.52 0.56,-0.83 0.97,-0.7 1.34,-1.92 0.44,0.2 0.23,-0.21 0.26,-1.28 -0.21,-1.11 -1.07,-1.64 0.25,-0.74 -0.25,-0.47 1.39,-1.08 0,-0.72 0.33,-0.41 -0.46,-1.09 0.22,-1.13 0.91,-1.03 0.73,-0.23 z"	' +
  '	title="Marrakech-Tensift-Al Haouz"	' +
  '	id="MA-11" />	' +
  '	<path class="region" ' +
  '	d="m 421.8153,145.24393 0.44,0.18 2.34,-0.37 1.7,0.99 0.66,1.38 0.65,0.32 0.77,-0.16 0.83,1.08 0.78,0.4 0.39,0.79 0.5,2.59 0.99,0.07 1.27,-1.07 1.13,0.2 1.59,1.11 0.34,0.56 2.24,0.21 0.4,1.46 1.39,1.99 0.96,2.21 -0.84,1.23 -0.12,1.06 -0.68,1.02 0.46,0.82 -0.88,2.01 0.99,0.84 -0.2,1.1 -0.63,0.44 -1.92,-0.46 -2.32,0.44 -0.89,0.44 -0.28,0.3 -0.2,1.31 -0.57,0.74 -0.75,0.71 -1.37,0.07 -0.85,0.82 -0.03,1.55 -0.99,0.69 0.2,1.55 -0.86,0.38 -0.26,0.63 0.34,0.74 0.85,0.29 0.35,1.33 -0.27,0.75 0,0 -0.08,1.37 0.31,0.73 -0.01,0.84 -0.4,0.65 -1.84,1.4 -0.15,0.57 -1.9,-0.08 -1.41,1.87 -3.6,1.59 -0.1,1.88 -0.42,0.99 -1.41,0.01 -0.74,0.28 -1.57,-0.29 -1.46,0.92 -0.94,1.3 -6.09,2.39 -5.73,3.56 -2.34,0.79 -1.91,-0.5 -1.17,0.55 -1.82,0.26 -1.1,1.38 -0.14,0.73 0.6,1.65 -0.54,0.51 -0.8,2.35 -0.78,-0.18 -0.88,0.36 -0.47,-0.73 -1.88,0.23 -1.07,0.54 -6.18,-1.84 -2.64,-0.04 0,0 -0.43,-1.24 -0.08,-1.34 0.15,-1.26 1.22,-3.46 0.13,-1.43 -0.23,-0.85 -0.73,-0.14 -1.95,0.36 -0.41,0.31 -0.68,-0.41 0.25,-1.56 -1.56,-0.94 -0.34,-0.69 0,-2.83 0.62,-0.86 1.13,-0.68 0.87,-0.16 1,0.06 1.52,0.83 2.46,-0.57 1.81,0.29 0.64,-0.6 -0.39,-1.59 0.19,-0.71 0.84,-0.1 0.31,-0.45 -1.92,-2.35 0.15,-0.77 -0.45,-0.54 0.11,-0.67 0.86,-0.96 -0.44,-1.74 -1.29,-0.55 -1.11,-1.84 -0.44,-3.84 0.4,-1.6 -0.77,-3.52 0.38,-1.42 -0.06,-2.49 0,0 2.14,-2.2 1.78,-4.82 0.25,-4.05 0.44,-1.21 -0.16,-0.52 0.88,0.25 0.85,0.93 0.84,0 1.83,-0.66 1.24,-1.1 1.58,-0.2 0.31,-0.62 0.41,-0.08 1.22,0.56 1.9,0.07 1.07,0.55 1.76,0.2 0.17,-0.5 -0.5,-0.49 0.24,-0.39 0.51,-0.12 0.59,-0.59 1.92,-0.34 2.13,0.4 1.54,0.71 2.11,-0.22 0.72,0.21 4.05,-0.09 2.78,-1.06 3.77,-0.38 1.39,-0.85 0.51,-0.98 z"	' +
  '	title="Tadla-Azilal"	' +
  '	id="MA-12" />	' +
  '	<path class="region" ' +
  '	d="m 429.4653,179.98393 1.5,-0.37 2.5,-1.79 0.94,0.05 5.2,3.55 0.44,0.58 -1.02,2.12 -8.67,9.18 -0.45,1.38 0.48,0.49 2.73,0.39 2.72,-0.64 5.3,1.45 0.6,0.48 0.99,1.84 2.76,1.68 2.95,0.91 0.95,0.6 1.14,1.27 0.47,1.08 0.26,1.36 -0.18,2.63 -0.92,3.36 -1.59,3.72 -0.86,6.67 -1.14,5.59 0.08,1.33 0.71,3.39 2.02,3.52 1.12,1.4 0.19,0.89 1.89,2.59 0.03,7.21 -0.42,2.26 0.1,5.52 -0.24,3.31 0.5,0.96 0.36,1.85 0.99,1.38 0.53,0.28 1.32,3.82 0,0 -0.76,0.24 -3.88,2.94 -0.46,0.79 -1.26,0.79 -1.58,2.65 0.26,1.7 -0.53,1.28 -7.69,10.94 -0.65,0.27 0.28,0.45 -0.43,0.95 -0.27,0.09 -0.48,-0.56 -1.06,0.03 -0.9,-0.55 -0.8,-0.13 -1.44,-1.52 -0.98,0.86 -1.32,0.07 0.19,-1.3 0.75,-1.12 0.04,-0.53 -0.86,-0.63 -2.06,-0.61 -2.42,0.29 -0.62,0.52 -2.95,0.25 -2.27,0.76 -0.79,-0.03 -0.95,0.47 -3.9,-0.86 -2.11,0.2 0,0.21 -1.01,0.33 -1.6,-0.22 -3.2,0.12 -0.46,0.28 -0.16,0.49 -0.33,-0.43 0,0 0.14,-1.21 -0.39,-2.79 0.52,-3.86 -0.19,-3.59 0.8,-3.73 -0.19,-6.44 -1.57,-3.72 -5.79,-9.14 -1.63,-1.75 -1.86,-1.01 -1.01,0.06 -0.83,0.3 -1.14,1.05 -1.86,2.58 -1.06,0.3 -1.95,1.13 -1.89,0 -3.6,-1.66 -1.56,-0.24 -0.57,0.2 -1.73,1.88 -1.7,3.91 -0.64,3.24 -0.89,0.65 -5.82,-0.26 -1.91,-0.35 -1.11,-1.12 -0.37,-2.38 -0.34,-0.7 -0.59,-0.72 -2.96,-1.92 -1.68,0.95 -1.48,1.3 -1.12,2.18 -0.12,0.85 1.13,5.49 -0.06,0.64 -0.71,0.85 -0.61,0.35 -2.13,-0.09 -2.78,-0.83 -1.46,0.21 -1.62,1.06 -2.56,2.67 -1.84,0.46 -0.57,0.41 -1.46,-0.27 -2.59,-1.11 -4.3,-3.07 -1.05,-0.23 -0.83,0.19 -1.21,1.03 -1.21,3 -0.83,1.13 -0.75,0.45 -1.19,0.05 -6.2,-3.05 -1.03,-0.27 -1.66,-0.07 -1.31,0.35 -1.35,1.21 0.07,2.14 0.67,0.58 1.57,-0.61 1.03,0.06 0.22,0.32 -0.2,1.36 -1.43,1.5 -1.14,1.78 -0.38,1.48 -0.13,5.21 0.77,1.82 1.25,0.92 0.32,0.81 -0.48,0.88 -8.37,2.48 -1.05,0.55 -2.61,0.06 -2.4,-0.36 -0.52,0.29 -0.91,0.62 -1.28,2.63 -1.45,6.12 -0.16,-0.66 -1.23,-1.59 -0.59,-1.5 -1.41,-0.77 -1.64,0.06 -1.06,-0.46 -1.56,0.41 -0.77,1.52 -1.41,1.16 -2.93,0.55 -2.38,1.26 -2.4,0.63 -0.58,-0.28 -1.45,0.22 -0.36,-0.19 -0.96,-1.73 -1.23,-1.07 -1.42,-0.13 -0.95,0.29 -1.16,1.38 -1.56,4.38 -0.45,0.43 -1.42,0.6 -1.54,-0.43 -1.41,0.46 -4.01,2.96 -1.13,0.15 -0.53,-0.3 -0.44,-0.77 -0.92,-0.27 -1.81,0.37 -4.15,-0.5 -1.27,0.27 -0.72,-0.15 -1.79,-1.4 0,0 0.58,-1.48 0.7,-0.35 0.13,-0.77 2.34,-2.68 0.41,-0.82 1.32,-1.16 1.66,-0.84 1.39,-1.34 1.27,-2.77 1,-1.47 1.33,-1.24 0.81,-1.83 0.81,-0.84 0.28,-0.58 -0.14,-0.77 0.35,-0.24 -0.05,-0.43 0.39,-0.23 -0.14,-0.48 0.31,-0.15 0.02,-0.62 0.51,-0.35 0.45,-1.12 1.22,-1.5 0.4,-1.11 5.73,-5.65 0.25,-0.73 1.37,-1.86 -0.06,-0.51 1.04,-1.54 0.06,-0.69 2.54,-5.37 0.82,-1.09 0.13,-0.1 0.07,-0.61 0.96,-3.34 0.01,-1.55 1.32,-6.69 0.13,-0.23 0.17,-0.04 -0.3,-0.57 0.38,-0.79 -0.17,-0.67 -0.45,-0.65 -0.14,0.23 -0.34,-0.04 -0.2,0.05 -0.53,-0.45 -0.03,-0.29 -0.52,-0.39 -0.66,-2.4 -0.39,-0.38 -0.51,-1.44 -1.47,-0.44 -0.24,-1 -1.4,-1.59 -1.59,-0.76 -1.6,0.16 -0.83,-0.31 0.44,-2.69 1.06,-1.33 -0.07,-0.53 1.75,-3.58 -0.04,-0.86 -0.27,-0.31 -0.35,0.17 -0.15,-0.44 0.73,-1.95 -0.48,-0.86 0,-1.77 0,0 2.85,2.88 0.86,2.24 -0.16,0.27 2.07,0.07 0.89,-0.3 1.93,0.81 1.09,-0.5 1.39,-1.99 0.39,0.28 -0.27,1.03 0.17,0.26 1.27,0.29 1.31,0.71 1.03,-0.15 0.68,-0.47 2.5,-0.27 0.89,0.8 2.08,0.22 1.19,-0.72 1.89,-0.04 1.98,-0.87 3.47,0.53 0.95,-0.46 0.9,-1.51 4.12,-1.83 1.07,-0.74 1.49,-1.76 0.8,-0.07 0.66,0.15 0.4,0.97 1.51,0.39 0.72,0.74 0.99,3.58 1.34,-0.16 1.32,-1.25 1.12,-0.25 6.17,0.15 1.26,-1.31 0.82,-0.21 1.82,0.47 3.94,-0.67 1.34,-0.37 3.18,-1.5 1.21,1 -0.14,1.42 0.51,0.14 2.57,-1.5 3.18,-2.8 0.28,-1.18 -0.35,-0.57 0.16,-0.29 2.7,-1.46 3.13,-2.94 2.15,-1.05 2.23,-0.03 1.45,-0.39 1.02,-0.63 3.09,-3.24 1.86,-0.9 3.5,-0.19 2.52,-0.56 1.99,-2.75 0.98,-0.65 2.25,-0.67 0,0 2.64,0.04 6.19,1.85 1.07,-0.55 1.88,-0.22 0.47,0.73 0.88,-0.36 0.78,0.18 0.81,-2.36 0.54,-0.51 -0.6,-1.65 0.15,-0.73 1.09,-1.38 1.82,-0.26 1.17,-0.55 1.92,0.49 2.34,-0.79 5.73,-3.56 6.09,-2.39 0.93,-1.3 1.46,-0.93 1.57,0.3 0.74,-0.28 1.41,-0.01 0.42,-0.99 0.1,-1.87 3.6,-1.6 1.41,-1.86 1.9,0.08 0.15,-0.57 1.84,-1.41 0.4,-0.65 0.01,-0.84 -0.32,-0.74 0.08,-1.32 z"	' +
  '	title="Souss-Massa-Drâa"	' +
  '	id="MA-13" />	' +
  '	<path class="region" ' +
  '	d="m 202.2353,344.95393 -3.06,1.3 -0.23,0.09 -1.08,0.4 -6.81,3.56 -5.72,1.41 -0.9,-0.01 -11.87,2.5 -9.54,1.22 -1.59,0.47 -2.02,0.09 -0.53,0.49 -0.22,0.5 -0.84,0.39 -0.25,0.71 -0.65,0.7 -0.98,3.4 -0.72,0.57 -0.86,1.87 -0.79,0.68 -1.6,0.62 -2.05,1.3 -1.18,2.92 -1.21,5.01 -1.95,5.45 -0.78,1.38 -0.12,0.86 -3.95,6.75 -0.31,2.3 -0.21,0.57 0.17,0.5 -0.47,1.08 0.01,0.21 -1.63,4 -0.98,3.72 -1.21,3.06 -1.64,2.94 -1.64,1.78 -2.3,1.85 -9.2,5.5 -2.2,1.89 -3.92,1.53 -3.88,0.42 -0.86,1.77 -1.5,1.91 -3.15,2.55 -2.87,0.6 -3.020002,4.06 -0.72,1.61 0.6,1.43 -0.07,2.44 -0.4,2.04 -2.62,5.87 -1.79,2.6 -0.88,0.72 -1.05,4.34 -0.81,1.95 0.03,1.45 -0.46,1.65 -0.88,1.76 -2.52,3.5 -0.22,1.86 -1.35,3.29 0.1,1.79 -0.76,2.02 0.34,1.8 -0.34,1.51 0.33,1.04 -0.16,0.78 0.48,0.31 0.37,1.03 -0.2,3.09 -0.35,1.33 0.2,1.47 -2.06,5.81 -0.2,1.16 0.2,1.62 -2.38,2.12 -1.53,0.78 -0.24,1.4 -0.32,0.47 0,0 3.08,0.48 5.17,2.09 1.19,0.79 2.25,3.25 1.19,0.67 1.21,0.27 4.85,-0.79 8.020002,-2.04 8.17,-0.44 10.02,2.31 2.91,1.18 1.75,0.41 6.7,-1.82 2.93,-1.36 5.36,-1.9 6.65,-0.6 11.23,2.2 8.23,2.83 3.35,0.01 8.93,-1.9 6.3,-0.01 2.01,0.5 2.35,-0.51 0,0 -0.01,-64.5 0,0 -16.75,0.07 -0.53,-3.81 -0.69,-2.12 -0.37,-2.59 -0.69,-2.53 -0.84,-1.28 -0.22,-1.84 -1.36,-3.77 -0.34,-1.55 0.1,-1.68 0.77,-2.94 1.88,-3.82 3.3,-3.96 3.77,-3.68 2.31,-2.92 2.59,-6.66 2,-3.7 1.72,-7.31 1.55,-3.99 5.02,-7.43 2.91,-2.59 1.96,-1.19 7.94,0.03 -0.6,-3.26 1.28,-0.34 3.24,0.05 -3.22,-3.82 -1.78,-2.87 -1.27,-3.79 -2.66,-2.76 -2.33,-6.17 0,0 -0.18,0.13 z"	' +
  '	title="Laâyoune-Boujdour-Sakia el Hamra"	' +
  '	id="MA-15" />	' +
  '	<path class="region" ' +
  '	d="m 250.8753,309.74393 -4.38,3.03 -6.06,3.53 -8.39,4.46 -1.32,0.44 -1.3,0.9 -0.02,0.46 -1.47,1.91 -0.74,0.37 -1.27,1.44 -1.71,1.24 -1.57,2.05 -2,1.61 -1.74,2.17 0.03,0.42 -1.45,1.35 -0.69,1.46 -1.35,1.2 -0.76,1.71 -2.34,1.53 -0.19,0.45 0.37,0.48 -0.58,-0.17 -0.03,-0.32 -0.31,-0.11 -3.23,1.38 -0.22,0.05 -1.41,0.41 -3.95,1.57 0,0 2.33,6.17 2.66,2.76 1.27,3.79 1.78,2.87 3.22,3.82 -3.24,-0.05 -1.28,0.34 0.6,3.26 -7.94,-0.03 -1.96,1.19 -2.91,2.59 -5.02,7.43 -1.55,3.99 -1.72,7.31 -2,3.7 -2.59,6.66 -2.31,2.92 -3.77,3.68 -3.3,3.96 -1.88,3.82 -0.77,2.94 -0.1,1.68 0.34,1.55 1.36,3.77 0.22,1.84 0.84,1.28 0.69,2.53 0.37,2.59 0.69,2.12 0.53,3.81 16.75,-0.07 0,0 126.51,-0.07 0.25,-115.58 7.9,-3.59 5.27,-5.13 5.45,-4.32 1.02,-0.03 2.75,-2.13 4.36,-2.58 0.28,-0.7 0.91,-1 3.36,-1.97 2.22,-1.96 3.89,-1.82 0.77,-0.2 0.48,0.16 0.99,-1.52 -0.06,-1.02 1.03,-0.82 3.98,0.5 3.15,-0.72 0.8,0.07 0.58,-0.51 1.53,-0.45 3.63,-3.63 3.42,-1.62 1.6,0.01 3.24,1.26 1.26,-0.45 0.93,0.41 1.88,-0.13 0.93,0.54 1.32,0.1 0.85,0.64 2.15,0.26 0.77,-0.22 1.37,-1.68 0.99,-0.41 2.41,-0.2 0.48,-0.43 3.46,0.38 0.49,-0.62 2.02,-1.15 0.79,-0.18 1.6,0.26 0,0 0.14,-1.21 -0.39,-2.79 0.52,-3.87 -0.19,-3.58 0.8,-3.73 -0.2,-6.45 -1.57,-3.71 -5.79,-9.14 -1.63,-1.75 -1.87,-1.01 -1.01,0.06 -0.83,0.31 -1.15,1.04 -1.86,2.58 -1.06,0.31 -1.95,1.13 -1.89,0 -3.6,-1.66 -1.57,-0.24 -0.56,0.21 -1.74,1.88 -1.7,3.91 -0.64,3.24 -0.9,0.65 -5.82,-0.26 -1.9,-0.35 -1.11,-1.12 -0.36,-2.38 -0.35,-0.7 -0.58,-0.72 -2.97,-1.92 -1.68,0.96 -1.49,1.29 -1.12,2.19 -0.12,0.84 1.13,5.49 -0.07,0.65 -0.71,0.85 -0.61,0.34 -2.13,-0.08 -2.77,-0.83 -1.46,0.21 -1.63,1.06 -2.55,2.67 -1.84,0.46 -0.57,0.41 -1.46,-0.28 -2.59,-1.11 -4.3,-3.07 -1.06,-0.23 -0.83,0.18 -1.21,1.04 -1.21,3 -0.83,1.13 -0.74,0.45 -1.2,0.04 -6.2,-3.05 -1.03,-0.28 -1.66,-0.07 -1.32,0.35 -1.34,1.21 0.07,2.14 0.67,0.58 1.57,-0.61 1.03,0.06 0.22,0.32 -0.19,1.36 -1.43,1.5 -1.15,1.78 -0.38,1.48 -0.12,5.21 0.77,1.82 1.25,0.92 0.32,0.81 -0.48,0.89 -8.37,2.48 -1.06,0.55 -2.6,0.06 -2.4,-0.36 -0.53,0.29 -0.9,0.63 -1.29,2.63 -1.45,6.12 -0.16,-0.66 -1.23,-1.59 -0.58,-1.49 -1.41,-0.77 -1.65,0.05 -1.06,-0.45 -1.56,0.41 -0.77,1.52 -1.41,1.16 -2.93,0.54 -2.38,1.26 -2.4,0.64 -0.58,-0.28 -1.46,0.22 -0.36,-0.19 -0.96,-1.73 -1.23,-1.06 -1.42,-0.14 -0.95,0.29 -1.16,1.38 -1.56,4.38 -0.45,0.43 -1.42,0.59 -1.54,-0.42 -1.41,0.45 -4.01,2.96 -1.13,0.15 -0.53,-0.3 -0.43,-0.77 -0.93,-0.27 -1.81,0.37 -4.14,-0.51 -1.27,0.27 -0.72,-0.15 -1.79,-1.4 0,0 -0.3,0.05 z"	' +
  '	title="Guelmim-Es Smara"	' +
  '	id="MA-14" />	' +
  '	<path class="region" ' +
  '	d="m 80.265298,497.86393 3.09,0.48 5.16,2.09 1.2,0.79 2.25,3.25 1.19,0.67 1.21,0.27 4.85,-0.79 8.020002,-2.04 8.17,-0.45 10.02,2.31 2.9,1.18 1.75,0.42 6.7,-1.83 2.93,-1.35 5.36,-1.91 6.65,-0.6 11.24,2.21 8.22,2.82 3.35,0.01 8.93,-1.91 6.3,0 2.02,0.49 2.34,-0.51 0,0 0.15,41.23 -28.87,2.76 -3.44,2.41 -4.05,4.76 -3.36,5.34 -1.51,3.64 -2.01,8.54 -0.28,2.25 5.47,57.08 -74.430002,-0.52 -74.4000002,0.54 -0.78,0.15 -2.41,9 -1.4,2.6 -0.34,2.43 -0.67,2.31 -0.01,3.36 0.56,2.65 0.22,0.1 -0.23,0.11 -1.16,-2.28 -0.51000004,0.01 -0.37,-0.77 1.03000004,-1.63 -0.68000004,-1.5 1.20000004,-3.17 -0.03,-3.18 0.79,-3.35 -0.25,-0.91 0.88,-4.33 -0.17,-1.48 1.91,-9.41 -0.13,-2 0.43,-2.11 -0.31,-2.35 1.19,-1.67 -0.01,-0.38 -0.55,-0.15 0.24,-2.21 2.22,-2.92 0.26,-0.87 -0.14,-0.87 0.96,-1.9 2.4700002,-7.09 1.26,-0.58 0.18,-0.42 -0.24,-0.62 0.26,-0.63 1.96,-1.53 0.64,-1.06 0.71,-0.59 1.09,0.07 0.63,1.02 1.08,-0.1 2.3,-0.8 1.99,-1.35 -0.02,-1.02 0.68,-0.53 0.68,-1.23 0.29,-2.8 0.49,-0.89 -0.03,-0.77 0.48,-0.89 1.57,-1.02 1.01,-1.24 0.18,-1.91 0.47,-0.98 -0.04,-3.09 0.27,-1.33 1.85,-3.19 -0.08,-0.59 -0.54,-0.15 0.59,-2.14 0.58,0.36 2.25,-0.9 1.57,-1.52 0.99,-1.63 0.2,-1.6 -0.24,-1.03 -0.54,-0.83 -0.74,-0.49 -0.7,0.13 -0.4,0.43 0.42,-1.23 0.38,-0.83 0.97,-0.64 1.51,-1.91 0.38,-0.8 -0.06,-0.98 2.11,-3.21 -0.25,-0.74 2.18,-1.98 1.08,-1.5 1.11,-2.47 -0.9,-1.46 1.31,-0.74 0.72,-1.19 0.59,-0.35 1.17,-2.59 0.6,-0.21 0.44,-0.54 0.54,-1.17 1.21,-1.48 0.79,-1.72 1.31,-1.08 0.45,-1.26 0.77,-0.52 -0.13,-0.37 -1.08,0.81 0.39,-1.89 0.98,-1.53 -0.39,-1.09 0.83,-2.35 -0.6,0.31 -0.7,0.71 -0.62,0.15 0.11,0.98 -0.54,1.02 -0.12,-0.31 -0.02,-0.23 -0.14,-0.39 -0.58,0.4 -0.81,1.71 -0.93,0.6 -0.22,0.03 -0.08,-0.36 -0.54,0.39 -1.65,2.34 -1.11,4.06 -1.25,1.08 -0.09,0.1 -0.82,1.24 -0.08,0.55 -0.63,-0.18 -0.25,-0.73 0.81,-1.26 0.96,-0.88 0.11,-1.05 1.25,-1.26 -0.07,-0.54 0.8,-1.98 2.41,-2.89 1.29,-0.99 0.09,-0.41 2.13,-1.46 3.31,-1.7 2.61,-1.86 0.61,-0.88 -0.28,-0.43 0.41,-0.77 1.47,-1.02 0.54,-1.07 0.65,-0.4 3.26,-3.58 3.24,-2.53 3.33,-4.67 2.94,-3.08 1.63,-0.93 3.88,-1.55 0.59,-0.53 0.26,-1.11 z"	' +
  '	title="Oued ed Dahab-Lagouira"	' +
  '	id="MA-16" />	' +
  '	</g></svg>	' 
  );

  
  chartWrapper.append("div").attr("id", "tooltip")
    .attr("class", "tooltip")
    .style("opacity", 0);
    
  const tooltip = chartWrapper.select("#tooltip");

  chartWrapper.select("svg").select("g").selectAll("path")
  .on("mouseover", function () {
  tooltip.transition()
    .duration(200)
    .style("opacity", 1);
  tooltip.html("<span>" +d3.select(this).attr("title") + "</span>")
    .style("left", (d3.event.pageX - 25) + "px")
    .style("top", (d3.event.pageY - 28) + "px");
})
  .on("mouseout", function () {
  tooltip.transition()
    .duration(500)
    .style("opacity", 0);
})
  
}


drawBarGraph(barDataset, false);