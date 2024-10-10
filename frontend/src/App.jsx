import { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from './components/Menu/Menu'
import CreateDish from './components/CreateDish/CreateDish'
import './App.css'

function App() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/menu', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error))
  }, [])

  const addMenuItem = (newDish) => {
    setMenuItems([...menuItems, newDish])
  }

  const deleteMenuItem = (dish) => {
    setMenuItems(menuItems.filter(item => item.id !== dish.id))
  }

  return (
    <div className='app'>
      <div className='create-dish'>
        <CreateDish onAddDish={addMenuItem} onDeleteDish={deleteMenuItem} />
      </div>
      <div className='menu-container'>
        {menuItems.map((item) => (
          <Menu
            key={item.id}
            nome={item.name}
            valor={item.price}
            description={item.description}
            onDelete={deleteMenuItem}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default App
