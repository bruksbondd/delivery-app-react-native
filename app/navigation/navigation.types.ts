import { ComponentType } from "react"

export type TypeRootStackParamlist = {
    Auth: undefined
    Home: undefined
    Product: {
        slug: string
    }
}

export interface IRoute {
    name: keyof TypeRootStackParamlist
    component: ComponentType
}