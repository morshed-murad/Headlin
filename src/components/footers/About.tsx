import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="py-24 px-10 flex flex-col gap-5">
      <div className="nav">
        <NavLink to="/home">Back</NavLink>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="flex gap-4 items-center">
          <li>Position:</li>
          <li className="text-xl font-bold">Software Engineer</li>
        </ul>

        <div className="px-20">
          <p>
            I graduated from Rana University in March 2023, where I successfully
            completed my course in the Faculty of Computer Science. With a
            strong foundation in web development, I have gained valuable
            experience and honed my skills in frontend web development.
            Currently, I am serving as an intern at Netlinks, contributing to
            software development projects as a front-end developer. This
            opportunity has allowed me to apply my skills and expand my
            knowledge in a professional setting. Prior to my internship at
            Netlinks, I worked at Staicha for a duration of two years as an IT
            intern. This experience provided me with valuable insights and
            enhanced my understanding of technology.
          </p>
          <span>And</span>
          <p>
            I have acquired substantial expertise in HTML, CSS, JavaScript,
            Vue.js, and React.js, enabling me to excel as a frontend web
            developer. Additionally, I specialize in creating responsive web
            applications that seamlessly adapt to various screen sizes and
            devices.
          </p>
          <div>
            <h1>Contact:</h1>
            <div>
              <span>(+93)0797028687</span>
              <div className="flex items-center ">
                <a href="https://www.linkedin.com/in/morshed-morad-902077247/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
