const onboarding = {
  namespace: 'onboarding',
  state: {
    isFirstTime: true,
  },
  reducers: {
    onFirstTime(state) {
      return { ...state, isFirstTime: false };
    },
  },
};

export default onboarding;
