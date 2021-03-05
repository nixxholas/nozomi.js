/**
 * Nozomi API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ComputeViewModel from '../model/ComputeViewModel';
import ComputeViewModelIEnumerablePaginatedViewModel from '../model/ComputeViewModelIEnumerablePaginatedViewModel';

/**
* Compute service.
* @module api/ComputeApi
* @version 5
*/
export default class ComputeApi {

    /**
    * Constructs a new ComputeApi. 
    * @alias module:api/ComputeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the computeAllIndexGet operation.
     * @callback module:api/ComputeApi~computeAllIndexGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComputeViewModelIEnumerablePaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtains all of the relevant computes you own.
     * @param {module:api/ComputeApi~computeAllIndexGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComputeViewModelIEnumerablePaginatedViewModel}
     */
    computeAllIndexGet(index, callback) {
      let postBody = null;

      let pathParams = {
        'index': index
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComputeViewModelIEnumerablePaginatedViewModel;

      return this.apiClient.callApi(
        '/Compute/All/{index}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the computeGetGuidGet operation.
     * @callback module:api/ComputeApi~computeGetGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComputeViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtains the specific compute.
     * @param {module:api/ComputeApi~computeGetGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComputeViewModel}
     */
    computeGetGuidGet(guid, callback) {
      let postBody = null;

      let pathParams = {
        'guid': guid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComputeViewModel;

      return this.apiClient.callApi(
        '/Compute/Get/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}