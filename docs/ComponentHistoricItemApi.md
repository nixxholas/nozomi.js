# NozomiApi.ComponentHistoricItemApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**componentHistoricItemAllComponentGuidGet**](ComponentHistoricItemApi.md#componentHistoricItemAllComponentGuidGet) | **GET** /ComponentHistoricItem/All/{componentGuid} | Obtain all the component historical values created

<a name="componentHistoricItemAllComponentGuidGet"></a>
# **componentHistoricItemAllComponentGuidGet**
> ComponentHistoricItemViewModelIEnumerablePaginatedViewModel componentHistoricItemAllComponentGuidGet(componentGuid, opts)

Obtain all the component historical values created

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComponentHistoricItemApi();
let componentGuid = "componentGuid_example"; // String | The unique identifier of the component.
let opts = { 
  'index': 0 // Number | The 'page' of the list of results in 100s.
};
apiInstance.componentHistoricItemAllComponentGuidGet(componentGuid, opts, (error, data, response) => {
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
 **componentGuid** | **String**| The unique identifier of the component. | 
 **index** | **Number**| The &#x27;page&#x27; of the list of results in 100s. | [optional] [default to 0]

### Return type

[**ComponentHistoricItemViewModelIEnumerablePaginatedViewModel**](ComponentHistoricItemViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

