// from data.js
var tableData = data;

// Render table
function renderTable(closeEncounters) {
  var tbody = d3.select("tbody");
  closeEncounters.forEach((encounter) => {
    var row = tbody.append("tr");
    // console.table(encounter)
    Object.entries(encounter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};
renderTable(tableData);


// filter table on click
var button = d3.select("#filter-btn");
button.on("click", function(event){
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    var filterTable = tableData;
  } else { 
    var filterTable = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // error handling
  if (filterTable.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>Record Not Found</h4>");
  };
  renderTable(filterTable);
});
