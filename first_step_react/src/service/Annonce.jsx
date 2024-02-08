import axios from "axios";
import ApiUrl from "../api/ApiUrl";

async function avoirAnnonce() {
    try {
        const response = await axios.get(ApiUrl+'/annonce/listesValidees');
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
export default avoirAnnonce;
