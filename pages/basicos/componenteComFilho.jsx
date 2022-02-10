
import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho(){
    return(
        <div>
            {/* Aqui estou chamando um componente chamado lista */}
            <Lista>
                {/* Dentro da Lista tenho um componente ficho chamdo Item */}
                <Item conteudo="dasdas"/>
                <Item conteudo="1"/>
                <Item conteudo="2"/>
                <Item conteudo="3"/>
            </Lista>
        </div>
    )
}