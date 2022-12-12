import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import  '../../utils/style/Header.css'

let StyledLink = styled(Link)`
    padding: 0px;
    color: #FF6060;    
    font-size: 18px;
`
function Header(){

    const [clikedItemAc, setBorderBottomItemAc] = useState(true)   
    
    return(
        <div className='container'>        
            <img src={logo} alt="logo header"className="logo-header"/> 
            {/*  Condition pour afficher le border-bottom sur les liens Accueil et A propos */}
            {clikedItemAc ?(            
                <div className='container-items'>             
                    <StyledLink className='link-item' to="/" onClick={() => setBorderBottomItemAc(true)}>
                        Accueil
                    </StyledLink>
                    <StyledLink className='link-item' to="/references" onClick={() => setBorderBottomItemAc(false)}style={{'textDecoration': 'none'}}>
                        A Propos
                    </StyledLink>
                </div> 
           ) : (
            <div className='container-items'>             
                <StyledLink className='link-item' to="/" onClick={() => setBorderBottomItemAc(true)} style={{'textDecoration': 'none'}}>
                    Accueil
                </StyledLink>
                <StyledLink className='link-item' to="/references" onClick={() => setBorderBottomItemAc(false)}>
                     A Propos
                </StyledLink>
            </div>
             )}
        </div> 
    )
}
export default Header