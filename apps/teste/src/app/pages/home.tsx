// // // import { IPessoa, UsePessoas } from '@medclub-workspace/api-access';
// import React, { useEffect, useRef, useState } from 'react';
// import ReactModal from 'react-modal';

// // export interface IPessoa {
// //   id: number;
// //   name: string;
// //   email: string;
// //   number: string;
// // }

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: '50%',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// // };
// // ReactModal.setAppElement('#root');

// // const Home = () => {
// //   const [loading, setLoading] = useState(false);
// // const [isOpen, setIsOpen] = React.useState(false);
// //   const [name, setName] = React.useState('');
// //   const [email, setEmail] = React.useState('');
// //   const [phoneNumber, setPhoneNumber] = React.useState('');

// //   const apiURL = 'http://localhost:3333/api/pessoas/';

// // function openModal() {
// //   setIsOpen(true);
// // }
// // function closeModal() {
// //   setIsOpen(false);
// // }

// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault();

// //     setPessoas(p = await UsePessoas());

// //     await fetch(apiURL, {
// //       method: 'POST',
// //       body: JSON.stringify(pessoa),
// //       headers: {
// //         'Content-type': 'application/json',
// //       },
// //     });

// //     setPessoas(prevState => [...prevState, pessoa]);

// //     console.log(pessoa);
// //     console.log(name, email, phoneNumber);
// //     setName('');
// //     setEmail('');
// //     setPhoneNumber('');
// //     closeModal();

// //     const UsePessoas = () => {
// //       useEffect(() => {
// //         const loadData = async () => {
// //           setLoading(true);
// //           const res = await fetch(apiURL)
// //             .then((res) => res.json())
// //             .then((data) => data)
// //             .catch((err) => console.log(err));
// //           setLoading(false);
// //           setPessoas(res);
// //         };

// //         fetch(apiURL)
// //           .then((r) => r.json())
// //           .then((d) => {
// //             setPessoas(d);
// //           })
// //           .catch((err) => {
// //             console.log(err);
// //           });

// //         loadData();

// //       }, []);
// //   };

// //     // return pessoas.map((item) => {
// //     //   return(
// //     //     <tr key={item.id}>
// //     //       <td>{item.id}</td>
// //     //       <td>{item.name}</td>
// //     //       <td>{item.email}</td>
// //     //       <td>{item.number}</td>
// //     //       <td>
// //     //         <button onClick={() => excluirPessoa(item.id)}>Modificar</button>
// //     //         <button onClick={() => excluirPessoa(item.id)}>Excluir</button>
// //     //       </td>
// //     //     </tr>
// //     //   );
// //     // });

// // function novaPessoaModal() {
// //   return (
// //     <>
// //       <div className="modalTitle">
// //         <h2>Nova Pessoa</h2>
// //         <input type="button" onClick={closeModal} value="Fechar" />
// //       </div>
// //       <div>
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="nome">Nome: </label>
// //           <input
// //             type="text"
// //             name="nome"
// //             placeholder="Nome da Pessoa"
// //             onChange={(e) => setName(e.target.value)}
// //             value={name || ''}
// //             required
// //           />
// //           <label htmlFor="email">Email: </label>
// //           <input
// //             type="text"
// //             name="email"
// //             placeholder="Seu melhor email"
// //             onChange={(e) => setEmail(e.target.value)}
// //             value={email || ''}
// //             required
// //           />
// //           <label htmlFor="numero">Número de Telefone</label>
// //           <input
// //             type="text"
// //             name="numero"
// //             placeholder="Número com DDD"
// //             onChange={(e) => setPhoneNumber(e.target.value)}
// //             value={phoneNumber || ''}
// //           />
// //           <button type="submit">Cadastrar</button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }

// //   return (
// //     <>
// //       <div className="Header">
// //         <h1>Teste Med Clube</h1>
// //       </div>
// //       <div className="Actions">
// //         <ul>
// //           <li>
// //             <button onClick={openModal}>Nova Pessoa</button>
// //             <ReactModal
// //               isOpen={isOpen}
// //               onRequestClose={closeModal}
// //               style={customStyles}
// //               className="modal"
// //             >
// //               {novaPessoaModal()}
// //             </ReactModal>
// //           </li>
// //           <li>
// //             <button>Buscar Pessoa</button>
// //           </li>
// //         </ul>
// //       </div>
// //       <div>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Id</th>
// //               <th>Nome</th>
// //               <th>Email</th>
// //               <th>Número</th>
// //               <th>Ação</th>
// //             </tr>
// //           </thead>
// //           <tbody>{usePessoas}</tbody>
// //         </table>
// //       </div>
// //     </>
// //   );
// // }}

// // export default Home;
