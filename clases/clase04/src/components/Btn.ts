import { Container, Sprite, Text, Texture, TextStyle } from 'pixi.js';

class Btn extends Container {
  private btnText: Text;
  private textStyle: TextStyle;
  private btnSprite: Sprite;
  private btnActive: Texture;
  private btnHover: Texture;
  private btnNormal: Texture;
  constructor(normal: Texture, active: Texture, hover: Texture) {
    super();
    this.btnNormal = normal;
    this.btnActive = active;
    this.btnHover = hover;
    this.btnSprite = Sprite.from(this.btnNormal);
    this.textStyle = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 12,
      fill: 0xffffff,
      align: 'center',
    });
    this.btnText = new Text('', this.textStyle);

    this.addChild(this.btnSprite);
    this.addChild(this.btnText);
    this.btnSprite.eventMode = 'dynamic';
    this.btnSprite.on('mousedown', this.onMouseDown, this);
    this.btnSprite.on('mouseup', this.onMouseDown, this);
  }
  setText = (text: string) => {
    this.btnText.text = text;
    this.btnText.anchor.set(0.5, 0.5);
    this.btnText.position.x = this.btnSprite.width / 2;
    this.btnText.position.y =
      this.height / 2 - (this.textStyle.fontSize as number) / 2;
    console.log(
      'Sprite Btn: ',
      this.btnSprite.width,
      this.width,
      this.btnText.text.length
    );
  };
  setSprite = (Texture: Texture) => {
    this.btnSprite.texture = Texture;
  };

  private onMouseDown() {
    this.btnSprite.texture = this.btnActive;
    console.log('clickMouse');
  }
}

export default Btn;
