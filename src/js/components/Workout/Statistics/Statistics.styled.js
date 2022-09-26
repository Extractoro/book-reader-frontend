import styled from 'styled-components';


export const StatisticsThumb = styled.div`
  position: relative;
  width: 280px;
  height: 290px;
  background: #FFFFFF;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
`;

export const StatisticsValue = styled.p`
  margin-top: 25px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  /* identical to box height */

  text-transform: uppercase;
  color: #242A37;

`;


export const StatisticsResult = styled.div`

  margin: 21px auto 0 auto;
  width: 236px;
  height: 190px;
  border-left: 1px solid #B1B5C2;
  border-bottom: 1px solid #B1B5C2;
  border-right: 1px solid #B1B5C2;;

`;


// .statistics-thumb{
//   position: relative;
//   width: 280px;
//   height: 290px;
//   background: #FFFFFF;
//   box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
//
// }

//
// .statistics-value{
//   margin-top: 25px;
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 15px;
//   text-align: center;
//   /* identical to box height */
//
//   text-transform: uppercase;
//   color: #242A37;
// }
//
//
// .statistics-result{
//   margin: 21px auto 0 auto;
//   width: 236px;
//   height: 190px;
//   border-left: 1px solid #B1B5C2;
//   border-bottom: 1px solid #B1B5C2;
//   border-right: 1px solid #B1B5C2;;
// }

export const AddWorkout = styled.button`
  position: absolute;
  bottom: -26px;
  left: 40%;
  display: inline-block;
  width: 52px;
  height: 52px;

  cursor: pointer;
  border-radius: 50%;
  background: #FF6B08;`;
