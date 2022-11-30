import useSWR from 'swr'


function Movies(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=218bd007&s=batman`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return(
           <div> { data.Search.map( (m) => <div><a key={m.imdbID} href={"/receita4Movies2/" + m.imdbID}>{m.Title} -- {m.Year}</a></div>)}</div>
    )
}
async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export default Movies;
