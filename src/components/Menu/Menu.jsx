import React from 'react'
import Item from './Item'
import MenuList from './MenuList'
import MenuHeader from './MenuHeader'
const Menu = ({name, email, pfp}) => {

  const accountList = [
    {icon: "house", text: "Inicio"},
    {icon: "bell", text: "Notificaciones"},
    {icon: "bag-shopping", text: "Mis compras"},
    {icon: "heart", text: "Favoritos"},
    {icon: "tag", text: "Ofertas"},
    {icon: "clock", text: "Historial"},
    {icon: "user", text: "Mi cuenta"},
    {icon: "headphones", text: "Ayuda"}
  ]

  const shopList = [
    {icon: "shirt", text: "Moda"},
    {icon: "shop", text: "Tiendas oficiales"},
    {icon: "list", text: "Categorias"},
  ]

  const resumeList = [
    {icon: "clock", text: "Resumen"},
    {icon: "tags", text: "Vender"}
  ]

  const buyAndSell = [
    {icon: "arrow-down-to-line", name: "¡Compra y vende con la app!"}
  ]

  return (
    <div className="h-screen bg-white">
      <MenuHeader
        name = {name}
        email = {email}
        pfp = {pfp}
      />
      <div className="">
        <MenuList
          list = {accountList}
        />
      </div>

      <div className="">
        <MenuList
          list = {shopList}
        />
      </div>
      <div className="">
        <MenuList
          list = {resumeList}
        />
      </div>
      <div className="">
        <MenuList
          list = {buyAndSell}
        />
      </div>
    </div>
  )
}

export default Menu