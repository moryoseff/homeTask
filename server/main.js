var fs = require('fs');
const express = require("express")
const app = express()

app.use(express.urlencoded({
  extended: false
}))

// Get all data
app.get("/getData", (req, res) => {
  let allData = getDataFromCsv()
  res.send(allData)
})

// Get by website id
app.get("/getDataByWebsiteId", (req, res) => {
  let weibsiteIdToCompare = req.params.websiteIDParams
  let allData = getDataFromCsv()
  let comparedWebsiteIdData = allData.filter((websiteIdCheck) => websiteIdCheck.WebsiteID == weibsiteIdToCompare)
  res.send(comparedWebsiteIdData)
})

// get by widget id 
app.get("/getDataByWidgetId/:widgetIDParams", (req, res) => {
  let WidgetIdToCompare = req.params.widgetIDParams
  let allData = getDataFromCsv()
  let comparedWidgetIdData = allData.filter((widgetIdCheck) => widgetIdCheck.WidgetID == WidgetIdToCompare)
  res.send(comparedWidgetIdData)
})

// get by dates
app.get("/getDataByDates/:startDate/:endDate", (req, res) => {
  let data = getDataFromCsv()
  var startDate = req.params.startDate
  var endDate = req.params.startDate
  console.log(` start ${startDate} end ${endDate}`)
  var result = data.filter(function (obj) {
    return obj.Date >= startDate && obj.Date <= endDate;
  })
  res.send(result)
})


function getDataFromCsv() {
  var data = fs.readFileSync('rara.csv')
    .toString()
    .split('\n')
    .map(e => e.trim())
    .map(e => e.split(',').map(e => e.trim()));
  var roro = data.map(function (row) {
    return {
      "WebsiteID": row[0],
      "Date": row[1],
      "WidgetID": row[2],
      "Clicks": row[3],
      "Impressions": row[4],
      "Revenue": row[5]
    }
  })
  return roro
}


app.listen(3000)
