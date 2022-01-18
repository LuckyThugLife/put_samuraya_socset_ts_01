let onChange = () => {
    console.log("State changed")
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}

export type MessageType = {
    id: number
    message: string

}

export type DialogType = {
    id: number
    name: string

}

export type PostsType ={
    id: number
    message: string
    likeCount: number

}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {

}



export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType

}
let state: StateType = {
    profilePage: {
        posts:  [
            {id: 1, message: "Hello world!", likeCount: 13},
            {id: 2, message: "Peace for all!", likeCount: 17}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Rustam"},
            {id: 2, name: "Timur"},
            {id: 3, name: "Egor"},
            {id: 4, name: "Dimych"},
            {id: 5, name: "Vitalya"},
            {id: 6, name: "Georg"},
        ],
        messages: [
            {id: 1, message: "Assalam Aleykum"},
            {id: 2, message: "Vaaleykum Assalam"},
            {id: 3, message: "How are You?"}
        ]
    },
    sidebar: {

    }

}

export const addPost = () => {
    const  newPost: PostsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    onChange()
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
    onChange()
}

export default state;
