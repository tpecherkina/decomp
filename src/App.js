import './App.css';
import Search from './components/Searchbar';
import Billboard from './components/Billboard';
import News from './components/News/News';
import Sections from './components/Sections';
import Weather from './components/Weather';
import TVProgram from './components/TV/TVProgram';
let weather = {icon: "https://www.iconninja.com/files/413/758/397/onedrive-icon.png", alt: "Облака", text: "+17C"};
let backImage = {img: "https://img.youtube.com/vi/qCauA503AdE/0.jpg", alt: "Форсаж:Хоббс и Шоу"};
function App() {
  return (
  <div className="App">
     <News/>
     <Sections/>
     <Billboard props={backImage}/>
     <div className="widgets">
   <Weather props={weather}/>
   <TVProgram/>
   </div>
   <Search/>
   </div>
  );
}

export default App;