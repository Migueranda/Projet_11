import '../../utils/style/References.css'   
import  imgApropos from '../../assets/img_apropos.png'
import  Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'

function References(){
    // Variables pour afficher le contenu text de chaque collapse
    let contenuFiabilite = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    let contenuRespect ='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    let contenuSevice ="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    let contenusecurite ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return( 
        <div id="container"> 
            {/* affichage de l'image d'entête */}
            <div id='container-img'>
                <img src={imgApropos} alt="img entête" className='img-apropos'/>                
            </div>
                <div className='container-drop'> 
                    <Collapse description='Fiabilité' contenu={contenuFiabilite} affichage='references'/>       
                    <Collapse description='Respect' contenu={contenuRespect} affichage='references' /> 
                    <Collapse description='Service' contenu={contenuSevice} affichage='references'/>       
                    <Collapse description='Responsablité' contenu={contenusecurite} affichage='references'/> 
                </div>                     
            <Footer />
        </div>
    )
}
export default References