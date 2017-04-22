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
      name: 'Kids Helpline',
      phone: '1800 551 800',
      address: 'www.kidshelpline.com.au',
    }, {
      name: 'NSW Police Force',
      phone: '000',
      address: 'www.police.nsw.gov.au',
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
