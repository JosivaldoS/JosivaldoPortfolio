import EfeitoDeEscrita from "../EfeitoDeEscrita/EfeitoDeEscrita";
import Imagem from "../../../assets/Eu.png"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

export default function FirstSection(){
    //Apresentação
    return (
        <header class="flex w-screen justify-center bg-CorPreta h-auto sm:flex-row flex-col sm:justify-center items-center p-10">
            <div class="mx-5 flex flex-col justify-center items-center text-white text-center">
                <EfeitoDeEscrita classe='text-4xl' texto="Olá, me chamo Josivaldo!" mostrarCursor={false}/>
                <EfeitoDeEscrita classe='text-xl' texto='Desenvolvedor Front end' mostrarCursor={false} velocidadeEscrita={100}/>
            </div>
            <div class="mx-5 align-center flex items-center w-[50%]" data-aos="fade-up" data-aos-delay="150">
                <img 
                src={Imagem} 
                alt="Foto do desenvolvedor"
                className="rounded-xl"
                />
            </div>
        </header>
    )

}
