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
    face: 'pickGender',
  },
  genderOptions: ['Male', 'Female', 'Non-Binary', 'Prefer not to say'],
  template,

  scrollUp() {
    if (currentGenderIndex === 0) {
      currentGenderIndex = this.genderOptions.length - 1;
    } else {
      currentGenderIndex = ((currentGenderIndex - 1) % this.genderOptions.length);
    }

    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },

  scrollDown() {
    currentGenderIndex = ((currentGenderIndex + 1) % this.genderOptions.length);
    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },

  pickOrg() {
    storage.settings.gender.push(currentGenderIndex);
    window.App.navigate('tap');
  },

  render() {
    this.$el.html(this.template({ genderOption: this.genderOptions[currentGenderIndex] }));
    return this;
  },
});

module.exports = settingsPage;
