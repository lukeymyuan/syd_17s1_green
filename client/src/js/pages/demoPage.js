const Page = require('watch_framework').Page;
const template = require('../../templates/pages/demo.hbs');

const demoPage = Page.extend({
  id: 'demo',
  template,
  render() {
    this.$el.html(this.template({ name: 'John Smith' }));
    return this;
  },
});

module.exports = demoPage;
