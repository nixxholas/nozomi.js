# NozomiApi.SubComputeApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subComputeAllByChildChildComputeGuidGet**](SubComputeApi.md#subComputeAllByChildChildComputeGuidGet) | **GET** /SubCompute/AllByChild/{childComputeGuid} | Obtains all of the relevant parent computes the child compute has.
[**subComputeAllByParentParentComputeGuidGet**](SubComputeApi.md#subComputeAllByParentParentComputeGuidGet) | **GET** /SubCompute/AllByParent/{parentComputeGuid} | Obtains all of the relevant child computes the parent compute has.
[**subComputeAllIndexGet**](SubComputeApi.md#subComputeAllIndexGet) | **GET** /SubCompute/All/{index} | Obtains all of the relevant Sub Computes you own.
[**subComputeGetGet**](SubComputeApi.md#subComputeGetGet) | **GET** /SubCompute/Get | Obtains the specific sub compute.

<a name="subComputeAllByChildChildComputeGuidGet"></a>
# **subComputeAllByChildChildComputeGuidGet**
> ComputeViewModelIEnumerablePaginatedViewModel subComputeAllByChildChildComputeGuidGet(childComputeGuid, opts)

Obtains all of the relevant parent computes the child compute has.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.SubComputeApi();
let childComputeGuid = "childComputeGuid_example"; // String | The child compute that has these computes as its parent.
let opts = { 
  'index': 0 // Number | The 'page' of the list of results of every x items.
};
apiInstance.subComputeAllByChildChildComputeGuidGet(childComputeGuid, opts, (error, data, response) => {
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
 **childComputeGuid** | **String**| The child compute that has these computes as its parent. | 
 **index** | **Number**| The &#x27;page&#x27; of the list of results of every x items. | [optional] [default to 0]

### Return type

[**ComputeViewModelIEnumerablePaginatedViewModel**](ComputeViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="subComputeAllByParentParentComputeGuidGet"></a>
# **subComputeAllByParentParentComputeGuidGet**
> ComputeViewModelIEnumerablePaginatedViewModel subComputeAllByParentParentComputeGuidGet(parentComputeGuid, opts)

Obtains all of the relevant child computes the parent compute has.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.SubComputeApi();
let parentComputeGuid = "parentComputeGuid_example"; // String | The parent compute that has these computes as its child.
let opts = { 
  'index': 0 // Number | The 'page' of the list of results of every x items.
};
apiInstance.subComputeAllByParentParentComputeGuidGet(parentComputeGuid, opts, (error, data, response) => {
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
 **parentComputeGuid** | **String**| The parent compute that has these computes as its child. | 
 **index** | **Number**| The &#x27;page&#x27; of the list of results of every x items. | [optional] [default to 0]

### Return type

[**ComputeViewModelIEnumerablePaginatedViewModel**](ComputeViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="subComputeAllIndexGet"></a>
# **subComputeAllIndexGet**
> SubComputeViewModelIEnumerablePaginatedViewModel subComputeAllIndexGet(index)

Obtains all of the relevant Sub Computes you own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.SubComputeApi();
let index = 56; // Number | The 'page' of the list of results of every x items.

apiInstance.subComputeAllIndexGet(index, (error, data, response) => {
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

[**SubComputeViewModelIEnumerablePaginatedViewModel**](SubComputeViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="subComputeGetGet"></a>
# **subComputeGetGet**
> SubComputeViewModel subComputeGetGet(opts)

Obtains the specific sub compute.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.SubComputeApi();
let opts = { 
  'parentComputeGuid': "parentComputeGuid_example", // String | The parent compute key.
  'childComputeGuid': "childComputeGuid_example" // String | The child compute key.
};
apiInstance.subComputeGetGet(opts, (error, data, response) => {
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
 **parentComputeGuid** | **String**| The parent compute key. | [optional] 
 **childComputeGuid** | **String**| The child compute key. | [optional] 

### Return type

[**SubComputeViewModel**](SubComputeViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

