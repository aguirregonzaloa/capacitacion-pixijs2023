import './style.css';
import { Application, Sprite, Assets, Container, Point } from 'pixi.js';

const app = new Application<HTMLCanvasElement>({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

window.addEventListener('resize', () => {
  // console.log('Resizing the window');

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

/*Vitejs importa los archivos estaticos de la carpeta /public */
Assets.add('Dino', './dino.png');
Assets.add('Hat', './hat.png');

Assets.load(['Dino', 'Hat']).then(() => {
  const Dino: Sprite = Sprite.from('Dino');
  const Hat: Sprite = Sprite.from('Hat');

  const DinoWithHat = new Container();

  Hat.scale.set(0.5);
  Hat.position.set(67, -60);

  DinoWithHat.x = 150;
  DinoWithHat.y = 200;

  DinoWithHat.addChild(Dino);
  DinoWithHat.addChild(Hat);

  console.log('Dino Position: ', Dino.position.x, Dino.position.y);
  console.log('Hat Position: ', Hat.position.x, Hat.position.y);
  console.log(
    'DinoWithHat Position: ',
    DinoWithHat.position.x,
    DinoWithHat.position.y
  );

  console.log(Hat.toGlobal(new Point()));
  console.log(Hat.toLocal(new Point()));

  app.stage.addChild(DinoWithHat);
});

document.body.appendChild(app.view);
