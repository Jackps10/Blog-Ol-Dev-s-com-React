import PostModelo from 'componentes/PostModelo'
import React from 'react';
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/minhaFoto.png';


const SobreMim = () => {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo= 'Sobre Mim'>
        
        <h3 className={styles.substituto}>
          Olá eu sou Jackson!
        </h3>

        <img 
          src={fotoSobreMim} 
          className={styles.fotoSobreMim}
          alt="Foto do Jackson Sorrindo" 
        />
        <p className={styles.paragrafo}>Oi, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.</p>
        <p className={styles.paragrafo}>Minha história com programação começou na empresa Geocontrol. Eu aprendi lógica de programação e o básico de várias linguagens, como JavaScript, C# e C++ mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>
        <p className={styles.paragrafo}>No ensino superior, escolhi cursar Sistemas na Universidade Centro Leste (UCL). Lá eu tive a oportunidade de estudar desenvolvimento web.</p>
        <p className={styles.paragrafo}>Desde então comecei a gostar muito desse universo de tecnologias e respirar tecnologia.</p>

    </PostModelo>
  )
}

export default SobreMim