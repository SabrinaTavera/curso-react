
import { useState } from "react";

export default function mouse(){

    const [x, setX] = useState(0)


    // const arrayX = useState(0);
    // let x = arrayX[0];
    // const alterarX = arrayX[1];

    const arrayY = useState(0);
    let y = arrayY[0];
    const alterarY = arrayY[1];

  
 
    const estilo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)

    

    }
    return(
        <div onMouseMove={quandoMover} style={estilo}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}