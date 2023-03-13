import './styles.css'
import useTime from "../hooks/useTime";
import { inject } from '@vercel/analytics';

function NavBar() {
    const dayTime = useTime()
    inject();
    return (
        <header>
            <nav className={`nav-bar-container-${dayTime}`}>
                <div>
                    <h1 className="title-nav-bar">Gabriel Tettamanti</h1>
                </div>
                
            </nav>
            <div className="background-header-filling"/>
        </header>
    );
};

export default NavBar;