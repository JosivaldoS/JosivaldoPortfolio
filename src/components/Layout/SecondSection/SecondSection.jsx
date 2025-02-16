import PreviaBroly from '../../../assets/Broly.png'
import PreviaLogin from '../../../assets/Login.png'
import PreviaBigPiggs from '../../../assets/BigPiggs.png'

export default function SecondSection() {
    // Projetos
    return (
        <main class='bg-RoxaMedio text-white w-screen h-[800px] overflow-hidden'>
            <h1 class='text-center text-7xl mt-9 font-sans'>
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
                <div class="group relative">
                    <a href='https://github.com/JosivaldoS' target='_blank' rel="noreferrer">
                        <button>
                            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-gray-900"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </button>
                        <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                        z-20 origin-left scale-0 px-3 rounded-lg border 
                        border-gray-300 bg-white py-2 text-sm text-black font-bold
                        shadow-md transition-all duration-300 ease-in-out 
                        group-hover:scale-100">
                            GitHub
                            <span></span>
                        </span>
                    </a>
                </div>
            </div>

            
            
        </main>
    )
}
