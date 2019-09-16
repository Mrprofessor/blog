import React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/layout/Layout";
import CustomCard from "./../shared/customCard/CustomCard";
import ProjectBoard from "./../shared/projectBoard/ProjectBoard";
import CustomButton from "./../shared/customButton/CustomButton";

const Projects = () => {
  return (
    <Layout>
      <div>
        <p>Under heavy Construction</p>
      </div>
      <ProjectBoard>
        <CustomCard
          header="rudra.dev"
          description={"A personal blog built using gatsby.js"}
          footer={
            <div class="custom-card-footer">
              <CustomButton
                text="source"
                link="https://github.com/mrprofessor/rudra.dev"
              />
              <CustomButton text="demo" link="https://rudra.dev/" />
            </div>
          }
        />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </ProjectBoard>
    </Layout>
  );
};

export default Projects;
