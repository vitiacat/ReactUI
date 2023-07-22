import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "./config";

export const transform = {
    transform: propConfig("transform"),
}

export interface TransformProps {
    /**
     * The CSS `transform` property.
     * @default auto
     */
    transform?: Adaptive<CSS.Property.Transform>
}