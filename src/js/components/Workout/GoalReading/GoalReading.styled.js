import styled from 'styled-components';

export const GoalReadingBlock = styled.div`
  //border: 2px solid tomato;
  margin-top: 32px;
  //height: 0;
  width: 280px;
  margin-right: auto;
  margin-left: auto;
  background: #FFFFFF;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  @media (min-width: 768px) {
    width: 704px;
    display: flex;
    justify-content: space-around;
  }

`;


export const GoalThumb = styled.div`
  //border: solid 2px tomato;
  display: flex;
  width: 280px;
  @media (max-width: 767px){
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    //height: 236px;
  }

  justify-content: space-around;
  align-items: center;
  background: #FFFFFF;

`;

// export const GoalNumberSquare = styled.span`
//   width: 100px;
//   height: 100px;
//   background: #F5F7FA;
//   box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
// `;

export const GoalNumber = styled.p`
  margin-top: 20px;
  padding: 11px 39px 11px 39px;
  @media(max-width: 767px) {
    padding: 31px 37px 31px 37px;
  }


  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  text-align: center;

  color: #091E3F;
  background: #F5F7FA;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);

`;

export const GoalText = styled.p`
  @media (max-width: 767px){
    margin: 14px auto 0 auto;
    width: 66px;
  }


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #898F9F;
`;


