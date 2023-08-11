export interface IRoom {
    id: number,
    title: string,
    url: string,
    isPublic: boolean,
    photo_url: string,
    isActive: boolean,
    owner_email: string,
    owner_fullname: string
}