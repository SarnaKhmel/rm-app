import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        }>
          <Route path="/character/:id" element={
            <Layout>
              <CharacterPage />
            </Layout>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
