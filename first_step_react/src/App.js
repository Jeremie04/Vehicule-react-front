import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

import Accueil from './pages/Accueil';
import DetailsAnnonce from './pages/DetailsAnnonce';
import Message from './pages/Message';
import Login from './pages/Login';
import Historiques from './pages/Historiques';
import Favoris from './pages/Favoris';
// import Utilisateurs from './pages/Utilisateurs';
import Accueil2 from './pages/Accueil2'
import DetailsAnnonce2 from './pages/DetailAnnonce2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liste-annonce" element={<Accueil />} />
        <Route path="/details-annonce/:idAnnonce" element={<DetailsAnnonce />} />
        <Route path="/message" element={<Message />} />
        <Route path="/historique-annonce" element={<Historiques />} />
        <Route path="/favoris-annonce" element={<Favoris />} />
        {/* <Route path="/mes-messages" element={<Utilisateurs />} /> */}
        <Route path="/messages" element={<Message />} />
        <Route path="/accueil2" element={<Accueil2 />} />
        <Route path="/details-annonce2/:idAnnonce" element={<DetailsAnnonce2 />} />
      </Routes>
    </Router>
  );
}

export default App;
