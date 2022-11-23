/*http://www.omdbapi.com/?apikey=218bd007&s=bagdad*/
/*
function Movies(){

    const data = {

  "Search": [

    {

      "Title": "Bagdad Café",
      "Year": "1987",
      "imdbID": "tt0095801",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmUwZGZhZTktNGNmOS00NDA0LWEzYWUtZjE2ODA5OTM2OTc2XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"

    },

    {

      "Title": "The Thief of Bagdad",
      "Year": "1940",
      "imdbID": "tt0033152",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"

    },

    {

      "Title": "Bagdad",
      "Year": "1949",
      "imdbID": "tt0041149",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjAxYTJmMmItYzZhMS00OWMwLTkxMjEtZjVmNmM3ZGRlZTljXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg"

    },

    {

      "Title": "Bowery to Bagdad",
      "Year": "1955",
      "imdbID": "tt0044388",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTMwMTUyZTktOTk4OC00ZGY2LWFmMzAtYjkxMWMxNjdmOTg4XkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg"

    },

    {

      "Title": "Babes in Bagdad",
      "Year": "1952",
      "imdbID": "tt0044389",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmNmRlNzAtZDNjYi00ZjQ0LTljYTktZGUxOGNhMjFhZWI1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"

    }
  ],

  "totalResults": "59",
  "Response": "True"

}

    return (
         <div>            
            { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>) }      
            <br></br>      
            <br></br>      
            <br></br>
            { data.Search.map(transformar) }        
         </div>

    )

}
*/
export default function Movies({data, pesquisar}){

    return (
        <div>
           <center>
              <form method="GET">
                  <input type="text" name="pesquisar" placeholder="Busque por ..." defaultValue={pesquisar}></input>
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