const Page = require('watch_framework').Page;
const template = require('../../templates/pages/moodSelector.hbs');
const storage = require('../../storage');

window.storage = storage; // Just for debugging

const moodPage = Page.extend({

  id: 'mood',
  template,
  buttonEvents: {
    right: 'goToResponse_0',
    top: 'goToTap',
    bottom: 'goToResponse_1',
    left: 'goToResponse_2',
  },

  goToResponse_0() {
    storage.myData.mood.push(0);
    window.App.navigate('response');
  },
  goToResponse_1() {
    storage.myData.mood.push(1);
    window.App.navigate('response');
  },
  goToResponse_2() {
    storage.myData.mood.push(2);
    window.App.navigate('response');
  },
  goToTap() {
    storage.myData.mood.push(3);
    window.App.navigate('tap');
  },
  render() {
    this.$el.html(this.template({ mood: storage.myData.mood[0] }));
    return this;
  },
});

module.exports = moodPage;
