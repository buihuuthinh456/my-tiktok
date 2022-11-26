import * as React from "react";
import Header from "~/components/Header";

type Props = {
    children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
