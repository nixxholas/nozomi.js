# NozomiApi.WebsocketCommandApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websocketCommandAllByRequestGet**](WebsocketCommandApi.md#websocketCommandAllByRequestGet) | **GET** /WebsocketCommand/AllByRequest | Obtain all of the websocket commands created, relative to the request.
[**websocketCommandAllGet**](WebsocketCommandApi.md#websocketCommandAllGet) | **GET** /WebsocketCommand/All | Obtain all websocket commands you have created/own.

<a name="websocketCommandAllByRequestGet"></a>
# **websocketCommandAllByRequestGet**
> WebsocketCommandViewModelICollectionPaginatedViewModel websocketCommandAllByRequestGet(opts)

Obtain all of the websocket commands created, relative to the request.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.WebsocketCommandApi();
let opts = { 
  'requestGuid': "requestGuid_example", // String | The unique identifier of the request.
  'index': 0 // Number | The 'page' of the list of results in 100s.
};
apiInstance.websocketCommandAllByRequestGet(opts, (error, data, response) => {
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
 **requestGuid** | **String**| The unique identifier of the request. | [optional] 
 **index** | **Number**| The &#x27;page&#x27; of the list of results in 100s. | [optional] [default to 0]

### Return type

[**WebsocketCommandViewModelICollectionPaginatedViewModel**](WebsocketCommandViewModelICollectionPaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="websocketCommandAllGet"></a>
# **websocketCommandAllGet**
> WebsocketCommandViewModelIEnumerablePaginatedViewModel websocketCommandAllGet(opts)

Obtain all websocket commands you have created/own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.WebsocketCommandApi();
let opts = { 
  'index': 0 // Number | The 'page' of the list of results in 100s.
};
apiInstance.websocketCommandAllGet(opts, (error, data, response) => {
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

[**WebsocketCommandViewModelIEnumerablePaginatedViewModel**](WebsocketCommandViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

