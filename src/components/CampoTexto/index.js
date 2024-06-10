import './CampoTexto.css';

const CampoTexto = (props) => {

    return(
        <div className='campo-texto'>
            <label htmlFor={props.for}>
                {props.label}
            </label>
            <input
                value={props.valor}  
                onChange={e =>  props.alterado(e.target.value)} 
                required={props.required} 
                id={props.id} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default CampoTexto;