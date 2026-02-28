function Header () {

    // função para tocar o som da logo
    const tocarMusica = () => {
        const audio = document.getElementById('tudum');
        audio.play();
    };

    return (
        <div>
            <audio id="tudum" preload="auto">
                <source src="/audio/netflix_tudum.mp3" type="audio/mp3" />
            </audio>
        
            <div id="header">
                <section>
                <img id="logo"
                    src="/images/Netflix-new-icon.png"
                    height="145"
                    onClick={tocarMusica}
                    alt="Logo Netflix"
                />
                </section>
                <section>
                <h1 id="titletext1">Netflix Originals</h1>
                <h2 id="titletext2">Galeria de Imagens</h2>
                </section>
            </div>
        </div>
    )
}
export default Header;