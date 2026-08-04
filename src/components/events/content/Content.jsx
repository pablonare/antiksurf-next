import Container from "../../../components/ui/Container/Container";
import styles from "./Content.module.css";

import AtlantikImage1 from "../../../assets/images/events/atlantik/atlantik-1.webp";
import AtlantikImage2 from "../../../assets/images/events/atlantik/atlantik-2.webp";

import AtlantikAsilah from "../../../assets/images/events/atlantik/atlantik-asilah.webp";
import AtlantikCanos from "../../../assets/images/events/atlantik/atlantik-canos.webp";
import AtlantikHendaya from "../../../assets/images/events/atlantik/atlantik-hendaya.webp"; 

function Content() {
  return (
    <Container> 
        
      <div className={styles.content}>
        <p>
          El pasado invierno, los shapers Peta Surfboards, Longwinter y Adrokultura 
          se reunieron en Assilah, el pueblo donde nació y sigue creciendo nuestro 
          proyecto Antik Surf Club. De ese encuentro nació ATLANTIK, una película que 
          captura una misma forma de entender la creación de tablas, el surf y la vida alrededor
          del océano.
        </p>
      </div>
      
      <div className={styles.media}>
       <img src={AtlantikAsilah.src} alt="" />
        <img src={AtlantikCanos.src} alt="" />
        <img src={AtlantikHendaya.src} alt="" />
      </div> 

      <div className={styles.content}>
        <p>
          Entre las calles de una medina llena de historia y las sesiones de surf, 
          compartimos olas con el quiver de Antik, además de ideas, conversaciones y 
          una misma pasión por el diseño y la artesanía. Más allá del surf, este 
          encuentro fue una oportunidad para intercambiar conocimientos, inspirarnos 
          mutuamente y disfrutar del simple hecho de compartir tiempo entre amigos,
          unidos por una misma forma de entender el surf. 
        </p>
      </div>

      <div className={styles.content}>
        <p>
          ANTLANTIK es un retrato de la amistad, la creatividad, la artesanía y el mar.
          Un viaje que pone en valor el trabajo hecho con las manos, el tiempo que 
          requiere cada tabla y las personas que mantienen viva una manera auténtica
          de hacer las cosas.
        </p>
      </div>

      <div className={styles.final}> 
        <p>   
          Y una última reflexión:
          Lo que se hace a mano no se rebaja. Lo que se hace con alma no se liquida. 
          Lo que sostiene la cultura del surf no debería venderse a mitad de precio. 
          Porque Antik también es cultura, respeto y compromiso con quienes siguen
          creyendo que el surf debe permanecer en manos de surfistas.
        </p> 
      </div>

      <div className={styles.gallery}>
        <img src={AtlantikImage2.src} alt="Imagen de shaper reunidos"/>
        <img src={AtlantikImage1.src} alt="Imagen de shaper reunidos"/>
      </div>

      
    </Container>
  );
}

export default Content;