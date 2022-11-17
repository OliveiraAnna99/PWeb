import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=> import('./components/navbar'),{
    suspense: true, 
 });
function Home(){
    return (
        <div>
            <Navbar />
            <center><h1>HOME</h1></center>
        </div>
    )
}

export default Home;