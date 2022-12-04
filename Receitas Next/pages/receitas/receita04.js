
import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

function Receita4(){
    return(
        <div>
          <Card>
            <CardHeader tag="h1">Receita 4</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">1. Transfomando elementos em Links para as páginas de modo que este, se comunique com o site externo</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Para verificar a resolução da questão acesse o link abaixo ou procure pela pagina 'receita4'
                    </CardText>
                    <Button color="warning" href="/receita4Movies/receita4'">Exercicio 1</Button>
                </CardBody>
                {/* Card do Exercicio 2*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 2</CardHeader> 
                    <CardSubtitle tag ="h6">2. Exibir inforrmações sobre a localização do usuário </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                              Para verificar a resolução da questão acesse o link abaixo, para resolver essa
                        questão foi necessário realizar um cadastro no site mencionado na receita para 
                        que obtermos o API key necessário para capturarmos os dados acerca da nossa localização    
                    </CardText>
                    <Button color="warning" href="/receita4t2">Exercicio 2</Button>
                </CardBody>
                 {/* Card do Exercicio 3*/ }
                 <CardBody>
                    <CardHeader tag="h3">Exercicio 3</CardHeader> 
                    <CardSubtitle tag ="h6">
                      3. Adaptar exercicio 1 para rodar dessa vez do lado do servidor usando um a outra página 
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Acesse o Link Abaixo  
                    </CardText>
                    <Button color="warning" href="/receita4Movies2/receita4">Exercicio 3</Button>
                </CardBody>
            </Card>
      </div>

    );
}

export default Receita4;