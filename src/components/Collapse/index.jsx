import '../../utils/style/CardDetail.css'
import  chevronUp from '../../assets/chevron_up.png'
import  chevronDown from '../../assets/chevron_down.png'
import { useState } from 'react'

function Collapse({description, contenu, affichage}){
    // toggle description & equipement
    const [isOpen, setIsOpen] = useState(false)

    let  sContainerTitre = ''
    let titreDescrip = ''
    let dropButton =''
    let containerDescription = ''
    let containerSuport = ''
    let TextContenu= ''
    // Style css générér en function de la page
    switch(affichage) {
        case 'references':
            containerDescription = 'cont-description-ref'
            sContainerTitre= 'container-title-h2-ref' 
            titreDescrip='title-h2-ref'
            dropButton ='drop-botton-ref'
            containerSuport='cont-support-ref'
            TextContenu= 'text-contenu-ref'
            break;
        case 'cardDetail':
            containerDescription = 'cont-description-det'
            sContainerTitre = 'container-title-h2-det'
            titreDescrip='title-h2-det'
            dropButton ='drop-botton-det'
            containerSuport='cont-support-det'
            TextContenu= 'text-contenu-det'
            break;
        default:
            console.log('err: détermination affichage composant Collapse')
    }   
    return(
        <div className={containerSuport}>
            {/*Affichage du colapse*/}
            { isOpen ? ( 
                <div className={containerDescription}>
                    <div className={sContainerTitre}>
                        <h2 className={titreDescrip}>{description} <button className={dropButton} onClick={() => setIsOpen(false)}>                
                            <img src={chevronUp } alt="img chevron"  className='img-chevron'/></button>              
                        </h2>                   
                    </div>

                    <div className="description">                   
                        <div className={TextContenu}>{contenu}</div> 
                    </div>
                </div>         
            ) : (
                <div className={containerDescription} style={{background: '#FFF'}}>
                    <div className={sContainerTitre}>
                        <h2 className={titreDescrip}>{description} <button className={dropButton} onClick={() => setIsOpen(true)}>                
                        <img src={chevronDown} alt="img chevron" className='img-chevron'/></button>              
                        </h2>                   
                    </div>
                </div>
            )} 
                    
        </div>
        )
}
export default Collapse