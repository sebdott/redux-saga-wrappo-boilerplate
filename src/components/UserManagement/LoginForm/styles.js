export default ({ header, colors, borderRadius }) => {
  const formContentHeight = 40;
  const formVerticalSpace = (header.height - formContentHeight) / 2;
  const formHorizontalSpace = formVerticalSpace / 4;
  return {
    form: {
      display: 'inline-block',
      height: formContentHeight,
      position: 'relative',
      top: formVerticalSpace,
      verticalAlign: 'middle',
    },
    btn: {
      background: colors.primary,
      color: colors.white,
      border: 0,
      boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.06)',
      height: formContentHeight,
      marginLeft: formHorizontalSpace,
      minWidth: 100,
      textAlign: 'center',
      borderRadius,
      float: 'left',
    },
    input: {
      height: formContentHeight,
      width: 150,
      marginLeft: formHorizontalSpace,
      float: 'left',
      padding: [0, formHorizontalSpace],
      border: `1px solid ${colors.darkGray}`,
      backgroundColor: colors.gray,
      borderRadius,
      outline: 'none',
    },
  };
};
