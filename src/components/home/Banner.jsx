// import banner1 from "../../assets/image_01.jpeg";
import banner2 from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-5xl font-bold">Welcome to </h1>
          <h2 className="mb-5 text-5xl font-bold">Delicious Recipes</h2>
          <p className="mb-5 ">
          Welcome to Delicious Recipes, your one-stop destination for all things culinary! Whether you are a seasoned chef, a cooking enthusiast, or a beginner in the kitchen, our platform offers a diverse collection of recipes, cooking tips, and inspiration to elevate your culinary skills.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
