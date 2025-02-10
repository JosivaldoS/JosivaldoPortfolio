import PreviaBroly from '../../../assets/Broly.png'
import PreviaLogin from '../../../assets/Login.png'
import PreviaBigPiggs from '../../../assets/BigPiggs.png'

export default function SecondSection() {
    // Projetos
    return (
        <main class='bg-RoxaMedio text-white w-screen h-[800px] overflow-hidden'>
            <h1 class='text-center text-7xl mt-9'>
                Meus projetos
            </h1>
            <div class='flex flex-row justify-evenly items-center mt-16'>
                <div class='w-[450px] h-[570px]'>
                    <img 
                        src = {PreviaBroly}
                        alt="Minha foto"
                        class='w-[450px] h-[550]'
                    />
                    <div class='w-full bg-RoxaEscura text-center'>
                        <h2 class='text-xl'>Filme do Broly</h2>
                        <p>Este projeto em HTML, CSS e AOS apresenta o filme Broly com animações dinâmicas e um design responsivo. 🎬💻 Foi uma ótima experiência para aprimorar estilização, organização de código e interatividade. 🚀</p>
                    </div>
                </div>
                <div class='w-[450px] h-[570px]'>
                    <img 
                        src={PreviaLogin} 
                        alt="Minha foto"
                    />
                    <div class='w-full bg-RoxaEscura text-center'>
                        <h2 class='text-xl'>Site de login</h2>
                        <p>Desenvolvi este site em React para praticar meus aprendizados, incluindo um validador de senha forte, um comparador de senhas e outros recursos interativos. 🚀
                        </p>
                    </div>
                    
                </div>
                <div class='w-[450px] h-[570px]'>   
                    <img 
                        src={PreviaBigPiggs} 
                        alt="Minha foto"
                    />
                    <div class='w-full bg-RoxaEscura text-center'>
                        <h2 class='text-xl'>BigPiggs</h2>
                        <p>Desenvolvi este projeto em React para criação de orçamentos e controle de gastos em projetos, facilitando a gestão financeira com uma interface intuitiva e eficiente. 💰📊</p>
                    </div>
                </div>
            </div>
            <div class='flex items-start justify-center'>
                <button class='bg-RoxaEscura p-3 rounded-sm'>Veja mais projetos</button>
            </div>
            
            
        </main>
    )
}
