import { Text, View } from "react-native";

interface TestProps {
  name: string;
}

export function Test({ name }: TestProps) {
  return (
    <View>
      <Text>
        {name}
      </Text>
    </View>
  )
}