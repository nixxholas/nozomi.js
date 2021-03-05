# NozomiApi.ComputeApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**computeAllIndexGet**](ComputeApi.md#computeAllIndexGet) | **GET** /Compute/All/{index} | Obtains all of the relevant computes you own.
[**computeGetGuidGet**](ComputeApi.md#computeGetGuidGet) | **GET** /Compute/Get/{guid} | Obtains the specific compute.

<a name="computeAllIndexGet"></a>
# **computeAllIndexGet**
> ComputeViewModelIEnumerablePaginatedViewModel computeAllIndexGet(index)

Obtains all of the relevant computes you own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeApi();
let index = 56; // Number | The 'page' of the list of results of every x items.

apiInstance.computeAllIndexGet(index, (error, data, response) => {
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
 **index** | **Number**| The &#x27;page&#x27; of the list of results of every x items. | 

### Return type

[**ComputeViewModelIEnumerablePaginatedViewModel**](ComputeViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="computeGetGuidGet"></a>
# **computeGetGuidGet**
> ComputeViewModel computeGetGuidGet(guid)

Obtains the specific compute.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeApi();
let guid = "guid_example"; // String | The Guid of the compute in question.

apiInstance.computeGetGuidGet(guid, (error, data, response) => {
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
 **guid** | **String**| The Guid of the compute in question. | 

### Return type

[**ComputeViewModel**](ComputeViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

