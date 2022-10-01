import styled from 'styled-components';



export const WorkoutContainer =styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;

@media(min-width: 768px){
  width:768px ;
}
  @media(min-width: 1280px){
    display: flex;
    flex-direction: row-reverse;
    width: 1280px;
  }
`

export const GoalWrapper=styled.div`
  @media(min-width: 1280px){
    margin-right: 16px;
    margin-top: 16px;
    width: 288px;
  }


`



export const Wrapper=styled.div`
 //position: relative;
  @media(min-width: 1280px){
    //border: 2px solid tomato;
    //display: flex;
    //flex-direction: row-reverse;
    width: 928px;
    margin: 0 auto 0 20px;
  }

`


