import { initializeApp } from "firebase/app"

import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA8SZo0dwbo2suY_aiL9E0WLa243BXoIYU",
    authDomain: "fir-9-tutorial-3fc47.firebaseapp.com",
    projectId: "fir-9-tutorial-3fc47",
    storageBucket: "fir-9-tutorial-3fc47.appspot.com",
    messagingSenderId: "413992773551",
    appId: "1:413992773551:web:e08563f704024945c1715a"
  };

initializeApp(firebaseConfig)

const db = getFirestore() 

const colRef = collection(db, "Books")

getDocs(colRef)
.then((snapshot)=> {
  console.log(snapshot)
  let books = []
  snapshot.docs.forEach((doc) => {
  books.push({...doc.data(), id: doc.id})
  console.log(books)
  })
})
