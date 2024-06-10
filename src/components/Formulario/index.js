import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props)=> {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Front-end');

    const aoSalvar = (e) =>{
        e.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setImagem('');
        setCargo('');
        setTime('Front-end');
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto  
                    label="Nome" 
                    placeholder="Digite seu nome..." 
                    for="nome" 
                    id="nome" 
                    required={true} 
                    valor={nome}
                    alterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo..." 
                    for="cargo" 
                    id="cargo" 
                    required={true} 
                    valor = {cargo}
                    alterado = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem..." 
                    for="imagem" 
                    id="imagem" 
                    required={true} 
                    valor = {imagem}
                    alterado = { valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Time" 
                    itens={props.times} 
                    for="times" 
                    id="times" 
                    required={true} 
                    valor={time}
                    alterado = {valor => setTime(valor)}
                />
                
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;