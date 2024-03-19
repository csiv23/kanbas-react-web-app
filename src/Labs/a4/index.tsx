import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables.";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1>Assignment 4</h1>
      <ClickEvent></ClickEvent>
      <PassingDataOnEvent></PassingDataOnEvent>
      <PassingFunctions theFunction={sayHello}></PassingFunctions>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ParentStateComponent></ParentStateComponent>
      <ReduxExamples></ReduxExamples>
    </>
  );
};
export default Assignment4;
