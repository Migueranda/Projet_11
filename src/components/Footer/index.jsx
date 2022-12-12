import '../../utils/style/Footer.css'
import LogoFooter from'../../assets/logo_footer.png'

function Footer (){
    return(
        <div className="cont-footer">
           <div className='container-logo'>
                <img src={LogoFooter} alt='logo footer' className='img-logo'/>           
            <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
            </div>   
        </div>
    )
}
export default Footer