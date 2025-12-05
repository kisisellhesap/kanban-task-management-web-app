export const sidebarVariant = {
  open: {
    width: 300,
  },
  closed: {
    width: 0,
    transition: {
      delay: 0.2,
    },
  },
};

export const sidebarChildVariant = {
  visible: {
    opacity: 1,
    display: "flex",
    transition: {
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    display: "none",
  },
};

export const sidebarToggleVariant = {
  short: {
    width: 53,
    backgroundColor: "#635fc7",
    color: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  long: {
    width: 276,
    backgroundColor: "none",
    color: "#828fa3",
    paddingLeft: 32,
    paddingRight: 32,
  },

  shortHover: {
    backgroundColor: "#a8a4ff",
    transition: {
      duration: 0,
    },
  },
  longHover: {
    backgroundColor: "rgba(99,95,199,.1)",
    color: "#635fc7",
    transition: {
      duration: 0,
    },
  },
  darkHover: {
    backgroundColor: "#fff",
    color: "#635fc7",
    transition: {
      duration: 0,
    },
  },
};

export const sidebarToggleSpanVariant = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  visible: {
    opacity: 1,
    display: "block",
    transition: {
      delay: 0.2,
    },
  },
};
