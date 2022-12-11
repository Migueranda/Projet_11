import { useParams } from 'react-router-dom'
import {logementList} from '../../datas/logements'
import { Link, Redirect } from 'react-router-dom'
import '../../utils/style/CardDetail.css'
import  chevronLeft from '../../assets/chevron_left.png'
import  chevronRight from '../../assets/chevron_right.png'
import  fullStar from '../../assets/full_star.png'
import  emptyStar from '../../assets/empty_star.png'
import Collapse from '../Collapse'
// import Collapse from '../Collapse';

function CardDetail({description}){
        
    const {cardId, imgIdx} = useParams()
    let imgIdxInt = parseInt(imgIdx)
    let logementFiltered = []
    let logement = {}
    let prevImgIdx;
    let nextImgIdx;
    let rating = [1, 2, 3, 4, 5];
    let equipementList = ''


    // filtre en fonction de l'id du logement
    logementFiltered = logementList.filter(function(logement){
        return logement.id === cardId
    })    
    
    // vérification si logement éxiste
    if(logementFiltered.length === 1){
        logement = logementFiltered[0]
        // détermination des index prev & next des images pour chaque logement
        prevImgIdx = imgIdxInt === 0 ? 0 : imgIdxInt - 1
        nextImgIdx = imgIdxInt === logement.pictures.length - 1 ? imgIdxInt : imgIdxInt + 1
        // construction contenu equipements
        equipementList =  <div className="equipement">  
                        <ul>
                            {logement.equipments.map((equipment) =>(
                                <li className='equipement'>{equipment}</li>  
                            ))}                                
                        </ul>             
                    </div> 

        // equipementList = `<ul>${equipementList}</ul>`;
        
    }else{ // sinon
        logement = false
    }

    return logement ? (
        <div className="container-logement">          
            <div className="container-img-slide">            
                <div className='container_chevron'>
                    {/*condition pour gérer l'affichage des chevrons en fonction de la quantité des images */}
                    {imgIdxInt === 0 ? (
                        <Link className='chevron-left' to={`/cardDetail/${cardId}/${prevImgIdx}/`} style={{'visibility':' hidden'}} >                           
                            <img src={chevronLeft} alt="img chevron left " className='img-chevron-left' />                           
                        </Link>
                    ):(   
                        <Link className='chevron-left' to={`/cardDetail/${cardId}/${prevImgIdx}/`} >                           
                            <img src={chevronLeft} alt="img chevron left " className='img-chevron-left' />                           
                        </Link>
                    )}
                    { imgIdxInt + 1 === logement.pictures.length ?(

                        <Link className='chevron-right' to={`/cardDetail/${cardId}/${nextImgIdx}/`} style={{'visibility':' hidden'}}>
                            <img src={chevronRight} alt="img chevron right " className='img-chevron-right'/> 
                        </Link>
                    ):(
                        <Link className='chevron-right' to={`/cardDetail/${cardId}/${nextImgIdx}/`}>
                        <img src={chevronRight} alt="img chevron right " className='img-chevron-right'/> 
                        </Link>
                    )}
                </div>

                {/*Affichage des images  */}
                <div className='container-img'>
                    <img src={logement.pictures[imgIdxInt]} alt="img amazon" />
                </div>

                {/* affichage du numero de pages */}
                <div className='limite-img'>
                    <div className='count'>{imgIdxInt + 1}/{logement.pictures.length}</div>
                </div>                           
            </div>
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
                        {rating.map((ratingElem) =>
                            logement.rating >= ratingElem ? <img src={fullStar}  alt=" full star rating" /> 
                            : <img src={emptyStar} alt="Empty start rating"/>
                        )}
                    </div>
                </div> 
                {/*tags et location */}
                <div className='conatiner-loc-tags'>
                    <h3>{logement.location}</h3> 

                    <ul className='tag-conatiner'>
                        {logement.tags.map((tag) => (
                            <li>{tag}</li>
                        ))}                
                    </ul> 
                </div>   
            </div>   
            
            <div className='container-descrip-equipenemt'>           
                < Collapse description='Description' contenu={logement.description} affichage='cardDetail'/>                
                < Collapse description='Equipement' contenu={equipementList} affichage='cardDetail'/>
            </div>  
        </div>
    ) : ( 
        // génération de la page 404
        <Redirect to="/error" />
    ) 
}   
export default CardDetail