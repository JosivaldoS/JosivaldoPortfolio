import computador from '../../../assets/Computador.jpg'


export default function ThirdSection(){
    // Sobre mim
    return(
        <main class='bg-CorPreta text-white w-screen h-[800px] overflow-hidden'>
            <h2 class='text-center text-6xl mt-9'>Sobre mim</h2>
            <div class='flex justify-center pt-20'>
                <div class='w-[850px] bg-[#0F110E] '>
                    <p class='text-2xl p-6'>
                        Sou Desenvolvedor Front End, especializado em React, e atualmente curso Análise e Desenvolvimento de Sistemas. Embora ainda não tenha experiência profissional na área, estou constantemente aprimorando minhas habilidades por meio de projetos práticos e estudos contínuos. Sou proativo, dedicado e estou ansioso para aplicar meu conhecimento em um ambiente profissional, contribuindo com minha paixão por tecnologia e aprendizado constante. 🚀
                    </p>
                </div>
                <div>
                    <img 
                        src={computador} 
                        alt=""
                        width={350} 
                    />
                </div>
            </div>
        </main>
    )

}
