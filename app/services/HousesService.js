import { api } from "./AxiosService.js"

class HousesService {


    async acquireHouses() {

        const response = await api.get('api/houses')
        console.log(response.data);
    }

}

export const houseService = new HousesService()