# React-Native ScrollView Sample
ScrollView serves as a scrollable container for list of elements.

`<ScrollView>` vs `<ListView>` - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.

This is where ListView comes into play. ListView renders items lazily, just when they are about to appear. 

Ref: https://facebook.github.io/react-native/docs/scrollview.html

## Build Steps

* `npm install`
* `npm start`

## Running On Android

* `react-native run-android`

## Running On IOS

* `react-native run-ios`

