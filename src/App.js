import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';

function App() {
  return (
    <div className="App w-full">
      <Header/>
      <main></main>
      <div className='flex'>
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
      </div>
      <div>
        <Input label="price" type="text" name="price" placeholder="0.0" disabled />
        <Input label="price" type="text" name="price" placeholder="0.0" />
        <Input label="price" color="primary" type="text" name="price" placeholder="0.0" />
        <Input label="price" color="secondary" type="text" name="price" placeholder="0.0" />
        <Input label="price" color="danger" type="text" name="price" placeholder="0.0" helpText="Nooo"/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
