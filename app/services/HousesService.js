import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {




    createHouse(houseFormData) {



    }


    async acquireHouses() {

        const response = await api.get('api/houses')
        console.log(response.data);

        const newHouseMaker = response.data.map(house => new House(house))

        AppState.houses = newH
    }

}

export const houseService = new HousesService()