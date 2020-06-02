export const getHomeDetail = async ({ id }) => {
  try {
    const result = { status: 200, data: { id }, msg: 'error' };
    return {
      success: true,
      data: {
        ...result.data,
      },
    };
  } catch (error) {
    return {
      success: false,
      msg: error,
    };
  }
};

export const updateHomeDetail = async ({ id }) => {
  try {
    const result = { status: 200, data: { id }, msg: 'error' };
    if (result.status >= 400) {
      throw result.msg;
    }

    return {
      success: true,
      data: {
        ...result.data,
      },
    };
  } catch (error) {
    return {
      success: false,
      msg: error,
    };
  }
};

const arrays = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

export const getListHome = async ({ limit, offset, name }) => {
  try {
    console.log('name', name);
    return {
      success: true,
      data: {
        list: arrays.slice(offset, offset + limit),
      },
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
