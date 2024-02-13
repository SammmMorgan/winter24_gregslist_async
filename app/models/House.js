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
        this.createdOn = new Date(data.createdAt)
    }

    get houseCardHTML() {
        return `
        <div class="col-12 p-3">
        <div class="card text-black shadow border border-dark flex-grow-1 bg-light">
            <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">${this.description}</h4>
                <div class="row card-text">
                    <div class="col-6 text-center p-3 fs-4">Bedrooms: ${this.bedrooms}</div>
                    <div class="col-6 text-center p-3 fs-4">Bathrooms: ${this.bathrooms}</div>
                    <div class="col-6 text-center p-3 fs-4">Year: ${this.year}</div>
                    <div class="col-6 text-center p-3 fs-4">Levels: ${this.levels}</div>
                    <div class="col-6 text-center p-3 fs-4">Created On: ${this.createdOn.toLocaleDateString()}</div>
                    <div class="col-6 text-center p-3 fs-4"> Price: ${this.price}</div>
                    <div class="col-6 text-center p-3 fs-4">By: ${this.creator.name}   <img class="creator-picture" src="${this.creator.picture}" alt=""></div>
                    <div class="col-6 text-center p-3 fs-4">
                    <button onclick="app.HousesController.destroyHouse('${this.id}')" class="btn btn-danger">Delete</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
        `
    }

}
