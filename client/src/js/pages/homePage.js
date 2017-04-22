
const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');
const storage = require('../../storage');

const genderStorage = storage.settings.gender;
const genderOptions = storage.settings.genderOptions;

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    top: 'goToTap',
    face: 'render',
    bottom: 'scrollDown',
  },

  responses: {
    male: ['male msg 1', 'male msg 2', 'unspecified msg 1', 'unspecified msg 2', 'unspecified msg 3'],
    female: ['female msg 1', 'female msg 2', 'female msg 3', 'unspecified msg 1', 'unspecified msg 2', 'unspecified msg 3'],
    unspecified: ['unspecified msg 1', 'unspecified msg 2', 'unspecified msg 3'],
  },

  prevIndex: 0,

  goToMoodPage() {
    window.App.navigate('mood');
  },

  goToTap() {
    window.App.navigate('tap');
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  goToResponse() {
    window.App.navigate('response');
  },

  render() {
    const gendLen = genderStorage.length;
    const gender = genderOptions[genderStorage[gendLen - 1]];
    let genderMessage = '';

    const maleLength = this.responses.male.length;
    const femaleLength = this.responses.female.length;
    const unspecifiedLength = this.responses.unspecified.length;
    // const unspecifiedIndex = Math.floor(Math.random() * unspecifiedLength);

    // let prevMale = 0;
    // let prevfemale = 0;


    let messageIndex;
    switch (gender) {
      case 'Male':
        // Show a male message
        messageIndex = Math.floor(Math.random() * maleLength);
        while (messageIndex === this.prevIndex) {
          messageIndex = Math.floor(Math.random() * maleLength);
        }
        this.prevIndex = messageIndex;
        genderMessage = this.responses.male[messageIndex];
        break;
      case 'Female':
          // Show a female message
        messageIndex = Math.floor(Math.random() * femaleLength);
        while (messageIndex === this.prevIndex) {
          messageIndex = Math.floor(Math.random() * femaleLength);
        }
        this.prevIndex = messageIndex;
        genderMessage = this.responses.female[messageIndex];
        break;
      default:
        // Show an unspecified message
        messageIndex = Math.floor(Math.random() * unspecifiedLength);
        while (messageIndex === this.prevIndex) {
          messageIndex = Math.floor(Math.random() * unspecifiedLength);
        }
        this.prevIndex = messageIndex;
        genderMessage = this.responses.unspecified[messageIndex];
        break;
    }
    this.$el.html(this.template({ message: genderMessage }));
    return this;
  },

});

module.exports = homePage;
