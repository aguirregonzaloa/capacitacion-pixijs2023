import { Container, NineSlicePlane, Texture } from 'pixi.js';
import Btn from './Btn';

class UI extends Container {
  constructor() {
    super();

    const btnPlayGame = new Btn(
      Texture.from('btnNormal'),
      Texture.from('btnActive'),
      Texture.from('btnHover')
    );
    const btnSettings = new Btn(
      Texture.from('btnNormal'),
      Texture.from('btnActive'),
      Texture.from('btnHover')
    );
    const btnQuitGame = new Btn(
      Texture.from('btnNormal'),
      Texture.from('btnActive'),
      Texture.from('btnHover')
    );

    btnPlayGame.setText('Iniciar Juego');
    btnSettings.setText('Configuracion');
    btnQuitGame.setText('Salir');

    const background = new NineSlicePlane(
      Texture.from('card1'),
      35,
      35,
      35,
      35
    );
    this.position.set(50, 30);
    btnPlayGame.position.set(100, 100);
    btnSettings.position.set(100, 150);
    btnQuitGame.position.set(100, 200);
    this.addChild(background);
    this.addChild(btnPlayGame);
    this.addChild(btnSettings);
    this.addChild(btnQuitGame);
  }
}

export default UI;
