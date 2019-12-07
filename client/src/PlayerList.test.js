import React from 'react';
import { render } from '@testing-library/react';
import PlayerList from './components/PlayersList'

it('renders without crashing', () => {
  render(<PlayerList />)
});