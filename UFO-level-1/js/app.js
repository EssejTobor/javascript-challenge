
// from data.js
var tableData = data;


var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var searchBtn = document.querySelector("#search");
var resetBtn = document.querySelector("#reset");

// Render table
function renderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      var address = tableData[i];
    //   console.log(address)
      var fields = Object.keys(address);
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = address[field];
      }
    }
  }
  



  // Search table for filtered data
  function handleSearchButtonClick() {
     
  
    if (dateFilter != "") {
      tableData = data.filter(function (address) {
        var addressDate = address.datetime;
        return addressDate === filterDate;
      });
    }
    else { tableData };
  
    renderTable();
  }

  
  function handleResetButtonClick(){
    renderTable();
  }
  
  renderTable();
  