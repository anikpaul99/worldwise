import { useNavigate } from "react-router-dom";
import Button from "./Button";

/**
 * Button to go back
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
