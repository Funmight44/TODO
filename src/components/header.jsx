import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();


    return ( 
        <header>
            <div>
               <h3>TODOS</h3>
              {isAuthenticated && <p><i className="bi bi-person"></i>{user.name}</p>  }
               {isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button> 
               : <button onClick={() => loginWithRedirect()}>Login</button> }
            </div>             
        </header>
     );
}
 
export default Header;