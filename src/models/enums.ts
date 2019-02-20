export enum LogLevel {
	Debug = 'DEBUG',
	Info = 'INFO',
	Warn = 'WARN',
	Error = 'ERROR'
}

export enum UserType {
	Admin = 'Admin',
	Worker = 'Worker'
}

//enum for the menu navigation
export enum MenuButtonType {
	navBarButton = 'navBarButton',
	sideBarButton = 'sideBarButton'
}
export enum LoginType{
    EmailAndPass = 1,
    IdentityAndPhoneNumber  = 2,
    UserNameAndPass = 3,
    Facebook = 4,
    Google = 5
};