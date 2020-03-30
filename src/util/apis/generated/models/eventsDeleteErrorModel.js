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
 * Error
 *
 */
class EventsDeleteErrorModel {
  /**
   * Create a EventsDeleteErrorModel.
   * @property {object} [error]
   * @property {number} [error.code] The status code return by the API. It can
   * be 400 or 403 or 500.
   * @property {string} [error.message] The reason for the request failed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventsDeleteErrorModel
   *
   * @returns {object} metadata of EventsDeleteErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventsDeleteErrorModel',
      type: {
        name: 'Composite',
        className: 'EventsDeleteErrorModel',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'EventsDeleteErrorModelError'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsDeleteErrorModel;