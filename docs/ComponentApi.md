# NozomiApi.ComponentApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**componentAllGet**](ComponentApi.md#componentAllGet) | **GET** /Component/All | Obtain all components you have created.
[**componentCreatePost**](ComponentApi.md#componentCreatePost) | **POST** /Component/Create | Create a component.
[**componentDeleteDelete**](ComponentApi.md#componentDeleteDelete) | **DELETE** /Component/Delete | Delete a component.
[**componentGetGuidGet**](ComponentApi.md#componentGetGuidGet) | **GET** /Component/Get/{guid} | Obtain the component and its historical values.
[**componentUpdatePut**](ComponentApi.md#componentUpdatePut) | **PUT** /Component/Update | Update a component.

<a name="componentAllGet"></a>
# **componentAllGet**
> ComponentViewModelIEnumerablePaginatedViewModel componentAllGet(opts)

Obtain all components you have created.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentApi();
let opts = { 
  'requestGuid': "requestGuid_example", // String | The unique identifier of the request that contains this component.
  'index': 0 // Number | The 'page' of the list of results in 100s
};
apiInstance.componentAllGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestGuid** | **String**| The unique identifier of the request that contains this component. | [optional] 
 **index** | **Number**| The &#x27;page&#x27; of the list of results in 100s | [optional] [default to 0]

### Return type

[**ComponentViewModelIEnumerablePaginatedViewModel**](ComponentViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="componentCreatePost"></a>
# **componentCreatePost**
> &#x27;String&#x27; componentCreatePost(opts)

Create a component.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentApi();
let opts = { 
  'body': new NozomiApi.CreateComponentInputModel() // CreateComponentInputModel | The supposed properties/parameters of the component.
};
apiInstance.componentCreatePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateComponentInputModel**](CreateComponentInputModel.md)| The supposed properties/parameters of the component. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="componentDeleteDelete"></a>
# **componentDeleteDelete**
> &#x27;String&#x27; componentDeleteDelete(opts)

Delete a component.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentApi();
let opts = { 
  'guid': "guid_example" // String | The unique identifier of the component to delete.
};
apiInstance.componentDeleteDelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| The unique identifier of the component to delete. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="componentGetGuidGet"></a>
# **componentGetGuidGet**
> ComponentViewModel componentGetGuidGet(guid, opts)

Obtain the component and its historical values.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentApi();
let guid = "guid_example"; // String | The unique identifier of the component.
let opts = { 
  'index': 0 // Number | The 'page' of the list of historical values in 100s
};
apiInstance.componentGetGuidGet(guid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**| The unique identifier of the component. | 
 **index** | **Number**| The &#x27;page&#x27; of the list of historical values in 100s | [optional] [default to 0]

### Return type

[**ComponentViewModel**](ComponentViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="componentUpdatePut"></a>
# **componentUpdatePut**
> &#x27;String&#x27; componentUpdatePut(opts)

Update a component.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentApi();
let opts = { 
  'body': new NozomiApi.UpdateComponentInputModel() // UpdateComponentInputModel | The supposed properties/parameters of the component.
};
apiInstance.componentUpdatePut(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateComponentInputModel**](UpdateComponentInputModel.md)| The supposed properties/parameters of the component. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

