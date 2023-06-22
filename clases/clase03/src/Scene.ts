import { Container, AnimatedSprite, Texture } from 'pixi.js';
import DinoWithHat from './DinoWithHat';

class Scene extends Container {
  constructor() {
    super();
    const Dino = new DinoWithHat();

    console.log('DinoWithHat Position: ', Dino.position.x, Dino.position.y);

    const girlAnimated = new AnimatedSprite(
      [
        Texture.from('girl1'),
        Texture.from('girl2'),
        Texture.from('girl3'),
        Texture.from('girl4'),
        Texture.from('girl5'),
        Texture.from('girl6'),
        Texture.from('girl7'),
        Texture.from('girl8'),
      ],
      true
    );

    girlAnimated.play();
    girlAnimated.animationSpeed = 0.2;

    this.addChild(Dino);
    this.addChild(girlAnimated);
  }
}

export default Scene;
