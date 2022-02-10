import { useState } from "react"

export default function formulario(){

    const[valor, setValor] = useState("")

    function alterarInput(){
        setValor(valor + "")
        console.log(valor + " - ")
    }

  return(
      <div style={{
          display: "flex",
          flexDirection: "column"
      }}>

          <span>{valor}</span>
          <input type="text" value={valor} onChange={e => setValor(e.target.value)} />   
          <button onClick={alterarInput}>ALTERAR</button>
      </div>
  )
}