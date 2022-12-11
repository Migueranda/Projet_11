import '../../utils/style/CardDetail.css'
import  chevronUp from '../../assets/chevron_up.png'
import  chevronDown from '../../assets/chevron_down.png'
// import {logementList} from '../../datas/logements'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

function Collapse({description, contenu, affichage}){
    // toggle description & equipement
    const [isOpen, setIsOpen] = useState(true)

    let  sContainerTitre = ''
    let titreDescrip = ''
    let dropButton =''
    let containerDescription = ''
    let containerSuport = ''
    let TextContenu= ''


    switch(affichage) {
        case 'references'://id
            containerDescription = 'cont-description-ref'
            sContainerTitre= 'container-title-h2-ref' // classe css
            titreDescrip='title-h2-ref'
            dropButton ='drop-botton-ref'
            containerSuport='cont-support-ref'
            TextContenu= 'text-contenu-ref'
            break;
        case 'cardDetail'://class
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
        {/*Description */}
        { isOpen ? ( 
            <div className={containerDescription}>
                <div className={sContainerTitre}>
                    <h2 className={titreDescrip}>{description} <button className={dropButton} onClick={() => setIsOpen(false)}>                
                        <img src={chevronUp } alt="img chevron"  className='img-chevron'/></button>              
                    </h2>                   
                </div>

                <div className="description">                   
                    <p className={TextContenu}>{contenu}</p> 
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