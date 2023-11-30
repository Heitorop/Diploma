export const PROPS_STRING_DEFAULT = {
    type: String,
    default: '',
  };
  export const PROPS_NUMBER_DEFAULT = {
    type: Number,
    default: 0,
  };
  export const PROPS_STRING_NUMBER = {
    type: [String, Number],
    default: '',
  };
  export const PROPS_BOOLEAN_DEFAULT = {
    type: Boolean,
    default: false,
  };
  export const PROPS_ARRAY_DEFAULT = {
    type: Array,
    default() {
      return [];
    },
  };
  export const PROPS_DATE_DEFAULT = {
    type: [Date, String],
    default() {
      return new Date();
    },
  };
  export const PROPS_OBJECT_DEFAULT = {
    type: Object,
    default() {
      return {};
    },
  };
  export const PROPS_FUNCTION_DEFAULT = {
    type: [Function],
    default() {
      return () => ({});
    },
  };