import Card from "./Card";
import { data } from "./data";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="container mt-4">
        <Navbar className="w-100" />
        <div className="row">
          {data.map((val) => {
            return (
              <div className="col-md-3 text-center mb-4" key={val.id}>
                <Card
                  name={val.name}
                  desc={val.description}
                  img={val.image_url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
