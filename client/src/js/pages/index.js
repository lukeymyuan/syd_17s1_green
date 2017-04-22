const page404 = require('./404Page');
const team = require('./teamPage');
const home = require('./homePage');
const response = require('./responsePage');
const eventsList = require('./eventsList');
const eventDetails = require('./eventDetails');
const mood = require('./moodPage');
const tap = require('./tapPage');
const reporting = require('./reportingSelectionPage');
const reportingDetails = require('./reportingDetailsPage');
const settings = require('./settingsPage');

// TODO autogenerate this file
module.exports = {
  404: page404,
  team,
  home,
  eventsList,
  eventDetails,
  mood,
  response,
  tap,
  reporting,
  reportingDetails,
  settings,
};
