
var marginTop = 100;
var marginBottom = 100;
var marginRight = 100;
var marginLeft = 100;
var height = 800 - marginTop - marginBottom;
var width = 1200 - marginLeft - marginRight;

var miValues = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha", "NONE"];

var millSperDay = 24*60*60*1000;
 
var formatDate = d3.time.format("%d/%m/%Y");

var parseDate = d3.time.format("%d/%m/%Y").parse;
var parseDateApi = d3.time.format("%d %b %Y").parse;

var parseTime = d3.time.format("%H:%M").parse;

/*
var yScale = d3.scale.linear()
    .range([height,0])
    .domain([0,100]);   
*/

var yScale = d3.scale.linear()
    .range([height,0])
	  .domain([0, 1440]); 


var xScale = d3.time.scale()
	  .domain([new Date(2018,12,1), new Date(2019,12,31)])
    .range([0, width]);


/*

      d3.rgb("#7475b6"),
      d3.rgb("#abb5ff"),
      d3.rgb("#e1f8ff"),
      d3.rgb("#c9ebff"),
      d3.rgb("#abb5ff"),
      d3.rgb("#7475b6"),
      d3.rgb("#5148b2"),
*/

/*

      d3.rgb("#053752"),
      d3.rgb("#ef810e"),
      d3.rgb("#e5de44"),
      d3.rgb("#c9ebff"),
      d3.rgb("#ef810e"),
      d3.rgb("#053752"),
      d3.rgb("#001a26"),
*/

/*

      d3.rgb("#454314"),
      d3.rgb("#736F22"),
      d3.rgb("#A09B30"),
      d3.rgb("#E5DE44"),
      d3.rgb("#736F22"),
      d3.rgb("#454314"),
      d3.rgb("#171607"),

*/

/*

      d3.rgb("#0b4f6c"),
      d3.rgb("#01baef"),
      d3.rgb("#fbfbff"),
      d3.rgb("#fbfbff"),
      d3.rgb("#01baef"),
      d3.rgb("#0b4f6c"),
      d3.rgb("#141f23"),
*/

var colorScale = d3.scale.linear().domain([0,1,2,3,4,5,6])
      .interpolate(d3.interpolateRgb)
      .range([
        d3.rgb("#38040e"),
        d3.rgb("#640d14"),
        d3.rgb("#ad2831"),
        d3.rgb("#800e13"),
        d3.rgb("#640d14"),
        d3.rgb("#38040e"),
        d3.rgb("#250902"),
      ]);
      

var hoverLabel = d3.scale.ordinal()
    .range(miValues);


var yAxis = d3.svg.axis()
    .scale(yScale)
    .tickSize(10, 0, 0)
    .ticks(20)
    .tickFormat(function(d){return Math.trunc(d/60)+":"+d%60;})
    .orient("left");


var xBar = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var dataset = [];

var mapDataSet = {};


var pieData = [];

var svg = d3.select('#chart1').append("svg");
var svgSelection;
var baseGroup;

function display() {


    $(document).on("submit", "#formPray", function (e) {
        e.preventDefault();
        var city = d3.select("select#city").property("value").split("->")[1];;
        var year = d3.select("#year").property("value");
        console.log("CITY", city);
        console.log("YEAR", year);

        if (city !== "" && year !== "") {

            if (focusDate) focusDate.remove();
            if (focusFajr) focusFajr.remove();
            if (focusSunrise) focusSunrise.remove();
            if (focusDhuhr) focusDhuhr.remove();
            if (focusAsr) focusAsr.remove();
            if (focusMaghrib) focusMaghrib.remove();
            if (focusIsha) focusIsha.remove();
            if (vLine) vLine.remove();

            d3.queue()
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=1&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=2&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=3&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=4&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=5&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=6&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=7&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=8&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=9&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=10&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=11&year=${year}&method=3`)
                .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=12&year=${year}&method=3`)
                .await(function (error, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
                    dataset = p1.data.concat(p2.data);
                    dataset = dataset.concat(p3.data);
                    dataset = dataset.concat(p4.data);
                    dataset = dataset.concat(p5.data);
                    dataset = dataset.concat(p6.data);
                    dataset = dataset.concat(p7.data);
                    dataset = dataset.concat(p8.data);
                    dataset = dataset.concat(p9.data);
                    dataset = dataset.concat(p10.data);
                    dataset = dataset.concat(p11.data);
                    dataset = dataset.concat(p12.data);

                    mapDataSet = dataset.reduce(function (map, obj) {

                        obj.timings.Fajr = obj.timings.Fajr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
                        obj.timings.Sunrise = obj.timings.Sunrise.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
                        obj.timings.Dhuhr = obj.timings.Dhuhr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
                        obj.timings.Asr = obj.timings.Asr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
                        obj.timings.Maghrib = obj.timings.Maghrib.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
                        obj.timings.Isha = obj.timings.Isha.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");

                        var value_ = {
                            Fajr: parseTime(obj.timings.Fajr).getHours() * 60 + parseTime(obj.timings.Fajr).getMinutes(),
                            Sunrise: parseTime(obj.timings.Sunrise).getHours() * 60 + parseTime(obj.timings.Sunrise).getMinutes(),
                            Dhuhr: parseTime(obj.timings.Dhuhr).getHours() * 60 + parseTime(obj.timings.Dhuhr).getMinutes(),
                            Asr: parseTime(obj.timings.Asr).getHours() * 60 + parseTime(obj.timings.Asr).getMinutes(),
                            Maghrib: parseTime(obj.timings.Maghrib).getHours() * 60 + parseTime(obj.timings.Maghrib).getMinutes(),
                            Isha: parseTime(obj.timings.Isha).getHours() * 60 + parseTime(obj.timings.Isha).getMinutes()
                        };
                        map[Math.floor(xScale(parseDateApi(obj.date.readable).getTime()))] = value_;
                        return map;
                    }, {});

                    update(dataset);

                });
        }
    })

svgSelection = svg
    .attr("width", width + marginLeft + marginRight)
    .attr("height", height + marginTop + marginBottom);

  if (baseGroup) baseGroup.remove();

  if (focusDate) focusDate.remove();
  if (focusFajr) focusFajr.remove();
  if (focusSunrise) focusSunrise.remove();
  if (focusDhuhr) focusDhuhr.remove();
  if (focusAsr) focusAsr.remove();
  if (focusMaghrib) focusMaghrib.remove();
  if (focusIsha) focusIsha.remove();
  if (vLine) vLine.remove();


baseGroup = svgSelection
    .append("g")
    .attr("transform", "translate("+marginLeft+","+marginTop+")");
	

dataset = [];

var city = d3.select("select#city").property("value").split("->")[1];;
var year = d3.select("#year").property("value");
console.log("CITY", city);
console.log("YEAR", year);
    d3.queue()
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=1&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=2&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=3&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=4&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=5&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=6&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=7&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=8&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=9&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=10&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=11&year=${year}&method=3`)
    .defer(d3.json, `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=MA&&month=12&year=${year}&method=3`)
    .await(function (error, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {
        dataset = p1.data.concat(p2.data);
        dataset = dataset.concat(p3.data);
        dataset = dataset.concat(p4.data);
        dataset = dataset.concat(p5.data);
        dataset = dataset.concat(p6.data);
        dataset = dataset.concat(p7.data);
        dataset = dataset.concat(p8.data);
        dataset = dataset.concat(p9.data);
        dataset = dataset.concat(p10.data);
        dataset = dataset.concat(p11.data);
        dataset = dataset.concat(p12.data);

        mapDataSet = dataset.reduce(function (map, obj) {

            obj.timings.Fajr = obj.timings.Fajr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
            obj.timings.Sunrise = obj.timings.Sunrise.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
            obj.timings.Dhuhr = obj.timings.Dhuhr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
            obj.timings.Asr = obj.timings.Asr.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
            obj.timings.Maghrib = obj.timings.Maghrib.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");
            obj.timings.Isha = obj.timings.Isha.replace(" (WET)", "").replace(" (WEST)", "").replace(" (GMT)", "").replace(" (GST)", "").replace(" (+01)", "").replace(" (+00)", "");

            var value_ = {
                Fajr: parseTime(obj.timings.Fajr).getHours() * 60 + parseTime(obj.timings.Fajr).getMinutes(),
                Sunrise: parseTime(obj.timings.Sunrise).getHours() * 60 + parseTime(obj.timings.Sunrise).getMinutes(),
                Dhuhr: parseTime(obj.timings.Dhuhr).getHours() * 60 + parseTime(obj.timings.Dhuhr).getMinutes(),
                Asr: parseTime(obj.timings.Asr).getHours() * 60 + parseTime(obj.timings.Asr).getMinutes(),
                Maghrib: parseTime(obj.timings.Maghrib).getHours() * 60 + parseTime(obj.timings.Maghrib).getMinutes(),
                Isha: parseTime(obj.timings.Isha).getHours() * 60 + parseTime(obj.timings.Isha).getMinutes()
            };
            map[Math.floor(xScale(parseDateApi(obj.date.readable).getTime()))] = value_;
            return map;
        }, {});

        update(dataset);

    });

}



function calculateValue(d, values, i) {
	if (values[i] == "NONE") calc= 1440;
	else var calc = parseTime(d.timings[values[i]]).getHours()*60+parseTime(d.timings[values[i]]).getMinutes();
  i--;
	if(i >= 0) {
   calc -= parseTime(d.timings[values[i]]).getHours()*60+parseTime(d.timings[values[i]]).getMinutes();
  }
  
  return calc;
}


function mousemove(d, i) {
    var xo = d3.mouse(this)[0];
    var xx = formatDate(xScale.invert(d3.mouse(this)[0]));
    var yy = Math.trunc(xo/60)+":"+Math.trunc(xo%60);
    
		vLine
    .attr("x1", d3.mouse(this)[0])     
    .attr("y1", 0)      
    .attr("x2", d3.mouse(this)[0])    
    .attr("y2", height);
    
    if (mapDataSet[Math.floor(xo)]) {
      var hourFajr = mapDataSet[Math.floor(xo)].Fajr;
      var hourSunrise = mapDataSet[Math.floor(xo)].Sunrise;
      var hourDhuhr = mapDataSet[Math.floor(xo)].Dhuhr;
      var hourAsr = mapDataSet[Math.floor(xo)].Asr;
      var hourMaghrib = mapDataSet[Math.floor(xo)].Maghrib;
      var hourIsha = mapDataSet[Math.floor(xo)].Isha;
      
      var stringFajr = Math.trunc(hourFajr/60)+":"+Math.trunc(hourFajr%60);
      var stringSunrise = Math.trunc(hourSunrise/60)+":"+Math.trunc(hourSunrise%60);
      var stringDhuhr = Math.trunc(hourDhuhr/60)+":"+Math.trunc(hourDhuhr%60);
      var stringAsr = Math.trunc(hourAsr/60)+":"+Math.trunc(hourAsr%60);
      var stringMaghrib = Math.trunc(hourMaghrib/60)+":"+Math.trunc(hourMaghrib%60);
      var stringIsha = Math.trunc(hourIsha/60)+":"+Math.trunc(hourIsha%60);

      focusDate.select("text").style('fill', '#fff').text(xx);
      focusFajr.select("text").style('fill', '#fff').text("Fajr " + stringFajr);
      focusSunrise.select("text").style('fill', '#fff').text("Sunrise " + stringSunrise);  
      focusDhuhr.select("text").style('fill', '#fff').text("Dhuhr " + stringDhuhr);  
      focusAsr.select("text").style('fill', '#fff').text("Asr " + stringAsr);  
      focusMaghrib.select("text").style('fill', '#fff').text("Maghrib " + stringMaghrib);  
      focusIsha.select("text").style('fill', '#fff').text("Isha " + stringIsha); 
    
	  focusDate.attr("transform", "translate(" + (xo+marginLeft) + "," + (marginTop+20) + ")");
	  focusFajr.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourFajr)+marginTop) + ")");
      focusSunrise.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourSunrise)+marginTop) + ")");
      focusDhuhr.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourDhuhr)+marginTop) + ")");
      focusAsr.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourAsr)+marginTop) + ")");
      focusMaghrib.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourMaghrib)+marginTop) + ")");
      focusIsha.attr("transform", "translate(" + (xo+marginLeft) + "," + (yScale(hourIsha)+marginTop) + ")");
      
      d3.select("#day").text(xx);
      d3.select("#Fajr").text(stringFajr);
      d3.select("#Sunrise").text(stringSunrise);
      d3.select("#Dhuhr").text(stringDhuhr);
      d3.select("#Asr").text(stringAsr);
      d3.select("#Maghrib").text(stringMaghrib);
      d3.select("#Isha").text(stringIsha);
      
      /*
    pieData = [
        {label : 'Fajr', value : hourFajr},
        {label : 'Sunrise', value : hourSunrise-hourFajr},
        {label : 'Dhuhr', value : hourDhuhr-hourSunrise},
        {label : 'Asr', value : hourAsr-hourDhuhr},
        {label : 'Maghrib', value : hourMaghrib-hourAsr},
        {label : 'Isha', value : hourIsha-hourMaghrib},
        {label : 'Layle', value : 1440-hourIsha},
        ];
        
    drawPie();
    */
    }
  }    
  
      var focusDate;
      var focusFajr;
      var focusSunrise;
      var focusDhuhr;
      var focusAsr;
      var focusMaghrib;
      var focusIsha;  

var vLine;


function update(dataset) {
    
    d3.selectAll('.focus').remove();

      focusDate = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");
      focusFajr = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");
      focusSunrise = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");
      focusDhuhr = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");
      focusAsr = svg.append("g")
          .attr("class", "focus");
      focusMaghrib = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");
      focusIsha = svg.append("g")
          .attr("class", "focus")
          .attr("fill", "#fff");  

    var newDataset = miValues.map(function(n, j){
        return dataset.map(function(d, i){
			         return { 
               x: parseDateApi(d.date.readable).getTime(), 
               y: calculateValue(d, miValues, j),
               y0: 0 };
           });
    });

    d3.layout.stack()(newDataset);

    baseGroup.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0," + height + ")")
          .attr("fill", "#fff")
          .call(xBar);              
    baseGroup.append("g")
          .attr("class", "axis")
          .attr("fill", "#fff")
          .call(yAxis);

    var area = d3.svg.area()
        .x(function(d) {
        return xScale(d.x); })
        .y0(function(d) { 
        return yScale(d.y0); })
        .y1(function(d) { return yScale(d.y + d.y0); });

    var ageGroup = baseGroup.selectAll(".valgroup")
        .data(newDataset)
        .enter()
        .append("g")
        .style("fill", function(d, i) { 
        return colorScale(i); }
        )
        .attr("class", function(d, i) { 
        return hoverLabel(i); }
        );

    ageGroup.append("path")
        .attr("d", function(d) {
        return area(d); })
        .on("mouseover", function(d, i) { 
          focusDate.style("display", null);
          focusFajr.style("display", null);
          focusSunrise.style("display", null);
          focusDhuhr.style("display", null);
          focusAsr.style("display", null);
          focusMaghrib.style("display", null);
          focusIsha.style("display", null);
        })
        .on("mousemove", mousemove);

      focusDate.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");

      focusDate.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");
		  
      focusFajr.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");

      focusFajr.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");

      focusSunrise.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");
      focusSunrise.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");

      focusDhuhr.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");
      focusDhuhr.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");

      focusAsr.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");
      focusAsr.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");

      focusMaghrib.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");
      focusMaghrib.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");

      focusIsha.append("circle")
          .attr("r", 4.5)
          .attr("fill", "#fff");
      focusIsha.append("text")
          .attr("transform", "translate(0,-10)")
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("fill", "#fff");
          
          
  vLine = baseGroup.append('line')        
        .style("stroke", "black")
        .style("stroke-dasharray", ("3, 3"))
        .style("stroke-opacity", 0.9)
        .on("mouseover", function(d, i) { 
          focusDate.style("display", null); 
          focusFajr.style("display", null); 
          focusSunrise.style("display", null); 
          focusDhuhr.style("display", null); 
          focusAsr.style("display", null); 
          focusMaghrib.style("display", null); 
          focusIsha.style("display", null); 
        });


}


function drawPie() {

    var w = 400;
    var h = 400;
    var r = h/2;

    // Create a color scaling function => link data items to color
    var color = colorScale; // generate a rang of 20 color

    d3.select("div#chartPie").select("svg").remove("svg"); 
    // Select the chart items and append an SVG and a g items
    var vis = d3.select('div#chartPie')
        .append("svg:svg")
        .data([pieData])
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("transform", "translate(" + r + "," + r + ")");

    var arc = d3.svg.arc().outerRadius(r);

    var pie = d3.layout.pie().value(function(d){return d.value; })
        .sort(null);

    var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");

    arcs.append("svg:path").attr("id", function(d, i) {return pieData[i].label;})
    .attr("fill", function(d, i){return color(i);}).attr("d", arc); 

    arcs.append("text") 
    
	.attr("dy", "100")
    .append("textPath")
    .attr("xlink:href", function(d, i) {return "#" + pieData[i].label;})
    /*.attr("transform", 
        function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    		return "translate(" + arc.centroid(d) + ")";
        })*/
   // .attr("text-anchor", "middle")
    //.attr("startOffset", "100%")	
    .attr("x", "-1em")
    .attr("y", ".31em")
    .text( function(d, i) {return pieData[i].label;});
    
  

    
}



display();

/*
var heightForLine = 1000;
var scaleForLine =  d3.scale.linear()
    .range([0, heightForLine])
	  .domain([0, 24]); 
var svgForLine = d3.select("#forLine").append("svg")
    .attr("width", 1000)
    .attr("height", 1000+10);
svgForLine.append("line")
  .attr("x1", marginRight)  //<<== change your code here
  .attr("y1", 0)
  .attr("x2", marginRight)  //<<== and here
  .attr("y2", heightForLine)
  .style("stroke-width", 2)
  .style("stroke", "red")
  .style("fill", "none");
var dataForLine = d3.range(24);
var selectionForLine = svgForLine.append("g").selectAll("line").data(dataForLine).enter().append("line");
selectionForLine
	.attr("id", String)
  .attr("x1", marginRight)  //<<== change your code here
  .attr("y1", function(d) {return scaleForLine(d);})
  .attr("x2", marginRight + 10)  //<<== and here
  .attr("y2", function(d) {return scaleForLine(d);})
  .style("stroke-width", 2)
  .style("stroke", "red")
  .style("fill", "none");
var textForLine = svgForLine.select("g").selectAll("text").data(dataForLine).enter().append("text")
  .attr("y", function(d) {return scaleForLine(d);})
  .attr("x", marginRight)  //<<== change your code here
.text(String);
*/