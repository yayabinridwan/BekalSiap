import ReBase from 're-base'
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyAiWR3llIlJFAePWmq62kaoLXmnQnf-oVU",
    authDomain: "catch-fish-8e88d.firebaseapp.com",
    databaseURL: "https://catch-fish-8e88d.firebaseio.com",
  };

const firebaseApp = firebase.initializeApp(config)

const base = ReBase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;


