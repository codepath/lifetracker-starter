import "./Grid.css";
export default function Grid() {
  return (
    <div className="grid">
      <div>
        <img
          className="photos"
          src="https://api.time.com/wp-content/uploads/2017/07/time-magazine-exercise-fitness-health-bethan-mooney-04.jpg?quality=85&w=1200&h=628&crop=1"
        />

        <div>Fitness</div>
      </div>

      <div>
        <img
          className="photos"
          src="https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg"
        />

        <div> Food </div>
      </div>

      <div>
        <img
          className="photos"
          src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325353_2200-732x549.jpg"
        />

        <div>Rest</div>
      </div>

      <div>
        <img
          className="photos"
          src="https://pyxis.nymag.com/v1/imgs/a70/8bd/ca5c024edf9b7c781a305efe8db1fcd475-simplified-planner.2x.rsquare.w600.jpg"
        />

        <div>Planner</div>
      </div>
    </div>
  );
}
