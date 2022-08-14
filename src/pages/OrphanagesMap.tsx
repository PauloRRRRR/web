import React from 'react';
import mapMarkerImg from '../images/MapMarker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/orphanages-map.css';
import {MapContainer , TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Pernambuco</strong>
                    <span>Recife</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-8.0714918,-34.8973944]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >

                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="FFF" />
            </Link>

        </div>
    )
}

export default OrphanagesMap;