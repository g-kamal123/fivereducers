import { Button, Card, Heading, Page, TextField } from "@shopify/polaris";

import { connect } from "react-redux";
import { mapToDispatch, mapToState } from "./Actions/Map";
import "./App.css";

function App(props) {
  const num1Handler = (e) => {
    props.setNum1(e);
  };
  const num2Handler = (e) => {
    props.setNum2(e);
  };
  const btnHandler = (event) => {
    props.operation(event, [
      Number(props.clearReducer.num1),
      Number(props.clearReducer.num2),
    ]);
  };
  return (
    <Page>
      <Card sectioned>
        <TextField
          label="num 1"
          type="number"
          onChange={num1Handler}
          value={props.clearReducer.num1}
        />
        <br />
        <TextField
          label="num 2"
          type="number"
          onChange={num2Handler}
          value={props.clearReducer.num2}
        />
        <Heading>Sum: {props.addReducer.result}</Heading>
        <Heading>Subtraction: {props.subReducer.result}</Heading>
        <Heading>Multiplcation: {props.mulReducer.result}</Heading>
        <Heading>division: {props.divReducer.result}</Heading>
      </Card>
      <div style={{ margin: "1rem 0 0 0", display: "flex", gap: "0.4rem" }}>
        <Button destructive onClick={() => btnHandler("add")}>
          Add
        </Button>
        <Button primary onClick={() => btnHandler("minus")}>
          Subtract
        </Button>
        <Button destructive onClick={() => btnHandler("multiply")}>
          Multiply
        </Button>
        <Button primary onClick={() => btnHandler("divide")}>
          Divide
        </Button>
        <Button destructive onClick={() => props.clear()}>
          Clear
        </Button>
      </div>
    </Page>
  );
}

export default connect(mapToState, mapToDispatch)(App);
