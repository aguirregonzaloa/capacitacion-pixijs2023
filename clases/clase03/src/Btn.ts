import { Container, Sprite, Text, Texture, TextStyle } from 'pixi.js';

class Btn extends Container {
  private BtnText: Text;
  private TextStyle: TextStyle;
  private BtnSprite: Sprite;
  constructor() {
    super();
    this.BtnSprite = new Sprite();
    this.TextStyle = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 12,
      fill: 0xffffff,
      align: 'center',
    });
    this.BtnText = new Text('', this.TextStyle);

    this.addChild(this.BtnSprite);
    this.addChild(this.BtnText);
  }
  setText = (text: string) => {
    this.BtnText.text = text;
  };
  setSprite = (Texture: Texture) => {
    this.BtnSprite.texture = Texture;
    this.BtnText.anchor.set(0.5, 0.5);
    this.BtnText.position.x = this.width / 2;
    // this.BtnText.position.y = this.height / 2;
    this.BtnText.position.y =
      this.height / 2 - (this.TextStyle.fontSize as number) / 2;
  };
}

export default Btn;
