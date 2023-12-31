import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <div>
    <header>
        <nav className='navbar navbar-light bg-primary'>
            <div className='container'>
                <Link to="/" className="navbar-brand">Genesis Pos</Link>
                <Link to="/Signup" className="navbar-brand">Sign up</Link>
            </div>
        </nav>
    </header>
    <main>
        <div className='container mt-3'>
           {children}
        </div>
    </main>
    </div>
  )
}

export default MainLayout