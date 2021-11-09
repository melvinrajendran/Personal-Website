const projects = [
  {
    imageURL: "images/projects/RocketLeagueGame.png",
    imageAlt: "Rocket League Game",
    title: "Rocket League",
    date: "May 2021",
    text: (
      <span>
        A "soccar" game using{" "}
        <a href="https://www.photonengine.com/pun" className="link-white" target="_blank" rel="noopener noreferrer">
          Photon Unity Networking
        </a>{" "}
        to host online games in a room-based multiplayer server.
      </span>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/RocketLeagueGame",
    technologies: "Unity, C#, PUN"
  },

  {
    imageURL: "images/projects/GalagaGame.png",
    imageAlt: "Galaga Game",
    title: "Galaga",
    date: "March 2021 - April 2021",
    text: "A space shooter in which AI enemies are trained using curriculum-based reinforcement learning.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/GalagaGame",
    technologies: (
      <span>
        Unity, C#,{" "}
        <a href="https://unity.com/products/machine-learning-agents" className="link-white" target="_blank" rel="noopener noreferrer">
          MLAgents
        </a>
      </span>
    )
  },
  {
    imageURL: "images/projects/JuliaSetProgram.png",
    imageAlt: "Julia Set Program",
    title: "Julia Set Visualizer",
    date: "January 2021",
    text: (
      <span>
        An app that visualizes a{" "}
        <a href="https://en.wikipedia.org/wiki/Julia_set" className="link-white" target="_blank" rel="noopener noreferrer">
          Julia set
        </a>{" "}
        and enables adjustment of both its values and appearance.
      </span>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Julia%20Set%20Activity",
    technologies: "Java, Swing"
  }
];

export default projects;
