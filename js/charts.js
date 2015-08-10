google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Daily booking'],
    ['Flight', 1110],
    ['Railway', 2000],
    ['Bus', 4000],
    ['Cabs', 2500]
  ]);

  var options = {
    title: 'Daily booking data',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutChart'));
  chart.draw(data, options);
}

function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Flight', 'Railway', 'Bus', 'Cabs'],
    ['2003', 1336060, 400361, 1001582, 997974],
    ['2004', 1538156, 366849, 1119450, 941795],
    ['2005', 1576579, 440514, 993360, 930593],
    ['2006', 1600652, 434552, 1004163, 897127],
    ['2007', 1968113, 393032, 979198, 1080887],
    ['2008', 1901067, 517206, 916965, 1056036]
  ]);

  // Create and draw the visualization.
  new google.visualization.ColumnChart(document.getElementById('stackedBarChart')).
  draw(data, {
    title: "Yearly booking data",
    width: 600,
    height: 400,
    vAxis: {
      title: "Year"
    },
    isStacked: true,
    hAxis: {
      title: "Cups"
    }
  });
}

google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(drawVisualization);


var xmlToTable = function() {
  $.ajax({
    url: "../xmlData/data.xml",
    method: "GET",
    dataType: "xml",
    success: function(result) {
      var xmlDoc = result;
      var markup = "<table><tr> <th>Time</th> <th>Level</th> <th>Magnitude</th> <th>Distance</th><th>Discription</th><th>Block</th> </tr>";
      var x = xmlDoc.getElementsByTagName("Gempa");
      for (i = 0; i < x.length; i++) {
        markup += ("<tr><td>");
        markup += (x[i].getElementsByTagName("Tanggal")[0].childNodes[0].nodeValue);
        markup += ("</td><td>");
        markup += (x[i].getElementsByTagName("Magnitude")[0].childNodes[0].nodeValue);
        markup += ("</td><td>");
        markup += (x[i].getElementsByTagName("Posisi")[0].childNodes[0].nodeValue);
        markup += ("</td><td>");
        markup += (x[i].getElementsByTagName("Kedalaman")[0].childNodes[0].nodeValue);
        markup += ("</td><td>");
        markup += (x[i].getElementsByTagName("Keterangan")[0].childNodes[0].nodeValue);
        markup += ("</td><td>");
        markup += (x[i].getElementsByTagName("Dirasakan")[0].childNodes[0].nodeValue);
        markup += ("</td></tr>");
      }
      markup += ("</table>")
      $('#xmlTable').append(markup);
    },
    error: function(result) {
      console.log(result);
    }
  });
}

xmlToTable();