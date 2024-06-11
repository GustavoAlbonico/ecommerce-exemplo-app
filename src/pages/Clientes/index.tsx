import { TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css";
import InputSelect from "../../components/InputSelect";
import { ICliente, listaGeneros } from "./types";
import BotaoPadrao from "../../components/BotaoPadrao";
import { STATUS_CODE, apiPost } from "../../api/RestClient";


const Clientes: FC = () => {
    const [genero, setGenero] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [sobrenome, setSobrenome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const enviaCliente = async () => {

        const cliente:ICliente = {
            nome,
            sobrenome,
            cpf,
            genero
        }

        const response = await apiPost("/criar",cliente);

        if(response.status === STATUS_CODE.CREATED){
            window.location.href = "http://localhost:3000/home";
        }
    }
    return <>
        <div className="container-clientes">
            <main>
                <div className="container-input">
                    <TextField 
                        fullWidth
                        value={nome}
                        label="Nome"
                        type="text"
                        onChange={(event) => {
                            setNome(event.target.value);
                        }}
                    />
                </div>
                <div className="container-input">
                    <TextField 
                        fullWidth
                        value={sobrenome}
                        label="Sobrenome"
                        type="text"
                        onChange={(event) => {
                            setSobrenome(event.target.value);
                        }}
                    />
                </div>
                <div className="container-input">
                    <TextField
                        fullWidth
                        value={cpf}
                        label="CPF"
                        type="text"
                        onChange={(event) => {
                            setCpf(event.target.value);
                        }}
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
                        <BotaoPadrao label="Salvar" onClick={enviaCliente}></BotaoPadrao>
                </div>
            </main>
        </div>
    </>
}

export default Clientes