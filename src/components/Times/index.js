import Colaborador from '../Colaborador';
import './Times.css';

const Times = ({nome, corPrimaria, corSecundaria, colaboladores})=> {
    return (
        
        (colaboladores.length > 0) ? <section className='time' style={ {backgroundColor : corPrimaria}}>
            <div className='time-container'>
                <h3>{nome}</h3>
                <span style={ {backgroundColor : corSecundaria}}></span>
                <div className='div-cards'>
                {colaboladores.map( item => 
                    <Colaborador
                        nome = {item.nome}
                        cargo = {item.cargo}
                        imagem = {item.imagem}
                        time = {item.time}
                        corDeFundo={corSecundaria}
                        key={item.nome}
                    />
                )}
                </div>
            </div>
        </section>
        : ''
    )
}

export default Times;