Meteor.startup(function() {
  if (!Meteor.users.find().count()) {
    var users = [
          {name:"Normal User",email:"normal@example.com",roles:[]},
          {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
          {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
          {name:"Admin User",email:"admin@example.com",roles:['admin']}
        ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: "123",
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles, 'default-group');
      }

    });
  }
})

Accounts.validateNewUser(function (user) {
  var loggedInUser = Meteor.user();

  if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
    // NOTE: This example assumes the user is not using groups.
    return true;
  }

  throw new Meteor.Error(403, "Not authorized to create new users");
});