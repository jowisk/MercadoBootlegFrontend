import React from 'react';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import ImageSlider from './components/ImageSlider/ImageSlider';
import PaymentMethodList from './components/PaymentMethodList/PaymentMethodList';
import ProductList from './components/ProductList/ProductList';
import DiscoverList from './components/Discover/DiscoverList';
import Footer from './components/Footer/Footer';

function App() {

  const [menuState, setMenuState] = useState(false)
  
  const handleMenuState = () => {
    setMenuState(!menuState)
  }

  const slides = [
    {url: "http://localhost:3000/slide1.jpg", name: "hola"},
    {url: "http://localhost:3000/slide2.jpg", name: "hola"},
    {url: "http://localhost:3000/slide3.jpg", name: "hola"},
  ]

  const discover = [
    {title: "calzado", desc:"¡renova tu look!", img: "http://localhost:3000/discover1.jpg"},
    {title: "moda de invierno", desc:"tu look ideal", img:"http://localhost:3000/discover2.jpg"}
  ]

  const footerItems = [
    {icon: "id-card", title: "Paga con Mercado Pago", desc: "Usa Mercado Pago, la solución de Mercado Libre para pagar de forma segura y con el medio de pago que prefieras.", how: "Cómo pagar con Mercado Pago"},
    {icon: "box", title: "Envío gratis desde $ 2.000", desc: "Elige Mercado Envíos en tus compras y disfruta de envíos gratis en miles de productos nuevos.", how: "Cómo recibo compras con Mercado Envíos"},
    {icon: "shield", title: "Seguridad, de principio a fin", desc: "¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.", how: "Cómo te protegemos"},
  ]

  const lists = [
    {title: "Basado en tu última visita", products: [
      {id: 0, name: "Parlante JBL", url: "http://localhost:3000/img4.jpg", price: "150", currency:"U$S", discount:"2"},
      {id: 1, name: "Mouse", url:"http://localhost:3000/img2.jpg", price: "25", currency:"U$S", discount:"10"}
    ]},
    {title: "Relacionado con tus visitas en", products: [
      {id: 0, name: "Monitor 144Hz", url: "http://localhost:3000/img3.jpg", price: "300", currency:"U$S", discount: "0"},
      {id: 1, name: "Caja", url: "http://localhost:3000/img1.jpg", price: "20", currency:"$", discount: "50"}
      
    ]},
    {title: "Ofertas", products: [
      {id: 0, name: "Tapita", url: "http://localhost:3000/img5.jpg", price: "1000", currency:"$", discount: "99"},
      {id: 1, name: "Vasito", url: "http://localhost:3000/img6.jpg", price: "5", currency:"$", discount: "1"},
    ]}
  ]

  if (!menuState) {
    return (
      <div>
  
        <Header
          handleMenuState={handleMenuState}
          menuState={menuState}
        />
  
        <Nav
          name={"Joe"}
          address={"Paraguay 2141"}
        />
  
        <div className="w-full h-[250px] m-auto">
          <ImageSlider
            slides={slides}
          />
        </div>
  
        <div className="px-[20px]">
          <PaymentMethodList

          />
        </div>
        {lists.map((list) => (
          <ProductList
            title = {list.title}
            products = {list.products}
          />
        ))}

        <div className="px-[20px]">
          <DiscoverList
            discover={discover}
          />
        </div>
  
        <Footer
          footerItems = {footerItems}
        />
  
      </div>
    );
  }
  return (
    <div>
      <Header
          handleMenuState={handleMenuState}
          menuState={menuState}
        />
      <Menu

      />

      <div className="w-full h-[280px] m-auto">
          <ImageSlider
            slides={slides}
          />
        </div>
  
        <div className="px-[5px]">
          <PaymentMethodList

          />
        </div>
        {lists.map((list) => (
          <ProductList
            title = {list.title}
            products = {list.products}
          />
        ))}

  
        <DiscoverList
          discover={discover}
        />
  
        <Footer
          footerItems = {footerItems}
        />
    </div>
  )
  
}

export default App;
