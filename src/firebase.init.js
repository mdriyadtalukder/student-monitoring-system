import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIEQi-s6fqsw7qrX_qeH0ac56xUswTylc",
  authDomain: "student-monitoring-syste-90e95.firebaseapp.com",
  projectId: "student-monitoring-syste-90e95",
  storageBucket: "student-monitoring-syste-90e95.appspot.com",
  messagingSenderId: "420350921290",
  appId: "1:420350921290:web:c11ddb169f8bdbe0dcb4b3"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
// export const db = getFirestore(app);
export default auth;