import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {

    async destroyHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(houseIndex, 1)

    }




    async createHouse(houseFormData) {
        const response = await api.post('api/houses', houseFormData)

        // console.log(response);

        const newHouse = new House(response.data)

        // console.log(newHouse);
        AppState.houses.unshift(newHouse)


    }


    async acquireHouses() {

        const response = await api.get('api/houses')
        console.log(response.data);

        const newHouseMaker = response.data.map(house => new House(house))

        AppState.houses = newHouseMaker
    }

}

export const houseService = new HousesService()