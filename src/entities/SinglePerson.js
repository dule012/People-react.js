
class SinglePerson {
    constructor(obj) {
        this.firstName = obj.name.first
        this.lastName = obj.name.last
        this.gender = obj.gender
        this.email = obj.email
        this.medium = obj.picture.medium
        this.large = obj.picture.large
        this.birth = obj.dob.date

    }
}

export default SinglePerson