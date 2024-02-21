/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  let mood = {};
  if (theme.mood == "light") {
    mood = {
      transparentColor: theme.colors?.lightTransparentColor,
      bgColor: theme.colors?.lightBackgroundColor,
      paleBgColor: theme.colors?.lightPaleBgColor,
      primaryTextColor: theme.colors?.lightPrimaryTextColor,
      secondaryTextColor: theme.colors?.lightSecondaryTextColor,
      sidebarColor: theme.colors?.lightSidebarColor,
      successLightColor: theme.colors?.lightSuccessLightColor,
      successMainColor: theme.colors?.lightSuccessMainColor,
      successDarkColor: theme.colors?.lightSuccessDarkColor,
      warningLightColor: theme.colors?.lightWarningLightColor,
      warningMainColor: theme.colors?.lightWarningMainColor,
      warningDarkColor: theme.colors?.lightWarningDarkColor,
      errorLightColor: theme.colors?.lightErrorLightColor,
      errorMainColor: theme.colors?.lightErrorMainColor,
      errorDarkColor: theme.colors?.lightErrorDarkColor,
    };

    if (theme.colorState == "purple") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPurplePrimaryColor,
          palePrimaryColor: theme.colors?.lightPalePurplePrimaryColor,
        },
      };
    } else if (theme.colorState == "green") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPrimaryGreenColor,
          palePrimaryColor: theme.colors?.lightPalePrimaryGreenColor,
        },
      };
    } else if (theme.colorState == "pink") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPrimaryPinkColor,
          palePrimaryColor: theme.colors?.lightPalePrimaryPinkColor,
        },
      };
    } else if (theme.colorState == "cyan") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPrimaryCyanColor,
          palePrimaryColor: theme.colors?.lightPalePrimaryCyanColor,
        },
      };
    } else if (theme.colorState == "red") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPrimaryRedColor,
          palePrimaryColor: theme.colors?.lightPalePrimaryRedColor,
        },
      };
    } else if (theme.colorState == "brown") {
      return {
        currentState: {
          ...mood,
          primaryColor: theme.colors?.lightPrimaryBrownColor,
          palePrimaryColor: theme.colors?.lightPalePrimaryBrownColor,
        },
      };
    }
  }
}
