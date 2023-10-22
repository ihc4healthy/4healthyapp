import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-full">
      <Header/>
      <main></main>
      <button>aaa</button>
      <button className='btn-elevated'>aaa</button>
      <button className='btn-primary'>bbb</button>
      <button className='btn-secondary'>bbb</button>
      <button className='btn-danger'>bbb</button>
      <button className='btn-primary' disabled>bbb</button>
      <button className='btn-flat'>bbb</button>
      <button className='btn-flat' disabled>bbb</button>
      <button className='btn-flat-primary'>bbb</button>
      <button className='btn-flat-secondary'>bbb</button>
      <Footer/>
    </div>
  );
}

export default App;
