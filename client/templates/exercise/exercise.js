Template.exercise.helpers({
  totalWeightMoved: function () {
    return Exercises.find().fetch()[0].totalWeightMoved;
  }
});

Template.exercise.events({
  'click #50-kilos': function () {
    // increment the counter when button is clicked
    // Session.set('counter', Session.get('counter') + 1);
    Meteor.call('addFiftyKiloSet', function (error, result) {});
    // $('#50-kilos').value
  },
  'click #75-kilos': function () {
    // increment the counter when button is clicked
    // Session.set('counter', Session.get('counter') + 1);
    Meteor.call('addSeventyFiveKiloSet', function (error, result) {});
  },
  'click #100-kilos': function () {
    // increment the counter when button is clicked
    // Session.set('counter', Session.get('counter') + 1);
    Meteor.call('addOneHundredKiloSet', function (error, result) {});
  },
});
