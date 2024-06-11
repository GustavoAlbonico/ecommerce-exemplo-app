import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface InputSelectProperties {
    lista: any[],
    valor: any,
    atualizaValor: (valor: any) => void,
    label: string,
}
const InputSelect: FC<InputSelectProperties> = ({
    lista,
    valor,
    atualizaValor,
    label
}) => {
    return <>
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select 
                label={label}
                value={valor} 
                onChange={(event) => {
                if (event) {
                    atualizaValor(event.target.value);
                }
            }}>
                {lista.map((itemLista: any) => (
                    <MenuItem value={itemLista.valor} key={itemLista.valor}>
                        {itemLista.texto}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default InputSelect;