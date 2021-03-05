# NozomiApi.ComponentTypeApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**componentTypeAllGet**](ComponentTypeApi.md#componentTypeAllGet) | **GET** /ComponentType/All | Obtain all of the component types that are publicly available or the ones that you own.

<a name="componentTypeAllGet"></a>
# **componentTypeAllGet**
> ComponentTypeViewModelIEnumerablePaginatedViewModel componentTypeAllGet(opts)

Obtain all of the component types that are publicly available or the ones that you own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentTypeApi();
let opts = { 
  'index': 0 // Number | the 'page' of the list of results in 50s.
};
apiInstance.componentTypeAllGet(opts, (error, data, response) => {
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
 **index** | **Number**| the &#x27;page&#x27; of the list of results in 50s. | [optional] [default to 0]

### Return type

[**ComponentTypeViewModelIEnumerablePaginatedViewModel**](ComponentTypeViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

