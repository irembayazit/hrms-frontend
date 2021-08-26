import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import CartSummary from "./CartSummary";
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

    const {favoriteItems} = useSelector(state => state.favorite)
    const [isAuthenticated,setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params){
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params){
        setIsAuthenticated(true)
    }


    return (
        <div>
            <Menu inverted fixed="top" size='large'>
                <Container>
                    <Menu.Item name="home"/>
                    <Menu.Item name="messages"/>

                    <Menu.Menu position="right">
                        {favoriteItems.length>0&&<CartSummary/>}
                        {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}                      
                    </Menu.Menu>                    
                </Container>
            </Menu>    
        </div>
    )
}
