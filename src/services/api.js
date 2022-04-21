//IMPORTAÇÃO DA BIBLIOTECA AXIOS
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// async postRegisterClient() {
//   return (
//     await axios.post(`${baseURL}/cadastrarCliente` , {
//       nome, 
//       email, 
//       senha, 
//       telefone, cpf
//     })
//     .then(function(data){
//     console.log(data);
  
//     }).catch(function(e){
//       console.log(e)
//     })

//   ).data;
// }

// // async confirmEmail(token) {
// //   return (
// //    await axios.post(`${this.serverUrl}/cadastrarCliente`, {
// //     email_confirmation_token: token,
// //    })
// //   ).data;
// //  }



export default api;


