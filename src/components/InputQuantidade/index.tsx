import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import "./index.css";
import { Add, Remove } from "@mui/icons-material";

interface InputQuantidadeProperties {
    quantidade: number,
    atualizarQuantidade: (quantidade:number) => void;
}

const InputQuantidade: FC<InputQuantidadeProperties> = ({
    quantidade,
    atualizarQuantidade
}) => {
    return <>
        <div className="container-input-quantidade">
            <Box className="box">
                <IconButton
                    className="remover-quantidade"
                    size="small"
                    onClick={(e) => {
                        const qtde = quantidade - 1;

                        if(qtde){
                            atualizarQuantidade(qtde);
                        }
                    }}
                >
                    <Remove />
                </IconButton>
                <TextField
                    className="input-quantidade"
                    margin="normal"
                    type="number"
                    size="small"
                    value={quantidade} // quando alterado o campo ou clicado o valor sai daqui vai pra frente e volta aqui denovo
                    onChange={(e) => {
                        const quantidade = Number(e.target.value);

                        if(quantidade){
                            atualizarQuantidade(quantidade);
                        }
                    }}/>
                <IconButton
                    className="add-quantidade"
                    size="small"
                    onClick={(e) => {
                        const qtde = quantidade + 1;

                        if(qtde){
                            atualizarQuantidade(qtde);
                        }
                    }}
                >
                    <Add/>
                </IconButton>
            </Box>
        </div>
    </>
}

export default InputQuantidade;