import iconeInstagram from "../../../assets/icons8-instagram.svg"

function Footer(){
    return(
        <footer class="bg-gray-800 text-white w-full text-center p-5">
            <nav>
                <h3>Minhas redes Sociais:</h3>
                <ul>
                    <li>
                        Instagram 
                        <img 
                            src={iconeInstagram} 
                            alt="Icone do instagram"
                        />
                    </li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
