import CardItem from '../CardItem'
import styled from 'styled-components'

const CardsContent = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    position:abolute;
`

function Cards({cardItems}){
    
    return(
        <CardsContent>
            {cardItems.map(({id, title, cover, pictures,description, host, rating, location, equipments, tags}) => (
                <div key={id} className='card-item'>
                    <CardItem 
                        title={title}
                        cover={cover} 
                        id={id}   
                        pictures={pictures}  
                        description={description}
                        equipments={equipments}  
                        tags={tags}
                        location={location} 
                        host={host} 
                        rating={rating}              
                    />
                </div> 
                
            ))}

        </CardsContent>
    )
}

export default Cards