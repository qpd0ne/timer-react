import Stopwatch from "../../components/Stopwatch/Stopwatch";
import "./StopwatchPage.css";

function StopwatchPage() {
  return (
    <div className="body_block">
      <div className="center_block">
        <div className="stopwatch_block">
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default StopwatchPage;
