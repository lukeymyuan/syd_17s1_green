const Backbone = require('backbone');
const eventsData = require('./events.json');
const myData = require('./mood.json');
const reportingDetailsSelected = require('./reportingDetailsSelected.json');

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.myData = myData;
  this.reportingDetailsSelected = reportingDetailsSelected;
}

module.exports = new Storage();
