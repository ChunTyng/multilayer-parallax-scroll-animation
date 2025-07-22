import { useEffect } from 'react';
import styles from './main.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Main = () => {
  useEffect(() => {
    loadSVG();
  }, []);

  const loadSVG = () => {
    fetch('/city.svg')
      .then((response) => response.text())
      .then((svg) => {
        const bgCity = document.getElementById('bgCity');
        if (bgCity) {
          bgCity.innerHTML = svg;
          const svgElement = bgCity.querySelector('svg');
          if (svgElement) {
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid slice');
          }
          setAnimtionScroll();
        }
      });
  };

  const setAnimtionScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const runAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#bgCity',
        pin: true,
        scrub: 2,
        start: 'top top',
        end: '+=2000', // reduced from 10000
      },
    });

    runAnimation
      .addLabel('phaseOne', 'start')
      .to('#bgCity svg', { duration: 2, scale: 1.4 }, 'phaseOne+=.5')
      .to('#full_city', { duration: 2, opacity: 0 }, 'phaseOne+=.5');

    runAnimation
      .addLabel('phaseTwo', 'start+=1')
      .to('#building_top', { duration: 2, y: -200, opacity: 0 }, 'phaseTwo+=1')
      .to('#wall_side', { duration: 2, x: -200, opacity: 0 }, 'phaseTwo+=1.1')
      .to(
        '#wall_front',
        { duration: 2, x: 200, y: 200, opacity: 0 },
        'phaseTwo+=1.1',
      );
  };

  return (
    <>
      <div className={styles.banner}>
        <div id="bgCity" className={styles.bgCity}></div>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1>Welcome to GSAP City</h1>
            <p>Discover the power of GSAP scroll animations.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div style={{ height: '2000px', background: '#f0f0f0' }}>
        <h2>More Content Below</h2>
        <p>This content is visible after scrolling down.</p>
      </div>
    </>
  );
};

export default Main;
