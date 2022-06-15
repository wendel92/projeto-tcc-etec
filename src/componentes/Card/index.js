import './style.css'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

// import { getStorage, ref, getDownloadURL } from "firebase/storage";

// const storage = getStorage();
// getDownloadURL(ref(storage, 'images/stars.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     // Or inserted into an <img> element
//     const img = document.getElementById('myimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });

export default function Card(produtos) {
  const [user, setUser] = useState()
  const [valor, setValor] = useState('')

  useEffect(() => {
    setValor(produtos.preco.replace('.', ','))
  }, [])

  // const produtos = [
  //   {
  //     id: 1,
  //     nome: 'Vela',
  //     preco: 'R$ 10,00',
  //     stock: '10',
  //     file: 'https://firebasestorage.googleapis.com/v0/b/tcc-iluminadas.appspot.com/o/1655002280446_vela.jpg?alt=media&token=afc2aeae-bb2d-4fef-b431-f17d7e4a456f',
  //   },
  //   {
  //     id: 2,
  //     nome: 'Vela',
  //     preco: 'R$ 10,00',
  //     stock: '10',
  //     file: 'https://firebasestorage.googleapis.com/v0/b/tcc-iluminadas.appspot.com/o/1655002280446_vela.jpg?alt=media&token=afc2aeae-bb2d-4fef-b431-f17d7e4a456f',
  //   },
  //   {
  //     id: 3,
  //     nome: 'Vela',
  //     preco: 'R$ 10,00',
  //     stock: '10',
  //     file: 'https://firebasestorage.googleapis.com/v0/b/tcc-iluminadas.appspot.com/o/1655002280446_vela.jpg?alt=media&token=afc2aeae-bb2d-4fef-b431-f17d7e4a456f',
  //   },
  //   {
  //     id: 4,
  //     nome: 'Vela',
  //     preco: 'R$ 10,00',
  //     stock: '10',
  //     file: 'https://firebasestorage.googleapis.https://firebasestorage.googleapis.com/v0/b/tcc-iluminadas.appspot.com/o/1655002280446_vela.jpg?alt=media&token=afc2aeae-bb2d-4fef-b431-f17d7e4a456f/v0/b/tcc-iluminadas.appspot.com/o/1655002280446_vela.jpg?alt=media&token=afc2aeae-bb2d-4fef-b431-f17d7e4a456f',
  //   }
  // ]

  // const ids = produtos.map(produto => produto.id);

  // Adicionando informações do bd no card.
  return (
    <div className="card-container">
      <div className="description">
        <img
          className="productImage"
          src={'file' + produtos.file}
          alt={''}
        />
        <p className="font-description">{produtos.nome}</p>
        <b>
          <p>R$ {valor}</p>
        </b>
      </div>
    </div>
  )
}
