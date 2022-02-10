import { Component } from "react";
import Contador from "../../components/Contador"


//Este é  um componente baseado em classe 
export default class ContadorPage extends Component{

    
    render(){
        return(
            <div style={{
                marginTop:"80px",

            }}>
                <Contador valorInicial={100}/>
            </div>

        )
    }

}