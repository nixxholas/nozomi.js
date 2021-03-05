# NozomiApi.WebsocketCommandPropertyApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websocketCommandPropertyAllByCommandGet**](WebsocketCommandPropertyApi.md#websocketCommandPropertyAllByCommandGet) | **GET** /WebsocketCommandProperty/AllByCommand | Retrieves all websocket command properties relevant to its parent command.
[**websocketCommandPropertyAllGet**](WebsocketCommandPropertyApi.md#websocketCommandPropertyAllGet) | **GET** /WebsocketCommandProperty/All | Retrieves all websocket command properties owned by the stated user with a pagination of  1000 items.

<a name="websocketCommandPropertyAllByCommandGet"></a>
# **websocketCommandPropertyAllByCommandGet**
> WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel websocketCommandPropertyAllByCommandGet(opts)

Retrieves all websocket command properties relevant to its parent command.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.WebsocketCommandPropertyApi();
let opts = { 
  'commandGuid': "commandGuid_example", // String | The unique identifier of the command.
  'index': 0 // Number | The 'page' of the list you are viewing, in 1000s.
};
apiInstance.websocketCommandPropertyAllByCommandGet(opts, (error, data, response) => {
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
 **commandGuid** | **String**| The unique identifier of the command. | [optional] 
 **index** | **Number**| The &#x27;page&#x27; of the list you are viewing, in 1000s. | [optional] [default to 0]

### Return type

[**WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel**](WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="websocketCommandPropertyAllGet"></a>
# **websocketCommandPropertyAllGet**
> WebsocketCommandPropertyViewModelICollectionPaginatedViewModel websocketCommandPropertyAllGet(opts)

Retrieves all websocket command properties owned by the stated user with a pagination of  1000 items.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.WebsocketCommandPropertyApi();
let opts = { 
  'index': 0 // Number | The 'page' of the list you are viewing, in 1000s.
};
apiInstance.websocketCommandPropertyAllGet(opts, (error, data, response) => {
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
 **index** | **Number**| The &#x27;page&#x27; of the list you are viewing, in 1000s. | [optional] [default to 0]

### Return type

[**WebsocketCommandPropertyViewModelICollectionPaginatedViewModel**](WebsocketCommandPropertyViewModelICollectionPaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

