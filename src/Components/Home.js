import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const routeToShop = () => {
    console.log("Submitting...");
    navigate("pizza");
  };

  return (
    <div className="home-wrapper">
      <div className="img-div">
        <h1>Your favorite food, Delivered while coding</h1>
        <button onClick={routeToShop}>Order now!</button>
      </div>

      <div>
        <h2>Food Delivery in Gotham City</h2>
        <div>
          <h3>test</h3>
        </div>
      </div>
    </div>
  );
}

// onClick={routeToShop}
