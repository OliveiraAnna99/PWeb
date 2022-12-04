
import dynamic from 'next/dynamic'

import {FormSoma} from '../elementos/form-soma';
import {FormFatorial} from '../elementos/form-soma';
import { Button } from 'reactstrap';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Receita2(){
    return(
        <div>
            <Card>
                <CardHeader tag="h1">Receita 2</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">
                       1. Criando novos componentes e novas páginas em subdiretórios
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                      Para realizar esse exercicio, um subdiretório chamado de 'elementos' foi criado dentro da pasta 'pages' 
                      e dentro dele foram criadas, novas funções que exibiremos nessa tela, afim de verificar se nossa
                      atividade foi bem sucedida. Criamos o arquivo 'form-soma.js' dentro desse subdiretório e nela 
                      criamos um componente input, com toda a estilização necessária pra que esse elemento fique minimamente agradável  
                    </CardText>
                    <FormSoma/>
                </CardBody>
                {/* Card do Exercicio 2*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 2</CardHeader> 
                    <CardSubtitle tag ="h6">
                       2. Fazendo a página utilizar um component de um arquivo diferente
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                          Nesse caso, faremos o seguinte, criaremos uma função em outro arquivo que realizará essa soma a partir da 
                        questão anterior e tudo que você precisará fazer é clicar no botão soma que também foi criado nesse mesmo 
                        arquivo separado a qual estamos no referindo     
                    </CardText>
                   
                </CardBody>

                 {/* Card do Exercicio 3*/ }
                 <CardBody>
                    <CardHeader tag="h3">Exercicio 3</CardHeader> 
                    <CardSubtitle tag ="h6">
                         3. Crie um novo componente ou utilize algum componente já criado e passe alguns parametros.
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                            Nesse caso, criamremos um novo componente dentro da pasta "elementos", como fizemos com a função de soma, no "form-soma", montamos a estrutura de
                      um novo form que utilizará o Props como parametro, ele se chamará de 'FormFatorial', na div onde o resultado seria exibido passamoso "props.name" 
                      ao invés do id, sendo assim esse será substituído pelo parametro para passado através do
                        o "FormFatorial name ='resultado'", nesse exemplo aqui ele vai interpretar o id como sendo 'resultado'
                        pois foi esse o parametro que passamos pro componente
                    </CardText>
                    <FormFatorial name ='resultado'/>

                </CardBody>
            </Card>
      </div>

    );
}

export default Receita2;