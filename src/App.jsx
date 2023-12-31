import { useEffect } from 'react';
import './App.css';
import { fetchDataFromAPI } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfigurations } from './store/homeSlice';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {
    const { url } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchApiConfig();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromAPI('/configuration').then((res) => {
            const url = {
                backdrop: res.images.secure_base_url + 'original',
                poster: res.images.secure_base_url + 'original',
                profile: res.images.secure_base_url + 'original',
            };

            dispatch(getApiConfigurations(url));
        });
    };

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:mediaType/:id" element={<Details />} />
                    <Route path="/search/:query" element={<SearchResult />} />
                    <Route path="/explore/:mediaType" element={<Explore />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                {/* <Footer /> */}
            </BrowserRouter>
        </>
    );
}

export default App;
