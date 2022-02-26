import Particles from "react-tsparticles";

export default function ParticlesComp(){
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return( 
     <div id="tsparticles">   
        <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: false,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0,
              size: 10,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 180,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
            // width:10,
          },
          links: {
            // #202020
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
    </div>
    );
}

