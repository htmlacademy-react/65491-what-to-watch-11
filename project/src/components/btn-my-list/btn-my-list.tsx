import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function BtnMyList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loggedIn = () => authorizationStatus === AuthorizationStatus.Auth;
  return (
    <div>
      {loggedIn() && (
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">9</span>
        </button>
      )}
    </div>
  );
}

export default BtnMyList;
