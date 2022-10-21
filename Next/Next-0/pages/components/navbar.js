import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
export default function Navbar(){
    
    return (
       <div>
    
         <nav className="table">
            <div class="container-fluid">
                <ul className={styles.navbar}>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </div>
          </nav>
       </div>

    )
 }