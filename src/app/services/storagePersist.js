import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  getElementStorage: async nameElement => {
    try {
      const value = await AsyncStorage.getItem(`@${nameElement}`);
      if (value !== null) {
        return value;
      }
      throw 'No existe el elemento: ' + nameElement + '.';
    } catch (e) {
      console.log(e);
    }
  },
  setElementStorage: async (element, nameElement) => {
    try {
      await AsyncStorage.setItem(`@${nameElement}`, element);
    } catch (e) {
      console.log(e);
    }
  },
  setObjectStorage: async (element, nameObject) => {
    try {
      await AsyncStorage.setItem(`@${nameObject}`, JSON.stringify(element));
    } catch (e) {
      console.log(e);
    }
  },
  getObjectStorage: async nameObject => {
    try {
      const jsonObj = await AsyncStorage.getItem(`@${nameObject}`);
      return jsonObj != null ? JSON.parse(jsonObj) : null;
    } catch (e) {
      console.log(e);
    }
  },
  removeItem: async nameItem => {
    try {
      await AsyncStorage.removeItem(`@${nameItem}`);
    } catch (e) {
      console.log(e);
    }
  },
};
