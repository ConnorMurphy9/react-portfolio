
import '../styles/Navbar.css';

function Navbar (props) {

    return (

        <nav>
            <h2>My Portfolio</h2>
            <ul>
                <li onClick={ () => props.setPage("Home")}>Home</li>
                <li onClick={ () => props.setPage("About")}>About</li>
                <li onClick={ () => props.setPage("Contact")}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar