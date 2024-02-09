import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

import Accueil from './pages/Accueil';
import DetailsAnnonce from './pages/DetailsAnnonce';
import Message from './pages/Message';
import Login from './pages/Login';
import Historiques from './pages/Historiques';
import Favoris from './pages/Favoris';
// import Utilisateurs from './pages/Utilisateurs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liste-annonce" element={<Accueil />} />
        <Route path="/details-annonce" element={<DetailsAnnonce />} />
        <Route path="/message" element={<Message />} />
        <Route path="/historique-annonce" element={<Historiques />} />
        <Route path="/favoris-annonce" element={<Favoris />} />
        {/* <Route path="/mes-messages" element={<Utilisateurs />} /> */}
        <Route path="/messages" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
