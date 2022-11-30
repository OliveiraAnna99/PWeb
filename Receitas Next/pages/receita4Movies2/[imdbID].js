import useSWR from 'swr'
import { useRouter } from 'next/router'

function Movies(){
    const router = useRouter();
    const {imdbID} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=218bd007&s=`+ imdbID, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return(
        <div><center><img src={data.Poster}></img></center> <center>{data.Title} --- {data.Year}</center></div>   
         )
}
async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export default Movies;
