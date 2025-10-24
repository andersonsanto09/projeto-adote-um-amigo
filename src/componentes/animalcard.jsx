function Animalcard({nome, imagem, onadotar}){
return(

    <div className="animal-card">
        
        <img src={imagem} alt="" />

        <h3>{nome}</h3>

        <button className="botao-adotar" onClick={onadotar}>Adotar</button>
    </div>

)
}

export default Animalcard;

