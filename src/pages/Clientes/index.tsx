import { TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css";
import InputSelect from "../../components/InputSelect";
import { listaGeneros } from "./types";
import BotaoPadrao from "../../components/BotaoPadrao";
import { STATUS_CODE, apiPost } from "../../api/RestClient";


const Clientes: FC = () => {
    const [genero, setGenero] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [sobrenome, setSobrenome] = useState<string>();
    const [cpf, setCpf] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [documento, setDocumento] = useState<string>();
    const [email, setEmail] = useState<string>();
    const salvarCliente = async () => {

        // const cliente:ICliente = {
        //     nome,
        //     sobrenome,
        //     cpf,
        //     genero
        // }

        const data = {
            nome: nome,
            sobrenome: sobrenome,
            documento: documento,
            email: email,
            senha: senha,
            sexo: genero,
            dataNascimento: "1998-07-10",
        }

        const response = await apiPost("/clientes/", data);

        if (response.status === STATUS_CODE.CREATED) {
            alert("Cliente cadastrado com sucesso!");

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
                            if (event) {
                                setNome(event.target.value);
                            }
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
                            if (event) {
                                setSobrenome(event.target.value);
                            }
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
                            if (event) {
                                setCpf(event.target.value);
                            }
                        }}
                    />
                </div>
                <div className="container-input">
                    <TextField
                        fullWidth
                        value={email}
                        label="email"
                        type="email"
                        onChange={(event) => {
                            if (event) {
                                setEmail(event.target.value);
                            }
                        }}
                    />
                </div>
                <div className="container-input">
                    <TextField
                        fullWidth
                        value={documento}
                        label="documento"
                        type="text"
                        onChange={(event) => {
                            if (event) {
                                setDocumento(event.target.value);
                            }
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
                <div className="container-input">
                    <TextField
                        fullWidth
                        value={senha}
                        label="senha"
                        type="password"
                        onChange={(event) => {
                            if (event) {
                                setSenha(event.target.value);
                            }
                        }}
                    />
                </div>
                <div className="container-input" id="containerBtn">
                    <BotaoPadrao label="Salvar" onClick={salvarCliente}></BotaoPadrao>
                </div>
            </main>
        </div>
    </>
}

export default Clientes