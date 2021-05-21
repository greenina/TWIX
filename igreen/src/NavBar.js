import logo from './logo.png';
import './NavBar.css';

function NavBar() {
    const mv2main = () => {
        document.location.href = '/';
      };

    return (
        <div className="NavBar">
        <header className="NavBar-header">
          <img onClick={mv2main} src={logo} className="NavBar-logo" alt="logo"/>
          <nav>
            <ul class="nav__links">
                <li><a href="/category">Categories</a></li>
                <li><a href="/detail">Details</a></li>
                <li><a href="/mypage">Mypage</a></li>
                <li>|</li>
            </ul>
        </nav>
        <a class="cta" href="#"><button class="login">Login</button></a>
        </header>
      </div>
    );
  }
  
  export default NavBar;