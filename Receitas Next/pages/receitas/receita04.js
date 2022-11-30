
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
                Para verificar a resolução da questão acesse o link abaixo ou procure pela pagina 'receita4'
              </p>
            
            </div>
                     <button  className={styles.botaoSomador}> 
                         <a href='/receita4Movies/receita4'>Código da Receita 4 - Exercicio 1</a>
                     </button>
                     <div className={styles.introReceita}>
            <h6>2. Exibir inforrmações sobre a localização do usuário </h6>
            
              <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo3}>
                Para verificar a resolução da questão acesse o link abaixo, para resolver essa
                questão foi necessário realizar um cadastro no site mencionado na receita para 
                que obtermos o API key necessário para capturarmos os dados acerca da nossa localização
              </p>
            </div>
            <div>
              <button  className={styles.botaoSomador}> 
                <a href='/receita4t2'>Código da Receita 4 - Exercicio 2</a>
              </button>
            </div>

            <h6>4. Adaptar exercicio 1 para rodar dessa vez do lado do servidor usando um a outra página</h6>
            
            <div className={styles.contentCalc}>
            <br></br>
            <p className={styles.textInfo3}>
                Acesse o link abaixo
            </p>
          </div>
          <div>
            <button  className={styles.botaoSomador}> 
              <a href='/receita4Movies2/receita4'>Código da Receita 4 - Exercicio 3</a>
            </button>
          </div>
          </div>
          </div>

          </div>
      </div>

    );
}

export default Receita4;