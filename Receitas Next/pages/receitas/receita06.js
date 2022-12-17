
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
                        Para resolver esse problema criamos uma condição que verifica se data.Search = '' está vazia
                        caso ele esteja, ou o resultado da requisição do usuário não esteja na lista ele receberá 
                        como retorno um Spinner que é basicamente a animação de um carregamento como se ela ainda 
                        estivesse requisitando aquelas informações e logo abaixa uma mensagem informando que não foi 
                        encontrado o valor requisitado
                    </CardText>
                    <Button color="warning" href="/movies333">Exercicio 2</Button>
                </CardBody>
                {/* Card do Exercicio 3*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 3</CardHeader> 
                    <CardSubtitle tag ="h6">
                    3. Faça uma nova página em que, após o usuário teclar enter, a pesquisa é feita sem a necessidade do clique no link.
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para verificar a resolução dessa questão, clique no botão abaixo
                    </CardText>
                    <Button color="warning" href="/r6q3">Exercicio 3</Button>
                </CardBody>
                 {/* Card do Exercicio 4*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 4</CardHeader> 
                    <CardSubtitle tag ="h6">
                    4. Faça uma nova página, acrescentando mais campos ao formulário, com pesquisas mais específicas.
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para verificar a resolução dessa questão, clique no botão abaixo
                    </CardText>
                    <Button color="warning" href="/r6q4">Exercicio 4</Button>
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Receita6;