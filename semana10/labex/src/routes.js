import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AdminHomePage, ApplicationFormPage, CreateTripPage, ErrorPage, HomePage, ListTripsPage, LoginPage, TripsDetailsPage } from './pages'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/trips/list' exact component={ListTripsPage} />
                <Route path='/trips/application' exact component={ApplicationFormPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path='/admin/trips/list' exact component={AdminHomePage} />
                <Route path='/admin/trips/create' exact component={CreateTripPage} />
                <Route path='/admin/trips/:id' exact component={TripsDetailsPage} />
                <Route path='/notfound' exact component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes