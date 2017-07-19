import React from 'react';
import ReactDOM from 'react-dom'; 
//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
//import Main from './main';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/menu';
import Footer from './components/footer';

/*const routes = (
<Router history={browserHistory}>
    <Route path="/" component={Main}> 
        <IndexRoute component={BooksList} />
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Route>
</Router>
)*/

//RETRIEVE COMPONENTS BASED ON STATUS
const Status = function({code, children}){
    return(
        <Route render={function({staticContext}){
            if (staticContext)
                staticContext.status = code
            return children
        }} />
    )
}

//NOT FOUND COMPONENT
const NotFound = function(){
    return(
        <Status code={404}>
            <div>
                <h2 style={{paddingTop: '10%', paddingBottom: '10%'}} className="text-center">Sorry, page cannot be found</h2>
            </div>
        </Status>
    )
}

const routes = (
    <div>
        <Menu />
        <Switch>
            <Route exact={true} path="/" component={BooksList} />
            <Route path="/admin" component={BooksForm} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>
)

export default routes;
