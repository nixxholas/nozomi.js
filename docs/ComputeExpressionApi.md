# NozomiApi.ComputeExpressionApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**computeExpressionAllIndexGet**](ComputeExpressionApi.md#computeExpressionAllIndexGet) | **GET** /ComputeExpression/All/{index} | Obtains all of the relevant compute expressions you own.
[**computeExpressionGetGuidGet**](ComputeExpressionApi.md#computeExpressionGetGuidGet) | **GET** /ComputeExpression/Get/{guid} | Obtains the specific compute expression.

<a name="computeExpressionAllIndexGet"></a>
# **computeExpressionAllIndexGet**
> ComputeExpressionViewModelIEnumerablePaginatedViewModel computeExpressionAllIndexGet(index, opts)

Obtains all of the relevant compute expressions you own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeExpressionApi();
let index = 56; // Number | The 'page' of the list of results of every x items.
let opts = { 
  'computeGuid': "computeGuid_example" // String | Filter by the compute if needed.
};
apiInstance.computeExpressionAllIndexGet(index, opts, (error, data, response) => {
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
 **computeGuid** | **String**| Filter by the compute if needed. | [optional] 

### Return type

[**ComputeExpressionViewModelIEnumerablePaginatedViewModel**](ComputeExpressionViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="computeExpressionGetGuidGet"></a>
# **computeExpressionGetGuidGet**
> ComputeExpressionViewModel computeExpressionGetGuidGet(guid)

Obtains the specific compute expression.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ComputeExpressionApi();
let guid = "guid_example"; // String | The Guid of the compute expression in question.

apiInstance.computeExpressionGetGuidGet(guid, (error, data, response) => {
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
 **guid** | **String**| The Guid of the compute expression in question. | 

### Return type

[**ComputeExpressionViewModel**](ComputeExpressionViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

