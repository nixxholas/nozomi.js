# NozomiApi.ComputeValueApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**computeValueAllIndexGet**](ComputeValueApi.md#computeValueAllIndexGet) | **GET** /ComputeValue/All/{index} | Obtain all compute value generated.
[**computeValueGetGuidGet**](ComputeValueApi.md#computeValueGetGuidGet) | **GET** /ComputeValue/Get/{guid} | Obtain the compute value specified.
[**computeValueLastComputeGuidGet**](ComputeValueApi.md#computeValueLastComputeGuidGet) | **GET** /ComputeValue/Last/{computeGuid} | Obtain the last compute value of the compute in question.

<a name="computeValueAllIndexGet"></a>
# **computeValueAllIndexGet**
> ComputeValueViewModelIEnumerablePaginatedViewModel computeValueAllIndexGet(index, opts)

Obtain all compute value generated.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeValueApi();
let index = 56; // Number | The 'page' of the list of results in x
let opts = { 
  'computeGuid': "computeGuid_example" // String | The compute guid relating to the values in question, optional.
};
apiInstance.computeValueAllIndexGet(index, opts, (error, data, response) => {
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
 **index** | **Number**| The &#x27;page&#x27; of the list of results in x | 
 **computeGuid** | **String**| The compute guid relating to the values in question, optional. | [optional] 

### Return type

[**ComputeValueViewModelIEnumerablePaginatedViewModel**](ComputeValueViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="computeValueGetGuidGet"></a>
# **computeValueGetGuidGet**
> ComputeValueViewModel computeValueGetGuidGet(guid)

Obtain the compute value specified.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeValueApi();
let guid = "guid_example"; // String | The guid of the compute value in question.

apiInstance.computeValueGetGuidGet(guid, (error, data, response) => {
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
 **guid** | **String**| The guid of the compute value in question. | 

### Return type

[**ComputeValueViewModel**](ComputeValueViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="computeValueLastComputeGuidGet"></a>
# **computeValueLastComputeGuidGet**
> ComputeValueViewModel computeValueLastComputeGuidGet(computeGuid)

Obtain the last compute value of the compute in question.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeValueApi();
let computeGuid = "computeGuid_example"; // String | The compute in question.

apiInstance.computeValueLastComputeGuidGet(computeGuid, (error, data, response) => {
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
 **computeGuid** | **String**| The compute in question. | 

### Return type

[**ComputeValueViewModel**](ComputeValueViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

