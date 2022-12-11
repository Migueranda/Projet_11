import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../utils/style/CardDetail.css'
import  chevronLeft from '../../assets/chevron_left.png'
import  chevronRight from '../../assets/chevron_right.png'

function Gallery({logement}){

    const {cardId, imgIdx} = useParams()

    let imgIdxInt = parseInt(imgIdx)
    let prevImgIdx;
    let nextImgIdx;

    // détermination des index prev & next des images pour chaque logement
    prevImgIdx = imgIdxInt === 0 ? 0 : imgIdxInt - 1
    nextImgIdx = imgIdxInt === logement.pictures.length - 1 ? imgIdxInt : imgIdxInt + 1
    
return(
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
)
}
export default Gallery