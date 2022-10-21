import dynamic from 'next/dynamic'
const Tabela = dynamic(() => import('./components/table'), {
   suspense: true,
})

export default function Home(){

    return (
       <div>
          <h2>
            Viva Santana!
          </h2>
          <Tabela />
       </div>

    )
 }