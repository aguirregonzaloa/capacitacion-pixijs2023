import { Container, AnimatedSprite, Texture, Graphics, Text } from 'pixi.js';
import DinoWithHat from './DinoWithHat';
import UI from './UI';

class Scene extends Container {
  constructor() {
    super();

    //Clase DinoWithHat
    const Dino = new DinoWithHat();

    console.log('DinoWithHat Position: ', Dino.position.x, Dino.position.y);
    this.addChild(Dino);
    //-------------------------//
    //Clase AnimatedSprite

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
    girlAnimated.scale.set(0.5);
    girlAnimated.play();
    girlAnimated.animationSpeed = 0.2;

    this.addChild(girlAnimated);
    //-----------------------------//
    //Graphics
    const myGraph = new Graphics();

    myGraph.lineStyle({ color: 0xff00ff, width: 10, alpha: 1 });
    myGraph.beginFill(0x0000ff, 1);
    myGraph.drawCircle(0, 0, 50);

    myGraph.position.set(420, 240);

    this.addChild(myGraph);
    /*-----------------------------
      Text
    */

    const myText = new Text('Esto es un texto');
    myText.position.set(400, 300);

    this.addChild(myText);
    /*--------------------------------
      UI
      */
    const ui = new UI();
    this.addChild(ui);
  }
}

export default Scene;
