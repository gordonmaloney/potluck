export const addPotluck = (potluckTitle) => {
  console.log("potluckTitle: ", potluckTitle)
    return {
      type: "ADD_POTLUCK",
      payload: {
        potluckTitle: potluckTitle,
      },
    };
  };
  