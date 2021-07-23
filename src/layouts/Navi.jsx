import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import CartSummary from "./CartSummary";

export default function navi() {
    return (
        <div>
            <Menu inverted fixed="top" size='huge'>
                <Container>
                    <Menu.Item name="home"/>
                    <Menu.Item name="messages"/>

                    <Menu.Menu position="right">
                        <CartSummary/>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                    
                </Container>
            </Menu>    
        </div>
    )
}
