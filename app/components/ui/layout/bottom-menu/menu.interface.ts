import { TypeRootStackParamlist } from "@/navigation/navigation.types";
import { TypeFeatherIconNames } from "@/types/icon.interfase";

export interface IMenuItem {
    icon: TypeFeatherIconNames
    path: keyof TypeRootStackParamlist
}