import { TouchableOpacity, View } from "react-native";
import { style } from "./ButtonStyle";
import { Text } from "react-native";

export function Button({ buttonText, clickHandler }) {
    return (
        <TouchableOpacity onPress={clickHandler} style={style.defaultInput}>
            <Text style={style.textButton}>{buttonText}</Text>
        </TouchableOpacity>
    )
}