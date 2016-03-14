Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
  // waitOn: function() {return [Meteor.subscribe('exercises')];}
});

Router.route('/', {
  name: 'landing'
  // waitOn: function() {
  //   return [Meteor.subscribe('items')];
  // }
});

Router.route('/exercise', {
  name: 'exercise'
  // waitOn: function() {
  //   return [Meteor.subscribe('items')];
  // }
});

// Router.route('/welcome', {
//   name: 'landing'
// });

var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('landing');
    }
  } else {
    this.next();
  }
};


Router.onBeforeAction(requireLogin);