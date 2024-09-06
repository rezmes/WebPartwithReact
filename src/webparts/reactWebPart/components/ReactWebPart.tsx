import * as React from "react";
import styles from "./ReactWebPart.module.scss";
import { IReactWebPartProps } from "./IReactWebPartProps";
import { escape } from "@microsoft/sp-lodash-subset";

export interface IReactWebPartState {
  stageTitle: string;
}

export default class ReactWebPart extends React.Component<
  IReactWebPartProps,
  IReactWebPartState
> {
  public constructor(props: IReactWebPartProps, State: IReactWebPartState) {
    super(props);
    this.state = {
      stageTitle: "1. Component Constructor has beed called",
    };
    this.updateState = this.updateState.bind(this);
    console.log("Stage Title from Constructor: " + this.state.stageTitle);
  }

  public componentWillMount(): void {
    console.log("Component will mount has been called");
  }
  public componentDidMount(): void {
    console.log("Stage Title from componentDidMount: " + this.state.stageTitle);
    this.setState({
      stageTitle: "Component Did Mount has been called",
    });
  }

  /**
   * updateState
   */
  public updateState() {
    this.setState({
      stageTitle: "2. Change function has been called",
    });
  }

  public render(): React.ReactElement<IReactWebPartProps> {
    return (
      <div className={styles.reactWebPart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>

              <p className="${styles.description}">
                Absolute URL {escape(this.props.absoluteUrl)}
              </p>
              <p className="${styles.description}">
                Site Title {escape(this.props.sitetitle)}
              </p>
              <p className="${styles.description}">
                User Name {escape(this.props.username)}
              </p>
              <p className="${styles.description}">
                Relative URL {escape(this.props.relativeurl)}
              </p>

              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1>ReactJS component's Lifecycle</h1>
          <h3>{this.state.stageTitle}</h3>
          <button onClick={this.updateState}>
            Click to Update State Data!
          </button>
        </div>
      </div>
    );
  }
  public componentWillUnmount(): void {
    console.log("Component will unmount has been called");
  }
}
