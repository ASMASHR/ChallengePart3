import React,{ useState, useEffect } from 'react'
import './Fonds.scss'
import {Link} from 'react-router-dom'

function Fonds() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      if(countA<100)
    { setCountA(countA + 1);}
      if(countB<35)
    { setCountB(countB + 1);}
    }, 20);
  
    return () => {
      clearInterval(interval);
   
    };
  });


  return (
    <div className='Fonds'>
      <div className="Linkdiv">
      <Link to='/Home'> ACCUEIL</Link>
        <div className="circle"></div> 
       <div className="after">NOS FOND</div> 
      </div>
      <div className="top">
        <div className="ImgRow">
        <div className="imgContainer">
          <img src="assets/Logo_STB.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src="assets/bqEeropeen.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src="assets/foprodi.jpg" alt="" />
        </div>
        
        <div className="imgContainer">
          <img src="assets/STBinvest.jpg" alt="" />
        </div>
        
        </div>
      </div>
      <div className="bottom">
        <div className="TitreCon">
          <p className='titreF'>Optimiser</p> <p className='titreF'>Votre  Fiscalité!</p> 
        </div>
        <div className="alternatives">
          <div className="left">
            <div className="base"> 
              <p> <div className="count"> {countA}% </div>Des revenus ou bénéfices imposables sans minimum d'impôt</p>
            </div>
            <div className="hovred">
              <p>Déduction totale sur la base d'un engagement de la STB SICAR d’employer 75% de montant déposés dans des ZDR ou agricole.</p>
            </div>
          </div>
          <div className="right">
            <div className="base"> 
            <p><div className="count">{countB}%</div> Des revenus ou bénéfices imposables avec minimum d'impôt </p>
            
             </div>
            <div className="hovred">
             <p>Déduction des revenus ou bénéfices réinvestis  auprès de la STB SICAR , sur la base d’un engagement d’emploi de 65% dans des projets définis par la règlementation</p>
</div>
          </div>
        </div>
        <div className="avantages fadeInDown">
           <div className="advTitre fadeIn first">
            Vous bénéficiez
           </div>
           <div className="AllContainer">          
                  <div className="avContainer fadeIn second">
                          <div className="titre">Délai </div>
                          <div className="body"> 
                          année de libération du fonds.
                        Néanmoins l’obligation d’utilisation des montants déposés est de 2 ans à partir de l’année de libération.
                        </div>
                </div>
                <div className="avContainer fadeIn third">
                      <div className="titre">Blocage des fonds </div>
                      <div className="body"> 
                          Le fonds géré est bloqué auprès de la STB SICAR pendant cinq ans à partir du 1er janvier de l’année qui suit celle du dépôt des fonds.
                      </div>
                  
                </div>
                <div className="avContainer fadeIn fourth">
                      <div className="titre">Rémunération  </div>
                      <div className="body"> 
                      <ul>
                        <li>Rémunération des fonds à des conditions très avantageuses jusqu’à leur utilisation dans des projets ayant obtenu au préalable son accord de participation</li>
                        <li>Produit des intérêts des OCA/CCA souscrits</li>
                        <li>Revenus du portefeuille d’investissement</li>
                        <li>Dividendes distribués</li>
                      </ul>
                        </div>
                </div>
                

          </div>
        </div>
        </div>
    </div>
  )
}

export default Fonds