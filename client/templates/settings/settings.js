Template.settings.events({
  'click #reset-weight': function(event) {
    event.preventDefault();
    if(confirm('Are you sure you want to reset the total lifted weight?')) {
      Meteor.call('resetWeight', function (error, result) {});
    }
  }
})