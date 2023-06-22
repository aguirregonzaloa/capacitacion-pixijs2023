import { Container, Sprite } from 'pixi.js';

class DinoWithHat extends Container {
  constructor() {
    super();
    const Dino: Sprite = Sprite.from('Dino');
    const Hat: Sprite = Sprite.from('Hat');

    Hat.scale.set(0.5);
    Hat.position.set(67, -60);

    this.x = 150;
    this.y = 200;

    this.addChild(Dino);
    this.addChild(Hat);
  }
}

export default DinoWithHat;
