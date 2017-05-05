import * as React from "react";
import {HeaderComponent} from "./HeaderComponent";
import {ContentComponent} from "./ContentComponent";
import {FooterComponent} from "./FooterComponent";

export class MainComponent extends React.Component<any, any> {
    render() {
        return (<section className="section">
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent />
        </section>)
    }
}