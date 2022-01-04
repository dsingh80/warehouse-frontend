'use strict';
import thobias from '../../config/thobias';


class ThobiasAPI {
  static BASE_URL = thobias.baseUrl;

  /**
   * @function sendRequest
   * @param {String} method
   * @param {String} endpoint
   * @param {Object} data
   * @param {Function} callback => (error, data)
   */
  static sendRequest(method, endpoint, data, callback) {
    method = method || 'POST';
    if (!endpoint) {
      console.error('No endpoint provided to sendRequest. Aborting request.');
    }
    // eslint-disable-next-line no-undef
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open(method, ThobiasAPI.BASE_URL + endpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');
    request.addEventListener('load', function () {
      if (callback) {
        if (request.status == 404) {
          callback('Failed to reach server. Please try again later or contact support for further assistance');
          return;
        }
        callback(request.response.errorMessage, request.response.data);
      }
    });
    request.addEventListener('error', function () {
      if (callback) {
        callback(request.response.errorMessage, request.response.data);
      }
    });
    request.addEventListener('abort', function () {
      if (callback) {
        callback('User aborted XHR request');
      }
    });

    if (data) {
      request.send(JSON.stringify(data));
    } else {
      request.send();
    }
  }

}


export default ThobiasAPI;