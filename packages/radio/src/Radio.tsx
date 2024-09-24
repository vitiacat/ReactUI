import React from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {FormWidgetBase, FormWidgetBaseProps} from "@znui/md3-utils";
import {Center} from "@znui/layouts";
import {znui} from "@znui/base";

export interface RadioProps extends FormWidgetBaseProps {}

/**
 * Checkbox buttons let people select one option from a set of options
 */
export const Radio = React.forwardRef(
    (props: RadioProps, inputRef: React.ForwardedRef<HTMLInputElement>) => {
        const {
            checked: isChecked,
            ...otherProps
        } = props

        return <FormWidgetBase
            type='radio'
            checked={isChecked}
            ref={inputRef}
            layoutSize={24}
            {...otherProps}
        >
            <Center
                shapeScale='full'
                position='relative'
                layoutSize={24}
                color={isChecked? ThemeTokens.primary: ThemeTokens.onSurfaceVariant}
            >
                <Center
                    layoutSize={20}
                    shapeScale='full'
                    borderWidth={2}
                    borderStyle='solid'
                    borderColor='currentColor'
                    boxSizing='border-box'
                >

                    <znui.div
                        bg='currentColor'
                        shapeScale='full'
                        to={{
                            layoutSize: isChecked? 10: 0
                        }}
                    />
                </Center>
            </Center>
        </FormWidgetBase>
    }
)