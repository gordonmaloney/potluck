export const addEssentials = (essentials) => {
    return {
      type: "ADD_ESSENTIALS",
      payload: {
        essentials: essentials,
      },
    };
  };
  