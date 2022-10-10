import { useEffect, useState } from 'react';

export interface IPessoa {
  id: number;
  name: string;
  email: string;
  password: string;
}

export function usePessoas() {
  const [pessoas, setPessoas] = useState<IPessoa[]>([]);
  const url = 'http://192.168.15.2:3333/api/pessoas';

  useEffect(() => {
    fetch(url).then((r) =>
      r.json().then((data) => {
        setPessoas(data);
      })
    );
  }, []);

  function addPessoa() {
    fetch('url', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newPessoa) => {
        setPessoas([...pessoas, newPessoa]);
      });
  }

  return (
    <>
      {/* <h1>Pessoas</h1> */}
      <ul>
        {pessoas.map((p) => (
          <li className={'pessoa'}>
            {p.id} - {p.name}
          </li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addPessoa}>
        Add Todo
      </button>
    </>
  );
  //  return pessoas;
}

export default usePessoas;
// export function People() {
//   const pessoas = usePessoas();
//   console.log(pessoas);
//    return (
//     <div>
//       <h1>Lista de Pessoas</h1>
//       {/* <h2>{people.forEach(p => p.name)}</h2> */}
//       <ul>
//         {pessoas.map(p => (
//           <li key={p.id}>
//             {p.id} - {p.name};
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
//  }
//
//  export default People;
