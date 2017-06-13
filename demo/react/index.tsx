import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tour } from "../../dist/react";
import { data } from "../common";

class Main extends React.Component<{}, {}> {
    data = data;

    deleteValue() {
        localStorage.removeItem(data.localStorageKey);
    }

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/tour-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                <Tour data={this.data}>
                </Tour>
                <button onClick={e => this.deleteValue()}>delete the value in localstorage</button>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
