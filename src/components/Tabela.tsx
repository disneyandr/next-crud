import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

/*DEFININDO UMA INTERFACE*/
interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function renderizarCabecalho() {
        return (

            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="text-center p-4">Ações</th> : false}
            </tr>
        )
    }
    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (

                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    hover:cursor-pointer
                `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (

                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    hover:cursor-pointer
                `}>
                        {IconeLixo}
                    </button>
                ) : false}

            </td>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((Cliente, i) => {
            return (
                <tr key={Cliente.id}
                    className={`
                    ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                    hover:bg-purple-300
                    hover:text-yellow-50
                    
                `}>
                    <td className="text-left p-4">{Cliente.id}</td>
                    <td className="text-left p-4">{Cliente.nome}</td>
                    <td className="text-left p-4">{Cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(Cliente) : false}
                </tr>
            )
        })
    }
    return (
        <table className="w-full overflow-hidden rounded-xl ">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-200
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}