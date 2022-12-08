import '../../utils/style/CardItem.css'
import { Link } from 'react-router-dom'

function CardItem({title,cover,id}){
//affichage du titre et du cover 
    return(  
        <div className='contanair-card-item'>         
            <Link  className='card_item' to={`/cardDetail/${id}/0`}>
                <div className='container-text-title'>
                    <h5 className='text-title'>{title}</h5> 
                </div>
                <div className='container-image'>
                    <img src={cover} alt='img cover card' className='img-cover'/>            
                </div>
            </Link>
        </div> 
    )
}
export default CardItem