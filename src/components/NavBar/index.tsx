import './styles.css'
import useTime from "../hooks/useTime";
import { inject } from '@vercel/analytics';

function NavBar() {
    const dayTime = useTime()
    inject();
    const setLang = (lang: string) => {
        sessionStorage.setItem("lang", lang);
        window.location.reload();
    }
    return (
      <header>
        <nav className={`nav-bar-container-${dayTime}`}>
          <div>
            <h1 className="title-nav-bar">Gabriel Tettamanti</h1>
          </div>
          <div>
            <button className='lang-switch-button' onClick={() => setLang('en')}>
              EN
            </button>
            <button className='lang-switch-button' onClick={() => setLang('es')}>
              ES
            </button>
          </div>
        </nav>
        <div className="background-header-filling" />
      </header>
    );
};

export default NavBar;