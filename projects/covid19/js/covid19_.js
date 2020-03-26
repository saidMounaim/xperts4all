function bakeWaffles() {
        let width,
            height,
            widthSquares = 16,
            heightSquares = 9,
            squareSize = 25,
            gap = 1,
            theData = [];

        const myColors = d3.scaleOrdinal()
            .domain(["UoW Halls", "Commuter", "Other inc. Private Halls", "Unknown"])
            .range(["#EDAE49", "#D1495B", "#00798C", "#424B54"]);
  
        width = (squareSize * widthSquares) + widthSquares * gap + 25;
        height = (squareSize * heightSquares) + heightSquares * gap + 25;

        const svg = d3.select("#waffle-charts")
            .append("svg")
            .attr('class', 'waffle')
            .attr("width", width)
            .attr("height", height)

  theData = [
    {"day": 	24	,"date": "	25/03/2020	", "totalNegatifTests" : 	740	, "totalConfirmedCases" : 	225	, "totalDeath" : 	6	, "totalRecovered" : 	7	, "negatifTests" :	55	, "confirmedCases" : 	55	, "death" : 	1	, "recovered" :	1	, "plusPercent" :	32	},
  
    ];

            svg.append("g")
            .attr('transform', "translate(0, 10)")
            .selectAll("div")
            .data(() => d3.range(6))
            .enter()
            .append("rect")
            .attr("width", squareSize)
            .attr("height", squareSize)
            // .attr("class", d => 'class' + d.groupIndex + '' + title.replace(' ', ''))
            // .attr("fill", d => myColors(data[d.groupIndex].age))
            .attr("x", function(d, i) {
                //group n squares for column
                let col = Math.floor(i / heightSquares);
                return (col * squareSize) + (col * gap);
            })
            .attr("y", function(d, i) {
                let row = i % heightSquares;
                return (heightSquares * squareSize) - ((row * squareSize) + (row * gap))
            })
            .on("mouseover", function(d){
              // const classNameOfNodes = 'class' + d.groupIndex + '' + title.replace(' ', '')
                div.transition()
                .duration(100)
                .style("opacity", 1)
               
              // var element = d3.selectAll('.' + classNameOfNodes)['_groups'][0]
              
              
              element.forEach(function(target, i) {
              //  element[i].setAttribute("fill", ttColors(data[d.groupIndex].age))
                
                 div.html("<span style = 'font-weight: bold'>" + (d["population"] / Total * 100).toFixed(2) + "%</span>")
                div.style("visibility", "visible")
                .style("left", (d3.event.pageX - 20) + "px")    
                .style("top", (d3.event.pageY - 35) + "px")
  });
              
               
          })
            .on("mousemove", function(d){
            div.style("left", (d3.event.pageX - 20) + "px")    
            .style("top", (d3.event.pageY - 65) + "px")
          })
          .on("mouseout", function(d){
            div.transition()
            .duration(500)
            div.style("visibility", "hidden")
            //  const classNameOfNodes = 'class' + d.groupIndex + '' + title.replace(' ', '')
             
              // var element = d3.selectAll('.' + classNameOfNodes)['_groups'][0]
              element.forEach(function(target, i) {
              //  element[i].setAttribute("fill", myColors(data[d.groupIndex].age))
  });
              
           
          })
    }




bakeWaffles()