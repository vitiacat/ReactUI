import React from "react";
import Playground from "react-styleguidist/lib/client/rsg-components/Playground/Playground";
import {SurfaceLayout} from "../../components/Layouts/SurfaceLayout/SurfaceLayout";

let index = 1000;

export function Code(props: {
    children: string,
    evalInContext: (code: string) => any
}) {
    return <Playground
        code={props.children}
        evalInContext={props.evalInContext}
        index={index++}
        name=""
        exampleMode="expand"
        settings={{}}
    />
}

export function CodeFragment(props: {
    children: string,
}) {
    return <SurfaceLayout
        s={1}
        p={15}
        shapeScale="lg"
        userSelect="all">
        {props.children}
    </SurfaceLayout>
}