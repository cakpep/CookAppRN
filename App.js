import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store';

import MainApp from './src/components/MainApp';

export default function App() {
  return (
    <Provider store={ configureStore() }>
      <MainApp/>
    </Provider>
  );
}
