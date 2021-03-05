# NozomiApi.ItemApi

All URIs are relative to *https://api.nozomi.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemAllIndexGet**](ItemApi.md#itemAllIndexGet) | **GET** /Item/All/{index} | Obtains all of the relevant items you own.
[**itemCreatePost**](ItemApi.md#itemCreatePost) | **POST** /Item/Create | Create an item.
[**itemExistsSlugGet**](ItemApi.md#itemExistsSlugGet) | **GET** /Item/Exists/{slug} | Validates if the slug is being used.
[**itemGetBySlugSlugGet**](ItemApi.md#itemGetBySlugSlugGet) | **GET** /Item/GetBySlug/{slug} | Obtains the specified item.
[**itemGetItemGuidGet**](ItemApi.md#itemGetItemGuidGet) | **GET** /Item/Get/{itemGuid} | Obtains the specified item.
[**itemUpdatePut**](ItemApi.md#itemUpdatePut) | **PUT** /Item/Update | Update the specified item.

<a name="itemAllIndexGet"></a>
# **itemAllIndexGet**
> ItemViewModelIEnumerablePaginatedViewModel itemAllIndexGet(index, parentGuidFilter, slugFilter, nameFilter)

Obtains all of the relevant items you own.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let index = 56; // Number | The 'page' of the list of results of every x items.
let parentGuidFilter = "parentGuidFilter_example"; // String | Filters items by Parent ID.
let slugFilter = "slugFilter_example"; // String | Filters items by slug.
let nameFilter = "nameFilter_example"; // String | Filters items by name.

apiInstance.itemAllIndexGet(index, parentGuidFilter, slugFilter, nameFilter, (error, data, response) => {
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
 **parentGuidFilter** | **String**| Filters items by Parent ID. | 
 **slugFilter** | **String**| Filters items by slug. | 
 **nameFilter** | **String**| Filters items by name. | 

### Return type

[**ItemViewModelIEnumerablePaginatedViewModel**](ItemViewModelIEnumerablePaginatedViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="itemCreatePost"></a>
# **itemCreatePost**
> &#x27;String&#x27; itemCreatePost(opts)

Create an item.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let opts = { 
  'body': new NozomiApi.CreateItemInputModel() // CreateItemInputModel | The supposed properties/parameters of the item.
};
apiInstance.itemCreatePost(opts, (error, data, response) => {
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
 **body** | [**CreateItemInputModel**](CreateItemInputModel.md)| The supposed properties/parameters of the item. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="itemExistsSlugGet"></a>
# **itemExistsSlugGet**
> &#x27;Boolean&#x27; itemExistsSlugGet(slug, opts)

Validates if the slug is being used.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let slug = "slug_example"; // String | The unique identifier of the item.
let opts = { 
  'local': false // Boolean | If you want to only check the slugs you own.
};
apiInstance.itemExistsSlugGet(slug, opts, (error, data, response) => {
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
 **slug** | **String**| The unique identifier of the item. | 
 **local** | **Boolean**| If you want to only check the slugs you own. | [optional] [default to false]

### Return type

**&#x27;Boolean&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="itemGetBySlugSlugGet"></a>
# **itemGetBySlugSlugGet**
> ItemViewModel itemGetBySlugSlugGet(slug)

Obtains the specified item.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let slug = "slug_example"; // String | The unique slug of the item.

apiInstance.itemGetBySlugSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The unique slug of the item. | 

### Return type

[**ItemViewModel**](ItemViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="itemGetItemGuidGet"></a>
# **itemGetItemGuidGet**
> ItemViewModel itemGetItemGuidGet(itemGuid)

Obtains the specified item.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let itemGuid = "itemGuid_example"; // String | The unique identifier of the item.

apiInstance.itemGetItemGuidGet(itemGuid, (error, data, response) => {
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
 **itemGuid** | **String**| The unique identifier of the item. | 

### Return type

[**ItemViewModel**](ItemViewModel.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="itemUpdatePut"></a>
# **itemUpdatePut**
> &#x27;String&#x27; itemUpdatePut(opts)

Update the specified item.

### Example
```javascript
import NozomiApi from 'nozomi_api';
let defaultClient = NozomiApi.ApiClient.instance;

// Configure API key authorization: API Key
let API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

let apiInstance = new NozomiApi.ItemApi();
let opts = { 
  'body': new NozomiApi.UpdateItemInputModel() // UpdateItemInputModel | The supposed properties/parameters the value you want to update on an item.
};
apiInstance.itemUpdatePut(opts, (error, data, response) => {
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
 **body** | [**UpdateItemInputModel**](UpdateItemInputModel.md)| The supposed properties/parameters the value you want to update on an item. | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

