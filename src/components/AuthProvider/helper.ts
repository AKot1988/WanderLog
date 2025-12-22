export const doesUserHaveAdminRole = (userId: string): boolean => {
    const adminID = [
        'adminUserID1',
        'adminUserID2',
        'adminUserID3',
    ];
    return adminID.includes(userId);
}