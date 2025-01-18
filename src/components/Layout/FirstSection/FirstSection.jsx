import EfeitoDeEscrita from "../EfeitoDeEscrita/EfeitoDeEscrita";
import Imagem from "../../../assets/Eu.png"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

export default function FirstSection(){
    //Apresentação
    return (
        <header class="flex w-screen justify-evenly bg-CorPreta h-[55rem]">
            <div class="mx-5 flex flex-col justify-center items-center max-h-full text-white w-[50%]">
                <EfeitoDeEscrita classe='text-4xl' texto="Olá, me chamo Josivaldo!" mostrarCursor={false}/>
                <EfeitoDeEscrita classe='text-xl' texto='Desenvolvedor Front end' mostrarCursor={false} velocidadeEscrita={100}/>
            </div>
            <div class="mx-5 align-center flex items-center w-[30%]" data-aos="fade-up" data-aos-delay="150">
                <img 
                src={Imagem} 
                alt="Minha foto"
                className="rounded-xl"
                />
            </div>
        </header>
    )

}
