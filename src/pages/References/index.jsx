import '../../utils/style/References.css'
import  imgApropos from '../../assets/img_apropos.png'
import  chevronUp from '../../assets/chevron_up.png'
import  chevronDown from '../../assets/chevron_down.png'
import { useState } from 'react'
import  Footer from '../Footer'


function References(){
    // State pour gérer les drops de la page "A Propos"
    const [isOpen, setIsOpen] = useState(true)
    const [isOpenEquipement, setIsOpenEquipement] = useState(true)
    const [isOpenService, setIsOpenService] = useState(true)
    const [isOpenResponsabilite, setIsOpenResposabilite] = useState(true)
   
    return( 
        <div id="container"> 
            {/* affichage de l'image d'entête */}
            <div id='container-img'>
                <img src={imgApropos} alt="img entête" className='img-apropos'/>                
            </div>

            <div className='container-drop'>  
                {/*  Fiablité */}
                { isOpen ? ( 
                    <div className='cont-fiabilite'>
                        <div className='container-title'>
                            <h2 className="title">Fiabilité</h2>        
                            <button className='drop-icon' onClick={() => setIsOpen(false)}>                
                            <img src={chevronUp } alt="img chevron"  className='img-chevron'/></button>                     
                        </div>

                        <div className="fiabilite">                   
                            <p className='text'>Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  
                                par nos équipes.
                            </p> 
                        </div>
                    </div>         
                ) : (
                    <div className='cont-fiabilite' style={{background: '#FFF'}}>
                        <div className='container-title'>
                            <h2 className="title">Fiabilité</h2>             
                            <button className='drop-icon' onClick={() => setIsOpen(true)}>                
                            <img src={chevronDown} alt="img chevron" className='img-chevron'/></button>                     
                        </div>
                    </div>
                )} 
                {/* Respect */}
                {isOpenEquipement ?( 
                    <div className='cont-respect'>                    
                        <div className='container-title'>
                            <h2 className="title">  Respect</h2>
                            <button className='drop-icon' onClick={() => setIsOpenEquipement(false)}>                
                                <img src={chevronUp } alt="img chevron" className='img-chevron'/>
                            </button>                        
                        </div>
                        
                        <div className="respect">  
                            <p className='text'>
                                La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                Tout comportement discriminatoire ou de perturbation du voisinage 
                                entraînera une exclusion de notre plateforme.                            
                            </p>         
                        </div> 
                    </div>   
                ) : (    
                    <div className='cont-respect' style={{background: '#FFF'}}>               
                        <div className='container-title'>
                            <h2 className="title">
                                Respect
                            </h2>   
                            <button className='drop-icon' onClick={() => setIsOpenEquipement(true)}>                
                                <img src={chevronDown } alt="img chevron" className='img-chevron'/>
                            </button>                        
                        </div>
                    </div> 
                )}   
            {/* Service */}
            { isOpenService ? ( 
                    <div className='cont-service'>
                        <div className='container-title'>
                            <h2 className="title">Sevice </h2> 
                            <button className='drop-icon' onClick={() => setIsOpenService(false)}>                
                                <img src={chevronUp } alt="img chevron"  className='img-chevron'/>
                            </button>                       
                        </div>
                        <div className="service">                   
                            <p className='text'>
                                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                N'hésitez pas à nous contacter si vous avez la moindre question.
                            </p> 
                        </div>
                    </div>         
                ) : (
                    <div className='cont-service' style={{background: '#FFF'}}>
                        <div className='container-title'>
                            <h2 className="title">Sevice</h2> 
                            <button className='drop-icon' onClick={() => setIsOpenService(true)}>                
                                <img src={chevronDown} alt="img chevron" className='img-chevron'/>
                            </button>                          
                        </div>
                    </div>
                )} 
                {/* Responsabilité */}
                { isOpenResponsabilite ? ( 
                    <div className='cont-responsabilte'>
                        <div className='container-title'>
                            <h2 className="title">Responsablité</h2>  
                            <button className='drop-icon' onClick={() => setIsOpenResposabilite(false)}>                
                                <img src={chevronUp } alt="img chevron"  className='img-chevron'/>
                            </button>                        
                        </div>
                        <div className="resposabilite">                   
                            <p className='text'>
                                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p> 
                        </div>
                    </div>         
                ) : (
                    <div className='cont-responsabilte' style={{background: '#FFF'}}>
                        <div className='container-title'>
                            <h2 className="title">Responsablité</h2>
                            <button className='drop-icon' onClick={() => setIsOpenResposabilite(true)}>                
                                <img src={chevronDown} alt="img chevron" className='img-chevron'/>
                            </button>                      
                        </div>
                    </div>
                )}
            </div>                        
            <Footer />
        </div>
    )
}
export default References