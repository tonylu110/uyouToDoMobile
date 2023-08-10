import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {CaretRight} from 'phosphor-react-native';
import {PropsWithChildren} from 'react';

export interface SettingItemProps extends PropsWithChildren {
  title?: string;
  hiddenArrow?: boolean;
  onItemPress?: () => void;
}

function SettingItem(props: SettingItemProps): JSX.Element {
  const press = () => {
    if (props.onItemPress) {
      props.onItemPress();
    }
  };

  return (
    <TouchableOpacity style={style.item} onPress={press}>
      <View style={style.leftArea}>
        <Text style={style.title}>{props.title}</Text>
      </View>
      <View>{props.hiddenArrow ? null : <CaretRight weight={'bold'} />}</View>
      {props.children}
    </TouchableOpacity>
  );
}

export default SettingItem;
