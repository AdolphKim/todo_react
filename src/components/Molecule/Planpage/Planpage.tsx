import React from "react";
import styled from "styled-components";

interface plan {
  key: number;
  title: string;
  body: string;
  subplan?: plan[];
}

export interface Props {
  plans: plan[];
}

const Planpage = ({ plans }: Props) => {
  return (
    <Container>
      <PlanSection>
        {plans.map((planSource) => (
          <PlanArticle>
            {planSource.title} : {planSource.body}
          </PlanArticle>
        ))}
      </PlanSection>
    </Container>
  );
};

export default Planpage;

const Container = styled.div``;

const PlanSection = styled.ul``;

const PlanArticle = styled.li``;
