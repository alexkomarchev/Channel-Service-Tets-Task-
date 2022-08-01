export const getUserNameById = (users, currentUser) => users[currentUser.userId].name

export const getCompanyNameById = (users, currentUser) => users[currentUser.userId].company.name

export const getRandomPhotoById = (photos, currentUser) => {


        const arrUserIdPhotos = photos.filter(el => el.albumId === currentUser.userId)

    const random = Math.floor(Math.random() * arrUserIdPhotos.length);

        return arrUserIdPhotos[random]?.thumbnailUrl

}