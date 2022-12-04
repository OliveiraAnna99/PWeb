
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

function Receita6(){
    return(
        <div>
            <Card>
            <CardHeader tag="h1">Receita 6</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">
                        1. Resolver o erro que ocorre ao buscar por uma coisa que não está na lista de filmes
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para resolver esse problema utilizamos data.Search &&, esse arquivo se encontra no diretório pages, arquivo 'movies33.js', confira o resultado através do botão abaixo
                    </CardText>
                    <Button color="warning" href="/movies33">Exercicio 1</Button>
                </CardBody>
                   {/* Card do Exercicio 2*/ }
                   <CardBody>
                    <CardHeader tag="h3">Exercicio 2</CardHeader> 
                    <CardSubtitle tag ="h6">
                        2. Criar validação que evita do formulário ser submetido quando está vazio
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para resolver esse problema ....
                    </CardText>
                    <Button color="warning" href="/movies333">Exercicio 2</Button>
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Receita6;