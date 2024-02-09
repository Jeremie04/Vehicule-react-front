import axios from "axios";
import ApiUrl from "../api/ApiUrl";



async function avoirAnnonceById(idAnnonce) {
    try {
        const response = await axios.get(ApiUrl+'/annonce/listesById/' + idAnnonce);
        return response.data; 
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'annonce par identifiant:', error);
        return null;
    }
}

export default avoirAnnonceById
