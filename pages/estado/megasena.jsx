import { useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default function megasena(){
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(mega())

    function renderizarNumeros(){

        return numeros.map(numero => <NumeroDisplay  key={numero} numero={numero}/>)
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            width: "700px",
        }}>
            <h1>Mega senha </h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap",
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={60} value={qtde}
                    onChange={ev => setQtde(ev.target.value)}/>
              
                <Button style={{margin:"20px"}} onClick={() => setNumeros(mega(qtde))} color="primary">Gerar Proposta</Button>
            </div>
        </div>
    )
}