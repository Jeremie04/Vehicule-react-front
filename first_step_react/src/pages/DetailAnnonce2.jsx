import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import avoirAnnonceById from '../service/AnnonceDetails';
import Header from '../components/layOut/Header';
import img1 from '../assets/images/products/s1.jpg';
import img2 from '../assets/images/products/s4.jpg';
import img3 from '../assets/images/products/s5.jpg';
import img4 from '../assets/images/products/s7.jpg';
import img5 from '../assets/images/products/s11.jpg';
import '../assets/css/styles.min.css';
import Sidebar2 from '../components/layOut/Sidebar2';

const DetailsAnnonce2 = () => {
    const imgs = [img1, img2, img3, img4, img5];
    const [id_img, setImg] = useState(0);

    const nextImg = () => {
        setImg((prevId) => (prevId === imgs.length - 1 ? 0 : prevId + 1));
    };

    const previousImg = () => {
        setImg((prevId) => (prevId === 0 ? imgs.length - 1 : prevId - 1));
    };

    const { idAnnonce } = useParams();
    const [annonce, setAnnonce] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (idAnnonce) {
                const annoncesData = await avoirAnnonceById(idAnnonce);
                setAnnonce(annoncesData.data[0]); // Récupère la première annonce du tableau de données
            }
        };
        fetchData();
    }, [idAnnonce]);

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <Sidebar2 />
            <div className="body-wrapper">
                <Header title="Details" />
                <div className="container-fluid">
                    <Link to="/accueil2" className="btn btn-secondary">
                        Retour
                    </Link>
                    {annonce && (
                    <div className="container-fluid rounded-2 mt-5">
                        <div className="row">
                            <div className="col-md-5 position-relative">
                                <img src={imgs[id_img]} className="card-img-top rounded-0" alt="..." />
                                <button onClick={previousImg} className="btn bg-primary rounded-circle p-2 text-white position-absolute start-0 bottom-0 mb-n3 me-3">
                                    <i className="ti ti-chevron-left fs-4"></i>
                                </button>
                                <button onClick={nextImg} className="btn bg-primary rounded-circle p-2 text-white position-absolute end-0 bottom-0 mb-n3 me-3">
                                    <i className="ti ti-chevron-right fs-4"></i>
                                </button>
                            </div>
                            <div className="col-md-7" style={{ maxHeight: '400px' }} >
                                <h1>{annonce.sousModele.modele.marque.nom_Marque} {annonce.sousModele.nomSous}</h1>
                                <table className="table text-nowrap mb-0 align-middle" >
                                    <tbody>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Nom du modele</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.modele.nomModele}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Categorie</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.modele.categorie.nomCategorie}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Prix</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce && annonce.prix} Ar</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Couleur</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.couleur}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Type carburant</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.typeCarburant.nomTypeCarburant}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Puissance du moteur</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.puissanceMoteur}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Baterie</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.batterie}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Consommation</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.consommation}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-bottom-0">
                                                <strong>Vitesse maximum</strong>
                                            </td>
                                            <td className="border-bottom-0">{annonce.sousModele.vitesseMax}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="card-body p-4">
                                    <button type="button" className="btn btn-warning m-1">
                                        <i className="ti ti-star"></i> Favoris
                                    </button>
                                    <button type="button" className="btn btn-primary m-1">
                                        <i className="ti ti-message"></i> Envoyer Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

DetailsAnnonce2.propTypes = {};

export default DetailsAnnonce2;
