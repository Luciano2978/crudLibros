import fsContexto from "./Contexto";
import { addDoc,collection, doc, query, onSnapshot, QuerySnapshot,updateDoc,deleteDoc}  from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState, useEffect } from "react";

export default function FirestoreContext(props){

    const { children } = props;
    const [estadoNumero , setEstadoNumero] = useState("");
    const [mostrarNumero, setNumero] = useState([]);


    const registro = (numeroPrimo) =>{
        var esNumeroPrimo = true; 
        const numerosDivisibles = [];
        if (numeroPrimo == 0 || numeroPrimo == 1){
            esNumeroPrimo = false
        }  
        for (var i = 2; i< numeroPrimo;i++){
            if(numeroPrimo % i == 0){
                numerosDivisibles.push(i)
                esNumeroPrimo = false;
            }   
        }
        console.log(numerosDivisibles)
        if (esNumeroPrimo == true){
            setEstadoNumero("Es un número primo");
        }
        else{
            setEstadoNumero("No es un número primo");
        }
        addDoc(collection(fs,"numeroPrimo"),{
            Numero: numeroPrimo,
            Estado: estadoNumero,
            NumeroDivisibles: numerosDivisibles
        });
    }


    const modificar = (identificador,numeroPrimo) =>{
        var esNumeroPrimo = true;
        const numerosDivisibles = [];
        if (numeroPrimo == 0 || numeroPrimo == 1){
            esNumeroPrimo = false
        }  
        for (var i = 2; i< numeroPrimo;i++){
            if(numeroPrimo % i == 0){
                numerosDivisibles.push(i)
                esNumeroPrimo = false;
            }   
        }
        if (esNumeroPrimo == true){
            setEstadoNumero("Es un número primo");
        }
        else{
            setEstadoNumero("No es un número primo");
        }
        updateDoc(doc(fs,"numeroPrimo",identificador),{
            Numero: numeroPrimo,
            Estado: estadoNumero,
            NumeroDivisibles: numerosDivisibles
        });
    }
    
    const eliminar = (identificador) => {
        deleteDoc(doc(fs,"numeroPrimo",identificador))
    }
    

    useEffect(() => {
        const q = query(collection(fs,"numeroPrimo"))
        const mostrarDatos = onSnapshot(q, (querysnapshot) => {
            const docs = [];
            querysnapshot.forEach((numeros) => {
                docs.push({...numeros.data(), id: numeros.id});
            });
            setNumero(docs);
        })
        return mostrarDatos;
    },[]);

    return(
        <>
            <fsContexto.Provider value={{
                registro,
                modificar,
                eliminar,
                mostrarNumero
            }}>
                {children}
            </fsContexto.Provider>
            


        
        </>
    )

}