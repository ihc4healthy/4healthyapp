// Custom theme for components
// https://github.com/creativetimofficial/material-tailwind/issues/318
// https://github.com/creativetimofficial/material-tailwind/issues/191

const defaultColors = ["white", "blue-gray", "gray", "brown", "deep-orange", "orange", 
                       "amber", "yellow", "lime", "light-green", "green", "teal", "cyan",
                       "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",];
const btnFillGradFocusActive = {
  focus: "focus:opacity-[0.85] focus:shadow-none",
  active: "active:opacity-[0.85] active:shadow-none",
};
const btnFillGrad = {
  primary: {
    backgroud: "bg-primary",
    color: "primary-contrast",
    shadow: "shadow-md shadow-primary-dark/10",
    hover: "hover:shadow-lg hover:shadow-primary-darkest/20",
    ...btnFillGradFocusActive,
  },
  secondary: {
    backgroud: "bg-secondary",
    color: "secondary-contrast",
    shadow: "shadow-md shadow-secondary-dark/10",
    hover: "hover:shadow-lg hover:shadow-secondary-darkest/20",
    ...btnFillGradFocusActive,
  },
  danger: {
    backgroud: "bg-danger",
    color: "danger-contrast",
    shadow: "shadow-md shadow-danger-dark/10",
    hover: "hover:shadow-lg hover:shadow-danger-darkest/20",
    ...btnFillGradFocusActive,
  },
};

const customTheme = {
  button: {
    valid: {
      colors: [...defaultColors, "primary", "secondary", "danger"],
    },
    styles: {
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
  //============================================//
};

export {customTheme}