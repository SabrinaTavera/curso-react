import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return (
        <div>
             <Titulo 
                principal="Página de Cadastro" 
                descricao= "Incluir, alterar e excluir coisas!" 
           
            />
            <Titulo
                principal =  "Páginade Login"
                secudário = "Informe o seu email e senha"
                pequeno = {true}
            />
            <Titulo
                principal =  "Páginade Login"
                secudário = "Informe o seu email e senha"
                pequeno 
            />
        </div>
    )
}