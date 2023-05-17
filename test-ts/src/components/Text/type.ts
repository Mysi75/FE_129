import {FunctionComponent } from "react"

type TText = {
    text: string,
    className?: string
}

export type TTextComponent = FunctionComponent<TText>;