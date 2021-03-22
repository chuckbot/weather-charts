import styled from 'styled-components'

export const MainContainer = styled.div `
  background: url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3) no-repeat;
  background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1.layout-title {
    margin: 0;
  }


  .item-a {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .item-b {
    grid-column: 2;
    grid-row: 1;
  }

  .item-c {
    grid-column: 2;
    grid-row: 2;
  }

  div.chart-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;