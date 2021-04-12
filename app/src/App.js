import Nav from './components/nav/Nav';
import SearchPhoto from './components/forms/search/SearchPhoto';
import PhotoContextProvider from './context/PhotoContext';
import PhotoList from './containers/Photos';

function App() {
  return (
    <div className="main-wrapper">
      <PhotoContextProvider>
        <div className="main-header">
          <div className="container">
            <Nav />
            <SearchPhoto />
          </div>
        </div>
        <div className="main-content">
          <PhotoList />
        </div>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
