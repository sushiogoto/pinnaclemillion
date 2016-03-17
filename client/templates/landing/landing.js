Template.landing.helpers({
  totalWeightMoved: function () {
    return Exercises.find().fetch()[0].totalWeightMoved;
  }
});
