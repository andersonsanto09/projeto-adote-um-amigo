

function Home() {
    return (
        <div className="home">
                <div className="container-home">     
                    <div className="nosso-objtv">  
                        <h2>Nosso Objetivo</h2>

                        <p>O objetivo do Adote um Amigo é conectar animais que precisam de um lar com pessoas dispostas a oferecer amor, cuidado e uma nova chance de vida.
                        Acreditamos que cada animal merece um ambiente seguro, acolhedor e cheio de carinho.</p>

                        <p>
                        Ao adotar um animal, você não está apenas salvando uma vida, mas também ganhando um companheiro leal e amoroso que trará alegria e felicidade para sua casa.</p>
                    </div>  

                    <img src="public/img-header.png" alt="" />
            </div>                
            <div>
                    <p className="video-title">Veja um video sobre adoção responsavel: </p>
                    <iframe 
                        src="https://www.youtube.com/embed/v43a1GniF2A?si=XVXjMiMkzIHwA9Ce" 
                        frameborder="0" 
                        width={560} 
                        height={315}
                        title="Adoção Responsavel"
                        allowFullScreen
                    ></iframe>
                </div>
        </div>
    )
}

export default Home