export default ({ colors, slider }) => {
  const sliderContentHeight = slider.height - slider.headlineHeight;
  return {
    container: {
      position: 'relative',
      overflow: 'auto',
      minHeight: sliderContentHeight,
      '&::after': {
        content: '""',
        clear: 'both',
        display: 'table',
      },
      '& .slider': {
        minHeight: 'inherit',
        border: `1px solid ${colors.primary}`,
        borderTop: 0,
        borderBottomLeftRadius: slider.borderRadius,
        borderBottomRightRadius: slider.borderRadius,
        background: colors.white,
        overflow: 'auto',
      },
    },
    headline: {
      margin: 0,
      background: colors.primary,
      lineHeight: `${slider.headlineHeight}px`,
      color: colors.white,
      fontSize: '1.25rem',
      textAlign: 'center',
      borderTopLeftRadius: slider.borderRadius,
      borderTopRightRadius: slider.borderRadius,
    },
    toggleButton: {
      background: colors.white,
      border: '0 solid transparent',
      borderRadius: slider.toggleButtonSize / 2,
      boxShadow: '0 1px 1px 1px rgba(0, 0, 0, 0.14)',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '2rem',
      height: slider.toggleButtonSize,
      lineHeight: `${slider.toggleButtonSize}px`,
      margin: '1rem',
      textAlign: 'center',
      touchAction: 'manipulation',
      width: slider.toggleButtonSize,
      outline: 'transparent',
      padding: 0,
      '& svg': {
        display: 'inline-block',
        height: slider.toggleButtonSize,
        width: slider.toggleButtonSize,
        fontSize: 'inherit',
      },
      '& path': {
        fill: colors.black,
      },
    },
    pagingDot: {
      background: colors.darkGray,
      border: '0 solid transparent',
      borderRadius: 3,
      cursor: 'pointer',
      display: 'inline-block',
      height: 6,
      margin: '0.5rem',
      outline: 'transparent',
      width: 6,
      '&[data-active=true]': {
        background: colors.primary,
      },
    },
  };
};
