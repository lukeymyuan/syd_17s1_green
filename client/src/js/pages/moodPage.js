const Page = require('watch_framework').Page;
const template = require('../../templates/pages/moodSelector.hbs');

const moodPage = Page.extend({

  id: 'mood',
  template,
  render() {
    this.$el.html(this.template());
    return this;
  },
});

module.exports = moodPage;
