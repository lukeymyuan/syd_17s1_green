const Page = require('watch_framework').Page;

const template = require('../../templates/pages/reportingSelectionPage.hbs');
const storage = require('../../storage');

const selectedLastIndex = storage.reportingDetailsSelected.selected.length - 1;
let currentOrgIndex = storage.reportingDetailsSelected.selected[selectedLastIndex];

const reportingSelectionPage = Page.extend({

  id: 'genderMessagePage',
  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    face: 'pickOrg',
  },
  organisationNames: ['organisation 1', 'organisation 2', 'organisation 3'],
  template,

  scrollUp() {
    if (currentOrgIndex === 0) {
      currentOrgIndex = this.organisationNames.length - 1;
    } else {
      currentOrgIndex = ((currentOrgIndex - 1) % this.organisationNames.length);
    }

    this.$el.html(this.template({ organisation: this.organisationNames[currentOrgIndex] }));
    return this;
  },

  scrollDown() {
    currentOrgIndex = ((currentOrgIndex + 1) % this.organisationNames.length);
    this.$el.html(this.template({ organisation: this.organisationNames[currentOrgIndex] }));
    return this;
  },

  pickOrg() {
    storage.reportingDetailsSelected.selected.push(currentOrgIndex);
    window.App.navigate('reportingDetails');
  },

  render() {
    this.$el.html(this.template({ organisation: this.organisationNames[currentOrgIndex] }));
    return this;
  },
});

module.exports = reportingSelectionPage;
