import axios from "axios";
import ApiUrl from "../api/ApiUrl";

async function avoirUtilisateurs() {
    try {
        const response = await axios.get(ApiUrl+'/initial/lesUtilisateurs');
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            console.error('La réponse de l\'API n\'est pas un tableau JSON:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateur:', error);
        return [];
    }
}

export default avoirUtilisateurs