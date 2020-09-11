// STARTER CODE
var tableData = data;

/* CHECK THAT THE DATA SUCCESSFULLY UPLOADED

console.log(tableData);

UPLOAD SUCCESSFUL */

// CREATE REFERENCES
    var tableBody = d3.select("tbody");
    var button = d3.select("#filter-btn");
    var refDate = d3.select("#datetime");
    var refCity = d3.select("#city");
    var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// ADD DATA TO HTML
    var inputData = (dataInput) => {
        dataInput.forEach(ufoSightings => {
            var row = tableBody.append("tr");
            columns.forEach(column => row.append("td").text(ufoSightings[column])
            )
        });
    }

inputData(tableData);

// CREATE THE INTEACTIVE BUTTON

    button.on("click", () => {

        d3.event.preventDefault();
        

        var inputDate = refDate.property("value").trim();

        var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

        tableBody.html("");

        let response = {
            filterDate
        }

        if(response.filterDate.length !== 0) {
            inputData(filterDate);
        }

// NO DATA TO MATCH THE DATE? 
    
            else {
                tableBody.append("tr").append("td").text("This date does not have any recorded sightings. Search another date!");
            }
    })