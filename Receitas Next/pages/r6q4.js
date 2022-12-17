import useSWR from 'swr'

import {useState} from 'react'
import { Table, Input, Space, Typography, Spin  } from 'antd';
import 'antd/dist/antd.css'; 
import { useRouter } from 'next/router';


export default function Index(){
    const [state, setState] = useState({url: '', titleSearchString: '', yearSearchString: ''});
    const [validate, setValidate] = useState({message: ''});
    const {data, error} = useSWR(`${state.url}/?apiKey=9b30f837&&s=${state.titleSearchString}&y=${state.yearSearchString}`, async (url) => {
        if (!state.url || !state.titleSearchString || state.url === '' ||   state.titleSearchString === '') {
            return {Search:''};  
        }

        const res = await fetch(url);
        const json = await res.json();
        return json;
    })

    const onClickHandler = async e => {
        let search = document.getElementById('titleSearchString').value;
        let year = document.getElementById('yearSearchString').value;

        if (e.keyCode === 13) {
            if (search === '') {
                setValidate({message: 'O campo de pesquisa é obrigatório.'});
            } else {    
                setState({
                    url: 'https://www.omdbapi.com', 
                    titleSearchString: search,
                    yearSearchString: year
                });
                setValidate({message: ''});
            }
        }
    
    }

    return (
        <div>
            <TheForm message={validate.message} handler={onClickHandler}/>
            <a data={data ? data: {Search:''} } show={state.url !== ''} />
     
        </div>
    )
}

export function TheForm({message, handler}){
    return (
        <div className="space-align-container">
            <div className="space-align-block">
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', padding: 10}}>
                    <Input
                        id='titleSearchString'
                        name='titleSearchString'
                        placeholder="Pesquise por filmes"
                        size="middle"
                        onKeyUp={handler}
                    />
                     <Input
                        id='yearSearchString'
                        name='yearSearchString'
                        placeholder="Pesquise filmes pelo ano"
                        size="middle"
                        onKeyUp={handler}
                    />
                </Space>
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', padding: 10}}>
                    <p style={{color: 'red'}}>{ message }</p>
                </Space>
            </div>
        </div>
    )

}

const columns = [
    {
        title: 'Título',
        dataIndex: 'Title',
        render: (_, movie) => <a href={"/receita6/questao4/" + movie.imdbID}>{movie.Title}</a>,
    },
    {
        title: 'Ano',
        dataIndex: 'Year',
    },
];