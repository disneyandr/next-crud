import { useState } from 'react';
import Cliente from "../core/Cliente";
import Botao from './Botao';
import Input from "./Input";

interface FormularioProps {
    cliente: Cliente
    clienteChange?: (cliente: Cliente) => void
    cancelado?: () => void

}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {
                id ? (
                    <Input somenteLeira texto="Código" valor={id} className="mb-4"/>
                ) : false
            }
            <Input texto="Nome" valor={nome} onChange={setNome}  className="mb-4"/>
            <Input texto="Idade" tipo="number" valor={idade} onChange={setIdade}  className="mb-4"/>
            <div className={`
                flex justify-end
            `}>
                <Botao cor='blue' className="mr-2" onClick={() => props.clienteChange?.(new Cliente(nome,+idade,id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='neutral' className="mr-2" onClick={props.cancelado}>
                    Calcelar
                </Botao>
            </div>
        </div>
    )
}



