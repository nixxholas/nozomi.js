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

import ApiClient from '../ApiClient';
import WebsocketCommandPropertyViewModel from './WebsocketCommandPropertyViewModel';

/**
* The WebsocketCommandPropertyViewModelICollectionPaginatedViewModel model module.
* @module model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel
* @version 5
*/
export default class WebsocketCommandPropertyViewModelICollectionPaginatedViewModel {
    /**
    * Constructs a new <code>WebsocketCommandPropertyViewModelICollectionPaginatedViewModel</code>.
    * @alias module:model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>WebsocketCommandPropertyViewModelICollectionPaginatedViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel} obj Optional instance to populate.
    * @return {module:model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel} The populated <code>WebsocketCommandPropertyViewModelICollectionPaginatedViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketCommandPropertyViewModelICollectionPaginatedViewModel();
                        
            
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [WebsocketCommandPropertyViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalCount
    */
    'totalCount' = undefined;
    /**
    * @member {Array.<module:model/WebsocketCommandPropertyViewModel>} payload
    */
    'payload' = undefined;




}