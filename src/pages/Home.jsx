import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div
      className="hero min-h-screen -mt-40"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1612939675110-fe3a0129a024?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">

          <Slide>
            <h1 className="mb-5 text-5xl font-bold">
              Hello there
            </h1>
          </Slide>

          <Fade
            delay={1000}
            cascade
            damping={0.5}
          >
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem.
            </p>
              <button className="btn btn-primary">
            Get Started
          </button>
          </Fade>

        

        </div>
      </div>
    </div>
  );
};

export default Home;