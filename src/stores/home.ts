import { types, Instance } from 'mobx-state-tree';

const BasicPicture = types.model('BasicPicture', {
  url: types.string
});

const Home = types.model('Home', {
  pictures: types.array(BasicPicture)
});

export function createHomeStore(): Instance<typeof Home> {
  return Home.create();
}

export type THome = ReturnType<typeof createHomeStore>;
