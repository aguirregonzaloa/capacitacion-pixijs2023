import './style.css';

import { Application, Sprite } from 'pixi.js';

//Importa imagen para que el empaquetador de Vite
//lo exporte para produccion
import imgClampy from '../static/clampy.png';

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const clampy: Sprite = Sprite.from(imgClampy);

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);

document.body.appendChild(app.view);