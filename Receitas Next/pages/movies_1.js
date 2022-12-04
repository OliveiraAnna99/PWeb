import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
export default function Movies({data, pesquisar}){

    return (
        <div>
         
           <center>
              <form method="GET">
                  <input type="text" name="pesquisar" placeholder="Busque pelo ano:" defaultValue={pesquisar}></input>
                  <input type="submit" value="Buscar"></input>
              </form>
            </center> 
            <div>
                 {/* Questão 1 da Receita 3 realizar pesquisas por titulo e ano*/}
                 {data.Search.map( (m) => <center><div>{m.Title} --- {m.Year}</div></center>  )}               
            </div>
           
        </div>
    )

}


function transformar(elemento){

    return (<div>{elemento.Title} --- {elemento.Year}</div>)
 
 }


 export async function getServerSideProps(context){
    const  {pesquisar}  = context.query
    const res = await fetch(`http://www.omdbapi.com/?apikey=218bd007&s=`+ pesquisar )
    const data = await res.json()
    return {
        props: {
            data,
            pesquisar
        }
    }
  
  }