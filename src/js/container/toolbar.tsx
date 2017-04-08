import * as React from "react";

import * as classNames from "classnames";

import {
    Row,
    Section,
    Toolbar,
} from "@react-mdc/toolbar";

import { MaterialIcon } from "app/js/components/icon";

import * as styles from "./styles.css";

export type Props = {
    className?: string,
};

export default class MainToolbar extends React.Component<Props, {}> {
    public props: Props;

    public render() {
        return (
            <Toolbar className={classNames(this.props.className, styles.toolbar)} fixed={true}>
                <Row>
                    <Section align="start">
                        <MaterialIcon className={styles["menu-button"]}>
                            menu
                        </MaterialIcon>
                    </Section>
                </Row>
            </Toolbar>
        );
    }
}