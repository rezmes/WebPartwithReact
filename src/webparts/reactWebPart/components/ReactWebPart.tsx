import * as React from "react";
import styles from "./ReactWebPart.module.scss";
import { IReactWebPartProps } from "./IReactWebPartProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class ReactWebPart extends React.Component<
  IReactWebPartProps,
  {}
> {
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
      </div>
    );
  }
}
