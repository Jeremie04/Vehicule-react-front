import axios from "axios";
import ApiUrl from "../api/ApiUrl";

async function avoirMessage(idutilisateur) {
    try {
        const response = await axios.get(ApiUrl+'/messages/'+idutilisateur);
        if (Array.isArray(response.data.data)) {
            return response.data.data;
        } else {
            console.error('La réponse de l\'API n\'est pas un tableau JSON:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des message:', error);
        return [];
    }
}

async function envoieMessage(idutilisateur, message, fichier) {
    try {
        const response = await axios.get(ApiUrl+'/message/'+idutilisateur+"/"+message+"/"+fichier);
        if (response.data.erreur == null) {
            console.log(response.data.data);
        } else {
            console.error('Erreur lors de l\'envoie du message:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des message:', error);
        return [];
    }
}
