import React from 'react'

import logo from "../../assets/images/logos/dark-logo.svg" ;

const menus = [
  {
    title: "Liste Annonce",
    icon: "ti ti-layout-dashboard", 
    url: "/liste-annonce",
  },
  {
    title: "Historique Annonce",
    icon: "ti ti-article",
    url: "/historique-annonce",
  },
  {
    title: "Favoris",
    icon: "ti ti-star text-warning",
    url: "/favoris-annonce",
  }
];


const Sidebar = () => {
  return (
        <aside class="left-sidebar">
            <div>
                <div class="brand-logo d-flex align-items-center justify-content-between">
                    <a href="./index.html" class="text-nowrap logo-img">
                        <img src={logo} width="180" alt="" />
                    </a>
                    <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i class="ti ti-x fs-8"></i>
                    </div>
                </div>
                <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li class="nav-small-cap">
                            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span class="hide-menu">Annonce</span>
                        </li>
                        {menus.map((menu, index) => (
                            <li key={index} className="sidebar-item">
                                <a class="sidebar-link" href={menu.url} aria-expanded="false">
                                    <span>
                                        <i class={menu.icon}></i>
                                    </span>
                                    <span class="hide-menu">{menu.title}</span>
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