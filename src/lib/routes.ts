interface IRoute {
  name: string;
  path: string;
}

export const Routes: IRoute[] = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' }
];

export const partialAuthRoutes: string[] = ['/auth/create-profile', '/auth/signout'];
