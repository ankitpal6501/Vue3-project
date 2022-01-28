
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBrBZO795NDO1k1mRf7EdBQnyrub2268kQ",
  authDomain: "logo-mint.firebaseapp.com",
  projectId: "logo-mint",
  storageBucket: "logo-mint.appspot.com",
  messagingSenderId: "947634984670",
  appId: "1:947634984670:web:a99a81eeffa4f26e25544f",
  measurementId: "G-E5YSXFZKB6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export{auth,analytics}