const theme = {
  fontSize: 16,
  lineHeight: 1.5,
  fontFamily:
    'Lantinghei SC, Microsoft YaHei, tahoma, arial, "Hiragino Sans GB", sans-serif',
  borderRadius: 6,
};
theme.colors = {
  white: '#fff',
  black: '#333',
  gray: '#f8f9fa',
  darkGray: '#ced4da',
  primary: '#4263eb',
  primaryDarken: '#3b5bdb',
  success: '#20c997',
  warning: '#fcc419',
  error: '#fa5252',
  info: '#4dabf7',
};
theme.header = {
  height: 80,
  background: theme.colors.white,
};
theme.slider = {
  height: 300,
  headlineHeight: 50,
  borderRadius: 12,
  toggleButtonSize: 40,

  itemWidth: 240,
  itemBackground: theme.colors.gray,
  itemSpacing: 16,
};
theme.tooltip = {
  lightColor: theme.colors.white,
  darkColor: theme.colors.black,
  darkBackground: theme.colors.black,
  lightBorderColor: theme.colors.white,
  darkBorderColor: theme.colors.black,
  lightBackground: theme.colors.white,
  successBackground: theme.colors.success,
  warningBackground: theme.colors.warning,
  errorBackground: theme.colors.error,
  infoBackground: theme.colors.info,
};
theme.betCenter = {
  sliderItemBackground: theme.colors.gray,
};

export default theme;
