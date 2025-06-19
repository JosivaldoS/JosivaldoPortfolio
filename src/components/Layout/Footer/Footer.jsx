import iconeInstagram from "../../../assets/icons8-instagram.svg"
import iconeLinkedin from "../../../assets/iconLinkedin.svg"
import iconeGithub from "../../../assets/iconGithub.svg"

function Footer(){
    return(
        <footer class="bg-gray-800 text-white w-full text-center p-5">
            <nav>
                <h3 className="text-xl">Minhas redes Sociais:</h3>
                <ul>
                    <li className="flex justify-center">
                        <img 
                            src={iconeInstagram} 
                            alt="Icone do instagram"
                            className="w-6"
                        />
                        <p className="p-2 text-lg">Instagram</p>
                    </li>
                    <li className="flex justify-center">
                        <img 
                            src={iconeLinkedin} 
                            alt="Icone do instagram"
                            className="w-6"
                        />
                        <p className="p-2 text-lg">Linkedin</p>
                    </li>
                    <li className="flex justify-center">
                        <img 
                            src={iconeGithub} 
                            alt="Icone do instagram"
                            className="w-6"
                        />
                        <p className="p-2 text-lg">Github</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
