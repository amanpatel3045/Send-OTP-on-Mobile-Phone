
import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCr5lcBOh_X4JeTzCXA2lsYa8oAD6M4DvA",
  authDomain: "authapp-8210c.firebaseapp.com",
  projectId: "authapp-8210c",
  storageBucket: "authapp-8210c.appspot.com",
  messagingSenderId: "716847030013",
  appId: "1:716847030013:web:b46aa14c805161bd6a2894",
  measurementId: "G-XHHM30ZJ2X"
};

const app = initializeApp(firebaseConfig);

export {app};
