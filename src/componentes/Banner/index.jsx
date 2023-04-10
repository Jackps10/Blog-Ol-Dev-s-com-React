import React from 'react'
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhaFoto.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Dev's!
            </h1>
            <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Jackson, Desenvolvedor Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo comigo :)
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido} 
                aria-hidden={true} 
            />
            <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='foto Jacksons'
            />

        </div>
    </div>
  )
}

export default Banner