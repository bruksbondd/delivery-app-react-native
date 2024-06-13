import { ComponentType } from "react"

export type TypeRootStackParamlist = {
    Auth: undefined
    Home: undefined
    Product: {
        slug: string
    }
}

export interface IRoute {
    name: string
    component: ComponentType
}