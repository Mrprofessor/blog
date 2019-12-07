import React from "react";
import { graphql } from "gatsby";
import Remarkable from "react-remarkable";
import Layout from "../components/layout/Layout";
import CustomCard from "../shared/customCard/CustomCard";
import ProjectBoard from "../shared/projectBoard/ProjectBoard";
import CustomButton from "../shared/customButton/CustomButton";
import Meta from "../components/seo/Meta";

import featuredProjects from "../../data/projects.json";

const Projects = () => {
  console.log(featuredProjects);
  // TODO
  // Fetch projects dynamically
  return (
    <Layout>
      <Meta />
      <ProjectBoard>
        {featuredProjects["projects"].map(project => (
          <CustomCard
            header={project["name"]}
            description={<Remarkable source={project["description"]} />}
            footer={
              <div class="custom-card-footer">
                <CustomButton text="source" link={project["soureLink"]} />
                <CustomButton text="demo" link={project["demoLink"]} />
              </div>
            }
          />
        ))}
      </ProjectBoard>
    </Layout>
  );
};

export default Projects;
