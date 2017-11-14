function drawArrivalGraph(masterdata,marketin){
  var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
  },
  width = 640 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10, "%");

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var market = "Hong Kong";
  console.log("heres the master data");
  console.log(masterdata);
  var masterLength = masterdata.length;

  var barData = [];

  for (var i = 0; i < masterLength; i++){
    if (masterdata[i].market == market && masterdata[i].year == 2017) {
      barData.push({
        "month": masterdata[i].month,
        "arrival": masterdata[i].arrival
      });
    }

  }

  var lineData = [];
  for (var i = 0; i < masterLength; i++){
    if (masterdata[i].market == market && masterdata[i].year == 2016) {
      lineData.push({
        "month": masterdata[i].month,
        "arrival": masterdata[i].arrival
      });
    }

  }
  //concatenating the 2 set to get the full data for calculating teh max and min of teh domain.
  var fullData = [].concat.apply([], [barData, lineData]);

  x.domain(fullData.map(function (d) {
      return d.month;
  }));
  y.domain([0, d3.max(fullData, function (d) {
      return d.arrival;
  })]);
  var line = d3.svg.line()
      .x(function(d) { return x(d.month)+x.rangeBand()/2; })
      .y(function(d) { return y(d.arrival); });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("arrival");

  svg.selectAll(".bar")
      .data(barData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
      return x(d.month);
  })
      .attr("width", x.rangeBand())
      .attr("y", function (d) {
      return y(d.arrival);
  })
      .attr("height", function (d) {
      return height - y(d.arrival);
  });
  svg.append("path")
        .datum(lineData)
        .attr("class", "line")
        .attr("d", line);
}
