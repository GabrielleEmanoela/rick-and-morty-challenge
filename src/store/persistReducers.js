import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist';


export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'tronInformatica',
      storage,
      whitelist: ['auth', 'user']
    },
    reducers
  );
  return persistedReducer;
}