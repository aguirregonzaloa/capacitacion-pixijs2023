import { Container, NineSlicePlane, Texture } from 'pixi.js';
import Btn from './Btn';

class UI extends Container {
  constructor() {
    super();

    const btnActive = new Btn();
    const btnNormal = new Btn();
    btnActive.setSprite(Texture.from('btnActive'));
    btnActive.setText('Button Active');
    btnNormal.setSprite(Texture.from('btnNormal'));
    btnNormal.setText('Button Normal');

    const background = new NineSlicePlane(
      Texture.from('card1'),
      35,
      35,
      35,
      35
    );
    this.position.set(50, 30);
    btnActive.position.set(100, 100);
    btnNormal.position.set(100, 150);
    this.addChild(background);
    this.addChild(btnActive);
    this.addChild(btnNormal);
  }
}

export default UI;
