import dynamic from 'next/dynamic';
import styles from '../../styles/Main.module.css';


const Receita1 = dynamic(() => import('../receitas/receita01'), {
  suspense: true,
});

const Receita2 = dynamic(() => import('../receitas/receita02'), {
  suspense: true,
});

const Receita3 = dynamic(() => import('../receitas/receita03'), {
  suspense: true,
});
const Receita4 = dynamic(() => import('../receitas/receita04'), {
  suspense: true,
});
function BlockIntroReceita(){
    return(
      <div className={styles.receita}>
            <Receita1 />
            <Receita2 />
            <Receita3 />
            <Receita4 />
      </div>
    )
}

export default BlockIntroReceita;