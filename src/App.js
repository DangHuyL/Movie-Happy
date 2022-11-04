import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { puplicRouters } from './router';
import { DefaultLayout } from './Layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {puplicRouters.map((route, index) => {
                        const Page = route.combonent;
                        let Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
