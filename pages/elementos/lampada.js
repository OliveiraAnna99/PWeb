import styles from '../../styles/Main.module.css'

function ModelDL(){
    return (
        <label className={styles.switch}>
            <button className={styles.btnSwitch} type='text'><div className={styles.bola}></div> </button>
            <span className={styles.slider}></span>
        </label>
    );
}
function Darklight(){
    return(
        <div>
            
            <ModelDL/>
        </div>
    );
}

export {Darklight}