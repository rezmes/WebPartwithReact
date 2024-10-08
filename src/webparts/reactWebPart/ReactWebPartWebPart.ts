import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactWebPartWebPartStrings';
import ReactWebPart from './components/ReactWebPart';
import { IReactWebPartProps } from './components/IReactWebPartProps';

export interface IReactWebPartWebPartProps {
  description: string;
}

export default class ReactWebPartWebPart extends BaseClientSideWebPart<IReactWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactWebPartProps > = React.createElement(
      ReactWebPart,
      {
        description: this.properties.description,
        absoluteUrl: this.context.pageContext.web.absoluteUrl,
        sitetitle: this.context.pageContext.web.title,
        username: this.context.pageContext.user.displayName,
        relativeurl: this.context.pageContext.web.serverRelativeUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
