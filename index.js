/** @format */
import React from 'react'
import {AppRegistry,NativeModules} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
const{FFTBridge} = NativeModules
AppRegistry.registerComponent(appName, () => App);

export default class NativeAlert{
    static showALert(title:string, message:string){
        FFTBridge.showALert('hello','jack');
    }

}