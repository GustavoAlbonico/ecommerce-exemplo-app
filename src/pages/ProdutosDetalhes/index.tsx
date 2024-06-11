import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { STATUS_CODE, apiGet } from "../../api/RestClient";
import "./index.css";
import {IProdutoDetalhes } from "./types";
import BotaoPadrao from "../../components/BotaoPadrao";
import InputQuantidade from "../../components/InputQuantidade";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";
import { addCarrinho, carregarCarrinho } from "../../store/CarrinhoStore/carrinhoStore";
import ConfirmarModal from "../../components/ConfirmarModal";

const ProdutosDetalhes: FC = () => {
    const { codigoProduto } = useParams(); // use params busca e tranforma em um objeto ai ele joga apenas o valor que esta entre { }
    const [produto, setProduto] = useState<IProdutoDetalhes>()
    const [quantidadeProduto, setQuantidadeProduto] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const carrinho:ICarrinhoStore[] = carregarCarrinho();

    useEffect(() => {
        apiGet(`/produtos/${codigoProduto}`).then((response) => {
            if(response.status === STATUS_CODE.OK){
                console.log(">>>", response.data);
                setProduto(response.data);

                const carrinhoItem 
                    = carrinho.find((item: ICarrinhoStore) => item.id === response.data.id);

                if(carrinhoItem){
                    setQuantidadeProduto(carrinhoItem.quantidade);
                }
            }
        })
    },[]); //vai ser executado quando a pagina renderizar// dentro do [] se colocar algo vai ser ativado a função quando aquele valor for alterado

    return <>
        <div className="container-produto">
            <div className="produto-detalhes">
                <div className="imagem-produto">
                    <img src={produto?.imagemGrande} alt={produto?.nome} />
                </div>
                <div className="dados-produto">
                    <div className="nome-produto">
                        {produto?.nome}
                    </div>
                    <div className="codigo-produto">
                        {`Codigo Produto: ${produto?.codigoProduto}`}
                    </div>
                    <div className="preco-produto">
                        <div className="preco">
                            {`Valor: R$${produto?.preco},00`}
                        </div>
                    </div>
                    <div>
                        <InputQuantidade
                        quantidade={quantidadeProduto}
                        atualizarQuantidade={(quantidade:number) => {
                            setQuantidadeProduto(quantidade);
                        }}/>

                        <BotaoPadrao 
                        label="Adicionar"
                        onClick={() => {
                            // if(produto){
                            //     const carrinhoItem: ICarrinhoStore = 
                            //         {...produto, quantidade: quantidadeProduto}

                            //     addCarrinho(carrinhoItem);
                            // }
                            setOpenModal(true);
                        }}/>
                    </div>
                </div>
            </div>
        </div>
        <ConfirmarModal
            open={openModal} 
            titulo="Add Carrinho"
            mensagem="Confirma adição de produto ao carrinho?"
            onCancelar={() => {
                setOpenModal(false);
            }}
            onConfirmar={() => {
                if(produto){
                    const carrinhoItem: ICarrinhoStore = 
                        {...produto, quantidade: quantidadeProduto || 0}

                    addCarrinho(carrinhoItem);

                    window.location.href = "/home";
                }

                setOpenModal(false);
            }}/>
    </>
}

export default ProdutosDetalhes;