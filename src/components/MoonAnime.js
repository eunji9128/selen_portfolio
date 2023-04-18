import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Moon = styled.div`
  animation: ${rotate} 3s ease-in-out infinite;
`

const MoonAnime = () => {
  return (
    <div>
      <Moon>🌕</Moon>
    </div>
  );
};

export default MoonAnime
