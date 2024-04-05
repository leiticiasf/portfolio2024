import carregamento from "../assets/photos/gifcarregando.gif"
import cachorro from "../assets/photos/carr.png"


export const Ppe = () => {
    return (
        <span>
                <h1>PPE</h1>
                     <img id="gif" src={carregamento} alt="gif de carregamento" />  <br/> <br/>

                    <p>  Estamos trabalhando nisto...</p> &nbsp; <img id="cachorro" src={cachorro} alt="cachorro olhando de lado" />  <br/> <br/>

                    </span>
    )
}