import { createReducer } from '@reduxjs/toolkit';
import { setResponsive } from './responsive-actions';

const responsiveReducer = createReducer('', {
  [setResponsive.type]: (_, { payload }) => payload,
});

export default responsiveReducer;
