import { Container } from 'pixi.js';
import DinoWithHat from './DinoWithHat';

class Scene extends Container {
  constructor() {
    super();
    const Dino = new DinoWithHat();

    console.log('DinoWithHat Position: ', Dino.position.x, Dino.position.y);
    this.addChild(Dino);
  }
}

export default Scene;
