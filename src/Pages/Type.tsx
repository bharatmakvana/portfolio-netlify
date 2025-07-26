import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Frontend Developer",
          "React Developer",
          "React Native Developer",
          "TYPO3 Integrator",
          "AI Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type