import {lazy, Suspense} from 'react'
import './App.css';
const Header = lazy(()=> import('./client/components/header/header'));
const Footer = lazy(()=> import('././client/components/footer/footer'))
const AppRoutes = lazy(()=>import('./client/routes'))

function App() {
  return (
    <div className="App">
        <Suspense><Header/></Suspense>
        <AppRoutes/>
        <Suspense><Footer/></Suspense>
    </div>
  );
}

export default App;
