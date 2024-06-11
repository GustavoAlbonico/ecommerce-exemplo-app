import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { FC, useState } from "react";
import "./index.css";
import { AlternateEmail, Key, Visibility, VisibilityOff } from "@mui/icons-material";

interface LoginProperties {
    onClose: () => void,
}

const Login:FC<LoginProperties> = ({
    onClose,
}) => {
    const [tipoSenha, setTipoSenha] = useState<boolean>(false);
    const onTipoSenha = () => {
        setTipoSenha(!tipoSenha);
    }
    return<>
        <div className="div-login">
            <div className="div-login-linha">
                <TextField 
                    fullWidth
                    label="Email"
                    type="email"
                    InputProps={{
                        startAdornment: <>
                            <InputAdornment position="start">
                                <AlternateEmail />
                            </InputAdornment>
                        </>
                    }}
                />
            </div>
            <div className="div-login-linha">
                <TextField 
                    label="Senha"
                    type={tipoSenha ? "text" : "password"}
                    InputProps={{
                        startAdornment: <>
                            <InputAdornment position="start">
                                <Key />
                            </InputAdornment>
                        </>,
                        endAdornment: <>
                            <IconButton onClick={onTipoSenha}>
                                {tipoSenha ? <Visibility/> :<VisibilityOff/>}
                            </IconButton>
                        </>
                    }}
                />
            </div>
            <div className="div-login-linha">
                <Button onClick={onClose} style={{width: "50%"}}>Voltar</Button>
                <Button style={{width: "50%"}} variant="contained">Entrar</Button>
            </div>
            <div className="div-login-linha">
                <p>Não tem uma conta? <a href="/clientes/">Cadastre-se</a></p>
            </div>
        </div>
    </>
}

export default Login