# NozomiApi.RequestApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestAllGet**](RequestApi.md#requestAllGet) | **GET** /Request/All | Retrieves all requests owned by the stated user with a pagination of 100 items.
[**requestCreatePost**](RequestApi.md#requestCreatePost) | **POST** /Request/Create | Create a request.
[**requestDeleteGuidDelete**](RequestApi.md#requestDeleteGuidDelete) | **DELETE** /Request/Delete/{guid} | Delete a request.
[**requestGetGuidGet**](RequestApi.md#requestGetGuidGet) | **GET** /Request/Get/{guid} | Retrieves the request with the mentioned guid.
[**requestUpdatePut**](RequestApi.md#requestUpdatePut) | **PUT** /Request/Update | Update a request.

<a name="requestAllGet"></a>
# **requestAllGet**
> RequestViewModelIEnumerablePaginatedViewModel requestAllGet(opts)

Retrieves all requests owned by the stated user with a pagination of 100 items.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestApi();
let opts = { 
  'index': 0 // Number | The 'page' of the request list you're viewing
};
apiInstance.requestAllGet(opts, (error, data, response) => {
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
 **index** | **Number**| The &#x27;page&#x27; of the request list you&#x27;re viewing | [optional] [default to 0]

### Return type

[**RequestViewModelIEnumerablePaginatedViewModel**](RequestViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestCreatePost"></a>
# **requestCreatePost**
> &#x27;String&#x27; requestCreatePost(opts)

Create a request.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestApi();
let opts = { 
  'body': new NozomiApi.CreateRequestInputModel() // CreateRequestInputModel | The supposed properties/parameters of the request.
};
apiInstance.requestCreatePost(opts, (error, data, response) => {
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
 **body** | [**CreateRequestInputModel**](CreateRequestInputModel.md)| The supposed properties/parameters of the request. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="requestDeleteGuidDelete"></a>
# **requestDeleteGuidDelete**
> &#x27;String&#x27; requestDeleteGuidDelete(guid)

Delete a request.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestApi();
let guid = "guid_example"; // String | The unique ID of the request.

apiInstance.requestDeleteGuidDelete(guid, (error, data, response) => {
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
 **guid** | **String**| The unique ID of the request. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestGetGuidGet"></a>
# **requestGetGuidGet**
> RequestViewModel requestGetGuidGet(guid)

Retrieves the request with the mentioned guid.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestApi();
let guid = "guid_example"; // String | Guid of the request

apiInstance.requestGetGuidGet(guid, (error, data, response) => {
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
 **guid** | **String**| Guid of the request | 

### Return type

[**RequestViewModel**](RequestViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestUpdatePut"></a>
# **requestUpdatePut**
> &#x27;String&#x27; requestUpdatePut(opts)

Update a request.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestApi();
let opts = { 
  'body': new NozomiApi.UpdateRequestInputModel() // UpdateRequestInputModel | The supposed properties/parameters of the request.
};
apiInstance.requestUpdatePut(opts, (error, data, response) => {
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
 **body** | [**UpdateRequestInputModel**](UpdateRequestInputModel.md)| The supposed properties/parameters of the request. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

