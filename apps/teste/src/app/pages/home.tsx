import { useEffect, useState } from 'react';
import { usePessoas } from '@medclub-workspace/api-access';

export interface IPessoa {
  id: number;
  name: string;
  email: string;
  number: string;
}

export function Home() {
  const [pessoa, setPessoa] = useState<IPessoa[]>([]);
  const apiURL = 'http://localhost:3333/api/pessoas/';

  useEffect(() => {
    fetch(apiURL)
      .then((r) => r.json())
      .then((d) => {
        setPessoa(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const excluirPessoa = async (id: number) => {
    await fetch(apiURL + 'id', { method: 'Delete' });
  };

  const usePessoa = () => {
    return pessoa.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.number}</td>
          <td>
            <button onClick={() => excluirPessoa(item.id)}>Excluir</button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1>Teste Med Clube</h1>
      <br />
      <ul>
        <li>
          <button>Listar Pessoas</button>
        </li>
        <li>
          <button>Nova Pessoa</button>
        </li>
        <li>
          <button>Buscar Pessoa</button>
        </li>
        <li>
          <button>Atualizar Pessoa</button>
        </li>
        <li>
          <button>Excluir Pessoa</button>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>{usePessoa()}</tbody>
      </table>
    </div>
  );
}

export default Home;
