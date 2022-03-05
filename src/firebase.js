import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// import {onSnapshot, collection, addDoc ,getDocs} from "firebase/firestore"; 
// import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMkx3QaW0966DhftaGIeNQ_Gckrj75o_E",
    authDomain: "link-85d66.firebaseapp.com",
    projectId: "link-85d66",
    storageBucket: "link-85d66.appspot.com",
    messagingSenderId: "647693487791",
    appId: "1:647693487791:web:92253a166bc1d2aff1ce5a"
  };

  const app=initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();
//   const ans=[]

//-----------Get Collection----------//
// const ref =collection(db,'posts')
// getDocs(ref).then((snapshot)=>{
//     ans.push(snapshot.docs[0].data())
// })

//-------Get Data In Real Time----------//
// onSnapshot(ref,(snapshot)=>{
// let data=[]
// snapshot.docs.forEach((doc)=>{
//     data.push({...doc.data()})
// })
// console.log(data)
// })

  export {db,auth};