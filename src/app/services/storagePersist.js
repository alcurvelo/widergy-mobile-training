import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  getElementStorage: async nameElement => {
    try {
      const value = await AsyncStorage.getItem(`@${nameElement}`);
      if (value !== null) {
        return value;
      }
      return false;
    } catch (e) {
      return false;
    }
  },
  setElementStorage: async (element, nameElement) => {
    try {
      await AsyncStorage.setItem(`@${nameElement}`, element);
    } catch (e) {
      return false;
    }
  },
  setObjectStorage: async (element, nameObject) => {
    try {
      await AsyncStorage.setItem(`@${nameObject}`, JSON.stringify(element));
    } catch (e) {
      return false;
    }
  },
  getObjectStorage: async nameObject => {
    try {
      const jsonObj = await AsyncStorage.getItem(`@${nameObject}`);
      return jsonObj != null ? JSON.parse(jsonObj) : null;
    } catch (e) {
      return false;
    }
  },
  removeItem: async nameItem => {
    try {
      await AsyncStorage.removeItem(`@${nameItem}`);
    } catch (e) {
      return false;
    }
  },
};
