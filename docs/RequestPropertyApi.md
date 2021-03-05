# NozomiApi.RequestPropertyApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestPropertyAllByRequestGet**](RequestPropertyApi.md#requestPropertyAllByRequestGet) | **GET** /RequestProperty/AllByRequest | Obtain all analysed components you have created, relative to that specific request.
[**requestPropertyAllGet**](RequestPropertyApi.md#requestPropertyAllGet) | **GET** /RequestProperty/All | Obtain all request properties you have created/own.
[**requestPropertyCreatePost**](RequestPropertyApi.md#requestPropertyCreatePost) | **POST** /RequestProperty/Create | Create a request property.
[**requestPropertyDeleteGuidDelete**](RequestPropertyApi.md#requestPropertyDeleteGuidDelete) | **DELETE** /RequestProperty/Delete/{guid} | Delete a request property
[**requestPropertyUpdatePut**](RequestPropertyApi.md#requestPropertyUpdatePut) | **PUT** /RequestProperty/Update | Update a request property.

<a name="requestPropertyAllByRequestGet"></a>
# **requestPropertyAllByRequestGet**
> RequestPropertyViewModelIEnumerablePaginatedViewModel requestPropertyAllByRequestGet(opts)

Obtain all analysed components you have created, relative to that specific request.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestPropertyApi();
let opts = { 
  'requestGuid': "requestGuid_example", // String | The request guid you are referring to.
  'index': 0 // Number | The 'page' of the list of results in 100s.
};
apiInstance.requestPropertyAllByRequestGet(opts, (error, data, response) => {
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
 **requestGuid** | **String**| The request guid you are referring to. | [optional] 
 **index** | **Number**| The &#x27;page&#x27; of the list of results in 100s. | [optional] [default to 0]

### Return type

[**RequestPropertyViewModelIEnumerablePaginatedViewModel**](RequestPropertyViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestPropertyAllGet"></a>
# **requestPropertyAllGet**
> RequestPropertyViewModelIEnumerablePaginatedViewModel requestPropertyAllGet(opts)

Obtain all request properties you have created/own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestPropertyApi();
let opts = { 
  'index': 0 // Number | The 'page' of the list of results in 100s.
};
apiInstance.requestPropertyAllGet(opts, (error, data, response) => {
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
 **index** | **Number**| The &#x27;page&#x27; of the list of results in 100s. | [optional] [default to 0]

### Return type

[**RequestPropertyViewModelIEnumerablePaginatedViewModel**](RequestPropertyViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestPropertyCreatePost"></a>
# **requestPropertyCreatePost**
> &#x27;String&#x27; requestPropertyCreatePost(opts)

Create a request property.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestPropertyApi();
let opts = { 
  'body': new NozomiApi.CreateRequestPropertyInputModel() // CreateRequestPropertyInputModel | The supposed properties/parameters of the request property.
};
apiInstance.requestPropertyCreatePost(opts, (error, data, response) => {
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
 **body** | [**CreateRequestPropertyInputModel**](CreateRequestPropertyInputModel.md)| The supposed properties/parameters of the request property. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="requestPropertyDeleteGuidDelete"></a>
# **requestPropertyDeleteGuidDelete**
> &#x27;String&#x27; requestPropertyDeleteGuidDelete(guid)

Delete a request property

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestPropertyApi();
let guid = "guid_example"; // String | The unique identifier of the deletion attempt.

apiInstance.requestPropertyDeleteGuidDelete(guid, (error, data, response) => {
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
 **guid** | **String**| The unique identifier of the deletion attempt. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="requestPropertyUpdatePut"></a>
# **requestPropertyUpdatePut**
> &#x27;String&#x27; requestPropertyUpdatePut(opts)

Update a request property.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.RequestPropertyApi();
let opts = { 
  'body': new NozomiApi.UpdateRequestPropertyInputModel() // UpdateRequestPropertyInputModel | The supposed properties/parameters of the request property.
};
apiInstance.requestPropertyUpdatePut(opts, (error, data, response) => {
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
 **body** | [**UpdateRequestPropertyInputModel**](UpdateRequestPropertyInputModel.md)| The supposed properties/parameters of the request property. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

