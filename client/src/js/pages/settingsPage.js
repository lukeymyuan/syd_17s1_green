const Page = require('watch_framework').Page;

const template = require('../../templates/pages/settingsPage.hbs');
const storage = require('../../storage');

const selectedLastIndex = storage.settings.gender.length - 1;
let currentGenderIndex = storage.settings.gender[selectedLastIndex];

const settingsPage = Page.extend({

  id: 'genderMessagePage',
  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToTap',
    face: 'pickGender',
  },
  genderOptions: ['Male', 'Female', 'Non-Binary', 'Prefer not to say'],
  template,

  scrollUp() {
    // Javascript modulo is wonky: -1 % 3 == -1
    const gendLen = this.genderOptions.length;
    currentGenderIndex = (((currentGenderIndex - 1) % gendLen) + gendLen) % gendLen;

    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },

  scrollDown() {
    currentGenderIndex = ((currentGenderIndex + 1) % this.genderOptions.length);
    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },

  pickGender() {
    storage.settings.gender.push(currentGenderIndex);
    window.App.navigate('tap');
  },

  goToTap() {
    window.App.navigate('tap');
  },

  render() {
    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },
});

module.exports = settingsPage;
