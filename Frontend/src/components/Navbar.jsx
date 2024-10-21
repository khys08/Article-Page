import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <header>
        <div className='Navbar'>
            <Link to='/'>
            <h1><strong>News Today!!</strong></h1>
            </Link> 
            <Link to="/" className='Nav'>Login</Link>  
        </div>
        </header>
    )
}
export default Navbar