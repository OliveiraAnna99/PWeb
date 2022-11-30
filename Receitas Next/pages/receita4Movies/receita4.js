function Movies({data}){
    return(
           <div> { data.Search.map( (m) => <div><a key={m.imdbID} href={"/receita4Movies/" + m.imdbID}>{m.Title} -- {m.Year}</a></div>)}</div>
    )
}
export async function getServerSideProps(context){
    const res = await fetch('http://www.omdbapi.com/?apikey=218bd007&s=batman');
    const data = await res.json();
    return{
        props: {
            data
        }
    }
}

export default Movies;
