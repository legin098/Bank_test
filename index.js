/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from '@src/App';
import {name as appName} from './app.json';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/add-all-tz';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/locale-data/es-CO';

AppRegistry.registerComponent(appName, () => App);
