import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador(){

   

    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [numero, setNumero] = useState(0);


    const dec = () => setNumero(numero - 1)


    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero}/>
            <div>
                <button onClick={dec}>-</button>
                <button onClick={() => setNumero(numero+1)}>+</button>
            </div>
        </div>
    )
}