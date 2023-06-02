import { CiAlarmOn, CiAlignBottom , CiPizza} from "react-icons/ci";
import PropTypes from "prop-types";

export const Recipe = ({ data: { calories, image, name, servings, time } }) => {
  return (
    <>
      <img src={image} alt={name} width="120" />
      <h2> {name} </h2>
      <div>
        <CiAlarmOn size="20"/>
        { time } min
      </div>
      <div>
        <CiPizza/>
        { servings } servings
      </div>
      <div>
        <CiAlignBottom/>
        { calories } calories
      </div>

      <div>
        <h3>  Difficulty </h3>
        <div>
          <span> Easy </span>
          <span> Medium  </span>
          <span> Hard </span>
        </div>
      </div>
    </>
  )
}

Recipe.propTypes = {
  data: PropTypes.shape({
    /* id: PropTypes.number.isRequired, */
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired

}