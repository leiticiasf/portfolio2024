import downloadPng from "../assets/photos/download.png";
import meuCurriculo from "../assets/img/curriculo.png";

export const Curriculo = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = meuCurriculo;
        link.download = 'curriculo.png';
        link.click();
    };

    return(
        <div>
             <div className='Curriculo' id="curriculo">
            <h2>Meu Currículo</h2>
            <br/>
            <img src={meuCurriculo} alt="Currículo" className='curriculo'/>
            <br/>
            <img src={downloadPng} onClick={handleDownload} className='download'></img>
            </div>
        </div>
    )
}