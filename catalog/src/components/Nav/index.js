import { Link, Outlet } from "react-router-dom"


const Nav = () => {
    return (
        <>
        <header>
            <div className="logo"></div>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/abaut'}>Abaut</Link></li>
                </ul> 
            </nav>
        </header>
        <Outlet/>
        </>
    )
}

export default Nav;