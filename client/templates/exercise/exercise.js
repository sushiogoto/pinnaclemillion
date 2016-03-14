Session.setDefault('counter', 0);

Template.exercise.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.exercise.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
