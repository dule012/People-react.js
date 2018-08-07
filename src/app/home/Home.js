import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer.js'
import getPersons from '../../services/getPersons'
import ListPersonGrid from './ListPersonGrid'
import Search from './Search'
import NotFound from './NotFound'
import Loading from './Loading'
import ListPersonList from './ListPersonList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrPeople: [],
            view: true,
            changeView: this.changeView,
            refresh: this.refresh,
            value: '',
            search: this.search,
            filteredArr: [],
            timeCounter: 0,
            countingMale: 0,
            countingFemale: 0
        }
    }
    componentDidMount() {
        if (localStorage.getItem('a') === null) {
            getPersons().then((data) => {
                const male = data.filter((el) => {
                    return el.gender === 'male'
                }).length
                const female = data.filter((el) => {
                    return el.gender === 'female'
                }).length

                this.setState({
                    arrPeople: data,
                    countingFemale: female,
                    countingMale: male
                })
                localStorage.setItem('a', JSON.stringify(data))
            })
        } else {
            const male1 = JSON.parse(localStorage.getItem('a')).filter((el) => {
                return el.gender === 'male'
            }).length
            const female1 = JSON.parse(localStorage.getItem('a')).filter((el) => {
                return el.gender === 'female'
            }).length

            this.setState({
                arrPeople: JSON.parse(localStorage.getItem('a')),
                countingFemale: female1,
                countingMale: male1
            })
        }
        window.addEventListener('click', () => {
            this.setState({
                timeCounter: 0
            })
        })
    }


    changeView = () => {
        this.setState((prevState) => {
            return {
                view: !prevState.view
            }
        })
    }

    refresh = () => {
        getPersons().then((data) => {
            const male2 = data.filter((el)=>{
                return el.gender === 'male'
            }).length
            const female2 = data.filter((el)=>{
                return el.gender === 'female'
            }).length
            this.setState({
                arrPeople: data,
                countingFemale: female2,
                countingMale: male2
            })
            localStorage.setItem('a', JSON.stringify(data))
        })
    }

    search = (e) => {
        const filtered = this.state.arrPeople.filter((el) => {
            return el.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || el.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })
        const male = filtered.filter((el) => {
            return el.gender === 'male'
        }).length
        const female = filtered.filter((el) => {
            return el.gender === 'female'
        }).length

        this.setState({
            value: e.target.value,
            filteredArr: filtered,
            countingFemale: female,
            countingMale: male
        })
    }

    interval = setInterval(() => {
        this.setState((prevState) => {
            return {
                timeCounter: prevState.timeCounter + 1
            }
        })
    }, 60000)


    render() {
        return (
            <React.Fragment>
                <Header view={this.state.view} changing={this.state.changeView} refresh={this.state.refresh} />
                <Search search={this.state.search} value={this.state.value} timeCounter={this.state.timeCounter} male={this.state.countingMale} female={this.state.countingFemale} />
                {this.state.arrPeople.length === 0 ? <Loading /> : ''}
                {this.state.view === true ? <ListPersonGrid arr={this.state.value === '' ? this.state.arrPeople : this.state.filteredArr} /> : <ListPersonList arr={this.state.value === '' ? this.state.arrPeople : this.state.filteredArr} />}
                {this.state.filteredArr.length === 0 && this.state.value !== '' ? <NotFound /> : ''}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home