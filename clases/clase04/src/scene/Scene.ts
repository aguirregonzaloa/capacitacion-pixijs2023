import { Container, AnimatedSprite, Texture, Graphics, Text } from 'pixi.js';
import UI from '../components/UI';

class Scene extends Container {
  constructor() {
    super();

    const ui = new UI();
    this.addChild(ui);
  }
}

export default Scene;
