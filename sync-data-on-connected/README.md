# React-Native Network Mask

This app demonstrates a simple implementation of using the `NetInfo` module to control whether or not our application will make an API call. If the connectivity is lost, we will keep a reference of the *pending* request and complete it when the network access is restored. We will be using a sample POST API provided by `posttestserver.com` . This API accepts *POST* requests and writes the contents out to a file on the web server that you can later access.

## Build Steps

* `npm install`
* `npm start`

## Running On Android

* `react-native run-android`

## Running On IOS

* `react-native run-ios`

