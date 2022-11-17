
import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'

function Receita3(){
    return(
        <div>
            
          <div className={styles.introReceita}>
            <h1 className={styles.titleReceita}>Receita 03</h1>
            <h6> 1. Realizando pesquisas por titulo e ano </h6>
            <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo2}>
                Para realizar esse exercicio foi criado um arquivo nomeado de "movies_1.js", utilizamos 
                o parametro intitulado de 'data'. Utilizamos o "fetch" para fazer uma requisição a uma
                API e fizemos uso do "await" para esperar essa requisão que retorna uma 'promessa'. Para 
                observar o seu funcionamento acesso a rota '/movies' ou clique no botão abaixo
            
              </p>
            
            </div>
                     <button  className={styles.botaoSomador}> 
                         <a href='/movies_1'>Código da Receita 3 - Exercicio 1</a>
                     </button>
                     <div className={styles.introReceita}>
            <h6>2. Exibir além do titulo uma imagem com o poster do filme </h6>
            
              <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo2}>
                Para realizar esse exercicio foi criado um arquivo nomeado de "movies_2.js", utilizamos 
                o parametro intitulado de 'data'.
            
              </p>
              <button  className={styles.botaoSomador}> 
                         <a href='/movies_2'>Código da Receita 3 - Exercicio 2</a>
                     </button>
           
            </div>
          </div>
          </div>

         
      </div>

    );
}

export default Receita3;