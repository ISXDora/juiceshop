import { Juice, JuiceFlavors, juiceImageMap, JuiceFlavorTitles } from './types'

export function generateRandomJuice(): Juice[] {
  const juiceFlavors = Object.values(JuiceFlavors);
  const juiceList: Juice[] = juiceFlavors.map((flavor) => ({
    id: flavor,
    title: JuiceFlavorTitles[flavor],
    image: juiceImageMap[flavor],
    price: 9.90,
    amount: 1,
    ice: false,
    sugar: false,
    type: flavor
  }));
  return juiceList;
}
