Meteor.methods({
  /**
   * delete a user from a specific group
   *
   * @method deleteUser
   * @param {String} targetUserId _id of user to delete
   * @param {String} group Company to update permissions for
   */
  deleteUser: function (targetUserId, group) {
    var loggedInUser = Meteor.user()

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['manage-users', 'support-staff'], group)) {
      throw new Meteor.Error(403, "Access denied")
    }

    // remove permissions for target group
    Roles.setUserRoles(targetUserId, [], group)

    // do other actions required when a user is removed...
  },
  updateRoles: function (targetUserId, roles, group) {
      var loggedInUser = Meteor.user()

      if (!loggedInUser ||
          !Roles.userIsInRole(loggedInUser,
                              ['manage-users', 'support-staff'], group)) {
        throw new Meteor.Error(403, "Access denied")
      }

      Roles.setUserRoles(targetUserId, roles, group)
    }
})