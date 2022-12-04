import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import {fatorial, somar} from '../elementos/function-soma'
function FormSoma(){

    return(
        <div>
            <Form method='POST' action=''>
                <FormGroup>
                    <Label>1º Parcela</Label>
                    <Input type='text' placeholder='Digite um número' id='v1'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>2º Parcela</Label>
                    <Input type='text' placeholder='Digite um número' id='v2'></Input>
                </FormGroup>
                <Button color='warning' onClick={somar}>Somar</Button>
            </Form>
            <Label>
                Resultado: <Label id='resultado2'></Label>
            </Label>
        </div>
    );
}

function FormFatorial(props){

    return(
        <div>
            <Form method='POST' action=''>
                <FormGroup>
                    <Label>Número</Label>
                    <Input type='text' placeholder='Digite um número' id='fac1'></Input>
                </FormGroup>
                <Button color='warning' onClick={fatorial}>Fatorial</Button>
            </Form>
            <Label>
                Resultado: <Label id={props.name}></Label>
            </Label>
        </div>
    );
}

export {FormSoma};
export {FormFatorial};