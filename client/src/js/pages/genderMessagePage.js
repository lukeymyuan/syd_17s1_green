const Page = require('watch_framework').Page;

const template = require('../../templates/pages/genderMessagePage.hbs');

const responsePage = Page.extend({

  id: 'genderMessagePage',

  template,

  responses: {
    male: ['male msg 1', 'male msg 2'],
    female: ['female msg 1', 'female msg 2', 'female msg 3'],
    unspecified: ['unspecified msg 1', 'unspecified msg 2', 'unspecified msg 3'],
  },

  buttonEvents: {
    face: 'render',
  },

  goToHomePage() {
    window.App.navigate('home');
  },

  render() {
    const gender = 'unspecified'; // will change from gender setting page later
    // Generate an index between 0 - 9
    let genderMessage = '';

    const maleLength = this.responses.male.length;
    const femaleLength = this.responses.female.length;
    const unspecifiedLength = this.responses.unspecified.length;

    const unspecifiedIndex = Math.floor(Math.random() * unspecifiedLength);

    // let prevMale = 0;
    // let prevfemale = 0;

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

module.exports = responsePage;
