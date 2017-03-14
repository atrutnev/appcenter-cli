/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the UserInvitationPermissionsUpdateRequest class.
 * @constructor
 * @member {array} permissions The permissions the user has for the app in the
 * invitation
 * 
 */
function UserInvitationPermissionsUpdateRequest() {
}

/**
 * Defines the metadata of UserInvitationPermissionsUpdateRequest
 *
 * @returns {object} metadata of UserInvitationPermissionsUpdateRequest
 *
 */
UserInvitationPermissionsUpdateRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UserInvitationPermissionsUpdateRequest',
    type: {
      name: 'Composite',
      className: 'UserInvitationPermissionsUpdateRequest',
      modelProperties: {
        permissions: {
          required: true,
          serializedName: 'permissions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = UserInvitationPermissionsUpdateRequest;