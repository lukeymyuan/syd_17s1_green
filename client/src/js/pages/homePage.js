
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
    male: [
      'If your mates are doing something you know is wrong, say something!',
      "Being sensitive doesn't make you a 'girl' or a 'pussy' - it makes you human.",
      "Banter can be fun, but it's okay to let your mates know if it's getting too much.",
    ],
    female: [
      "People who attack your self esteem are quite aware of your potential, even if you're not.",
      'Girls are twice as likely to be victims of cyberbullying. Seek help if you feel threatened.',
      'Stay away from people who gossip. Let go of guilt and secrecy, and you will feel much lighter.',
      "Never send nudes, even if it's someone you trust!",
    ],
    unspecified: [
      "Block the bully! Don't waste your time arguing with unreasonable people.",
      "I hope you know you're capable, brave, and significant.",
      'Everything is figure-outable.',
      'Be kind to yourself.',
      "Don't say maybe if you want to say no.",
      'The more you weigh, the harder you are to kidnap. Stay safe. Eat cake!',
      "Don't respond if someone bullies you; your reaction is exactly what they want.",
      "Don't let anyone bully you into silence.",
      'Be a friend, not a bystander.',
      'If something happens, save the evidence and talk to a trusted adult.',
      "Don't let anyone bully you into silence.",
      "Are you being bullied? Don't blame yourself for someone else's misguided actions.",
    ],
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
