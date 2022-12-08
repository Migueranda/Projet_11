import '../../utils/style/Error.css'
import { Link} from 'react-router-dom'

function Error(){
    return(
        <div className='container-error'>
            <h1>404</h1>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <div className='container-home-page'> 
                <Link to='/' className='link-accueil'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
export default Error