import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from '../../utils/themes';
import SearchLogo from '../../assets/top-menu/search.svg';
import ChatLogo from '../../assets/top-menu/chatbox.svg';

const TopBar = ({onSearch = () => {}, isSearched, onOpenChat, isChatOpen}) => {
  const onFocusSearch = () => {
    if (!isSearched) {
      onSearch(true);
    }
  };
  return (
    <View style={styles.container}>
      {isSearched ? (
        <View style={styles.wrapperInput}>
          <View style={styles.searchLogo}>
            <SearchLogo height={22} width={22} />
          </View>
          <View style={styles.inputText}>
            <TextInput
              placeholder="Cari produk sehat dan natural"
              autoFocus={true}
            />
          </View>
        </View>
      ) : (
        <View style={styles.wrapperInputFixed}>
          <TouchableOpacity onPress={onFocusSearch}>
            <View style={{...styles.searchLogo, marginHorizontal: 10}}>
              <SearchLogo height={22} width={22} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onFocusSearch}>
            <View style={{...styles.inputText}}>
              <TextInput
                placeholder="Cari produk sehat dan natural"
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}

      {!isSearched && (
        <View style={styles.wrapperChat}>
          <View style={styles.chatLogo}>
            <ChatLogo height={30} width={30} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },

  wrapperInputFixed: {
    width: '100%',
    height: '100%',
    flex: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 10,
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
    backgroundColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 10,
  },

  inputText: {
    flex: 8,
    justifyContent: 'center',
    color: 'lightgray',
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
