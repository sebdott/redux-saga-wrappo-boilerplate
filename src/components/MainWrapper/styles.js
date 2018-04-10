export default {
  container: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    minHeight: '100%',
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
    '& > *': {
      minHeight: 'inherit',
    },
  },
  content: {
    position: 'relative',
    height: 'auto',
  },
};
