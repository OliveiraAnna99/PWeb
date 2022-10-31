import dynamic from 'next/dynamic';
import styles from '../../styles/Main.module.css';
import Calculadora from '../calculadora';
import {Pet} from '../virtual-pet';
import {FormSoma} from '../elementos/form-soma';



function BlockIntroReceita(){
    return(
      <div className={styles.receita}>
        <div className={styles.introReceita}>
          <h1 className={styles.titleReceita}>Receita 01</h1>
          <h6> 1. Criando novos arquivos js no diretório pages e exibindo as funções default</h6>
          <div className={styles.contentCalc}>
            <br></br>
            <p className={styles.textInfo}>
              Adicionando arquivo "calculadora.js" dentro do diretório pages, elemento que determina os componentes que
              formam a imagem de uma calculadora que em breve será capaz de realizar operações matemáticas, simples.
              Observe que no processo foi utilizado o export default, como a questão sugere, uma vez que esse comando basicamente indica que o componente
              por padrão será interpretado como uma página HTML
            </p>
            <Calculadora/>
          </div>
        </div>
        <div className={styles.introReceita}>
          <br></br>
          <br></br>
          <br></br>
          
          <h6> 2. Criando novos arquivos js no diretório pages sem utilizar usar o 'default'</h6>
         
            <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo2}>
                Adicionando arquivo "virtual-pet.js" dentro do diretório pages, porém ao invés de exportar essa função 
                como um default, vamos apenas determinar-lá como uma função comum e utilizar as chaves, tanto na exportação quanto na
                importação para que o navegador seja capaz de interpretar esse código sem problemas.
                
              </p>
              
            </div>
           
        </div>
        <div>
               <Pet/>
            </div>
        <div className={styles.introReceita}>
          <h1 className={styles.titleReceita}>Receita 02</h1>
          <h6> 1. Criando novos componentes e novas páginas em subdiretórios</h6>
          <div className={styles.contentCalc}>
            <br></br>
            <p className={styles.textInfo2}>
              Para realizar esse exercicio, um subdiretório chamado de 'elementos' foi criado dentro da 
              pasta 'pages' e dentro dele foram criadas, novas funções que exibiremos nessa tela, afim de 
              verificar se nossa atividade foi bem sucedida. Criamos o arquivo 'form-soma.js' dentro desse 
              subdiretório e nela criamos um componente input, com toda a estilização necessária pra que
              esse elemento fique minimamente agradável
            </p>
           
          </div>
          <div className={styles.form}>
            <FormSoma/>
   
          </div>
        </div>

        <div className={styles.introReceita}>
       
          <h6> 2. Fazendo a página utilizar um component de um arquivo diferente</h6>
         
            <div className={styles.contentCalc}>
              <br></br>
              <p className={styles.textInfo2}>
                Nesse caso, faremos o seguinte, criaremos uma função em outro arquivo que realizará essa soma a partir da 
                questão anterior e tudo que você precisará fazer é clicar no botão soma que também foi criado nesse mesmo 
                arquivo seperado a qual estamos nos referindo.
                
              </p>
              
            </div>
           
        </div>
      </div>
    )
}

export default BlockIntroReceita;