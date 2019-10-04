/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a PatchRepoInfo.
 */
class PatchRepoInfo {
  /**
   * Create a PatchRepoInfo.
   * @property {string} [externalUserId] The external user ID
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatchRepoInfo
   *
   * @returns {object} metadata of PatchRepoInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PatchRepoInfo',
      type: {
        name: 'Composite',
        className: 'PatchRepoInfo',
        modelProperties: {
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PatchRepoInfo;