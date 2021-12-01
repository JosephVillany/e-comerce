import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

//Logo logout
import LogoLogout from "../Assets/logout_white_24dp.svg"

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = () => {



    return (
        
        <div className="flex w-screen h-screen" >
            <h2>Bienvenido {} </h2>
            <button className="shadow-3xl flex mx-auto my-auto bg-red-800 text-white p-2 rounded-2xl" onClick={() => signOut(auth)}><img src={LogoLogout} />Cerrar sesión</button>
        </div>
    )
}

export default Home
