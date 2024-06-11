import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import ProdutosDetalhes from "./pages/ProdutosDetalhes";
import Clientes from "./pages/Clientes";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/clientes/" element={<Clientes/>}/>
                <Route path="/produtos/detalhes/:codigoProduto" element={<ProdutosDetalhes/>}/>
                <Route path="/:categoria" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
// na parte /produtos/detalhes/:codigoProduto o : e para definir q é uma variavel
export default Router;