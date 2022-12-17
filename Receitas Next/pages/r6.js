import useSWR from 'swr'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, Spinner, FormText, FormFeedback} from 'reactstrap';

export function TheForm(){
   
    return (
        <div>
            <center>
            
                <Form inline method='GET'>
                  <FormGroup className="mb-2 mr-sm-2">
                    <Label htmlFor="titleSearchString">Filtro  de Titulo</Label>
                    <Input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>
                  </FormGroup>
                </Form>
             
            </center>
        </div>
    )
}
function loading(){
    return(
        <div>
            <Spinner size='sm'/>
        </div>
    );
}
export function TheMovies({data,show, error}){

    if (!show) return (<div></div>)
    if (!data) return (<div>Não encontrado</div>)
    if (data.error) return (<div>Falha na pesquisa</div>)
    if (data.Search === '' ) return (<div><br></br>

        <Spinner size='sm'/>
        <div>
            Resultado não encontrado
        </div>
    </div>)
    return (
        <div>
            <br></br>
                
                { data.Search && data.Search.map( (m) => 
                    <div key={m.imdbID}> 
                       {m.Title} -- {m.Year}
                    </div> ) 
                    
                }

                
               
        </div>

       
    )
    
    
}



export function TheLink({url, handler}){

    return (
        <div>
            <Button color='primary' onClick={handler} href="/movies3.js"> 
                  {url === '' ? 'Mostrar' : 'Ocultar'} 
            </Button>
        </div>
    )

}

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}
        const res = await fetch(`${state.url}/?apiKey=218bd007&s=${state.titleSearchString}`)
        const json = await res.json();
        return json;

    })

    const onClickHandler = e => {

        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        if (state.url === '') {
            setState({url:'http://www.omdbapi.com',titleSearchString:s})
        }
        else setState({url:'',titleSearchString: state.titleSearchString})

    }


    const sizeCard = {width: "50%"}
    return (

        <div>
         <center>
            <Card style={sizeCard}>
              <CardBody>
                <TheForm/>
                <TheLink url={state.url} handler={onClickHandler} />
                <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />
              </CardBody>
            </Card>
         </center>
        </div>

    )

}