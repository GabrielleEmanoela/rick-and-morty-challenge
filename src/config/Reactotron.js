import { NativeModules } from 'react-native';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  // Pegar endereço de IP do dispositivo e vincular ao Reactotron;
  const hostName = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: hostName,
      name: 'RickMortyApp',
    })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear;

  console.tron = tron;
}
