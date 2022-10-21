import dynamic from 'next/dynamic'
import styles from '../styles/Table.module.css'
const Table = dynamic(() => import('./components/table'), {
   suspense: true,
});

const Navbar = dynamic(()=> import('./components/navbar'),{
   suspense: true, 
});

export default function Home(){

    return (
       <div>
         <Navbar />
          <h2>
            Viva Santana!
          </h2>
          <Table />
      
       </div>

    )
 }
 