import * as React from "react";

export class FooterComponent extends React.Component<any, any> {
    render() {
        const now = new Date();
        const duration = now.getFullYear() == 2017 ? '2017' : '2017 - ' + now.getFullYear();
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            Jay Taggart &copy; {duration}
                        </p>
                        <p>
                            <a className="icon" href="https://github.com/jataggart/jataggart.github.io">
                                <em className="fa fa-github"/>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}