import dynamic from 'next/dynamic'
import styles from '../styles/Main.module.css'

const Table = dynamic(() => import('./components/table'), {
   suspense: true,
});
const TitleHome = dynamic(() => import('./components/text-home'), {
   suspense: true,
});


const ButtonCircle= dynamic(()=> import('./components/button-circle'),{
   suspense: true, 
});


const Navbar = dynamic(()=> import('./components/navbar'),{
   suspense: true, 
});

function Home({Component}){

    return (
     
            <div className={styles}>
               
                  <Navbar />
                 
                  <TitleHome/>
                
                  
            </div>
           
     
    )
 }
 
 export default Home;