import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import isolate from 'jss-isolate';
import jssPrefixer from 'jss-vendor-prefixer';
import jssGlobal from 'jss-global';
import jssExtend from 'jss-extend';
import jssNested from 'jss-nested';

export default theme => {
  const jss = createJss(preset()).use(
    jssGlobal(),
    jssExtend(),
    jssNested(),
    jssPrefixer(),
    isolate({
      reset: {
        boxSizing: 'border-box',
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        fontWeight: 'normal',
        lineHeight: theme.lineHeight,
        color: theme.colors.black,
      },
    }),
  );
  return { jss, theme };
};
