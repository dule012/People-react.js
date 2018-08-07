import React, { Component } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer.js'
import getPersons from '../../services/getPersons'
import ListPersonGrid from './ListPersonGrid'
import Search from './Search'

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
            filteredArr: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('a') === null) {
            getPersons().then((data) => {
                this.setState({
                    arrPeople: data
                })
                localStorage.setItem('a', JSON.stringify(data))
            })
        } else {
            this.setState({
                arrPeople: JSON.parse(localStorage.getItem('a'))
            })
        }
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
            this.setState({
                arrPeople: data
            })
            localStorage.setItem('a', JSON.stringify(data))
        })
    }

    search = (e) => {
        const filtered = this.state.arrPeople.filter((el) => {
            return el.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || el.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })
        this.setState({
            value: e.target.value,
            filteredArr: filtered
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header view={this.state.view} changing={this.state.changeView} refresh={this.state.refresh} />
                <Search search={this.state.search} value={this.state.value} />
                <ListPersonGrid arr={this.state.value === '' ? this.state.arrPeople : this.state.filteredArr} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home