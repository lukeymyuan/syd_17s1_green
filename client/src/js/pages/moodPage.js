const Page = require('watch_framework').Page;
const template = require('../../templates/pages/moodSelector.hbs');
const storage = require('../../storage');

window.storage = storage;

const moodPage = Page.extend({

  id: 'mood',
  template,
  buttonEvents: {
    right: 'goToResponse_0',
    top: 'goToResponse_3',
    bottom: 'goToResponse_1',
    left: 'goToResponse_2',
    face: 'goToResponse_4',
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
  goToResponse_3() {
    storage.myData.mood.push(3);
    window.App.navigate('response');
  },
  goToResponse_4() {
    storage.myData.mood.push(4);
    window.App.navigate('response');
  },
  render() {
    this.$el.html(this.template({ mood: storage.myData.mood[0] }));
    return this;
  },
});

module.exports = moodPage;
