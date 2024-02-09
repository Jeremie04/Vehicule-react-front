import React from 'react'

import logo from "../../assets/images/logos/auto.png" ;

const menus = [
  {
    title: "Liste Annonce",
    icon: "ti ti-layout-dashboard", 
    url: "/liste-annonce",
  },
  {
    title: "Historique Annonce",
    icon: "ti ti-article",
    url: "/login",
  },
  {
    title: "Favoris",
    icon: "ti ti-star text-warning",
    url: "/favoris-annonce",
  },
  {
    title: "Messages",
    icon: "ti ti-star text-warning",
    url: "/mes-messages",
  }
];


const Sidebar = () => {
  return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <a href="./index.html" className="text-nowrap logo-img justify-content-center">
                        <img src={logo} width="100%" alt="" />
                    </a>
                </div>
                <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Annonce</span>
                        </li>
                        {menus.map((menu, index) => (
                            <li key={index} className="sidebar-item">
                                <a className="sidebar-link" href={menu.url} aria-expanded="false">
                                    <span>
                                        <i className={menu.icon}></i>
                                    </span>
                                    <span className="hide-menu">{menu.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
  )
}

export default Sidebar