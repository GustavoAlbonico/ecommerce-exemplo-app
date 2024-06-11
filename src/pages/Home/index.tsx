import { FC, useEffect, useState } from "react";
import { STATUS_CODE, apiGet } from "../../api/RestClient";
import { IProduto } from "./types";
import "./index.css";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useParams } from "react-router-dom";

const Home: FC = () => {
    const { categoria } =  useParams();
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    const carregarProdutos = async () => {
        
        let url = "/produtos/";
        if(categoria){
            url = `/produtos/categoria/${categoria}`;
        }
        const response = await apiGet(url);
        if(response.status === STATUS_CODE.OK){
            setProdutos(response.data); //fazer verificao com o response
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    const redirecionarDetalhesProduto = (idProduto:number) => {
        if(idProduto){
            window.location.href = `/produtos/detalhes/${idProduto}`;
        }
    } 

    return <>
        {
        produtos?.length
        ?
        <>
         <div className="container">
            {produtos.map((produto: IProduto) => {
                return <>
                    <div className="produto">
                        <a className="produto-imagem" href={`/produtos/detalhes/${produto.id}`}>
                            <img src={produto.imagemPequena} alt={produto.nome} />
                        </a>
                        <div className="produto-nome">
                            <p>{produto.nome}</p>
                        </div>
                        <div className="produto-preco">
                            <p>R$ {produto.preco},00</p>
                        </div>
                        <BotaoPadrao 
                        label="Comprar"
                        onClick={() => {
                            redirecionarDetalhesProduto(produto.id);
                        }}/>
                    </div>
                </>
            })}
         </div>
        </>
        :
        <></>
        }
    </>
}

export default Home