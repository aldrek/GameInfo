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

export const gameSystemRequirement_info = [
  "OS",
  "Processor",
  "Memory",
  "Graphics",
  "Storage",
];

export const mapArrayToMinRequirment = (arr) => {
  return arr;
};

export async function filterAndMap(arr, category) {
  arr = arr
    .filter((item) => item.category === category)
    .map((game) => game.title);
}

export async function checkIfIDExitInArray(id, data) {
  return data.filter((game) => game.id === id).length > 0;
}

export async function likeClicked(e, game, data, setData) {
  e.stopPropagation();

  const check = await checkIfIDExitInArray(game.id, data);

  if (!check) {
    setData([...data, game]);
  } else {
    console.log("Deleting");
    setData((prev) => {
      return [...prev.filter((item) => item.id !== game.id)];
    });
  }
}

export function isItemLiked(list, id) {
  return list.filter((item) => item.id === id).length > 0;
}
