import { atom, selector } from 'recoil';
import { LXPFeaturesList } from './const';

export const UserSearchState = atom({
  key: 'userSearchState',
  default: '',
});

export const FeaturesListState = atom({
  key: 'FeaturesListState',
  default: LXPFeaturesList,
});

export const FilteredFeatures = selector({
  key: 'FilteredFeatures',
  get: ({ get }) =>
    get(FeaturesListState).filter((item) =>
      item.title.toLowerCase().includes(get(UserSearchState).toLowerCase())
    ),
});
