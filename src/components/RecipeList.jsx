import { Recipe } from "./Recipe";
import PropTypes from "prop-types";

export const RecipeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Recipe data={item}/>
        </li>
      ))}
    </ul>
  );
}

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
}