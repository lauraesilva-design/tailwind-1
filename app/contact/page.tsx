"use client";

import { useEffect, useState, useMemo } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const error = useMemo(() => { return !email.includes("@") }, [email]);
   
    //const [error,setError]= useState(false);

    /*useEffect(()=> {if(email.includes("@")) {
    }return(false);
    { else
        return(true);
    }
    }, [email]);*/

    function getEmail() {
        if (!error) {
            //error === false
            window.open(`https://wa.me/?text=Entre em contado comigo pelo email ${email}`);
        }

    }

    return (
        <main className="w-screen h-screen flex flex-col gap-16 items-center justify-center">

            <h1 className="text-6xl">Contado</h1>
            <div>
                <p>Digite seu email para eu entrar em Contado!</p>
                <input type="email" placeholder="Digite seu email" className="border border-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && <p>Email invalido</p>}

            </div>
            <button className="cursor-pointer border border-white py-2 px-10 rounded-full disabled:cursor-not-allowed" onClick={() => getEmail()} disabled={error}>Enviar</button>
        </main>
    );
}
