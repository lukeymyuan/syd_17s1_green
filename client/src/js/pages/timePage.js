const Page = require('watch_framework').Page;
const template = require('../../templates/pages/time.hbs');

const timePage = Page.extend({

  id: 'time',
  template,
  buttonEvents: {
    face: 'goToTap',
    top: 'goToTap',
  },


  goToTap() {
    window.App.navigate('tap');
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = timePage;
