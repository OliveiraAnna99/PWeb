
export default function Movies({data}){

    return (
        <div>
            <div>
                 {/* Questão 1 da Receita 3 realizar pesquisas por titulo e ano*/}
                 {data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  )}               
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