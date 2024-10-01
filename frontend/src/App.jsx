import { useState } from 'react'
import Menu from './components/Menu/Menu'
import CreateDish from './components/CreateDish/CreateDish'
import './App.css'

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      nome: 'Filé Mignon',
      valor: 'R$12',
      description: 'Carne de luxo com cogumelos e molho barbecue'
    },
    {
      nome: 'Filé Mignon',
      valor: 'R$12',
      description: 'Carne de luxo com cogumelos e molho barbecue'
    },
    {
      nome: 'Filé Mignon',
      valor: 'R$12',
      description: 'Carne de luxo com cogumelos e molho barbecue'
    },
    {
      nome: 'Filé Mignon',
      valor: 'R$12',
      description: 'Carne de luxo com cogumelos e molho barbecue'
    },
    {
      nome: 'Salmão Grelhado',
      valor: 'R$15',
      description: 'Salmão fresco grelhado com ervas finas'
    },
    {
      nome: 'Risoto de Funghi',
      valor: 'R$10',
      description: 'Risoto cremoso com mix de cogumelos'
    }
  ])

  const addMenuItem = (newDish) => {
    setMenuItems([...menuItems, newDish])
  }

  const deleteMenuItem = (dish) => {
    setMenuItems(menuItems.filter(item => item.nome !== dish.nome))
  }

  return (
    <div className='app'>
      <div className='create-dish'>
        <CreateDish onAddDish={addMenuItem} onDeleteDish={deleteMenuItem} />
      </div>
      <div className='menu-container'>
        {menuItems.map((item, index) => (
          <Menu
            key={index}
            nome={item.nome}
            valor={item.valor}
            description={item.description}
            onDelete={deleteMenuItem}
          />
        ))}
      </div>
    </div>
  )
}

export default App
