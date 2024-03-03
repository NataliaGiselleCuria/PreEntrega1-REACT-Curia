import LiNavBar from './LiNavBar'
import Cart from '../CartWidget/Cart'
import './NavBar.css';

export default function NavBar(){
    
    return(
        <>
            <nav className="navBar navbar navbar-expand-lg w-90 m-auto nav-home">  
                <div className="container-fluid h-100">
                    <button className="navbar-toggler border border-0 w-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="logo">
                        <img className="imgLogo" src="img/coder-icon.png" alt="logo coder ceramicas"/><p>Coder-Ceramicas</p>
                    </div>
                    <div className="navMenu">        
                            <div className="navList collapse navbar-collapse" id="navList">
                                <ul className="navbar-nav text-center">
                                    <LiNavBar texto="INICIO" href="#inicio"/>
                                    <LiNavBar texto="PRODUCTOS" href="#productos"/>
                                    <LiNavBar texto="CLUB" href="#club"/>
                                    <LiNavBar texto="CONTACTO" href="#contacto"/>
                                </ul>
                            </div>
                            
                        <div className="cartWidgetContainer">
                            <Cart/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
       
}