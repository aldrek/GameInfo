export const gameCategoryList = [
  "MMO",
  "MMORPG",
  "Shooter",
  "Strategy",
  "Moba",
  "Card",
  "Racing",
  "Sports",
  "Social",
  "Fighting",
];

export async function filterAndMap(arr, category) {
  arr = arr
    .filter((item) => item.category === category)
    .map((game) => game.title);
}
