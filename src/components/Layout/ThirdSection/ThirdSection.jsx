import computador from '../../../assets/ComputadorSm.jpg'


export default function ThirdSection(){
    // Sobre mim
    return(
        <main class='bg-CorPreta text-white w-screen h-auto overflow-hidden pb-10 pt-10'>
            <h2 class='text-center text-6xl'>Sobre mim</h2>
            <div class='flex justify-center pt-10  flex-col items-center md:flex-row'>             
                <div className='p-5 flex flex-col items-center'>
                    <img 
                        src={computador} 
                        alt="Imagem de um laptop com a tampa um pouco levantada"
                        className='w-96' 
                    />
                    <div class='bg-[#0F110E] p-6'>
                    <p class='text-xl text-center'>
                        Sou Desenvolvedor Front End, especializado em React, e atualmente curso Análise e Desenvolvimento de Sistemas. Embora ainda não tenha experiência profissional na área, estou constantemente aprimorando minhas habilidades por meio de projetos práticos e estudos contínuos. Sou proativo, dedicado e estou ansioso para aplicar meu conhecimento em um ambiente profissional, contribuindo com minha paixão por tecnologia e aprendizado constante. 🚀
                    </p>
                </div>
                </div>
            </div>
        </main>
    )

}
