import { useNavigate } from "react-router-dom";

const imagens = [
  { src: "boys.jpg", blur: "boysblur.jpg", page: "page01" },
  { src: 'kitty.jpg', blur: 'kittyblur.jpg', page: 'galeria02' },
  { src: 'enola.jpg', blur: 'enolablur.jpg', page: 'galeria03' },
  { src: 'leave.jpg', blur: 'leaveblur.jpg', page: 'galeria04' },
  { src: 'lucifer.jpg', blur: 'luciferblur.jpg', page: 'galeria05' },
  { src: 'money.jpg', blur: 'moneyblur.jpg', page: 'galeria06' },
  { src: 'nimona.jpg', blur: 'nimonablur.jpg', page: 'galeria07' },
  { src: 'queen.jpg', blur: 'queenblur.jpg', page: 'galeria08' },
  { src: 'school.jpg', blur: 'schoolblur.jpg', page: 'galeria09' },
  { src: 'squid.jpg', blur: 'squidblur.jpg', page: 'galeria10' },
  { src: 'stranger.jpg', blur: 'strangerblur.jpg', page: 'galeria11' },
  { src: 'wednesday.jpg', blur: 'wednesdayblur.jpg', page: 'galeria12' },
  { src: 'woo.jpg', blur: 'wooblur.jpg', page: 'galeria13' },
  { src: 'you.jpg', blur: 'youblur.jpg', page: 'galeria14' },
  { src: 'zoom.jpg', blur: 'zoomblur.jpg', page: 'galeria15' },
]

function Home() {
  const navigate = useNavigate();

  const abrirPagina = (pagina) => {
    navigate(`/${pagina}`);
  };

  return (
    <div className="container">
      {imagens.map((img, idx) => (
        <div className="box" key={idx}>
          <img
            src={`/images/${img.src}`}
            alt={img.src}
            onMouseOver={(e) =>
              (e.currentTarget.src = `/images/${img.blur}`)
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = `/images/${img.src}`)
            }
            onClick={() => abrirPagina(img.page)}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;





