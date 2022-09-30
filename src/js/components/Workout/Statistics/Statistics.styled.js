import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StatisticsThumb = styled.div`
  margin-top: 33px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  height: 290px;
  background: #FFFFFF;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);


  @media (min-width: 768px){
    width: 704px;

  }

`;

export const StatisticsValue = styled.p`


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  @media(min-width: 768px){
    padding-top: 35px;
    margin-left:49px ;
  }
  /* identical to box height */
  @media (max-width: 767px){
  text-align: center;
    padding-top: 25px;
  }

  color: #242A37;

`;


export const StatisticsResult = styled.div`
@media(min-width: 768px){
  width:607px ;
}
  margin: 21px auto 0 auto;
  width: 236px;
  height: 190px;
  border-left: 1px solid #B1B5C2;
  border-bottom: 1px solid #B1B5C2;
  border-right: 1px solid #B1B5C2;;

`;




export const AddWorkout = styled(Link)`
  position: absolute;
  width: 200px;
  height: 40px;
  cursor: pointer;
  background: #FF6B08;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 767px){
    bottom: -26px;
    left: 40%;
    border-radius: 50%;
    width: 52px;
    height: 52px;
  }
`;
