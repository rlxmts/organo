import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Times from './components/Times';

function App() {

  const times = [
    {
      nome: 'Front-end',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    }
  ]

  const [colaboladores, setColaboradores] = useState([])
  const aoCadastrar = (colaborador) => {
    setColaboradores([...colaboladores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
          colaboradorCadastrado = {colaborador => aoCadastrar(colaborador)} 
          times={times.map(time => time.nome)}
      /> 
      {times.map( time => 
        <Times 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboladores = {colaboladores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </div>
  );
}

export default App;
