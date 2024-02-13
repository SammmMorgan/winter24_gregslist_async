import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {


    async acquireHouses() {

        const response = await api.get('api/houses')
        console.log(response.data);

        const newHouseMaker = response.data.map(house => new House(house))

        AppState.houses = newHouseMaker
    }

}

export const houseService = new HousesService()