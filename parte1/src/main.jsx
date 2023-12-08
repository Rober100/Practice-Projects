import ReactDOM from "react-dom";
import App from "./App";
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Total from "./components/Total";

// const App = () => {
//   const course = [
//     { part: "Fundamentals of React", exercise: 10 },
//     { part: "Using props to pass data", exercise: 7 },
//     { part: "State of a component", exercise: 14 },
//   ];

//   const sum = course.reduce((accumulator, currentNumber) => {
//     return accumulator + currentNumber.exercise;
//   }, 0);
//   console.log(sum);
//   return (
//     <div>
//       <Header course="Half Stack application development" />
//       {course.map((el, index) => {
//         return <Content key={index} part={el.part} exercises={el.exercise} />;
//       })}
//       <Total exercises={sum} />
//     </div>
//   );
// };

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
