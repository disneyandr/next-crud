import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";

import useClientes from "../hooks/useClientes";


export default function Home() {

  //hook
  const {
    selecionarCliente,
    excluirCliente,
    novoCliente,
    listar,
    salvarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
  } =  useClientes()
  
  return (

    <div className={`
    flex 
    h-screen 
    justify-center 
    items-center 
    bg-gradient-to-bl from-purple-400 to-yellow-700
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (

          <>
            <div className="flex justify-end">
              <Botao cor="blue" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>
        ) : (

          <Formulario 
          cliente={cliente} 
          cancelado={() =>exibirTabela} 
          clienteChange={salvarCliente}/>
        )}

      </Layout>
    </div>
  )
}
