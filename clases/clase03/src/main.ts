import './style.css';

import { Application, Assets } from 'pixi.js';
import { assets } from './assets';
import Scene from './Scene';

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

window.addEventListener('resize', () => {
  const scaleX = window.innerWidth / app.screen.width;
  const scaleY = window.innerHeight / app.screen.height;
  const scale = Math.min(scaleX, scaleY);

  const gameWidth = Math.round(app.screen.width * scale);
  const gameHeight = Math.round(app.screen.height * scale);

  const marginHorizantal = Math.floor((window.innerWidth - gameWidth) / 2);
  const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

  app.view.style.width = gameWidth + 'px';
  app.view.style.height = gameHeight + 'px';

  app.view.style.marginLeft = marginHorizantal + 'px';
  app.view.style.marginRight = marginHorizantal + 'px';
  app.view.style.marginBottom = marginVertical + 'px';
  app.view.style.marginTop = marginVertical + 'px';
});

window.dispatchEvent(new Event('resize'));

Assets.addBundle('myAssets', assets);

Assets.loadBundle(['myAssets'])
  .then(() => {
    const myScene = new Scene();

    app.stage.addChild(myScene);
  })
  //Lo utilizaba para ver los errores de carga
  //de las texturas
  .catch((err) => {
    console.log(err);
  });

document.body.appendChild(app.view);
