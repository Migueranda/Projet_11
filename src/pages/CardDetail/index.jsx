import { Redirect, useParams } from 'react-router-dom'
import { logementList } from '../../datas/logements'
import '../../utils/style/CardDetail.css'
import fullStar from '../../assets/full_star.png'
import emptyStar from '../../assets/empty_star.png'
import Gallery from '../../components/Gallery'
import Collapse from '../../components/Collapse'

function CardDetail({description}){
        
    const {cardId} = useParams()
    let logementFiltered = []
    let logement = {}
    let equipementList = ''
    let rating = [1, 2, 3, 4, 5];


    // filtre en fonction de l'id du logement
    logementFiltered = logementList.filter(function(logement){
        return logement.id === cardId
    })    
    
    // vérification si logement éxiste
    if(logementFiltered.length === 1){
        logement = logementFiltered[0]
        equipementList =  <div className="equipement">  
                        <ul>
                            {logement.equipments.map((equipment,index) =>(
                                <li key={`${equipment}-${index}`} className='equipement'>{equipment}</li>  
                                // 
                            ))}                                
                        </ul>             
                    </div> 
    }else{ // sinon
        logement = false
    }

    return logement ? (
        <div className="container-logement">   
            {/* slider */}
            <Gallery logement={logement} />

            {/* titre de logement */}
            <div className='cont-titre-logement'>
                <h1 className='titre-logement'>{logement.title}</h1> 
            </div>  

            <div className='container-info'>
                <div className='container-host'>
                    {/* afichage du nom et image du host */}
                    <div className='cont-host-name'>
                        <div className='host-name'>{logement.host.name}</div>
                    </div>
                    <div className='cont-host-img'>
                        <img src={logement.host.picture} alt="img host" className='img-host'/>
                    </div>
                    {/*  affichage des icons pour le raiting*/}
                    <div className='rating'>
                        {rating.map((ratingElem, index) =>
                            logement.rating >= ratingElem ? <img src={fullStar} key={`${ratingElem}-${index}`} alt=" full star rating" /> 
                            : <img src={emptyStar} key={`${ratingElem}-${index}`} alt="Empty start rating"/>
                        )}
                    </div>
                </div> 
                {/*tags et location */}
                <div className='conatiner-loc-tags'>
                    <h3>{logement.location}</h3> 
                            
                    <ul className='tag-conatiner'>
                        {logement.tags.map((tag, index) => (
                            <li key={`${tag}-${index}`}>{tag}</li>                                                 
                        ))}                
                    </ul> 
                </div>   
            </div>   
            
            <div className='container-descrip-equipenemt'>           
                <Collapse description='Description' contenu={logement.description} affichage='cardDetail'/>                
                <Collapse description='Equipement' contenu={equipementList} affichage='cardDetail'/>
            </div>  
        </div>
    ) : ( 
        // génération de la page 404
        <Redirect to="/error" />
    ) 
}   
export default CardDetail