export const addPotluck = (potluckTitle, potluckDate, potluckTheme) => {
  console.log("potluckTitle: ", potluckTitle, potluckDate, potluckTheme);
  return {
    type: "ADD_POTLUCK",
    payload: {
      potluckTitle: potluckTitle,
      potluckDate: potluckDate,
      potluckTheme: potluckTheme,
    },
  };
};
