import React from 'react';
import Sidebar from './Sidebar';
import Post from './Post';
import '../CSS/Home.css';
import publicacao01 from '../imgs/publicacao01.png';
import publicacao02 from '../imgs/publicacao02.png';
import publicacao03 from '../imgs/publicacao03.png';

function Home() {
  return (
    <div className="main-content">
      <Sidebar />
      <h1 className="text-home">Publicações</h1>
      <div className="post-list">
        <Post title="Título do prato 01" location="Local 01 - Maceió-AL" likes={9} dislikes={1} comments={4} imageUrl={publicacao01} />
        <Post title="Título do prato 02" location="Local 02 - Maceió-AL" likes={9} dislikes={2} comments={10} imageUrl={publicacao02} />
        <Post title="Título do prato 03" location="Local 03 - Maceió-AL" likes={1} dislikes={1} comments={2} imageUrl={publicacao03} />
      </div>
    </div>
  );
}

export default Home;
