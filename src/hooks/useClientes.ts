import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaForme from "./useTabelaForme"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {formularioVisivel,
        tabelaVisivel,
        exibirTabela,
        exibirForm} = useTabelaForme()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    
    

    useEffect(listar, [])

    function listar() {
        repo.listar().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        listar()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirForm()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        listar()
    }

    return {
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCliente,
        selecionarCliente,
        listar,
        tabelaVisivel,
        exibirTabela
    }
}