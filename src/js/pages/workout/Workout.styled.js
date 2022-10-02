import styled from 'styled-components';

export const WorkoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  //background-color:#F6F7FB;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 768px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    width: 1280px;
  }
`;

export const GoalWrapper = styled.div`
  @media (min-width: 1280px) {
    margin-right: 16px;
    margin-top: 16px;
    width: 288px;
  }
`;

export const Wrapper = styled.div`

  @media (min-width: 1280px) {

    width: 928px;
    margin: 0 auto 0 20px;
  }
`;
