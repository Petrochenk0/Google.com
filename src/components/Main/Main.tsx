import './Main.sass';
import Google from '../../assets/Google_Logo.png';
import Micro from '../../assets/micro.png';
import Photoapp from '../../assets/photoapp.png';
import Lupa from '../../assets/lup.png';
export default function Main() {
  return (
    <div className="container">
      <img src={Google} />
      <div className="custom-input">
        <img className="lupa" src={Lupa} />
        <input className="input-search" type="text" />
        <img className="shift" src={Micro} />
        <img className="shift" src={Photoapp} />
      </div>

      <div className="display-flex">
        <button className="lucky-search">Поиск в Google</button>
        <button className="lucky-search">Мне повезёт</button>
      </div>
    </div>
  );
}
