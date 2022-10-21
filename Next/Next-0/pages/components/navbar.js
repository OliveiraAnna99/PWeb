import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
export default function Navbar(){
    
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>           
        </div>
    
    )
 }