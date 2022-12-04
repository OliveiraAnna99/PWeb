import dynamic from 'next/dynamic'
import styles from '../../styles/Main.module.css'
import Calculadora from '../calculadora';
import {Pet} from '../virtual-pet';
import { Button } from 'reactstrap';
import { Card, CardBody, CardText, CardLink, CardTitle, CardSubtitle, CardHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Receita1(){
    return(
        <div>
            <Card>
                <CardHeader tag="h1">Receita 1</CardHeader>
                {/* Card do Exercicio 1*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 1</CardHeader> 
                    <CardSubtitle tag ="h6">
                         1. Criando novos arquivos js no diretório pages e exibindo as funções default
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                             Adicionando arquivo "calculadora.js" dentro do diretório pages, elemento que determina os componentes que
                        formam a imagem de uma calculadora que em breve será capaz de realizar operações matemáticas, simples.
                        Observe que no processo foi utilizado o export default, como a questão sugere, uma vez que esse comando basicamente indica que o componente
                        por padrão será interpretado como uma página HTML
                    </CardText>
                    <Calculadora/>
                </CardBody>
                {/* Card do Exercicio 2*/ }
                <CardBody>
                    <CardHeader tag="h3">Exercicio 2</CardHeader> 
                    <CardSubtitle tag ="h6">
                          2. Criando novos arquivos js no diretório pages sem utilizar usar o 'default'
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                             Adicionando arquivo "virtual-pet.js" dentro do diretório pages, porém ao invés de exportar essa função 
                        como um default, vamos apenas determinar-lá como uma função comum e utilizar as chaves, tanto na exportação quanto na
                        importação para que o navegador seja capaz de interpretar esse código sem problemas.
                    </CardText>
                    <center><Pet width="60%"/></center>
                </CardBody>
            </Card>
            
      </div>

    );
}

export default Receita1;