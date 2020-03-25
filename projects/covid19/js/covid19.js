var energy = {
  "nodes": [
		{
			"name": "Tests dones"
		},
		{
			"name": "Positifs"
		},
		{
			"name": "Negatifs"
		},
		{
			"name": "Negatifs/Recovered"
		},
		{
			"name": "Deads"
		},
		{
			"name": "Still sick"
		}
	],
	"links": [
		{
			"source": 0,
			"target": 1,
			"value": 181
		},
		{
			"source": 1,
			"target": 5,
			"value": 170
		},
		{
			"source": 1,
			"target": 3,
			"value": 6
		},
		{
			"source": 1,
			"target": 4,
			"value": 5
		},
		{
			"source": 0,
			"target": 2,
			"value": 696
		},
		{
			"source": 2,
			"target": 3,
			"value": 696
		}
	]
};

var margin = {top: 1, right: 1, bottom: 6, left: 1},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerWidth*0.48 - margin.top - margin.bottom;

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

const tooltip = d3.select("#chart")
  .append('div')
  .attr('id', 'tooltip');


var svg = d3.select("#chart").append("svg")
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
    .nodes(energy.nodes)
    .links(energy.links)
    .layout(32);

var link = svg.append("g").selectAll(".link")
    .data(energy.links)
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
    });


link.append("text").append("textPath")
    .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

var node = svg.append("g").selectAll(".node")
    .data(energy.nodes)
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
    .attr("x", -6)
    .attr("y", function(d) { return d.dy / 2; })
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .attr("transform", null)
    .text(function(d) { return d.name; })
  .filter(function(d) { return d.x < width / 2; })
    .attr("x", 6 + sankey.nodeWidth())
    .attr("text-anchor", "start");

function dragmove(d) {
  d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
  sankey.relayout();
  link.attr("d", path);
}
