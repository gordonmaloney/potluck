export const addPotluck = (potluckTitle, potluckDate, potluckTheme, essentials) => {
  console.log("reducing...", potluckTitle, potluckDate, potluckTheme, essentials);
  return {
    type: "ADD_POTLUCK",
    payload: {
      potluckTitle: potluckTitle,
      potluckDate: potluckDate,
      potluckTheme: potluckTheme,
      essentials: essentials,
    },
  };
};
