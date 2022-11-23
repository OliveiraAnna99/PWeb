
export default function Movies({data}){

    return (
        <div>
            <div>
                 {/* Questão 2 da Receita 3 exibir imagem*/}
                 {data.Search.map( (m) => <div><center><img src={m.Poster}></img></center> <center>{m.Title} --- {m.Year}</center></div> )}               
            </div>
            <div>
                 <img src={data.Poster}></img>            
            </div>
        </div>
    )

}


function transformar(elemento){

    return (<div>{elemento.Title} --- {elemento.Year}</div>)
 
 }


 export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=218bd007&s=bagdad`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
  
  }