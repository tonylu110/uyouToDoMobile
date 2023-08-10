import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import itemStyle from '../style';
import {PropsWithChildren} from 'react';
import {SettingItemProps} from '../index';
import {CaretRight} from 'phosphor-react-native';

function SettingItemBox(props: PropsWithChildren): JSX.Element {
  return <View style={style.box}>{props.children}</View>;
}

interface itemProps extends SettingItemProps {
  borderHidden?: boolean;
}

function Item(props: itemProps): JSX.Element {
  const press = () => {
    if (props.onItemPress) {
      props.onItemPress();
    }
  };

  return (
    <View
      style={[
        style.itemBorder,
        {borderBottomWidth: props.borderHidden ? 0 : 1},
      ]}>
      <TouchableOpacity style={style.item} onPress={press}>
        <View style={itemStyle.leftArea}>
          <Text style={itemStyle.title}>{props.title}</Text>
        </View>
        <View>
          <View>
            {props.hiddenArrow ? null : <CaretRight weight={'bold'} />}
          </View>
          {props.children}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const SettingBox = {
  Box: SettingItemBox,
  Item: Item,
};

export default SettingBox;
