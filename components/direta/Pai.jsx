import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <h1>Família {props.familia}</h1>
          <Filho nome="Sabrina" familia={props.familia}/>
          <Filho nome="Larissa" familia={props.familia}/>
          <Filho nome="Robert" familia={props.familia}/>
          <Filho {...props} nome="Sasa" />
        </div>
    )
 }