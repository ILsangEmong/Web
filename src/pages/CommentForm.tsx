import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function CommentForm() {
  return (
    <>
      <StTitle>몽몽이들</StTitle>

      <StContainer></StContainer>

      <Link to={'/group'}>
        <StBtn>작성완료</StBtn>
      </Link>
    </>
  );
}

const StTitle = styled.div`
  // width: ;
  // height: ;

  display: flex;
  justify-content: center;

  // margin-bottom :3rem;
`;

const StContainer = styled.div`
  // width: ;
  // height: ;

  display: flex;
  flex-direction: row;
  justify-content: center;

  // gap: 3rem;
`;

const StBtn = styled.button`
  // width: ;
  // height: ;

  display: flex;
  justify-content: center;

  // &:hover{
  //   background-color : skyblue;
  //   color : blue
  // }
`;
