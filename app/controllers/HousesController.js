import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
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
        this.getHouses()
        AppState.on('houses', this._drawHouses)
    }
    async getHouses() {

        try {
            console.log('anything at all');
            await houseService.acquireHouses()
            Pop.success('is get')
        } catch (error) {
            Pop.error(error)

        }
    }

    async createHouse() {
        try {
            event.preventDefault()

            const form = event.target

            const houseFormData = getFormData(form)

            await houseService.createHouse(houseFormData)

            console.log(houseFormData);
        } catch (error) {

        }
    }

    async destroyHouse(houseId) {

        try {
            const check = await Pop.confirm('are you sure you wanna delete that?')

            if (!check) {
                return
            }
            await houseService.destroyHouse(houseId)

        }
        catch (error) {
            Pop.error
        }
    }


}