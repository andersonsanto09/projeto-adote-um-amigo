function Home() {
    return (
        <div className="home">
            <h2>Bem vindo ao Adote um amigo!</h2>
            <p>Veja um video sobre adoção responsavel: </p>
            <iframe 
            src="https://www.youtube.com/embed/v43a1GniF2A?si=XVXjMiMkzIHwA9Ce" 
            frameborder="0" 
            width={560} 
            height={315}
            title="Adoção Responsavel"
            allowFullScreen
            ></iframe>
        </div>
    )
}

export default Home