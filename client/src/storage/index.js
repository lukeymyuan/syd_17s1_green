const Backbone = require('backbone');
const eventsData = require('./events.json');
const myData = require('./mood.json');

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.myData = myData;
}

module.exports = new Storage();
