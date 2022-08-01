import './App.scss';
import Layout from "../Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Auth from "../../pages/auth";
import Main from "../../pages/main/main";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/auth' element={<Auth/>}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
