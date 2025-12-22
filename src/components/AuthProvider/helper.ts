export const doesUserHaveAdminRole = async (userId: string): Promise<boolean> => {
  const adminID = ['adminUserID1', 'adminUserID2', 'adminUserID3'];
  return adminID.includes(userId);
};
