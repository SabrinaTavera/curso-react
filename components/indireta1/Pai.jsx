import Filho from "../indireta1/Filho";

export default function Pai(props){

    function falarComigo(param, param2, param3){
        console.log(param, param2, param3)
        console.log("Alguém falou cmg ")
    }
    return(
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )


}