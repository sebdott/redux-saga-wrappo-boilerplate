import { hexToRgba } from '../../utils';

export default ({ colors, header }) => ({
  container: {
    position: 'relative',
    width: '100%',
    background: header.background,
    height: header.height,
    padding: [0, '1rem'],
    borderBottom: `1px solid ${colors.darkGray}`,
    '&[data-sticked="true"]': {
      background: hexToRgba(header.background, 0.9),
    },
  },
  logoColumn: {
    float: 'left',
    height: header.height,
    position: 'relative',
  },
  logo: {
    display: 'inline-block',
    verticalAlign: 'middle',
    maxHeight: header.height,
    position: 'relative',
    cursor: 'pointer',
  },
  formColumn: {
    float: 'right',
    height: header.height,
  },
  menuIcon: {
    background: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    fontSize: '1.5rem',
    lineHeight: 1,
    outline: 'transparent',
    padding: 0,
    verticalAlign: 'middle',
  },
});
