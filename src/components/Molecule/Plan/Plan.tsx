import React from "react";
import styled from "styled-components";

interface subplan {
  key: number;
  title: string;
  body: string;
  subplan?: plan[];
}
interface plan {
  key: number;
  title: string;
  body: string;
  subplan?: subplan[];
}

export interface Props {
  plans: plan[];
}

const Plan = ({ plans }: Props) => {
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

export default Plan;

const Container = styled.div``;

const PlanSection = styled.ul``;

const PlanArticle = styled.li``;

const SubPlanArticle = styled.li``;
