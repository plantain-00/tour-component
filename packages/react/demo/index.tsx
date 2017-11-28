import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tour } from"../dist/";
import { data } from "tour-component/demo/";

class Main extends React.Component<{}, {}> {
    private data = data;

    private get tourIsVisible() {
        return this.data.index >= 0 && this.data.index < this.data.steps.length;
    }

    render() {
        const tour = this.tourIsVisible ? (
            <Tour data={this.data}
                update={e => this.update(e)}>
            </Tour>
        ) : null;
        return (
            <div>
                <a href="https://github.com/plantain-00/tour-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                {tour}
                <button onClick={e => this.deleteValue()}>delete the value in localstorage</button>
                <div id="step_1" style={{ position: "absolute", left: "10px", top: "210px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 1 target</div>
                <div id="step_2" style={{ position: "absolute", left: "310px", top: "10px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 2 target</div>
                <div id="step_3" style={{ position: "absolute", right: "80px", top: "150px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 3 target</div>
                <div id="step_4" style={{ position: "absolute", right: "430px", top: "800px", width: "200px", height: "100px", lineHeight: "100px", textAlign: "center" }}>step 4 target</div>
            </div>
        );
    }

    private deleteValue() {
        localStorage.removeItem(data.localStorageKey);
        this.update(0);
    }

    private update(index: number) {
        this.data.index = index;
        this.setState({ data: this.data });
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
