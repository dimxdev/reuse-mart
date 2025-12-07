import { useNavigate } from "react-router";

function UseBack() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return {
    handleBack
  }
}

export default UseBack;
