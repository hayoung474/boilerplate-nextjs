import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// user 스토어 타입 정의
interface UserTypes {
  userID: string;
  userName: string;
}

// user스토어의 초기값을 설정
const initialState: UserTypes = {
  userID: '',
  userName: '',
};

// ducks 패턴을 지원하기 위해 나온 함수가 createSlice.
const userSlice = createSlice({
  name: 'user', // 해당 모듈의 이름. store.user 형식으로 추후 접근
  initialState,
  reducers: {
    saveUserAction: (
      state: UserTypes,
      action: PayloadAction<{ userID: string; userName: string;}>,
    ) => {
      const { userID, userName } = action.payload;
      state.userID = userID;
      state.userName = userName;
    },
  },
});

export const { saveUserAction } = userSlice.actions;
export default userSlice.reducer;
