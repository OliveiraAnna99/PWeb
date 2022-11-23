
import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'

function Receita4(){
    return(
        <div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
          <div>
          <div className={styles.introReceita}>
            <h1 className={styles.titleReceita}>Receita 04</h1>
            <h6> 1. Transfomando elementos em Links para as páginas de modo que este, se comunique com o site externo</h6>
            <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo3}>
                texto da questao 1
              </p>
            
            </div>
                     <button  className={styles.botaoSomador}> 
                         <a href='/movies_1?pesquisar=bagdad'>Código da Receita 4 - Exercicio 1</a>
                     </button>
                     <div className={styles.introReceita}>
            <h6>2. Exibir inforrmações sobre a localização do usuário </h6>
            
              <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo3}>
                texto da questão 2
            
              </p>
            </div>
            <div>
              <button  className={styles.botaoSomador}> 
                <a href='/movies_2'>Código da Receita 4 - Exercicio 2</a>
              </button>
            </div>

            <h6>4. Adaptar exercicio 1 para rodar dessa vez do lado do servidor usando um a outra página</h6>
            
            <div className={styles.contentCalc}>
            <br></br>
            <p className={styles.textInfo3}>
              texto do exercicio 3
            </p>
          </div>
          <div>
            <button  className={styles.botaoSomador}> 
              <a href='/movies_3?pesquisar=bagdad'>Código da Receita 4 - Exercicio 3</a>
            </button>
          </div>
          </div>
          </div>

          </div>
      </div>

    );
}

export default Receita4;