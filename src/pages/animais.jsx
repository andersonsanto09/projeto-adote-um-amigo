import { useEffect, useState } from "react";
import Animalcard from "../componentes/animalcard";
import Modal from "../componentes/modal"


function Animais() {
    const [animais, setAnimais] = useState([])
    const [modalOpen, setmodalOpen] = useState([false])
    const [AnimalSelecionado, setanimalselecionado] = useState([null])

useEffect(() => {
  fetch("https://api.thedogapi.com/v1/images/search?limit=6")
    .then((res) => res.json())
    .then((data) => {
      console.log("🐾 Retorno da API:", data);
      if (Array.isArray(data)) {
        setAnimais(data);
      } else {
        setAnimais([]);
      }
    })
    .catch((err) => {
      console.error("Erro ao buscar animais:", err);
      setAnimais([]);
    });
}, []);



function Handleadotar(animal) {

    setanimalselecionado(animal)
    setmodalOpen(true)
}

return (
    <div className="animais-div">
        <h2>Animais disponiveis para Adoção: </h2>
        <div className="animais-card">
            {animais.map ((animal, index) => (
                <Animalcard 
                key={index}
                nome={`(Cachorro id:${index + 1}) \n Adote um animal!`}
                imagem={animal.url}
                onadotar={() => Handleadotar(animal)}
                />
            ))}
        </div>
        <Modal open={modalOpen} onClose={() => setmodalOpen(false)} >
            <p>Parabéns por querer adotar um amigo!</p>
            <p>Entre em contato com o nosso abrigo para continuar o processo.</p>
        </Modal>
    </div>
)}


export default Animais




