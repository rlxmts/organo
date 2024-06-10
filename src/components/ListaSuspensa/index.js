import './ListaSuspensa.css';

const ListaSuspensa = (props)=> {
    return(
        <div className='lista-suspensa'>
            <label for={props.for}>{props.label}</label>
            <select  id={props.id} value={props.valor} onChange={e => props.alterado(e.target.value)}> 
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}   

export default ListaSuspensa;