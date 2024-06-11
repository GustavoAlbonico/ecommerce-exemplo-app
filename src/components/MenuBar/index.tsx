import { FC } from "react";
import "./index.css"

const MenuBar: FC = () => {
    return <>
        <nav className="menu">
            <ul>
                <li><a href="/home">Home</a></li>
               <li><a href="/BAZAR">Bazar</a></li>
               <li><a href="/ELETRO">Eletro</a></li>
               <li><a href="/CASA_BANHO">Casa e Banho</a></li>
            </ul>
        </nav>
    </>
}

export default MenuBar;