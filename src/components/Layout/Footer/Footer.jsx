import iconeInstagram from "../../../assets/icons8-instagram.svg"
import iconeLinkedin from "../../../assets/iconLinkedin.svg"
import iconeGithub from "../../../assets/iconGithub.svg"

function Footer(){
    return(
        <footer class="bg-gray-800 text-white w-full text-center p-5">
            <h3 className="text-xl">Minhas redes Sasociais:</h3>
            <nav>
                <a 
                    className="flex justify-center"
                    href="https://www.instagram.com/devjunin/?next=%2F"
                    target="_blank"
                    rel="noreferrer">
                    <img 
                        src={iconeInstagram} 
                        alt="Icone do instagram"
                        className="w-6"
                    />
                    <p className="p-2 text-lg">Instagram</p>
                </a>

                <a 
                    href="https://www.linkedin.com/in/josivaldo-junior/"
                    className="flex justify-center"
                    rel="noreferrer"
                    target="_blank">
                    <img 
                        src={iconeLinkedin} 
                        alt="Icone do Linkedin"
                        className="w-6"
                    />
                    <p className="p-2 text-lg">Linkedin</p>
                </a>

                <a 
                    href="github.com/JosivaldoS"
                    className="flex justify-center"
                    rel="noreferrer"
                    target="_blank">
                    <img 
                        src={iconeGithub} 
                        alt="Icone do Github"
                        className="w-6"
                    />
                    <p className="p-2 text-lg">Github</p>
                </a>
            </nav>
        </footer>
    )
}

export default Footer
