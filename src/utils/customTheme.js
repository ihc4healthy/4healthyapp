// Custom theme for components
// https://github.com/creativetimofficial/material-tailwind/issues/318
// https://github.com/creativetimofficial/material-tailwind/issues/191

const defaultColors = ["white", "blue-gray", "gray", "brown", "deep-orange", "orange", 
                       "amber", "yellow", "lime", "light-green", "green", "teal", "cyan",
                       "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",];
const validColors = [...defaultColors, "primary", "secondary", "danger"];
const btnFillGradFocusActive = {
  focus: "focus:opacity-[0.85] focus:shadow-none",
  active: "active:opacity-[0.85] active:shadow-none",
};
const btnFillGrad = {
  primary: {
    backgroud: "bg-primary",
    color: "text-primary-contrast",
    shadow: "shadow-md shadow-primary-dark/10",
    hover: "hover:shadow-lg hover:shadow-primary-darkest/20",
    ...btnFillGradFocusActive,
  },
  secondary: {
    backgroud: "bg-secondary",
    color: "text-secondary-contrast",
    shadow: "shadow-md shadow-secondary-dark/10",
    hover: "hover:shadow-lg hover:shadow-secondary-darkest/20",
    ...btnFillGradFocusActive,
  },
  danger: {
    backgroud: "bg-danger",
    color: "text-danger-contrast",
    shadow: "shadow-md shadow-danger-dark/10",
    hover: "hover:shadow-lg hover:shadow-danger-darkest/20",
    ...btnFillGradFocusActive,
  },
};

//============================================//

const customTheme = {
  typography: {
    styles: {
      variants: {
        h1: {
          fontFamily: "font-heading",
          fontWeight: "font-bold",
        },
        h2: {
          fontFamily: "font-heading",
        },
        h3: {
          fontFamily: "font-heading",
        },
        h4: {
          fontFamily: "font-heading",
        },
        h5: {
          fontFamily: "font-heading",
        },
      },
    },
  },
  //============================================//
  button: {
    valid: {
      colors: validColors,
    },
    styles: {
      base: {
        initial: {
          fontFamily: "font-heading",
        },
      },
      variants: {
        filled: { ...btnFillGrad },
        gradient: { ...btnFillGrad },
        outlined: {
          primary: {
            border: "border border-primary",
            color: "text-primary-darkest",
            hover: "hover:opacity-75",
            focus: "focus:ring focus:ring-border-primary-dark/50",
            active: "active:opacity-[0.85]",
          },
        },
        text: {
          primary: {
            color: "text-primary-darkest",
            hover: "hover:bg-primary-dark/10",
            active: "active:bg-primary-dark/30",
          },
        },
      }
    }
  },
  //============================================//
  radio: {
    valid: {
      colors: validColors,
    },
    styles: {
      colors: {
        primary: {
          color: "text-primary",
          border: "checked:border-primary",
          before: "checked:before:bg-primary",
        },
        secondary: {
          color: "text-secondary",
          border: "checked:border-secondary",
          before: "checked:before:bg-secondary",
        },
        danger: {
          color: "text-danger",
          border: "checked:border-danger",
          before: "checked:before:bg-danger",
        },
      }
    }
  },
  //============================================//
  checkbox: {
    valid: {
      colors: validColors,
    },
    styles: {
      colors: {
        primary: {
          background: "checked:bg-primary",
          border: "checked:border-primary",
          before: "checked:before:bg-primary",
        },
        secondary: {
          background: "checked:bg-secondary",
          border: "checked:border-secondary",
          before: "checked:before:bg-secondary",
        },
        danger: {
          background: "checked:bg-danger",
          border: "checked:border-danger",
          before: "checked:before:bg-danger",
        },
      },
    },
  },
  //============================================//
  chip: {
    styles: {
      base: {
        chip: {
          fontWeight: "font-sans",
        },
        icon: {
          position: "relative",
          top: "",
          translate: "",
        },
      },
    },
  },
  //============================================//
  progress: {
    valid: {
      colors: validColors,
    },
    styles: {
      variants: {
        filled: {
          primary: {
            backgroud: "bg-primary",
            color: "text-primary-contrast",
          },
          secondary: {
            backgroud: "bg-secondary",
            color: "text-secondary-contrast",
          },
          danger: {
            backgroud: "bg-danger",
            color: "text-danger-contrast",
          },
        },
      },
    },
  },
  //============================================//
  badge: {
    valid: {
      colors: validColors,
    },
    styles: {
      colors: {
        primary: {
          backgroud: "bg-primary",
          color: "text-primary-contrast",
        },
        secondary: {
          backgroud: "bg-secondary",
          color: "text-secondary-contrast",
        },
        danger: {
          backgroud: "bg-danger",
          color: "text-danger-contrast",
        },
      },
    },
  },
  //============================================//
};

export {customTheme}