
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

function Receita9(){
    return(
        <div>
            <Card>
            <CardHeader tag="h1">Receita 9</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">
                        1. Reproduzir os passos da receitas, porém utilizando outra API
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para fazer o exercicio 1, utilizamos a seguinte a API:
                    </CardText>
                    <Button color="warning" href="/receita9/index">Exercicio 1</Button>
                </CardBody>
               
            </Card>
        </div>
    )
}

export default Receita9;