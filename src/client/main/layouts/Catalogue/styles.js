const padding = '1rem';
const row = () => ({
  '&::after': {
    content: '""',
    clear: 'both',
    display: 'table',
  },
});
export default ({ colors, borderRadius, slider }) => ({
  container: {
    background: colors.gray,
    overflow: 'auto',
  },
  headlineRow: {
    ...row(),
  },
  header: {
    float: 'left',
    height: 332,
    width: '40%',
    padding,
  },
  headerContent: {
    backgroundColor: colors.darkGray,
    height: '100%',
    display: 'block',
    textAlign: 'right',
    overflow: 'auto',
  },
  headline: {
    margin: '1rem',
    textAlign: 'right',
    fontSize: '1.25rem',
  },
  slider: {
    float: 'left',
    width: '60%',
    padding,
  },
  sliderContent: {
    height: '100%',
    display: 'block',
    overflow: 'auto',
  },
  sliderItem: {
    width: '100%',
    minWidth: slider.itemWidth,
    padding: slider.itemSpacing,
  },
  contentRow: {
    ...row(),
  },
  contentCol: {
    position: 'relative',
    display: 'inline-block',
    padding: '1rem',
    verticalAlign: 'top',
  },
  contentNav: {
    border: `1px solid ${colors.primary}`,
    maxWidth: 170,
    borderRadius,
    overflow: 'auto',
  },
  navItem: {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    border: `1px solid transparent`,
    '& ~ &': {
      borderTopColor: colors.primary,
    },
  },
});
