import { Link } from "react-router-dom";

// Caminhos corretos (sem ../public)
const imagens = [
  { src: "/images/pics_g01/2.jpg", blur: "/images/pics_g01/1.jpg" },
  { src: "/images/pics_g01/10.jpg", blur: "/images/pics_g01/9.jpg" },
  { src: "/images/pics_g01/12.jpg", blur: "/images/pics_g01/11.jpg" },
  { src: "/images/pics_g01/6.jpg", blur: "/images/pics_g01/5.jpg" },
  { src: "/images/pics_g01/8.jpg", blur: "/images/pics_g01/7.jpg" },
  { src: "/images/pics_g01/4.jpg", blur: "/images/pics_g01/3.jpg" },
  { src: "/images/pics_g01/18.jpg", blur: "/images/pics_g01/17.jpg" },
  { src: "/images/pics_g01/14.jpg", blur: "/images/pics_g01/13.jpg" },
  { src: "/images/pics_g01/16.jpg", blur: "/images/pics_g01/15.jpg" },
  { src: "/images/pics_g01/20.jpg", blur: "/images/pics_g01/19.jpg" },
  { src: "/images/pics_g01/22.jpg", blur: "/images/pics_g01/21.jpg" },
  { src: "/images/pics_g01/24.jpg", blur: "/images/pics_g01/23.jpg" },
  { src: "/images/pics_g01/26.jpg", blur: "/images/pics_g01/25.jpg" },
  { src: "/images/pics_g01/28.jpg", blur: "/images/pics_g01/27.jpg" },
  { src: "/images/pics_g01/30.jpg", blur: "/images/pics_g01/29.jpg" },
  { src: "/images/pics_g01/32.jpg", blur: "/images/pics_g01/31.jpg" },
  { src: "/images/pics_g01/34.jpg", blur: "/images/pics_g01/33.jpg" },
  { src: "/images/pics_g01/36.jpg", blur: "/images/pics_g01/35.jpg" },
];

function Page01() {
  const trocarImagem = (elemento, novaImagem) => {
    elemento.src = novaImagem;
  };

  return (
    <>

        <h1 style={{ textAlign: "center", marginTop: "170px" }}>
          Assista ao Trailer
        </h1>
      <div className="video">
        <iframe width="700" height="400" src="https://www.youtube.com/embed/CK-g0OqzQHQ" title="Para Todos os Garotos que Já Amei | Trailer principal [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    
      <section className="gallery-container">
        {imagens.map((img, idx) => (
          <div className="gallery-box" key={idx}>
            <img
              src={img.src}
              alt={`Imagem ${idx}`}
              onMouseOver={(e) =>
                trocarImagem(e.currentTarget, img.blur)
              }
              onMouseOut={(e) =>
                trocarImagem(e.currentTarget, img.src)
              }
            />
          </div>
        ))}
      </section>

     
    </>
  );
}

export default Page01;