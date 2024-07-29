interface ProjectInfo {
  name: string;
  image: string;
  index: number;
}

export const getHeaderProjectInfo = (): ProjectInfo[] => {
  return [{ name: "beacon", image: "na", index: 1 }];
};
