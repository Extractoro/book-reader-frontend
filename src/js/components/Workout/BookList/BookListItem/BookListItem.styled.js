import styled from 'styled-components';


export const Li = styled.div`
  display: flex;
  flex-direction: column;

  ::before {
    @media (min-width: 768px){
      width: 704px;
    }
    content: '';
    width: 280px;
    margin-bottom: 20px;
    border: 1px solid #E0E5EB;
  }

  ::after {

    @media (min-width: 768px){
      width: 704px;
    }
    margin-top: 20px;
    content: '';
    width: 280px;
    margin-bottom: 20px;
    border: 1px solid #E0E5EB;
  }
`;
export const BookListItemName = styled.p`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #242A37;

  ::after {
    content:  ' ';
    border: 2px solid tomato;
    display: block;
    width: 22px;
    height: 10px;
    margin: 10px 5px 0 10px;
  }

  ::before {
    content: ' ';
    border: 2px solid tomato;
    display: block;
    width: 22px;
    height: 10px;
    margin: 10px 5px 0 10px;
  }

`;

export const BookListItemDesc = styled.p`

  margin-top: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #898F9F;

`;

export const BookListItemText=styled.span`
  font-family: 'Montserrat';
  margin-left: 10px;
     font-style: normal;
     font-weight: 500;
     font-size: 12px;
     line-height: 15px;
     color: #242A37;

`



