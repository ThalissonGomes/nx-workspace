import { valHooks } from 'jquery';
import { useState, useEffect } from 'react';

export interface IPessoa {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const apiURL = 'http://localhost:3333/api/pessoas/';

export function Index() {
  const [pessoas, setPessoas] = useState<IPessoa[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  //get all
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(apiURL)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error));

      setLoading(false);

      setPessoas(res);
    };

    loadData();
  }, []);
  //get one by id
  const HandleOneById = async (id: number) => {
    useEffect(() => {
      const res = fetch(apiURL + id)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error));

      // setPessoas(res);
      console.log(res);
    }, [id]);
  };
  //post
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const pessoa = {
      name,
      email,
      phoneNumber,
    };

    await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(pessoa),
      headers: { 'Content-Type': 'application/json' },
    });

    const last = await fetch(apiURL)
      .then((res) => res.json())
      .then((d) => d)
      .catch((error) => console.log(error));

    setPessoas((prevState) => last);

    setName('');
    setEmail('');
    setPhoneNumber('');
  };
  //delete
  const handleDelete = async (id: number) => {
    await fetch(apiURL + id, {
      method: 'DELETE',
    });
    setPessoas((prevState) => prevState.filter((p) => p.id !== id));
  };
  //update
  // const handleChange = async (p: {
  //   name: string;
  //   email: string;
  //   phoneNumber: string;
  // }) => {
  //   await fetch(apiURL + p.id, {
  //     method: 'PATCH',
  //     body: JSON.stringify(p),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   setPessoas((prevState) =>
  //     prevState.map((t) => (t.id === p.id ? (t = p) : t))
  //   );
  // };

  if (loading) {
    return <p>Carregando...'</p>;
  }

  const alterar = (p: IPessoa) => {
    // cosnt document.getElementById('cadNameInput').setAttribute('value', p.name || '');
    // document
    //   .getElementById('cadEmailInput')
    //   .setAttribute('value', p.email || '');
    // document
    //   .getElementById('cadNumberInput')
    // .setAttribute('value', p.phoneNumber || '');
    document.getElementById('cadList')?.setAttribute('hidden', '');
    document.getElementById('altList')?.removeAttribute('hidden');
  };

  const cancelAlt = () => {
    // document.getElementById('altNameInput').setAttribute('value', name || '');
    // document.getElementById('altEmailInput').setAttribute('value', email || '');
    // document.getElementById('altNumberInput').setAttribute('value', phoneNumber || '');
    document.getElementById('altList')?.setAttribute('hidden', '');
    document.getElementById('cadList')?.removeAttribute('hidden');
  };

  const cadForm = () => {
    return (
      <ul id="cadList">
        <li>
          <div className="Form">
            <div>
              <form id="submitCadForm" onSubmit={handleSubmit} hidden>
                <div className="form-control">
                  <label htmlFor="name">Nome: </label>
                  <input
                    id="cadNameInput"
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ''}
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email: </label>
                  <input
                    id="cadEmailInput"
                    type="text"
                    name="email"
                    placeholder="Seu melhor email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ''}
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phoneNumber">Número: </label>
                  <input
                    id="cadNumberInput"
                    type="text"
                    name="phoneNumber"
                    placeholder="Número de Telefone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber || ''}
                    required
                  />
                </div>
                <div>
                  <input type="submit" id="btnForm" value="Salvar" />
                </div>
              </form>
            </div>
          </div>
        </li>
      </ul>
    );
  };

  const altForm = () => {
    return (
      <ul id="altList" hidden>
        <li>
          <div className="Form">
            <div>
              <form
                id="submitAltForm"
                // onSubmit={() => handleChange({ name, email, phoneNumber })}
              >
                <div className="form-control">
                  <label htmlFor="name">Nome: </label>
                  <input
                    id="altNameInput"
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    onChange={(e) => setName(e.target.value)}
                    value={name || ''}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email: </label>
                  <input
                    id="altEmailInput"
                    type="text"
                    name="email"
                    placeholder="Seu melhor email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ''}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phoneNumber">Número: </label>
                  <input
                    id="altNumberInput"
                    type="text"
                    name="phoneNumber"
                    placeholder="Número de Telefone"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber || ''}
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    id="btnForm"
                    value="Cancelar"
                    onClick={() => cancelAlt()}
                  />
                  <input type="submit" value="Alterar" />
                </div>
              </form>
            </div>
          </div>
        </li>
      </ul>
    );
  };

  // const btnAlt = (p: IPessoa) => {
  //   return (
  //     <ul>
  //       <li>
  //         <button>Alterar</button>

  //         <div className="Form">
  //           <h2>Formulário</h2>
  //           <div>
  //             <form>{formInputs(p.name, p.email, p.phoneNumber)}</form>
  //           </div>
  //         </div>
  //       </li>
  //     </ul>
  //   );
  // };

  // const btnFind = () => {
  //   return (
  //     <ul>
  //       <li>
  //         <button>Procurar</button>

  //         <div className="Form">
  //           <h2>Pesquisa</h2>
  //           <div className="modalTitle">
  //             <input type="button" onClick={closeModal} value="Fechar" />
  //           </div>
  //           <div>
  //             <form>
  //               <div className="form-control">
  //                 <label htmlFor="name">Nome: </label>
  //                 <input
  //                   type="text"
  //                   name="name"
  //                   placeholder="Nome Completo"
  //                   onChange={(e) => setName(e.target.value)}
  //                   value={name || ''}
  //                 />
  //               </div>
  //               <div className="form-control">
  //                 <label htmlFor="email">Email: </label>
  //                 <input
  //                   type="text"
  //                   name="email"
  //                   placeholder="Seu melhor email"
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   value={email || ''}
  //                 />
  //               </div>
  //               <div className="form-control">
  //                 <label htmlFor="phoneNumber">Número: </label>
  //                 <input
  //                   type="text"
  //                   name="phoneNumber"
  //                   placeholder="Número de Telefone"
  //                   onChange={(e) => setPhoneNumber(e.target.value)}
  //                   value={phoneNumber || ''}
  //                 />
  //               </div>
  //               <input type="submit" value="Salvar" />
  //             </form>
  //           </div>
  //         </div>
  //       </li>
  //     </ul>
  //   );
  // };

  // const formInputs = (nome: string, mail: string, numero: string) => {
  //   return (
  //     <>
  //       <div className="form-control">
  //         <label htmlFor="name">Nome: </label>
  //         <input
  //           type="text"
  //           name="name"
  //           placeholder="Nome Completo"
  //           onChange={(e) => setName(e.target.value)}
  //           value={nome || ''}
  //           required
  //         />
  //       </div>
  //       <div className="form-control">
  //         <label htmlFor="email">Email: </label>
  //         <input
  //           type="text"
  //           name="email"
  //           placeholder="Seu melhor email"
  //           onChange={(e) => setEmail(e.target.value)}
  //           value={mail || ''}
  //           required
  //         />
  //       </div>
  //       <div className="form-control">
  //         <label htmlFor="phoneNumber">Número: </label>
  //         <input
  //           type="text"
  //           name="phoneNumber"
  //           placeholder="Número de Telefone"
  //           onChange={(e) => setPhoneNumber(e.target.value)}
  //           value={numero || ''}
  //           required
  //         />
  //       </div>
  //       <input type="submit" value="Salvar" />
  //     </>
  //   );
  // };

  return (
    <div className="App">
      <div className="Header">
        <h1>Formulário</h1>
      </div>
      <div>
        <span>
          {cadForm()}
          {altForm()}
          {/* {btnFind()} */}
        </span>
      </div>

      <div className="Tabela">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Número Tel.</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {pessoas.length === 0 && (
              <tr>
                <th>Não existem pessoas Cadastradas.</th>
              </tr>
            )}
            {pessoas.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phoneNumber}</td>
                <td>
                  <button onClick={() => alterar(p)}>Alterar</button>
                  <input
                    type="button"
                    value="Excluir"
                    onClick={() => handleDelete(p.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
