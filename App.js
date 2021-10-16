import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/Store';
import IndexNav from './src/Navigation/index';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IndexNav />
    </PersistGate>
  </Provider>
);

export default App;
