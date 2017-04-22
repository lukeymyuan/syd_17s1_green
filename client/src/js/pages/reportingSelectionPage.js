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
    left: 'goToTap',
  },
  organisationNames: ['Kids Helpline', 'NSW Police Force'],
  template,

  scrollUp() {
    const orgsLen = this.organisationNames.length;
    // Javascript modulo is wonky: -1 % 3 == -1
    currentOrgIndex = (((currentOrgIndex - 1) % orgsLen) + orgsLen) % orgsLen;

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

  goToTap() {
    window.App.navigate('tap');
  },

  render() {
    this.$el.html(this.template({ organisation: this.organisationNames[currentOrgIndex] }));
    return this;
  },
});

module.exports = reportingSelectionPage;
