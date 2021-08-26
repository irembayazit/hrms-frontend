import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function SignedIn({signOut},{myInformation}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsP64ec2384B3BKdaIT5KSHDTLvMcyVE7KKw&usqp=CAU"/>
                <Dropdown  pointing="top left" text="İrem">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={"/userInformation"} icon="info" text="Bilgilerim"></Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            
        </div>
    )
}
