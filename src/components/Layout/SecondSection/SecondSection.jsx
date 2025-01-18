import PreviaBroly from '../../../assets/Broly.png'

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
                        <p>Projeto anunciando o filme do Broly, utilizando tecnologias como HTML5 e CSS3</p>
                    </div>
                </div>
                <div class='w-[450px] h-[570px]'>
                    <img 
                        src="https://placehold.co/450x350" 
                        alt="Minha foto"
                    />
                    <div class='w-full bg-RoxaEscura text-center'>
                        <h2 class='text-xl'>Filme do Broly</h2>
                        <p>Site que tem o intuito de anunciar o filme do Broly</p>
                    </div>
                    
                </div>
                <div class='w-[450px] h-[570px]'>   
                    <img 
                        src="https://placehold.co/450x350" 
                        alt="Minha foto"
                    />
                    <div class='w-full bg-RoxaEscura text-center'>
                        <h2 class='text-xl'>BigPiggs</h2>
                        <p>Projeto que fiz que tem a função de criar orçamentos de projetos e controlar os valores gastos</p>
                    </div>
                </div>
            </div>
            <div class='flex items-start justify-center'>
                <button class='bg-RoxaEscura p-3 rounded-sm'>Veja mais projetos</button>
            </div>
            
            
        </main>
    )
}
