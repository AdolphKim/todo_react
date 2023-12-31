import React from "react";
import styled from "styled-components";
import Plan from "../Plan/Plan";
import Title from "../../Atom/Typography/Title";

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

const Planpage = ({ plans }: Props) => {
  return (
    <Container>
      <PlanSection>
        {plans.map((planSource) => (
          <PlanArticle>
            {planSource.title} : {planSource.body}
            {planSource.subplan ? (
              <Plan plans={planSource.subplan} />
            ) : (
              <Title>계획없음</Title>
            )}
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
