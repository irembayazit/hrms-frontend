import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {

  const {favoriteItems} = useSelector(state => state.favorite)

  return (
      <div>
          <Dropdown item text='Favorites'>
          <Dropdown.Menu>
            {
              favoriteItems.map((favoriteItem)=>(
                <Dropdown.Item key={favoriteItem.advert.id}>
                  {favoriteItem.advert.employer.companyName}
                </Dropdown.Item>
              ))
            }
            
            <Dropdown.Divider/>
            <Dropdown.Item as={NavLink} to="/">List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
  )
}
