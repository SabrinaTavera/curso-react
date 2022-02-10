export default function Lista(props){
    return(
        <div>
            <h1>Lista de algo</h1>
            {/* Neste momento estou imprimindo as propriedades existentes no Filgo da lista */}
            <ul style={{
                listStyle: "none",
                padding: "0"
            }}>
                {props.children}
            </ul>
        </div>
    )
}