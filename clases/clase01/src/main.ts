import './style.css';

import { Application, Sprite, Assets } from 'pixi.js';

//Importa imagen para que el empaquetador de Vite
//lo exporte para produccion
// import imgClampy from '../static/clampy.png';
// import imgToad from '../static/toadmario.png';

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

/*Vitejs importa los archivos estaticos de la carpeta /public*/
Assets.add('Clampy', 'img/clampy.png');
Assets.add('myToad', 'img/toadmario.png');

Assets.load(['Clampy', 'myToad']).then(() => {
  const myToad: Sprite = Sprite.from('myToad');
  console.log('Hola mundo!', myToad.width, myToad.height);

  myToad.anchor.set(0.5);

  myToad.x = app.screen.width / 2;
  myToad.y = app.screen.height / 2;

  app.stage.addChild(myToad);
});

document.body.appendChild(app.view);
