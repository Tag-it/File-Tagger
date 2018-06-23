import React, { Component } from 'react';
import '../style/about-us.scss';

class Aboutus extends React.Component {
  render() {
    return (<div className="about-us">
    <div className="ronnieDiv">
  <h3>Ronnie Lewis</h3>
  <img className="ronnieImage" src="./about-us-assets/bill-about-us-photo.jpg" alt="Group Member Ronnie"></img>
    <p className="ronnieIntroduction">I got involved in this project because I wanted to help the volunteers and visitors of the Point Defiance Zoo. By utilizing my web development skills we hope to make data collection and analysis easier to help preserve the beautiful Purple Martin.
  </p>
  <p className="ronnieProjectComments"> I am relatively new to the Pacific Northwest and I love the environment and the tech culture here in Seattle. I have always enjoyed problem solving and puzzling, so software development lets me tackle problems in a practical, efficient, and creative way!
  </p>
  <p className="ronnieGitHubLink"> <a href="https://github.com/bpodell">Ronnie's GitHub</a></p>
  </div>
<div className="fredDiv">
<h3>Fred Rapp</h3>
<img className="fredImage" src="./about-us-assets/fred-about-us-photo.jpg" alt="Group Member Fred"></img>
  <p className="fredIntroduction">I am an East Coast transplant that fell in love with the west coast, particularly the Pacific Northwest. About a year ago, I left my job as store manager of a local T-mobile branch to pursue the new challenge of being a stay at home dad. While taking the opportunity to spend some quality time with my daughter, I decided it was time to think about what my next career move. Seeing how tech was booming in Seattle, I decided to learn to code and start the journey to becoming a developer. I took the 101 and 102 courses at Code fellows in the summer, and loved the culture and community that Code fellows offered...so I enrolled full time in the Fall and started the journey.
  </p>
  <p className="fredProjectComments">I choose the Spot the Swallows project, because it sounded like it would be fun to create a web app that would take an existing paper process and streamline it to work in the field as a digital database that was more efficient and interactive.
  </p>
   <p className="fredGitHubLink"> <a href="https://github.com/bjbuchholz">Fred's GitHub</a></p>
</div>
<div className="mitchDiv">
  <h3>Mitch Hall</h3>
<img className="mitchImage" src="./about-us-assets/mitch-about-us-photo.jpg" alt="Group Member Mitch"></img>
<p className="mitchIntroduction">I'm a two time volunteer for the Pt. Defiance Zoo, "Spot the Swallows" conservation effort. As a volunteer, I felt that the Zoo website could use a little more information about the program, and I also wanted to have a way to digitize the observation data. So, even before becoming a Code Fellows student I knew that  was something I wanted to do. I was provided the opportunity to turn this idea into a class project and the fine gentlemen you see here joined me in making it a reality.
</p>
<p className="mitchProjectComments">It was very rewarding being able to apply what I have learned at Code Fellows over these last few weeks to something that will be a benefit to the Zoo, the volunteers and ultimately the Purple Martins, which is the whole point of the effort. Each team member contributed their ideas and what they learned to different aspects of the site, and it came together into something we are all proud to have been a part of.
</p>
<p className="mitchGitHubLink"> <a href="https://github.com/SCUBAGUYPNW">Mitch's GitHub</a></p>
</div>
</div>
    );
  }
}

export default Aboutus;