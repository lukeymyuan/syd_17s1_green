const Page = require('watch_framework').Page;

const template = require('../../templates/pages/reportingDetailsPage.hbs');
const storage = require('../../storage');

const reportingDetailsPage = Page.extend({

  id: 'genderMessagePage',
  buttonEvents: {
    left: 'goBack',
  },
  organisations: [
    {
      name: 'Emergency Contact',
      phone: '1234567890',
      email: 'sample@email.com',
      address: 'http://organisation1.com',
    }, {
      name: 'organisation 2',
      phone: '1234567890',
      email: 'sample2@email.com',
      address: 'http://organisation2.com',
    }, {
      name: 'organisation 3',
      phone: '1234567890',
      email: 'sample@email.com',
      address: 'http://organisation3.com',
    },
  ],
  template,

  goBack() {
    window.App.navigate('reporting');
  },

  render() {
    const storageLen = storage.reportingDetailsSelected.selected.length - 1;
    const orgIndex = storage.reportingDetailsSelected.selected[storageLen];
    this.$el.html(this.template({ organisation: this.organisations[orgIndex] }));
    return this;
  },
});

module.exports = reportingDetailsPage;
