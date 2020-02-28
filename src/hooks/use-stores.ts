import React from 'react';
import { MSTStoresContext } from '../contexts';

export const useStores = () => React.useContext(MSTStoresContext);
