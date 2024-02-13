export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

    get houseCardHTML() {
        return `
        <div class="col-12">
        <div class="card text-black flex-grow-1 bg-light">
            <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${this.description}</h4>
                <div class="row card-text">
                    <div class="col-6 text-center fs-4">Bedrooms: </div>
                    <div class="col-6 text-center fs-4">Bathrooms: </div>
                    <div class="col-6 text-center fs-4">Year: </div>
                    <div class="col-6 text-center fs-4">Levels: </div>
                    <div class="col-6 text-center fs-4">Created On: </div>
                    <div class="col-6 text-center fs-4">By: <img class="creator-picture" src="" alt=""></div>
                </div>
            </div>
        </div>

    </div>
        `
    }
}