import axios from "axios";
import ApiUrl from "../api/ApiUrl";

async function avoirHistorique(token) {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
      console.log("huhu"+ApiUrl+'/annonce/mesHistoriques');
        const response = await axios.get(ApiUrl+'/annonce/mesHistoriques', {headers});
        if (Array.isArray(response.data.data)) {
            return response.data.data;
        } else {
            console.error('La réponse de l\'API n\'est pas un tableau JSON:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        return [];
    }
}
export default avoirHistorique