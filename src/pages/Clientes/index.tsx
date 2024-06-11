import { Box, TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css";
import InputSelect from "../../components/InputSelect";
import { listaGeneros } from "./types";
import BotaoPadrao from "../../components/BotaoPadrao";

const Clientes: FC = () => {
    const [genero, setGenero] = useState<string>();
    const teste = () => {

    }
    return <>
        <div className="container-clientes">
            <main>
                <div className="container-input">
                    <TextField 
                        fullWidth
                        label="Nome"
                        type="text"
                    />
                </div>
                <div className="container-input">
                    <TextField 
                        fullWidth
                        label="Sobrenome"
                        type="text"
                    />
                </div>
                <div className="container-input">
                    <TextField
                        fullWidth
                        label="CPF"
                        type="text"
                    />
                </div>
                <div className="container-input">
                    <InputSelect 
                        label={"Gênero"}
                        lista={listaGeneros}
                        valor={genero}
                        atualizaValor={(valor: any) => {
                            setGenero(valor);
                        }}
                    />
                </div>
                <div className="container-input" id="containerBtn">
                        <BotaoPadrao label="Salvar" onClick={teste}></BotaoPadrao>
                </div>
            </main>
        </div>
    </>
}

export default Clientes