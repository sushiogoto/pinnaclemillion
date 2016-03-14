Exercises = new Mongo.Collection('exercises');

Exercises.allow({
  update: function(userId, doc) {
    // only allow posting if you're logged in
    return !!userId;
  }
})

Meteor.methods({
  addFiftyKiloSet: function() {
    var totalWeight = Exercises.findOne({event: 'pinnacleMillion'});
    var newWeight = totalWeight + (50 * 10);
    // Exercises.update({'total', {$set: {totalWeightMoved: newWeight}}})
  }
})