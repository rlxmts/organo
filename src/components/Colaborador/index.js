import './Colaborador.css';

const Colaborador = ({corDeFundo, imagem, alt, nome, cargo})=> {
    return(
        <div className='colaborador'>
            <div className='container-img' style={ {backgroundColor: corDeFundo} }>
                <img src={imagem} alt={alt}/>
            </div>
            <div className='container-textos'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;