import { View } from "react-native"

const Line= ({size, color, trans}) => {
return(
<View
style={{
    borderBottomWidth: size,
    opacity: trans,
    color:color,
    marginBottom:5,
    }}>
    </View>)
};

export default Line;