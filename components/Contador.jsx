//Componente baseado em classe 

//Importa componente do react
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class Contador extends Component{

    state = {
       /** numero: 7 - Podemo inicializar com um valor aleatório qualquer  desta forma */
        numero: this.props.valorInicial ?? 0, /**Ou verificar se exist um valor inicial */
        passo: this.props.passo ?? 1
    }

    constructor(props){
        super(props)

        this.inc = this.inc.bind(this)
    }

    // inc(){
    //     this.setState({
    //         numero: this.state.numero + 1
    //     })
    // }
    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    renderForm(){
        return(
            <>
                <p htmlFor="">Informe o valor que deseja 
                adicionar/remover: </p>
            <div className="center" >
               <input style={{width:"100px"}} type="number"  min={1} max={1000} value={this.state.passo}
                    onChange={ev => this.setState({ passo: + ev.target.value})}/>
            </div>
            <div className="align-button">
                <Button color="danger" onClick={this.dec}>-</Button>
                <Button color="primary" onClick={this.inc}>+</Button>

            </div>
            </>
        )
    }

    render(){
        return(
            <div style={{
                width: "700px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                flexFlow: "column wrap",
            
            }}>
                <h1>Contador usando classe</h1>
                
                <h2>{this.state.numero}</h2>

                {/* <button onClick={()=> this.inc()}>+</button> */}
                <div>
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}