import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {


    _drawHouses() {
        const houses = AppState.houses
        let htmlString = ''
        houses.forEach(house => htmlString += house.houseCardHTML)
        setHTML('houseCard', htmlString)
    }

    constructor() {
        this.getHouses
        AppState.on('houses', this._drawHouses)
    }
    async getHouses() {

        try {
            await houseService.acquireHouses()
            Pop.success
        } catch (error) {
            Pop.error

        }
    }



}