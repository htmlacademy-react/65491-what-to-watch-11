import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type BtnPlayProps = {
  filmId: number | undefined;
};
function BtnPlay({filmId}: BtnPlayProps): JSX.Element {
  const routeId = filmId ? filmId.toString() : '';
  return (
    <Link to={`${AppRoute.Player}/${routeId}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default BtnPlay;
