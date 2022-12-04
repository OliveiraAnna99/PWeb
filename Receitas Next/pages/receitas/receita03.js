
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

function Receita3(){
    return(
        <div>
            <Card>
                <CardHeader tag="h1">Receita 3</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">
                         1. Realizando pesquisas por titulo e ano
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                          Para realizar esse exercicio foi criado um arquivo nomeado de "movies_1.js", utilizamos 
                      o parametro intitulado de 'data'. Utilizamos o "fetch" para fazer uma requisição a uma
                      API e fizemos uso do "await" para esperar essa requisão que retorna uma 'promessa'. Para 
                      observar o seu funcionamento clique no botão abaixo
                    </CardText>
                    <Button color="warning" href='/movies_1?pesquisar=bagdad'>Exercicio 1</Button>
                </CardBody>
                 {/* Card do Exercicio 2*/ }
                 <CardBody>
                    <CardHeader tag="h3">Exercicio 2</CardHeader> 
                    <CardSubtitle tag ="h6">
                        2. Exibir além do titulo uma imagem com o poster do filme 
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                          Para realizar esse exercicio foi criado um arquivo nomeado de "movies_2.js", utilizamos 
                      o parametro intitulado de 'data'. Porém ao invés de pegarmos apenas as informações referentes 
                      ao titulo e ano, usaremos também o valor "Poster" que indica o endereço da imagem, dessa forma
                      conseguimos usar através da busca "data.Search", o valor 'm.Poster' que será substituído por
                      essas informações e nos mostrará a imagem referente.
            
                    </CardText>
                    <Button color="warning" href='/movies_2'>Exercicio 2</Button>
                </CardBody>
                 {/* Card do Exercicio 3*/ }
                 <CardBody>
                    <CardHeader tag="h3">Exercicio 3</CardHeader> 
                    <CardSubtitle tag ="h6">
                        3. Buscar por outras palavras chaves o filme
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                              Para realizar esse exercicio foi criado um arquivo nomeado de "movies_3.js", utilizamos 
                        o parametro intitulado de 'data' e o parametro 'pesquisar' que vai utilizar o metodo GET
                        no formulario, indicando assim que valor da busca será passado pela rota. Através dele
                        modificaremos a url da API, para que ela exiba os filmes de acordo com o que o usuário 
                        digitar na busca
                    </CardText>
                    <Button color="warning" href='/movies_3?pesquisar=bagdad'>Exercicio 3</Button>
                </CardBody>
            </Card>     
      </div>

    );
}

export default Receita3;