import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tour } from "../../dist/react";
import { data, index } from "../common";

class Main extends React.Component<{}, {}> {
    data = data;
    index = index;

    deleteValue() {
        localStorage.removeItem(data.localStorageKey);
        this.update(0);
    }

    update(index: number) {
        this.index = index;
        this.setState({ index: this.index });
    }

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/tour-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                <Tour data={this.data}
                    index={this.index}
                    update={e => this.update(e)}>
                </Tour>
                <button onClick={e => this.deleteValue()}>delete the value in localstorage</button>
                <div id="step_1" style={{ position: "absolute", left: "10px", top: "210px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 1 target</div>
                <div id="step_2" style={{ position: "absolute", left: "310px", top: "10px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 2 target</div>
                <div id="step_3" style={{ position: "absolute", right: "80px", top: "150px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 3 target</div>
                <div id="step_4" style={{ position: "absolute", right: "430px", top: "800px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 4 target</div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
