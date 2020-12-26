/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/navigation/Navigation';
import { name as appName } from './app.json';
import AllCountries from './src/fragments/AllCountries';
import COVIDInfo from './src/fragments/COVIDInfo';
import SearchCountries from './src/fragments/SearchCountries';
AppRegistry.registerComponent(appName, () => SearchCountries);
