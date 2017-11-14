function drawRadial(){
  var sampleData = [{
    attendance: 4925100,
    place: "Other China",
    drilldown: [{
      attendance: 1576032,
      place: "Tier 1",
      drilldown: [{
        attendance: 267925,
        place: "Beijing"
      }, {
        attendance: 236405,
        place: "Guangzhou"
      },{
        attendance: 330967,
        place: "Shanghai"
      },{
        attendance: 740735,
        place: "Shenzhen"
      }]
    }, {
      attendance: 1822287,
      place: "Tier 2",
      drilldown: [{
        attendance: 455572,
        place: "Beihai"
      }, {
        attendance: 328012,
        place: "Changchun"
      },{
        attendance: 346235,
        place: "Changsha"
      },{
        attendance: 455572,
        place: "Changdu"
      },{
        attendance: 236897,
        place: "Chongqing"
      }]
    },
    {
      attendance: 1526781,
      place: "Tier 3",
      drilldown: [{
        attendance: 244285,
        place: "Baoding"
      }, {
        attendance: 198482,
        place: "Benxi"
      },{
        attendance: 290088,
        place: "Fuxin"
      },{
        attendance: 244285,
        place: "Handan"
      },{
        attendance: 198482,
        place: "Liaoyang"
      },{
        attendance: 351160,
        place: "Yinchun"
      }]
    }]
  }, {
    attendance: 2573748,
    place: "Guangdong"
  }, {
    attendance: 1645138,
    place: "International",
    drilldown: [{
      attendance: 167916,
      place: "Cambodia"
    }, {
      attendance: 382697,
      place: "Indonesia"
    },{
      attendance: 179551,
      place: "Japan"
    },{
      attendance: 179237,
      place: "Laos"
    },{
      attendance: 196242,
      place: "Malaysia"
    },{
      attendance: 191683,
      place: "Philippines"
    },{
      attendance: 177919,
      place: "Thailand"
    },{
      attendance: 169893,
      place: "Vietnam"
    }]
  }, {
    attendance: 1713028,
    place: "Hong Kong"
  }];
  var config = {
    containerId: "chartContainer",
    width: 200,
    height: 200,
    data: sampleData,
    heading: {
      text: "Attendance",
      pos: "top"
    },
    value: "attendance",
    inner: "drilldown",
    tooltip: function(d) {
      return "<p>" + d.place + ": " + d.attendance +".</p>";
    },
    transition: "elastic",
    transitionDuration: 200,
    donutRadius: 50
  };
  var samplePie = new psd3.Pie(config);
}
