import React from 'react';
import { Navbar } from './powerk-soft/navbar.jsx';
import Baniere from './powerk-soft/baniere.jsx';
import Apropos from './powerk-soft/apropos.jsx';
import Service from './powerk-soft/service.jsx';
import Equipe from './powerk-soft/equipe.jsx';
import Portfolio from './powerk-soft/produit.jsx';
import Client from './powerk-soft/nos_client.jsx';
import Contact from './powerk-soft/contact.jsx';
import Footer from './powerk-soft/footer.jsx';
import Blog from './powerk-soft/blog.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Baniere />
      <Apropos />
      <Service />
      <Equipe />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
