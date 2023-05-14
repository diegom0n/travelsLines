import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <div className='navItems'>
              <span>
              +56 2 2222 2222
              </span>
                <button className='navButton'>Registrarse</button>
                <button className='navButton'>Iniciar Sesión</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar