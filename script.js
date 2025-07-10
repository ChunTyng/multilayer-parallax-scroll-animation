function loadSVG() {
  fetch('city.svg')
    .then((response) => {
      return response.text();
    })
    .then((svg) => {
      document.getElementById('bgCity').innerHTML = svg;
      document
        .querySelector('#bgCity svg')
        .setAttribute('preserveAspectRatio', 'xMidYMid slice');

      setAnimtionScroll();
    });
}

loadSVG();

const setAnimtionScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '#bgCity',
      pin: true,
      scrub: 2, // or 0.5
      start: 'top top',
      end: '+=10000',
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

  runAnimation
    .addLabel('phaseThree', 'start+=1')
    .to(
      '#interior_wall_side',
      { duration: 2, x: -200, opacity: 0 },
      'phaseTwo+=2',
    )
    .to('#interior_wall_side_2', { duration: 2, opacity: 0 }, 'phaseTwo+=2.1')
    .to(
      '#interior_wall_top',
      { duration: 2, y: -200, opacity: 0 },
      'phaseTwo+=2.1',
    )
    .to('#interior_wall_front', { duration: 2, opacity: 0 }, 'phaseTwo+=2.1');
};
