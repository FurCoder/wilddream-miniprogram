import React from 'react';
import { createHomeStore } from '../stores';

export const MSTStoresContext = React.createContext({
  home: createHomeStore()
});
