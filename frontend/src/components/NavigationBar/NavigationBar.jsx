import { useNavigate } from "react-router-dom";
import acebookLogo from '../../assets/AcebookLogo.png'
import "./NavigationBar.css";

// NavigationBar will render at the top of the page. The <nav>
// tag identifies it as the navigation information for the site
const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Set functions for the different buttons on the navbar
  const logout = () => {
    // Removes the stored login token from browser's localStorage
    localStorage.removeItem('token')
    navigate("/login");
  };

  const login = () => {
    navigate('/login');
  };

  const signup = () => {
    navigate('/signup');
  };

  const createPost = () => {
    navigate('/createpost');
  };

  const renderButtons = () => {
    if (token !== null) {
      return (
        <div>
          <button onClick={createPost}>Create post</button>
          <button onClick={logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={login}>Login</button>
          <button onClick={signup}>Signup</button>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className='navbarBox'>
        <div className='navbarLogo'>
          <img src={acebookLogo}></img> Acebook
        </div>
        <div className='navbarButtons'>
          {renderButtons()}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;