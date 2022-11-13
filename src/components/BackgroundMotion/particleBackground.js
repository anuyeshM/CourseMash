import React from "react";
import { Particles } from "react-tsparticles";

import particleConfig from "../../config/particle-config";

const ParticleBackground = () => {
  return (
    <>
      <Particles params={particleConfig}></Particles>
    </>
  );
};

export default ParticleBackground;
