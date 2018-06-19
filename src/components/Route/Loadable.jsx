import Loadable from 'react-loadable';
import Loading from './Loading';

export default function LoadableComponent(
  importExp,
  loading = Loading,
  {...otherProp} = {},
) {
  return Loadable({
    loader: importExp,
    loading,
    timeout: 3000,
  });
}
