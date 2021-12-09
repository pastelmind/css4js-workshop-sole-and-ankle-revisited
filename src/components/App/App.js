import React from 'react';
import styled from 'styled-components/macro';
import { GAPS, QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px ${GAPS.responsiveSmall};

  @media ${QUERIES.tabletAndBelow} {
    padding-top: 48px;
  }
`;

export default App;
