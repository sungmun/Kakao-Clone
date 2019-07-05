import { FacebookAuthProvider_Instance, GoogleAuthProvider_Instance } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import 'firebase/auth'
export const app = firebase.initializeApp({
  apiKey: 'AIzaSyB7BJT2TgddsFpXPhYu35r-YyvUzQ9QYck',
  authDomain: 'kakao-talk-hosting.firebaseapp.com',
  databaseURL: 'https://kakao-talk-hosting.firebaseio.com',
  projectId: 'kakao-talk-hosting',
  storageBucket: '',
  messagingSenderId: '38389537690',
  appId: '1:38389537690:web:8dba65f70bad4565',
});

const { GoogleAuthProvider, FacebookAuthProvider } = firebase.auth

export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()

export type providerType = GoogleAuthProvider_Instance | FacebookAuthProvider_Instance
