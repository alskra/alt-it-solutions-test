import './vendor';
import './helpers';
import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';

const app = Application.start();
const context = require.context('./components', true, /\.js$/);
app.load(definitionsFromContext(context));
window.app = app;
