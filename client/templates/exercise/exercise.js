Template.exercise.helpers({
  totalWeightMoved: function () {
    return Exercises.find().fetch()[0].totalWeightMoved;
  }
});

Template.exercise.events({
  'click #50-kilos': function () {
    Meteor.call('addFiftyKiloSet', function (error, result) {});
  },
  'click #75-kilos': function () {
    Meteor.call('addSeventyFiveKiloSet', function (error, result) {});
  },
  'click #100-kilos': function () {
    Meteor.call('addOneHundredKiloSet', function (error, result) {});
  },
});
