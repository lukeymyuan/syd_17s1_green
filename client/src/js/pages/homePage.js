// const _ = require('underscore');
const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

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

  prevIndex: 1,

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


  // setInterval((myfn) => {
  //   const d = new Date();
  //   page.currerntDate = d;
  //
  // }, 60000);

  render() {
    const gender = 'unspecified';
    let genderMessage = '';
    const maleLength = this.responses.male.length;
    const femaleLength = this.responses.female.length;
    const unspecifiedLength = this.responses.unspecified.length;
    const unspecifiedIndex = Math.floor(Math.random() * unspecifiedLength);

    // clearInterval();
    //  // this will check in every 10 seconds
    // setInterval(() => {
    //   const d = new Date();
    //   const hourList = [9, 12, 17];
    //   if ((_.indexOf(hourList, d.getHours()) > -1) && (d.getMinutes() === 0)) {
    //     window.App.navigate('mood');
    //   }
    // }, 60000);
    // let prevMale = 0;
    // let prevfemale = 0;
    // const today = moment();

    let messageIndex;
    switch (gender) {
      case 'male':
        // Show a male message
        messageIndex = Math.floor(Math.random() * maleLength);
        genderMessage = this.responses.male[messageIndex];
        break;
      case 'female':
          // Show a female message
        messageIndex = Math.floor(Math.random() * femaleLength);
        genderMessage = this.responses.female[messageIndex];
        break;
      default:
        genderMessage = this.responses.unspecified[unspecifiedIndex];
        break;
    }
    this.$el.html(this.template({ message: genderMessage }));
    return this;
  },

});

module.exports = homePage;
