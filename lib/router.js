Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {return [Meteor.subscribe('exercises')];}
});

Router.route('/', {
  name: 'landing'
});

Router.route('/exercise', {
  name: 'exercise',
  waitOn: function() {
    return [Meteor.subscribe('exercises')];
  }
});

Router.route('/settings', {
  name: 'settings',
  waitOn: function() {
    return [Meteor.subscribe('exercises')];
  }
});

var requireLogin = function() {
  Session.set('currentRouteName', Router.current().route.name);
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
