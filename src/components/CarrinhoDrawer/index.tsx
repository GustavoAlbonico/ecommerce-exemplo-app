import { Close, Delete, ShoppingCart } from "@mui/icons-material";
import { FC, useState } from "react";
import "./index.css"
import { Badge, Box, Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { addCarrinho, carregarCarrinho, obterQuantidadeCarrinho, removerItemCarrinho } from "../../store/CarrinhoStore/carrinhoStore";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";
import InputQuantidade from "../InputQuantidade";

const CarrinhoDrawer: FC = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [carrinho, setCarrinho] = useState<ICarrinhoStore[]>(carregarCarrinho);

    const atualizarQuantidadeCarrinho = (item:ICarrinhoStore) => {
        const carrinhoAtualizado = addCarrinho(item);

        setCarrinho(carrinhoAtualizado);
    }

    const removerItemDoCarrinho = (id:number) => {
        const carrinhoAtualizado = removerItemCarrinho(id);

        setCarrinho(carrinhoAtualizado);
    }

    return <>
        <div className="carrinho" onClick={() => setOpenDrawer(true)}>
            <Badge
                badgeContent={obterQuantidadeCarrinho()}
                color="primary"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}>
                <ShoppingCart color="action" />
            </Badge>
        </div>
        <Drawer 
            open={openDrawer} 
            anchor="right"
            classes={{ // ele esperar um objeto java
                paper: "tamanho-paper-drawer"
            }}
        >
            <Box
                margin={"0 10px 15px 10px"}
            >
                <Button
                    variant="text"
                    startIcon={<Close/>}
                    onClick={() => {
                        setOpenDrawer(false);
                    }}
                >
                    Fechar
                </Button>
            </Box>
            <Box
                marginRight={"10px"}
                marginLeft={"10px"}
            >
                {!carrinho?.length && <>
                    <Box>
                        <Typography variant="body1">
                            Seu Carrinho está vazio.
                        </Typography>
                    </Box>
                </>}
                {carrinho?.map((item:ICarrinhoStore) => {
                    return <>
                        <Grid
                            container={true}
                            alignItems={"center"}
                        >
                            <Grid className="box-imagem" item={true}>
                                <img className="imagem" src={item.imagemPequena}/>
                            </Grid>
                            <Grid className="box-detalhes" item={true}>
                                <Box>
                                    <strong>{item.nome}</strong>
                                </Box>
                            </Grid>
                            <Grid className="box-quantidade">
                                <Box>
                                    <InputQuantidade
                                        quantidade={item.quantidade}
                                        atualizarQuantidade={(quantidade:number) => {
                                            const carrinhoAtualizado:ICarrinhoStore = {
                                                ...item,
                                                quantidade: quantidade,
                                            }

                                            atualizarQuantidadeCarrinho(carrinhoAtualizado)
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid className="box-remover" item={true}>
                                <IconButton
                                    onClick={() => {
                                        removerItemDoCarrinho(item.id);
                                    }}
                                >
                                    <Delete color="error"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </>
                })}
            </Box>
        </Drawer>
    </>
}

export default CarrinhoDrawer;