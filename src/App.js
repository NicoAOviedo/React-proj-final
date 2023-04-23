import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA37WwlGYcr5_agtidgNk4hXPtwD9Z5ZfM",
  authDomain: "proyectoreactnoviedo.firebaseapp.com",
  projectId: "proyectoreactnoviedo",
  storageBucket: "proyectoreactnoviedo.appspot.com",
  messagingSenderId: "144020504060",
  appId: "1:144020504060:web:dff34e782dc95d8c3e0679"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;