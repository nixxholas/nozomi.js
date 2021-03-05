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
import CommandType from './CommandType';
import CreateWebsocketCommandPropertyInputModel from './CreateWebsocketCommandPropertyInputModel';

/**
* The CreateWebsocketCommandInputModel model module.
* @module model/CreateWebsocketCommandInputModel
* @version 5
*/
export default class CreateWebsocketCommandInputModel {
    /**
    * Constructs a new <code>CreateWebsocketCommandInputModel</code>.
    * @alias module:model/CreateWebsocketCommandInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateWebsocketCommandInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateWebsocketCommandInputModel} obj Optional instance to populate.
    * @return {module:model/CreateWebsocketCommandInputModel} The populated <code>CreateWebsocketCommandInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebsocketCommandInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = CommandType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('requestGuid')) {
                obj['requestGuid'] = ApiClient.convertToType(data['requestGuid'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CreateWebsocketCommandPropertyInputModel]);
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {module:model/CommandType} type
    */
    'type' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Number} delay
    */
    'delay' = undefined;
    /**
    * @member {String} requestGuid
    */
    'requestGuid' = undefined;
    /**
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;
    /**
    * @member {Array.<module:model/CreateWebsocketCommandPropertyInputModel>} properties
    */
    'properties' = undefined;




}