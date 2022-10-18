import fsContexto from "./Contexto";
import { addDoc,collection, doc, query, onSnapshot, QuerySnapshot,updateDoc,deleteDoc}  from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState, useEffect } from "react";

export default function FirestoreContext(props){

    const { children } = props;
    const [libro, setLibro ] = useState([]);


    const registro = (nombre,autor,edicion) => {
        addDoc(collection(fs,"libro"),{
             Nombre: nombre,
             Autor: autor,
             Edicion: edicion
        });
    }

    const modificar = (identificador,nombre,autor,edicion) => {
        updateDoc(doc(fs,"libro",identificador),{
            Nombre: nombre,
            Autor: autor,
            Edicion: edicion
        });
    }

    const eliminar = (identificador) => {
        deleteDoc(doc(fs,"libro",identificador))
    }


    useEffect(() => {
        const q = query(collection(fs,"libro"))
        const mostrarDatos = onSnapshot(q, (querysnapshot) => {
            const docs = [];
            querysnapshot.forEach((libros) => {
                docs.push({...libros.data(), id: libros.id});
            });
            setLibro(docs);
        })
        return mostrarDatos;
    },[]);

    

    return(
        <>
            <fsContexto.Provider value={{
                registro,
                libro,
                modificar,
                eliminar
            }}>
                {children}
            </fsContexto.Provider>
            


        
        </>
    )

}