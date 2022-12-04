import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Card, CardBody} from 'reactstrap';

export default function Movies({data, pesquisar}){
    const sizeCard = {width: "20%"}
    return (
        <div>
          <br></br>
          <center>
            <Card style={sizeCard}>
              <CardBody>
                <Form inline method='GET'>
                  <FormGroup className="mb-2 mr-sm-2">
                    <Input type="text" name="pesquisar" placeholder="Buscar por ..."  defaultValue={pesquisar} />
                  </FormGroup>
                  <Button color='primary'>Search</Button>
                </Form>
                <br></br>
                <div>
                 {/* Questão 1 da Receita 3 realizar pesquisas por titulo e ano*/}
                 {data.Search.map( (m) => <center><Label>{m.Title} -- {m.Year}</Label></center>  )}               
                </div>
              </CardBody>
            </Card>
          </center>
          
         
           
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