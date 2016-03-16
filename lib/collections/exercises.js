Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  update: function(userId, doc) {
    // only allow posting if you're logged in
    return !!userId;
  }
})

Meteor.methods({
  addFiftyKiloSet: function() {
    var totalWeight = Exercises.find().fetch()[0].totalWeightMoved;
    var newWeight = parseInt(totalWeight) + (50 * 10);
    var exerciseId = Exercises.find().fetch()[0]._id;
    Exercises.update(exerciseId, {$set: {totalWeightMoved: newWeight}})
  },
  addSeventyFiveKiloSet: function() {
    var totalWeight = Exercises.find().fetch()[0].totalWeightMoved;
    var newWeight = parseInt(totalWeight) + (75 * 10);
    var exerciseId = Exercises.find().fetch()[0]._id;
    Exercises.update(exerciseId, {$set: {totalWeightMoved: newWeight}})
  },
  addOneHundredKiloSet: function() {
    var totalWeight = Exercises.find().fetch()[0].totalWeightMoved;
    var newWeight = parseInt(totalWeight) + (100 * 10);
    var exerciseId = Exercises.find().fetch()[0]._id;
    Exercises.update(exerciseId, {$set: {totalWeightMoved: newWeight}})
  }
})

Meteor.startup(function() {
  if (!Exercises.find().count()) {
    Exercises.insert({
      totalWeightMoved: 0
    })
  }
})