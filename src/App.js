import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";  

import Nav from './nav/nav';
import Home from './component/home/home';
import ListTodo from './component/todo/ListTodo';
import About from './component/about/about';
import ListUser from './component/user/ListUser';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <header className='App-header'>
                    <Nav />
                    <img alt="" />
                
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/users">
                            <ListUser />
                        </Route>
                    </Switch>

                </header>
            </div>
        </BrowserRouter>
    )
}

export default App;