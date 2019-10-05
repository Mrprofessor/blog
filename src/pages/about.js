import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <div className="blog-post-content">
        <h2>about</h2>
        <p>
          I am an individual from planet Earth with humongous curiosity in
          technology and practically zero talent.I love to code as long as I
          know how to solve the problem and beyond that I run to those
          StackOverflow guys.Yeah I am a software developer (yeah.. that means I
          started my carreer editing excel sheets most of the time at work) and
          my buddies call me <kbd>prof</kbd>.
        </p>
        <p>
          It all started in my 7th grade when I first watched Matrix.I really
          wanted to be a bullet dodging hacker.I should have taken the blue
          pill! well that's past.Then like all other kids I started playing
          games and planned to build one someday(failed terribly).By following
          NEVER GET DOWN mantra I graduated as a{" "}
          <kbd>computer science engineer</kbd> and had settled for an entry
          level developer job in an outsourcing company.Left that when I found
          this kick-ass startup named{" "}
          <kbd>
            <a target="blank" href="https://turbot.com">
              Turbot
            </a>
            .
          </kbd>{" "}
          Gotta find Oracle ASAP..huh!
        </p>
        <p>
          While I am not at a WorkStation I am probably sleeping or playing
          cricket.
        </p>
        <p>
          You can find me on{" "}
          <code>
            <a target="blank" href="https://twitter.com/ThisIsRudra">
              Twitter
            </a>
          </code>
          , on{" "}
          <code>
            <a target="blank" href="https://github.com/mrprofessor">
              GitHub
            </a>
          </code>{" "}
          or at my cubicle.
        </p>

        <h2>credits</h2>
        <p>All goes to me.</p>
        <p>
          Kidding...This site was built with the amazing{" "}
          <code>
            <a target="blank" href="https://reactjs.org">
              react
            </a>
          </code>
          , and proudly hosted on{" "}
          <code>
            <a target="blank" href="https://github.com/">
              Github
            </a>
            .
          </code>
        </p>
        <p>Tried to be funny.Trust me I am not!</p>
      </div>
    </Layout>
  );
};

export default Projects;
