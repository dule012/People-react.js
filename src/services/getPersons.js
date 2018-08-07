import SinglePerson from '../entities/SinglePerson'

const getPersons = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
           return data.results.map((el) => {
                return new SinglePerson(el)
            })
        })
}
export default getPersons