# React-Native Geolocation App

The Geolocation API extends the web spec: *https://developer.mozilla.org/en-US/docs/Web/API/Geolocation*

As a browser polyfill, this API is available through the `navigator.geolocation` global - you do not need to import it.

**iOS** 
You need to include the NSLocationWhenInUseUsageDescription key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with react-native init.

In order to enable geolocation in the background, you need to include the `NSLocationAlwaysUsageDescription` key in `Info.plist` and add location as a background mode in the 'Capabilities' tab in **Xcode**.

**Android** 
To request access to location, you need to add the following line to your app's `AndroidManifest.xml`:

`<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />`

Android API >= 18 Positions will also contain a mocked boolean to indicate if position was created from a mock provider.

## Build Steps

* `npm install`
* `npm start`

## Running On Android

* `react-native run-android`

## Running On IOS

* `react-native run-ios`

