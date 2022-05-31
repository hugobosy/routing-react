import '../styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./Header";
import {Aside} from "./Aside";
import {Page} from "./Page";
import {Footer} from "./Footer";


function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    {<Header/>}
                </header>
                <main>
                    {<Aside/>}
                    {<Page/>}
                </main>
                <footer>
                    {<Footer/>}
                </footer>
            </div>
        </Router>
    );
}

export default App;
