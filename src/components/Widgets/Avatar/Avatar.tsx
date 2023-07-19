import classNames from "classnames";
import React from "react";
import "./Avatar.css";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";

export interface AvatarProps extends LayoutProps {
    image?: string
    text?: string
    size?: number
}

export function Avatar(props: AvatarProps) {
    const {
        image,
        text,
        size = 60,
        className,
        style,
        ...otherProps
    } = props

    return <Layout className={classNames(
        className,
        classNames({
            'Avatar': true,
            'Avatar--text': text&&!image,
        })
    )} fontSize={22/60*size} layoutSize={size} {...otherProps}>
        {
            text&&!image ? text[0]:
                <img src={image} alt=""/>
        }
    </Layout>
}