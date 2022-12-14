
import useSWR from 'swr'
import {useRouter} from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

function localizacao(){
    const router = useRouter();
    const {imdbID} = router.query
    const {data, error} = useSWR('https://extreme-ip-lookup.com/json/?key=jzPdzlq02qwLTHSmg9cs', fetcher);
    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            <Card>
                <CardBody>
                    <CardHeader tag="h1"></CardHeader>
                    <CardTitle tag ="h3"><b>Info Location</b></CardTitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        {Object.keys(data).map( m => (       
                           <p><b>{m}:</b> {data[m]}</p>
                        ))}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )    
}

async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}

export default localizacao;