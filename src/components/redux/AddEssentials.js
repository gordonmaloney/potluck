export const addEssentials = (potluckTitle, essentials) => {
    return {
      type: "ADD_ESSENTIALS",
      payload: {
        potluckTitle: potluckTitle,
        essentials: essentials,
      },
    };
  };
  