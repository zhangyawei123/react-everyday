import React from 'react'
import { BrowserRouter ,HashRouter, Switch, Route, Link} from 'react-router-dom'
import Other from '../components/Other'
import Header from "../components/Header";



export default class RouteMap extends React.Component {
    updateHandle () {
        console.log('每次router变化之后都会触发')
    }
    render () {
        return (
            <div>
                <Route exact path='/' component={Header}/>
                <Route path='/other' component={Other}/>
            </div>
        )
    }
}
