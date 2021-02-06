import MocAdapter from 'axios-mock-adapter';
import axios from './axios';

const instance = new MocAdapter(axios, {delayResponse: 0});

export default instance;
