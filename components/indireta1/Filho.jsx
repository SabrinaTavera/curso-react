export default function Filho(props){

    // console.log(props);
    return(
        <div>
            <h1>Filho </h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={() => props.funcao("Passei no enem", "Uhuuuuuuuuuulll")}>Falar com o Pai #02</button>
        </div>
    )


}