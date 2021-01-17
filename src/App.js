import Nav from './components/nav/Nav';
import MenuGeral from './components/menu/MenuGeral';
import MenuGeralItem from './components/menu/MenuGeralItem';
import MenuItem from './components/menu/MenuItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <MenuGeral>
        <MenuGeralItem icon="work" title="Settings" />
        <MenuGeralItem icon="photo_camera" title="Photo">
          <MenuItem 
            icon="sd_card"
            title="SD Card"
            desc="Free space 43 mb"/>
        </MenuGeralItem>
        <MenuGeralItem icon="audiotrack" title="Music">
          <MenuItem 
            icon="sd_card"
            title="SD Card"
            desc="Free space 43 mb"/>
        </MenuGeralItem>
        <MenuGeralItem icon="movie" title="Video">
          <MenuItem 
            icon="sd_card"
            title="SD Card"
            desc="Free space 43 mb"/>
        </MenuGeralItem>
        <MenuGeralItem icon="sports_esports" title="Games" />
        <MenuGeralItem icon="signal_wifi_4_bar" title="Internet" />
      </MenuGeral>
    </div>
  );
}

export default App;
