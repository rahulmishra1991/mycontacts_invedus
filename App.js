/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import Router from './src/Router';

function App () { 
  useEffect(() => {
    console.log("APP CALLED")
    console.reportErrorsAsExceptions = false;
    console.disableYellowBox = true;
  }, []);
   
 
  return (
    <>
      <Router />
    </>
  );
}
 
export default App;