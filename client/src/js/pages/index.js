const page404 = require('./404Page');
const team = require('./teamPage');
const home = require('./homePage');
const contacts = require('./contactsPage');
const response = require('./responsePage');
const eventsList = require('./eventsList');
const eventDetails = require('./eventDetails');
const mood = require('./moodPage');
const tap = require('./tapPage');

// TODO autogenerate this file
module.exports = {
  404: page404,
  team,
  home,
  contacts,
  eventsList,
  eventDetails,
  mood,
  response,
  tap,
};
