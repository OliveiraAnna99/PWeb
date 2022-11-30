
export default function Movies({data}){

    return (
        <div>
            <div>
                <div><center><img src={data.Poster}></img></center> <center>{data.Title} -- {data.Year}</center></div>             
            </div>
           
        </div>
    )

}


function transformar(elemento){

    return (<div>{elemento.Title} --- {elemento.Year}</div>)
 
 }


 export async function getServerSideProps(context){
    const { imdbID } = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=218bd007&s=` + imdbID)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
  
  }