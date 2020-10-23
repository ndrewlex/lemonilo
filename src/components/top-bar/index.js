import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors} from '../../utils/themes';
import SearchLogo from '../../assets/top-menu/search.svg';
import ChatLogo from '../../assets/top-menu/chatbox.svg';

const TopBar = (props = {}) => {
  const {onFocus, onChange, isEditable = true} = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <View style={styles.searchLogo}>
          <SearchLogo height={22} width={22} />
        </View>
        <View style={styles.inputText}>
          <TextInput
            placeholder="Cari produk sehat dan natural"
            onFocus={onFocus}
            onChangeText={onChange}
            editable={isEditable}
          />
        </View>
      </View>
      <View style={styles.wrapperChat}>
        <View style={styles.chatLogo}>
          <ChatLogo height={30} width={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },

  wrapperInput: {
    height: '100%',
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderWidth: 1,
    marginHorizontal: 10,
  },

  inputText: {
    flex: 8,
  },

  searchLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapperChat: {
    height: '100%',
    marginRight: 10,
    flex: 1,
  },

  chatLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  hintWrapper: {
    flex: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },

  hint: {
    color: colors.gray,
  },
});

export default TopBar;
