import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AdminHomePage, ApplicationFormPage, CreateTripPage, ErrorPage, HomePage, ListTripsPage, LoginPage, TripsDetailsPage } from './pages'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route exact path={'/admin'}>
            <AdminHomePage />
          </Route>
          <Route exact path={'/application'}>
            <ApplicationFormPage />
          </Route>
          <Route exact path={'/createtrip'}>
            <CreateTripPage />
          </Route>
          <Route exact path={'/trips'}>
            <ListTripsPage />
          </Route>
          <Route exact path={'/login'}>
            <LoginPage />
          </Route>
          <Route exact path={'/trips/:id'}>
            <TripsDetailsPage />
          </Route>
          <Route exact path={'/notfound'}>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Routes