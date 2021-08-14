const projects = [
  {
    imageURL: "images/projects/PaintProgram.png",
    imageAlt: "PaintProgram",
    title: "Paint Application",
    date: "May 2021",
    text: "A graphics editor similar to MS Paint in which the user can draw, save, and load images using a variety of tools.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Paint%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/SideScrollerProgram.png",
    imageAlt: "SideScrollerProgram",
    title: "Disney's Aladdin",
    date: "April 2021",
    text: "A simplified remake of the SNES platformer game. Custom collision detection and spritesheet animations.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Side%20Scroller%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/MinesweeperProgram.png",
    imageAlt: "MinesweeperProgram",
    title: "Minesweeper",
    date: "March 2021",
    text: "A replica of the famous puzzle game. The player must clear a rectangular board without detonating any mines.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Minesweeper%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/SoundMatrixProgram.png",
    imageAlt: "SoundMatrixProgram",
    title: "Sound Matrix - Music Box",
    date: "February 2021",
    text: "A program that enables the user to create, save, and load melodies using various instruments.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Sound%20Matrix%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/JuliaSetProgram.png",
    imageAlt: "JuliaSetProgram",
    title: "Julia Set Visualizer",
    date: "January 2021",
    text: (
      <div>
        A program that visualizes a{" "}
        <a href="https://en.wikipedia.org/wiki/Julia_set" class="link-dark">
          Julia set
        </a>{" "}
        and enables adjustment of both its values and appearance.
      </div>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/GUI/Julia%20Set%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/MazeProgram.png",
    imageAlt: "MazeProgram",
    title: "3D Maze Game",
    date: "October 2020",
    text: "A game created using Java's Swing library. The player must escape a maze with only a depleting flashlight.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Data%20Structures%202020-21/Reading%20.txt%20Files/Maze%20Activity",
    languages: "Java, Swing"
  },
  {
    imageURL: "images/projects/RocketLeagueGame.png",
    imageAlt: "RocketLeagueGame",
    title: "Rocket League",
    date: "May 2021",
    text: (
      <div>
        A "soccar" game using{" "}
        <a href="https://www.photonengine.com/pun" class="link-dark">
          Photon Unity Networking
        </a>{" "}
        to host online games in a room-based multiplayer server.
      </div>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/RocketLeagueGame",
    languages: "Unity, C#, PUN"
  },
  {
    imageURL: "images/projects/GalagaGame.png",
    imageAlt: "GalagaGame",
    title: "Galaga",
    date: "March 2021 - April 2021",
    text: "A remake of Atari's Galaga in which AI enemies are trained using curriculum-based reinforcement learning.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/GalagaGame",
    languages: (
      <div>
        Unity, C#,{" "}
        <a href="https://unity.com/products/machine-learning-agents" class="link-dark">
          MLAgents
        </a>
      </div>
    )
  },
  {
    imageURL: "images/projects/2DFighterGame.png",
    imageAlt: "2DFighterGame",
    title: "2D Fighter Game",
    date: "January 2021",
    text: "A beat 'em up style game that showcases Unity's Keyframed Animations and Animation transitions.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/2DFighterGame",
    languages: "Unity, C#"
  },
  {
    imageURL: "images/projects/SpaceShooterGame.png",
    imageAlt: "SpaceShooterGame",
    title: "Top-Down Space Shooter",
    date: "December 2020",
    text: "A game in which the player controls a spaceship, fires explosive rockets, and dodges incoming waves of enemies.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/SpaceShooterGame",
    languages: (
      <div>
        Unity, C#,{" "}
        <a href="https://assetstore.unity.com/packages/essentials/tutorial-projects/unity-particle-pack-127325" class="link-dark">
          Unity Particle Pack
        </a>
      </div>
    )
  },
  {
    imageURL: "images/projects/ProjectileSimulatorGame.png",
    imageAlt: "ProjectileSimulatorGame",
    title: "Projectile Simulator",
    date: "October 2020",
    text: "A game similar to Angry Birds in which the player launches chickens from a cannon to destroy walls of crates.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/Virtual%20Reality%20and%20Game%20Design%202020-21/ProjectileSimulator",
    languages: "Unity, C#"
  },
  {
    imageURL: "images/projects/WorkoutApplication.png",
    imageAlt: "WorkoutApplication",
    title: "Workout Tracker",
    date: "May 2019 - June 2019",
    text: (
      <div>
        Enables user to create and track workout sessions containing different exercises. Uses{" "}
        <a href="https://www.anychart.com/technical-integrations/samples/android-charts/" class="link-dark">
          AnyChart
        </a>{" "}
        library.
      </div>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/blob/master/Mobile%20Application%20Development%202019-20/WorkoutApplication.zip",
    languages: "Android, Java, XML, AnyChart"
  },
  {
    imageURL: "images/projects/ChatBotApplication.png",
    imageAlt: "ChatBotApplication",
    title: "Automated Chat Bot",
    date: "April 2019",
    text: "Uses Android SMS permissions to automate a conversation with a roommate over leftover pizza.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/blob/master/Mobile%20Application%20Development%202019-20/ChatBotApplication.zip",
    languages: "Android, Java, XML"
  },
  {
    imageURL: "images/projects/CookieClickerApplication.png",
    imageAlt: "CookieClickerApplication",
    title: "Donut Clicker",
    date: "February 2020",
    text: (
      <div>
        A replica of the online incremental game called{" "}
        <a href="https://orteil.dashnet.org/cookieclicker/" class="link-dark">
          Cookie Clicker
        </a>
        , but with doughnuts.
      </div>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/blob/master/Mobile%20Application%20Development%202019-20/CookieClickerProject.zip",
    languages: "Android, Java, XML"
  },
  {
    imageURL: "images/projects/GPSApplication.png",
    imageAlt: "GPSApplication",
    title: "GPS Tracker",
    date: "January 2020",
    text: "Uses Android location permissions to display the user's location, coordinates, and distance traveled.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/blob/master/Mobile%20Application%20Development%202019-20/GPSProject.zip",
    languages: "Android, Java, XML"
  },
  {
    imageURL: "images/projects/WeatherApplication.png",
    imageAlt: "WeatherApplication",
    title: "Weather Application",
    date: "November 2019",
    text: (
      <div>
        Implements OpenWeatherMap's{" "}
        <a href="https://openweathermap.org/api" class="link-dark">
          Hourly and Daily Forecast
        </a>{" "}
        APIs to display pertinent weather info.
      </div>
    ),
    projectURL: "https://github.com/melvinrajendran/High-School-CS/blob/master/Mobile%20Application%20Development%202019-20/Weather%20Project.zip",
    languages: "Android, Java, XML"
  },
  {
    imageURL: "images/projects/BerzerkGame.png",
    imageAlt: "BerzerkGame",
    title: "Berzerk",
    date: "May 2019 - June 2019",
    text: "A game in which the player traverses maze-like rooms of armed robots, fires lasers, and tries to obtain a high score.",
    projectURL: "https://github.com/melvinrajendran/High-School-CS/tree/master/AP%20Computer%20Science%20A%202018-19/Final%20Project%20-%20Game%20Design/Berzerk",
    languages: "Java, JavaFX"
  },
  {
    imageURL: "images/projects/PersonalWebsite.png",
    imageAlt: "PersonalWebsite",
    title: "Personal Website",
    date: "June 2021 ~",
    text: "The website you are currently looking at! Built using React and Bootstrap 5.",
    projectURL: "https://github.com/melvinrajendran/Personal-Site",
    languages: "React, Bootstrap 5"
  }
];

export default projects;
