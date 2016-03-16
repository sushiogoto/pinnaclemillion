Session.setDefault('counter', 0);

Template.exercise.helpers({
  counter: function () {
    return Exercises.find().fetch()[0].totalWeightMoved;
  }
});

Template.exercise.events({
  'click button': function () {
    // increment the counter when button is clicked
    // Session.set('counter', Session.get('counter') + 1);
    Meteor.call('addFiftyKiloSet', function (error, result) {});
  }
});
