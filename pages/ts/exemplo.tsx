// ARQUIVO .TSX SIGNIFICA QUE É UM ARUQIVO COM TYPESCRIPTY E REACTe

import Pessoa from "../../components/Pessoa";

export default function exemploTS(){
    return(
        <div>
            <Pessoa nome="Sasá"/>
            <Pessoa nome="Maria" idade={19}/>
        </div>
    )
}