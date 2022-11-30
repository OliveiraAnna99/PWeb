import useSWR from 'swr'
import {useRouter} from 'next/router'

function localizacao(){
    const router = useRouter();
    const {imdbID} = router.query
    const {data, error} = useSWR('https://extreme-ip-lookup.com/json/?key=jzPdzlq02qwLTHSmg9cs', fetcher);
    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            {Object.keys(data).map( m => (
                <div>
                    <center><h2><b>{m}:</b></h2> {data[m]}</center> 
                </div>
            ))}
        </div>
    )    
}

async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export default localizacao;