import Navbar from './Navbar';
import SearchFilter from './components/SearchFilter';
import ContentView from './components/ContentView';

function App() {
  return (
    <div className='main-container'>
      <div className='left-side'>
        <Navbar />
      </div>
      <div className='right-side'>
        <SearchFilter />
        <ContentView />
      </div>
    </div>
  );
}

export default App;
