/*
Team 	Home Wins 	Home Draws 	Home Losses 	GF 	GA
Real Madrid 	52 	15 	22 	181 	110
Barcelona 	50 	19 	20 	178 	105 



var summary = {
	"RM" : {
		Home Wins
		Home Draws
		Home Losses
		GF 	
		GA
	}
Real Madrid 	52 	15 	22 	181 	110
Barcelona 	50 	19 	20 	178 	105
}
*/
var matchHeight = 30;

var matches = [];

var matchTimeScale = d3.scaleLinear()
  .domain([0, 120])
  .range([450, 1500]);
  
var barreScale = d3.scaleLinear()
  .domain([0, 8])
  .range([0, 60]);
  
//2  <line x1="5" y1="5" x2="40" y2="40" stroke="gray" stroke-width="5"  />
d3.select('svg#chart').append("line")
	.attr('x1', matchTimeScale(0))
	.attr('y1', 0)
	.attr('x2', matchTimeScale(0))
	.attr('y2', 5360)
	.attr("stroke-width", 2)
	.attr("stroke", "#fff");
	
d3.select('svg#chart').append("line")
	.attr('x1', matchTimeScale(49))
	.attr('y1', 0)
	.attr('x2', matchTimeScale(49))
	.attr('y2', 5360)
	.attr("stroke-width", 2)
	.attr("stroke", "#fff");
	
d3.select('svg#chart').append("line")
	.attr('x1', matchTimeScale(99))
	.attr('y1', 0)
	.attr('x2', matchTimeScale(99))
	.attr('y2', 5360)
	.attr("stroke-width", 2)
	.attr("stroke", "#fff");

d3.json("la-liga.json").then(function(json) {

var draw = json.filter(d => d.winnerTeam == 'draw').length;
var FCB = json.filter(d => d.winnerTeam == 'Barcelona').length;
var RM = json.filter(d => d.winnerTeam == 'Real Madrid').length;

	d3.select('div#results').text(FCB+ ' ' + draw + ' ' + RM);


  
var gsGlob = d3.select('svg#barreChart').selectAll('g.rect').data(json).enter().append('g');
gsGlob.attr('transform', (d, i) => 'translate(10,' + (i + 1) + ')');
gsGlob.append('rect')
	.attr('class', 'FCB')
	.attr("x", 30)
	.attr("y", -7)
	.attr("width", (d) => barreScale(d.scoresFCB))
	.attr("height", 1);
gsGlob.append('rect')
	.attr('class', 'RM')
	.attr("x", (d) => 30 - barreScale(d.scoresRM)) // 
	.attr("y", -7)
	.attr("width", (d) => barreScale(d.scoresRM))
	.attr("height", 1);
	
var gs = d3.select('svg#chart').selectAll('g.circle').data(json).enter().append('g');
	
gs.attr('transform', (d, i) => 'translate(10,' + ((i + 1) * matchHeight) + ')')

var gsGoals = gs.append('g');

gs.append("line")
	.attr('x1', 150)
	.attr('y1', 0)
	.attr('x2', matchTimeScale(98))
	.attr('y2', 0)
	.attr("stroke-width", 2)
    .style("opacity", 0.1)
	.attr("stroke", "#dfe6e9");
  
gs.append('image')
  .attr("x", 250)
	.attr("y", -7)
  .attr('class', d => (d.winnerTeam == 'Barcelona' ? 'FCB ' : 'RM '))
  .attr('xlink:href', d => (d.winnerTeam == 'Barcelona' ? 'FCB_S.png' : 'RM_S.png'))
  .attr("height", 20)
  .attr("width", 20);

gs.append('text')
	.text((d, i) => d.date)
	.attr("fill", "#fff")
	.attr("font-size", "14");

gsGoals.selectAll('text').data((d, i) => d.goals).enter().append("text")
  .attr("x", (d, i) => matchTimeScale(d.minute))
  .attr("y", -5)
  .text((d, i) => d.minute)
  .style("opacity", 0)
  .attr('class', d => d.player.replace(' ', '').replace('.', ''));

// gs.append('image')
// 	.attr("x", 0)
// 	.attr("y", 0)
// 	.attr('class', d => (d.homeTeam == 'Barcelona' ? 'FCB ' : 'RM '))
// 	.attr('xlink:href', d => (d.homeTeam == 'Barcelona' ? 'FCB_S.png' : 'RM_S.png'))
// 	.attr("height", 20)
// 	.attr("width", 20);

var goalsImage = gsGoals.selectAll('image').data((d, i) => d.goals).enter().append("image")
  .attr("x", (d, i) => matchTimeScale(d.minute))
	.attr("y", -7)
	.attr('class', d => (d.team == 'Barcelona' ? 'p-g FCB ' : 'p-g RM ') + d.player.replace(' ', '').replace('.', ''))
	.attr('data-player', d => d.player.replace(' ', '').replace('.', ''))
	.attr('data-team', d => (d.team == 'Barcelona' ? 'FCB' : 'RM'))
  .attr('xlink:href', d => (d.team == 'Barcelona' ? 'FCB_S.png' : 'RM_S.png'))
  .attr("height", 20)
  .attr("width", 20);

 goalsImage
	.on("mouseover", handleMouseOver)
	.on("mouseout", handleMouseOut);
	
  function handleMouseOver(d, i) {
	var goalsNbr = 0;
	
	json.forEach(m => m.goals.forEach((g) => {if (g.player == d.player && g.team == d.team) goalsNbr++; }));
  
  
	/*d3.selectAll('image.' + d.player.replace(' ', '').replace('.', ''))
	  .attr("height", 25)
	  .attr("width", 25);*/
		d3.selectAll('text.' + d.player.replace(' ', '').replace('.', '')).style("opacity", 0.9).attr('fill', '#fff');
	d3.select('div#player'+(d.team == 'Barcelona' ? 'FCB' : 'RM')).text(d.player + ' ' + goalsNbr);
	d3.select('img#avatar'+(d.team == 'Barcelona' ? 'FCB' : 'RM'))
		.attr("src", "images/players/"+d.player.replace(' ', '').replace('.', '')+".jpg")
		.attr("width", "247")
		.attr("height", "221");
  }

  function handleMouseOut(d, i) {
    d3.selectAll('image').attr("height", 20).attr("width", 20);
		d3.selectAll('text.' + d.player.replace(' ', '').replace('.', '')).style("opacity", 0).attr('fill', '#fff');
	//d3.select('div#player').text('none');
  }
});