import compose from 'compose-function';
import { withRouter } from './withRouter';
import { withStyled } from './withStyled';
import { withAuth } from '@/app/providers/withAuth';

export const withProviders = compose(withRouter, withStyled, withAuth);
