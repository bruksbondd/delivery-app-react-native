import { TypeRootStackParamlist } from "@/navigation/navigation.types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useTapedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamlist>>()