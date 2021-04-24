import PropTypes from 'prop-types';
import noImage from './noImage.jpg';
import s from './Error.module.css';

export default function Error({ texterror }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={noImage} width="350" alt="noImage" />
      <p text={texterror} className={s.text}>
        {texterror}
      </p>
    </div>
  );
}

Error.propTypes = {
  texterror: PropTypes.string.isRequired,
};
