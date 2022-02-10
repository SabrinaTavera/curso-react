export default function Repeticao1(){

    //Função Map serve para vc transformar um element m outro 

    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]
   
    function renderizarLista(){

        // return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>) ou 
        return listaAprovados.map( function(nome, i){
            return <li key={i}>{nome}</li>
        })
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}



// function renderizarLista(){

//     const itens = []

//     for(let i = 0; i < listaAprovados.length; i++){
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }

//     return itens
// }