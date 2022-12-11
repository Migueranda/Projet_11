import {logementList} from '../../datas/logements'
import Cards from '../../components/Cards'
import imgHeader from '../../assets/img_header.png'
import '../../utils/style/Home.css'

function Home(){
    return(
        <div className='page-container'>
            <div className='container-img'>
                <div className='home-text-img'>Chez vous, partout et ailleurs</div>
                <img src={imgHeader} alt="img d'entête" className='picHeader' />
            </div>
            <div className='container-card-item'>            
                <Cards cardItems={logementList} />
            </div>        
        </div>
    )
}

export default Home

