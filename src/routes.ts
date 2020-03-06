const routes = {
  Home: "Home",
  Details: "Details",
  CreatePost: "CreatePost"
} as const;

export default routes;

export type RootStackParamList = {
  Home: {
    post?: string;
  };
  Details: {
    itemId: number;
    otherParam?: any;
  };
  CreatePost: undefined;
};
