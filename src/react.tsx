import * as React from "react";
import * as common from "./common";

export class Tour extends React.PureComponent<{
    data: common.TourData;
    index: number;
    update: (index: number) => void;
}, {}> {
    get step() {
        return (this.props.index < this.props.data.steps.length && this.props.index >= 0) ? this.props.data.steps[this.props.index] : null;
    }
    get arrowClassName() {
        return this.step ? `tour-arrow tt-${this.step.direction}` : "tour-arrow";
    }
    get position() {
        return this.step ? {
            left: this.step.left,
            right: this.step.right,
            top: this.step.top,
            bottom: this.step.bottom,
        } : {};
    }

    next() {
        this.props.update(this.props.index + 1);
        if (this.props.index + 1 >= this.props.data.steps.length) {
            this.close();
        }
    }

    close() {
        this.props.update(-1);
        if (this.props.data.localStorageKey) {
            localStorage.setItem(this.props.data.localStorageKey, "1");
        }
    }

    render() {
        return this.step ? (
            <div className="tour-tip" style={this.position}>
                <span className={this.arrowClassName}></span>
                <div className="tour-content-wrapper">
                    <p>{this.step.content}</p>
                    <a className="small button tour-next-tip" onClick={e => this.next()}>{this.step.next}</a>
                    <a className="tour-close-tip" onClick={e => this.close()}>×</a>
                </div>
            </div>
        ) : null;
    }
}
