import './App.css';
import React, { useState } from 'react';
import avatar from './images/image-jeremy.png'
import Card from './components/Card'
import dados from './data.json'
// IMAGENS
import work from './images/icon-work.svg'
import play from './images/icon-play.svg'
import study from './images/icon-study.svg'
import exercise from './images/icon-exercise.svg'
import social from './images/icon-social.svg'
import selfCare from './images/icon-self-care.svg'



function App (){
  const [periodo, setPeriodo] = useState('weekly')
  const linkImgs = [work,play,study,exercise,social,selfCare]
  const listaCards =  dados.map(function(obj,index){ 
    let periodoDado
    let nomePeriodo
    let nomeCard = obj.title.toLowerCase()
    if(nomeCard === 'self care'){nomeCard='self-care'}
    if(periodo==='weekly'){
      nomePeriodo='Week' 
      periodoDado=obj.timeframes.weekly
    }
    if(periodo==='daily'){
      nomePeriodo='Day' 
      periodoDado=obj.timeframes.daily
    }
    if(periodo==='monthly'){
      nomePeriodo='Month' 
      periodoDado=obj.timeframes.monthly
    }    
    return <Card 
     nome={nomeCard}
     key={index}
     src={linkImgs[index]}
     titulo={obj.title} 
     timeframe={nomePeriodo} 
     atual={periodoDado.current} 
     anterior={periodoDado.previous} />;
  })

  function mudarPeriodo(e){
    const ativo = document.querySelector('.bt-ativo')
    if(ativo !== null){
      ativo.classList.remove('bt-ativo')
    }
    let elemento = document.querySelector(`#${e.target.id}`)
    elemento.classList.add('bt-ativo')
    
    switch (e.target.id){
      case 'daily': setPeriodo('daily'); break;
      case 'weekly': setPeriodo('weekly'); break;
      case 'monthly': setPeriodo('monthly'); break;
      default: break;
    }
  }

  return (
    <div className='container'>
      <section className='menu'>
        <div className='usuario'>
          <div className='avatar'>
            <img src={avatar} alt='Avatar'></img>
          </div>
          <div className='info-usu'>
            <h3>Report for</h3>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className='periodos'>
          <button onClick={mudarPeriodo} className='bt-periodo' id='daily'> Daily </button>
          <button onClick={mudarPeriodo} className='bt-periodo bt-ativo' id='weekly'> Weekly </button>
          <button onClick={mudarPeriodo} className='bt-periodo' id='monthly'> Monthly </button>
        </div>
      </section>
      <section className='cards'>
        {listaCards}
      </section>
    </div>
  )
}


export default App;