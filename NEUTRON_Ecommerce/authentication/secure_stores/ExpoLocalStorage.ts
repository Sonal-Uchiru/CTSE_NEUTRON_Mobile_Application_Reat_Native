import * as SecureStore from 'expo-secure-store';

class ExpoLocalStorage {
  public async setTokenToLocalStorageAsync(token: string): Promise<void> {
    await SecureStore.setItemAsync('token', token);
  }

  public async getTokenFromLocalStorageAsync(): Promise<string | null> {
    const token = await SecureStore.getItemAsync('token');
    if (!token) {
      return null;
    }
    return token;
  }

  public async setRoleToLocalStorageAsync(role: number): Promise<void> {
    await SecureStore.setItemAsync('role', role.toString());
  }

  public async getRoleFromLocalStorageAsync(): Promise<number | null> {
    const role = await SecureStore.getItemAsync('role');
    if (!role) {
      return null;
    }
    return +role;
  }
}

export default new ExpoLocalStorage();
