import dynamic from 'next/dynamic';
import styles from '../styles/Main.module.css';

function Pet(){
    return(
        <div className={styles.gifAnimate}>
             <img className={styles.gif} src="../lobo.gif"></img>
        </div>
    );
}
/* Como no vercel os componentes devem ser export default, vou pecisar modificar
o codigo da questão 1, mas da pra fazer dessa forma abaico:
export {Pet}; */