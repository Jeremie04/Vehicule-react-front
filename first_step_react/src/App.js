import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

import Accueil from './pages/Accueil';
import DetailsAnnonce from './pages/DetailsAnnonce';
import Message from './pages/Message';
import Login from './pages/Login';
import Historique from './pages/Historique';
import Favoris from './pages/Favoris';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liste-annonce" element={<Accueil />} />
        <Route path="/details-annonce" element={<DetailsAnnonce />} />
        <Route path="/message" element={<Message />} />
        <Route path="/historique-annonce" element={<Historique />} />
        <Route path="/favoris-annonce" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
